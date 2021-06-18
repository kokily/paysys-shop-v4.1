import { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { toast } from 'react-toastify';
import { REMOVE_WEDDING } from '../../../../libs/graphql/weddings';

function useReadModal() {
  const history = useHistory();
  const { weddingId }: { weddingId: string } = useParams();
  const [modal, setModal] = useState(false);
  const [RemoveWedding, { client }] = useMutation(REMOVE_WEDDING);

  const onRemoveWedding = async () => {
    try {
      const response = await RemoveWedding({
        variables: { id: weddingId },
      });

      if (!response || !response.data) return;

      await client.clearStore();

      toast.success('웨딩 전표 삭제 완료');
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
    onRemoveWedding();
  };

  return {
    modal,
    onRemoveClick,
    onCancel,
    onConfirm,
  };
}

export default useReadModal;
