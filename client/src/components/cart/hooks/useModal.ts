import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';
import { toast } from 'react-toastify';
import { REMOVE_CART } from '../../../libs/graphql/cart';

function useModal() {
  const history = useHistory();
  const [modal, setModal] = useState(false);
  const [RemoveCart, { client }] = useMutation(REMOVE_CART);

  const onRemoveCart = async () => {
    try {
      await client.clearStore();
      await RemoveCart();

      toast.success('카트 전체 삭제!');
      history.push('/soldier');
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
    onRemoveCart();
  };

  return {
    modal,
    onRemoveClick,
    onCancel,
    onConfirm,
  };
}

export default useModal;
