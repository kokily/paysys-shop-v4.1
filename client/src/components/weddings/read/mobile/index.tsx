import React from 'react';

interface Props {
  wedding: WeddingType | null;
}

const ReadWeddingMobile: React.FC<Props> = ({ wedding }) => {
  return (
    <>
      {wedding && (
        <>
          <h3 className="name">
            신랑님: <strong>{wedding.husband_name}</strong>
            <strong style={{ color: 'pink' }}> ♡</strong> 신부님:{' '}
            <strong>{wedding.bride_name}</strong>
          </h3>

          <h4>
            웨딩일자: {new Date(wedding.wedding_at).toLocaleDateString()}{' '}
            {wedding.event_at}
          </h4>

          <hr style={{ width: '90%' }} />

          <h3>웨딩비용</h3>
        </>
      )}
    </>
  );
};

export default ReadWeddingMobile;
