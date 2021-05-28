import { useMutation, useQuery } from '@apollo/react-hooks';
import { BrowserView, MobileView } from 'react-device-detect';
import { useHistory, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import ReadWedding from '../../components/weddings/read';
import LeftSide from '../../components/weddings/read/LeftSide';
import ReadWeddingTemplate from '../../components/weddings/read/ReadWeddingTemplate';
import RightSide from '../../components/weddings/read/RightSide';
import { READ_WEDDING, REMOVE_WEDDING } from '../../libs/graphql/weddings';

function ReadWeddingContainer() {
  const history = useHistory();
  const { weddingId }: { weddingId: string } = useParams();
  const { data, loading, error } = useQuery<{
    ReadWedding: { wedding: WeddingType };
  }>(READ_WEDDING, {
    variables: { id: weddingId },
  });
  const [RemoveWedding, { client }] = useMutation(REMOVE_WEDDING);

  const onList = () => {
    history.push('/weddings');
  };

  const onBack = () => {
    history.goBack();
  };

  const onUpdate = () => {
    history.push(`/wedding/update/${weddingId}`);
  };

  const onRemoveWedding = async () => {
    try {
      const response = await RemoveWedding({
        variables: { id: weddingId },
      });

      if (!response) return;

      await client.clearStore();

      toast.success('웨딩 전표 삭제 완료');
      history.goBack();
    } catch (err) {
      toast.error(err);
    }
  };

  if (loading) return null;
  if (error) return null;

  return (
    <>
      <BrowserView>
        <ReadWeddingTemplate>
          <ReadWedding
            wedding={data?.ReadWedding.wedding || null}
            onRemove={onRemoveWedding}
          />
          <LeftSide wedding={data?.ReadWedding.wedding || null} />
          <RightSide wedding={data?.ReadWedding.wedding || null} />
        </ReadWeddingTemplate>
      </BrowserView>
      <MobileView>Mobile</MobileView>
    </>
  );
}

export default ReadWeddingContainer;
