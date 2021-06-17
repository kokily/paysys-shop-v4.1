import { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';
import { REMOVE_USER } from '../../../libs/graphql/users';
import { toast } from 'react-toastify';

function useReadModal() {
  const history = useHistory();
  const { userId }: { userId: string } = useParams();
  const [RemoveUser, { client }] = useMutation(REMOVE_USER);
  const [modal, setModal] = useState(false);

  const onRemoveUser = async () => {
    try {
      const response = await RemoveUser({
        variables: { id: userId },
      });

      if (!response) return;

      await client.clearStore();

      toast.success('사용자 삭제 완료');
      history.push('/users');
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
    onRemoveUser();
  };

  return {
    modal,
    onRemoveClick,
    onCancel,
    onConfirm,
  };
}

export default useReadModal;
