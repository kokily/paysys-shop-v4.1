import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import ListItems from '../../components/items/ListItems';
import useListItems from './hooks/useListItems';

function ListItemsContainer() {
  const history = useHistory();
  const [search, setSearch] = useState('');
  const [name, setName] = useState('');
  const { data, loading, error } = useListItems(name);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onSearch = (e: React.MouseEvent) => {
    e.preventDefault();

    if (search === '') {
      setName('');
    } else {
      setName(search);
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
    history.push(`/item/${id}`);
  };

  if (loading) return null;
  if (error) return null;

  return (
    <ListItems
      items={data?.ListItems.items || []}
      search={search}
      onChange={onChange}
      onSearch={onSearch}
      onKeyPress={onKeyPress}
      onDetail={onDetail}
    />
  );
}

export default ListItemsContainer;
