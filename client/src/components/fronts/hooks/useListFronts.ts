import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import useScrollFronts from './useScrollFronts';

function useListFronts() {
  const history = useHistory();
  const [search, setSearch] = useState('');
  const [title, setTitle] = useState('');
  const [user_id, setUserId] = useState('');
  const [hall, setHall] = useState('');
  const { data, loading, error } = useScrollFronts(title, user_id, hall);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onSearch = (e: React.MouseEvent) => {
    e.preventDefault();

    if (search === '') {
      return;
    } else {
      setTitle(search);
    }
  };

  const onUserList = async (user_id: string) => {
    setUserId(user_id);
  };

  const onHallList = async (hall: string) => {
    setHall(hall);
  };

  const onDetail = (id: string) => {
    history.push(`/front/${id}`);
  };

  const onKeyPress = (
    e: React.KeyboardEvent<HTMLInputElement> & React.MouseEvent
  ) => {
    if (e.key === 'Enter') {
      onSearch(e);
    }
  };

  return {
    fronts: data?.ListBills.bills || [],
    search,
    onChange,
    onSearch,
    onUserList,
    onHallList,
    onDetail,
    onKeyPress,
    loading,
    error,
  };
}

export default useListFronts;
