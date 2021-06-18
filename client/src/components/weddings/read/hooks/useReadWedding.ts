import { useHistory, useParams } from 'react-router-dom';
import { useApolloClient, useMutation, useQuery } from '@apollo/react-hooks';
import { toast } from 'react-toastify';
import { REMOVE_SIGN } from '../../../../libs/graphql/sign';
import { READ_WEDDING } from '../../../../libs/graphql/weddings';

function useReadWedding() {
  const client = useApolloClient();
  const history = useHistory();
  const { weddingId }: { weddingId: string } = useParams();
  const { data, loading, error, refetch } = useQuery<{
    ReadWedding: {
      wedding: WeddingType;
      convention: ConventionType;
      company: CompanyType;
      event: EventType;
      hanbok: HanbokType;
      meal: MealType;
      present: PresentType;
      reserve: ReserveType;
    };
  }>(READ_WEDDING, {
    variables: { id: weddingId },
  });
  const [RemoveSign] = useMutation(REMOVE_SIGN);

  const onList = () => {
    history.push('/weddings');
  };

  const onBack = () => {
    history.goBack();
  };

  const onUpdate = () => {
    history.push(`/wedding/update/${weddingId}`);
  };

  const onRemoveSign = async () => {
    try {
      const response = await RemoveSign({
        variables: { weddingId },
      });

      if (!response || !response.data) return;

      await client.clearStore();
      await refetch();

      toast.success('서명이 삭제되었습니다.');
    } catch (err) {
      toast.error(err);
    }
  };

  return {
    wedding: data?.ReadWedding.wedding || null,
    convention: data?.ReadWedding.convention || null,
    company: data?.ReadWedding.company || null,
    event: data?.ReadWedding.event || null,
    hanbok: data?.ReadWedding.hanbok || null,
    meal: data?.ReadWedding.meal || null,
    present: data?.ReadWedding.present || null,
    reserve: data?.ReadWedding.reserve || null,
    onRemoveSign,
    onList,
    onBack,
    onUpdate,
    loading,
    error,
    refetch,
  };
}

export default useReadWedding;
