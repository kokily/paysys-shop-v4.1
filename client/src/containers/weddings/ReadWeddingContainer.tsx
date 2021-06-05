import { useEffect } from 'react';
import { useApolloClient, useMutation, useQuery } from '@apollo/react-hooks';
import { BrowserView, MobileView } from 'react-device-detect';
import { useHistory, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import ReadWedding from '../../components/weddings/read';
import LeftSide from '../../components/weddings/read/LeftSide';
import ReadWeddingTemplate from '../../components/weddings/read/ReadWeddingTemplate';
import ReadMobileTemplate from '../../components/weddings/read/mobile/ReadMobileTemplate';
import RightSide from '../../components/weddings/read/RightSide';
import { READ_WEDDING, REMOVE_WEDDING } from '../../libs/graphql/weddings';
import ReadWeddingMobile from '../../components/weddings/read/mobile';
import TopMobile from '../../components/weddings/read/mobile/TopMobile';
import BottomMobile from '../../components/weddings/read/mobile/BottomMobile';
import { REMOVE_SIGN } from '../../libs/graphql/sign';

function ReadWeddingContainer() {
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
  const [RemoveWedding] = useMutation(REMOVE_WEDDING);
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

  useEffect(() => {
    refetch();
  }, [refetch]);

  if (loading) return null;
  if (error) return null;

  return (
    <>
      <BrowserView>
        <ReadWeddingTemplate
          onList={onList}
          onBack={onBack}
          onRemove={onRemoveWedding}
          onUpdate={onUpdate}
        >
          <ReadWedding
            wedding={data?.ReadWedding.wedding || null}
            onRemoveSign={onRemoveSign}
          />
          <LeftSide
            wedding={data?.ReadWedding.wedding || null}
            convention={data?.ReadWedding.convention || null}
            company={data?.ReadWedding.company || null}
            event={data?.ReadWedding.event || null}
            hanbok={data?.ReadWedding.hanbok || null}
          />
          <RightSide
            wedding={data?.ReadWedding.wedding || null}
            meal={data?.ReadWedding.meal || null}
            present={data?.ReadWedding.present || null}
            reserve={data?.ReadWedding.reserve || null}
          />
        </ReadWeddingTemplate>
      </BrowserView>
      <MobileView>
        <ReadMobileTemplate
          onList={onList}
          onBack={onBack}
          onRemove={onRemoveWedding}
          onUpdate={onUpdate}
        >
          <ReadWeddingMobile
            wedding={data?.ReadWedding.wedding || null}
            refetch={refetch}
            onRemoveSign={onRemoveSign}
          />
          <TopMobile
            wedding={data?.ReadWedding.wedding || null}
            convention={data?.ReadWedding.convention || null}
            company={data?.ReadWedding.company || null}
            event={data?.ReadWedding.event || null}
            hanbok={data?.ReadWedding.hanbok || null}
          />
          <BottomMobile
            wedding={data?.ReadWedding.wedding || null}
            meal={data?.ReadWedding.meal || null}
            present={data?.ReadWedding.present || null}
            reserve={data?.ReadWedding.reserve || null}
          />
        </ReadMobileTemplate>
      </MobileView>
    </>
  );
}

export default ReadWeddingContainer;
