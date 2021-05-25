import { useMutation, useQuery } from '@apollo/client';
import { useHistory, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { BrowserView, MobileView } from 'react-device-detect';
import { READ_WEDDING, REMOVE_WEDDING } from '../../libs/graphql/weddings';
import ReadWedding from '../../components/weddings/ReadWedding';
import ReadMobileWedding from '../../components/weddings/ReadMobileWedding';

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
        <ReadWedding
          wedding={data?.ReadWedding.wedding || null}
          onList={onList}
          onBack={onBack}
          onUpdate={onUpdate}
          onRemove={onRemoveWedding}
        />
      </BrowserView>
      <MobileView>
        <ReadMobileWedding
          wedding={data?.ReadWedding.wedding || null}
          onList={onList}
          onBack={onBack}
          onUpdate={onUpdate}
          onRemove={onRemoveWedding}
        />
      </MobileView>
    </>
  );
}

export default ReadWeddingContainer;
