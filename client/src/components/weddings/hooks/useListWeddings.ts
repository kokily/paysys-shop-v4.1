import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import useScrollWedding from './useScrollWeddings';

function useListWeddings() {
  const history = useHistory();
  const [search, setSearch] = useState('');
  const [date, setDate] = useState('');
  const { data, loading, error } = useScrollWedding(date);

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

  return {
    weddings: data?.ListWeddings.weddings || [],
    search,
    onChange,
    onSearch,
    onKeyPress,
    onDetail,
    loading,
    error,
  };
}

export default useListWeddings;
