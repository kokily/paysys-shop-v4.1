import { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';
import { toast } from 'react-toastify';
import { REMOVE_BILL } from '../../../libs/graphql/bills';

function useReadModal() {
  const history = useHistory();
  const { frontId }: { frontId: string } = useParams();
  const [RemoveBill, { client }] = useMutation(REMOVE_BILL);
  const [modal, setModal] = useState(false);

  const onRemove = async () => {
    try {
      const response = await RemoveBill({
        variables: { id: frontId },
      });

      if (!response) return;

      toast.success('삭제 완료, 리스트로 이동합니다.');
      await client.clearStore();

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
    onRemove();
  };

  return {
    modal,
    onRemoveClick,
    onCancel,
    onConfirm,
  };
}

export default useReadModal;
