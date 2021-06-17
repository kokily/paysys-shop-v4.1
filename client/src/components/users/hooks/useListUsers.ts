import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import useScrollUsers from './useScrollUsers';

function useListUsers() {
  const history = useHistory();
  const [search, setSearch] = useState('');
  const [username, setUsername] = useState('');
  const { data, loading, error } = useScrollUsers(username);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onSearch = (e: React.MouseEvent) => {
    e.preventDefault();

    if (search === '') {
      setUsername('');
    } else {
      setUsername(search);
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
    history.push(`/user/${id}`);
  };

  return {
    users: data?.ListUsers.users || [],
    search,
    onChange,
    onSearch,
    onKeyPress,
    onDetail,
    loading,
    error,
  };
}

export default useListUsers;
