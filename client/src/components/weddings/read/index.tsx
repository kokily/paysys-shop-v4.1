import React from 'react';
import SignImage from './SignImage';

interface Props {
  wedding: WeddingType | null;
  onRemoveSign: () => void;
}

const ReadWedding: React.FC<Props> = ({ wedding, onRemoveSign }) => {
  return (
    <>
      {wedding && (
        <>
          <h3 className="name">
            신랑님: <strong>{wedding.husband_name}</strong>{' '}
            <strong style={{ color: 'pink' }}>♡</strong> 신부님:{' '}
            <strong>{wedding.bride_name}</strong>
          </h3>

          {(wedding.husband_image || wedding.bride_image) && (
            <SignImage
              husband={wedding.husband_image || undefined}
              bride={wedding.bride_image || undefined}
              onRemoveSign={onRemoveSign}
            />
          )}

          <h4>
            웨딩일시: {new Date(wedding.wedding_at).toLocaleDateString()}
            {wedding.event_at}
          </h4>

          <hr style={{ width: '90%' }} />

          <h3>웨딩비용</h3>
        </>
      )}
    </>
  );
};

export default ReadWedding;
