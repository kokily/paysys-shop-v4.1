import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';
import axios from 'axios';
import { toast } from 'react-toastify';
import { ADD_CLOSED } from '../../libs/graphql/closeds';
import AddClosed from '../../components/closed/AddClosed';

function AddClosedContainer() {
  const history = useHistory();
  const [AddClosedResolver, { client }] = useMutation(ADD_CLOSED);
  const [closedDate, setClosedDate] = useState<ClosedUserState[]>([]);
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');

  const onChangeYear = (e: React.ChangeEvent<HTMLInputElement>) => {
    setYear(e.target.value);
  };

  const onChangeMonth = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMonth(e.target.value);
  };

  const onUpload = () => {
    if (window.prompt('비밀번호는???') !== '0711') {
      toast.error('누구냐 넌!!!');
      return;
    }

    const upload = document.createElement('input');

    upload.type = 'file';
    upload.onchange = (e) => {
      if (!upload.files) return;

      const file = upload.files[0];
      const formData = new FormData();

      formData.append('file', file);

      return axios
        .post(
          process.env.NODE_ENV === 'production'
            ? 'https://paysys.shop/upload'
            : 'http://localhost:4000/upload',
          formData
        )
        .then((res) => {
          return axios
            .get(
              process.env.NODE_ENV === 'production'
                ? `https://paysys.shop/upload/${res.data.key}`
                : `http://localhost:4000/upload/${res.data.key}`
            )
            .then((res) => {
              const data = res.data;

              const closedDate = data.map((datum) => {
                Object.keys(datum).forEach((key) => {
                  if (datum[key] === '') delete datum[key];
                });

                let date = Object.keys(datum);

                return {
                  username: datum.성명,
                  closed_date: date.filter((value) => {
                    return value !== '성명' && value !== '계';
                  }),
                };
              });

              setClosedDate(closedDate);
            })
            .catch((err) => console.error(err));
        })
        .catch((err) => console.error(err));
    };

    upload.click();
  };

  const onSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();

    if ([year, month].includes('') && closedDate === null) {
      toast.error('데이터를 전부 입력하세요');
      return;
    }

    try {
      const response = await AddClosedResolver({
        variables: { year, month, users: closedDate },
      });

      if (!response || !response.data) return;

      await client.clearStore();
      toast.success('저장 성공!');

      history.push('/closed');
    } catch (error) {}
  };

  return (
    <AddClosed
      year={year}
      month={month}
      closedDate={closedDate}
      onChangeYear={onChangeYear}
      onChangeMonth={onChangeMonth}
      onUpload={onUpload}
      onSubmit={onSubmit}
    />
  );
}

export default AddClosedContainer;
