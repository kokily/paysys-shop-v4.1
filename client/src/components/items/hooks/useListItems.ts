import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import useScrollItems from './useScrollItems';

function useListItems() {
  const history = useHistory();
  const [search, setSearch] = useState('');
  const [name, setName] = useState('');
  const { data, loading, error } = useScrollItems(name);

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

  return {
    items: data?.ListItems.items || [],
    search,
    onChange,
    onSearch,
    onKeyPress,
    onDetail,
    loading,
    error,
  };
}

export default useListItems;
