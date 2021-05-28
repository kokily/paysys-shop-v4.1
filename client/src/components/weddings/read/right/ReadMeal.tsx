import React from 'react';

interface Props {
  wedding: WeddingType | null;
}

const ReadMeal: React.FC<Props> = ({ wedding }) => {
  return (
    <>
      <tr>
        <th>구분</th>
        <th className="basic">신랑</th>
        <th className="basic">신부</th>
        <th className="basic red">계</th>
      </tr>
    </>
  );
};

export default ReadMeal;
