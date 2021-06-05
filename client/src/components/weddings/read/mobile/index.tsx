import React from 'react';
import { useRecoilState } from 'recoil';
import { husbandSign } from '../../../../libs/store/sign';
import HusbandSignContainer from '../../../../containers/weddings/sign/HusbandSignContainer';

interface Props {
  wedding: WeddingType | null;
}

const ReadWeddingMobile: React.FC<Props> = ({ wedding }) => {
  const [, setHusband] = useRecoilState(husbandSign);

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
            <strong>{wedding.bride_name}</strong>
          </h3>

          <div>
            {wedding.husband_image && (
              <img src={wedding.husband_image} alt="신랑" />
            )}
          </div>

          <h4>
            웨딩일자: {new Date(wedding.wedding_at).toLocaleDateString()}{' '}
            {wedding.event_at}
          </h4>

          <HusbandSignContainer />

          <hr style={{ width: '90%' }} />

          <h3>웨딩비용</h3>
        </>
      )}
    </>
  );
};

export default ReadWeddingMobile;
