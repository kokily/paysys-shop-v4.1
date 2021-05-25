import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { useMutation } from '@apollo/react-hooks';
import { CHANGE_PASSWORD } from '../../libs/graphql/auth';
import { toast } from 'react-toastify';
import Password from '../../components/auth/Password';

function PasswordContainer() {
  const history = useHistory();
  const [password, setPassword] = useState('');
  const [ChangePassword, { client }] = useMutation(CHANGE_PASSWORD);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();

    try {
      const response = await ChangePassword({
        variables: { password },
      });

      if (!response || !response.data) return;

      await client?.clearStore();

      toast.success('비밀번호 변경 완료');
      history.push('/soldier');
    } catch (err) {
      toast.error(err);
    }
  };

  const onKeyPress = (
    e: React.KeyboardEvent<HTMLInputElement> & React.MouseEvent
  ) => {
    if (e.key === 'Enter') {
      onSubmit(e);
    }
  };

  const onCancel = () => {
    history.push('/soldier');
  };

  return (
    <Password
      password={password}
      onChange={onChange}
      onSubmit={onSubmit}
      onKeyPress={onKeyPress}
      onCancel={onCancel}
    />
  );
}

export default PasswordContainer;
