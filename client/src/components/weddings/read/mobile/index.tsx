import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import moment from 'moment';
import { husbandSign, brideSign } from '../../../../libs/store/sign';
import SignImage from '../common/SignImage';
import useReadWedding from '../hooks/useReadWedding';
import SignModal from '../common/SignModal';
import useSignHusband from '../hooks/useSignHusband';
import useSignBride from '../hooks/useSignBride';

function ReadMobileWedding() {
  const { wedding, onRemoveSign, refetch } = useReadWedding();
  const { visibleHusband, titleHusband, onCancelHusband, onConfirmHusband } =
    useSignHusband();
  const { visibleBride, titleBride, onCancelBride, onConfirmBride } =
    useSignBride();
  const [husband, setHusband] = useRecoilState(husbandSign);
  const [bride, setBride] = useRecoilState(brideSign);

  useEffect(() => {
    refetch();
  }, [husband, bride, refetch]);

  return (
    <>
      {wedding && (
        <>
          <h3 className="name">
            신랑님:{' '}
            <strong onClick={() => setHusband(true)}>
              {wedding.husband_name}
            </strong>
            <strong style={{ color: 'pink' }}> ♡</strong> 신부님:{' '}
            <strong onClick={() => setBride(true)}>{wedding.bride_name}</strong>
          </h3>

          {(wedding.husband_image || wedding.bride_image) && (
            <SignImage
              husband={wedding.husband_image || undefined}
              bride={wedding.bride_image || undefined}
              onRemoveSign={onRemoveSign}
            />
          )}

          <h4>
            웨딩일자: {moment(new Date()).format('YYYY. M. D.')}{' '}
            {wedding.event_at}
          </h4>

          <SignModal
            visible={visibleHusband}
            title={titleHusband}
            onCancel={onCancelHusband}
            onConfirm={onConfirmHusband}
          />
          <SignModal
            visible={visibleBride}
            title={titleBride}
            onCancel={onCancelBride}
            onConfirm={onConfirmBride}
          />

          <hr style={{ width: '90%' }} />

          <h3>웨딩비용</h3>
        </>
      )}
    </>
  );
}

export default ReadMobileWedding;
