import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import ListWeddings from '../../components/weddings/ListWeddings';
import useListWeddings from './hooks/useListWeddings';

function ListWeddingsContainer() {
  const history = useHistory();
  const [search, setSearch] = useState('');
  const [date, setDate] = useState('');
  const { data, loading, error } = useListWeddings(date);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onSearch = (e: React.MouseEvent) => {
    e.preventDefault();

    if (search === '') {
      return;
    } else {
      setDate(search);
    }
  };

  const onKeyPress = (
    e: React.KeyboardEvent<HTMLInputElement> & React.MouseEvent
  ) => {
    if (e.key === 'Enter') {
      onSearch(e);
    }
  };

  const onDetail = (id: string) => {
    history.push(`/wedding/${id}`);
  };

  if (loading) return null;
  if (error) return null;

  return (
    <ListWeddings
      weddings={data?.ListWeddings.weddings || []}
      search={search}
      onChange={onChange}
      onSearch={onSearch}
      onKeyPress={onKeyPress}
      onDetail={onDetail}
    />
  );
}

export default ListWeddingsContainer;
