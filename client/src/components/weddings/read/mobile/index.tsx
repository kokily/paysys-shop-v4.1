import { useRecoilState } from 'recoil';
import moment from 'moment';
import { husbandSign, brideSign } from '../../../../libs/store/sign';
import HusbandSignContainer from '../../../../containers/weddings/sign/HusbandSignContainer';
import BrideSignContainer from '../../../../containers/weddings/sign/BrideSignContainer';
import SignImage from '../SignImage';
import useReadWedding from '../hooks/useReadWedding';

function ReadMobileWedding() {
  const { wedding, refetch, onRemoveSign } = useReadWedding();
  const [, setHusband] = useRecoilState(husbandSign);
  const [, setBride] = useRecoilState(brideSign);

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

          <HusbandSignContainer refetch={refetch} />
          <BrideSignContainer refetch={refetch} />

          <hr style={{ width: '90%' }} />

          <h3>웨딩비용</h3>
        </>
      )}
    </>
  );
}

export default ReadMobileWedding;
