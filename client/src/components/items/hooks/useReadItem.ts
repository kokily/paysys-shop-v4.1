import { useQuery } from '@apollo/react-hooks';
import { useHistory, useParams } from 'react-router-dom';
import { READ_ITEM } from '../../../libs/graphql/items';

function useReadItem() {
  const history = useHistory();
  const { itemId }: { itemId: string } = useParams();
  const { data, loading, error } = useQuery<{ ReadItem: { item: ItemType } }>(
    READ_ITEM,
    {
      variables: { id: itemId },
    }
  );

  const onList = () => {
    history.push('/items');
  };

  const onEdit = () => {
    history.push(`/item/update/${itemId}`);
  };

  return {
    item: data?.ReadItem.item || null,
    onList,
    onEdit,
    loading,
    error,
  };
}

export default useReadItem;
