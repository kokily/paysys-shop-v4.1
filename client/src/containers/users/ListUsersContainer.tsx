import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import ListUsers from '../../components/users/ListUsers';
import useListUsers from './hooks/useListUsers';

function ListUsersContainer() {
  const history = useHistory();
  const [search, setSearch] = useState('');
  const [username, setUsername] = useState('');
  const { data, loading, error } = useListUsers(username);

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

  if (loading) return null;
  if (error) return null;

  return (
    <ListUsers
      users={data?.ListUsers.users || []}
      search={search}
      onChange={onChange}
      onSearch={onSearch}
      onKeyPress={onKeyPress}
      onDetail={onDetail}
    />
  );
}

export default ListUsersContainer;
