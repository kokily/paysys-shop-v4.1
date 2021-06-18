import { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';
import { REMOVE_ITEM } from '../../../libs/graphql/items';
import { toast } from 'react-toastify';

function useModalItem() {
  const history = useHistory();
  const { itemId }: { itemId: string } = useParams();
  const [RemoveItem, { client }] = useMutation(REMOVE_ITEM);
  const [modal, setModal] = useState(false);

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

  const onRemoveClick = () => {
    setModal(true);
  };

  const onCancel = () => {
    setModal(false);
  };

  const onConfirm = () => {
    setModal(false);
    onRemoveItem();
  };

  return {
    modal,
    onRemoveClick,
    onCancel,
    onConfirm,
  };
}

export default useModalItem;
