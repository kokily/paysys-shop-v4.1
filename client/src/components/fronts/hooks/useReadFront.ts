import { useHistory, useParams } from 'react-router-dom';
import { useApolloClient, useMutation, useQuery } from '@apollo/react-hooks';
import { toast } from 'react-toastify';
import { ME } from '../../../libs/graphql/auth';
import { READ_BILL, RESTORE_BILL } from '../../../libs/graphql/bills';
import { REMOVE_RESERVE } from '../../../libs/graphql/reserve';

function useReadFront() {
  const client = useApolloClient();
  const history = useHistory();
  const { frontId }: { frontId: string } = useParams();
  const { data, loading, error, refetch } = useQuery<{
    ReadBill: { ok: boolean; bill: BillType | null };
  }>(READ_BILL, {
    variables: { id: frontId },
  });
  const { data: me, loading: meLoading } =
    useQuery<{ Me: { me: MeType | null } }>(ME);
  const [RestoreBill] = useMutation(RESTORE_BILL);
  const [RemoveReserve] = useMutation(REMOVE_RESERVE);

  const onList = () => {
    history.push('/fronts');
  };

  const onRestore = async () => {
    if (window.confirm('※ 주의!! 빌지는 삭제되고 카트로 다시 돌아갑니다!')) {
      try {
        const response = await RestoreBill({
          variables: { id: frontId },
        });

        if (!response) return;

        toast.success('정상적으로 반환되었습니다.');
        await client.clearStore();
        history.push('/cart');
      } catch (err) {
        toast.error(err);
      }
    } else {
      return;
    }
  };

  const onReserve = () => {
    history.push(`/front/update/${frontId}`);
  };

  const onRemoveReserve = async () => {
    try {
      const response = await RemoveReserve({
        variables: { id: frontId },
      });

      if (!response || !response.data) return;

      await client.clearStore();

      toast.success('예약금 삭제 완료');
      refetch();
      history.push(`/front/${frontId}`);
    } catch (err) {
      toast.error(err);
    }
  };

  return {
    front: data?.ReadBill.bill || null,
    user: me?.Me.me || null,
    onList,
    onRestore,
    onReserve,
    onRemoveReserve,
    loading,
    meLoading,
    error,
  };
}

export default useReadFront;
