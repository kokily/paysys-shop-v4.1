import { useHistory, useParams } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { toast } from 'react-toastify';
import { READ_ITEM, REMOVE_ITEM } from '../../libs/graphql/items';
import ReadItem from '../../components/items/ReadItem';

function ReadItemContainer() {
  const history = useHistory();
  const { itemId }: { itemId: string } = useParams();
  const { data, loading, error } = useQuery<{ ReadItem: { item: ItemType } }>(
    READ_ITEM,
    {
      variables: { id: itemId },
    }
  );
  const [RemoveItem, { client }] = useMutation(REMOVE_ITEM);

  const onList = () => {
    history.push('/items');
  };

  const onEdit = () => {
    history.push(`/item/update/${itemId}`);
  };

  const onRemoveItem = async () => {
    try {
      const response = await RemoveItem({
        variables: { id: itemId },
      });

      if (!response) return;

      await client?.clearStore();

      toast.success('삭제 완료');
      history.goBack();
    } catch (err) {
      toast.error(err);
    }
  };

  if (loading) return null;
  if (error) return null;

  return (
    <ReadItem
      item={data?.ReadItem.item || null}
      onList={onList}
      onEdit={onEdit}
      onRemoveItem={onRemoveItem}
    />
  );
}

export default ReadItemContainer;
