import React from 'react';

interface Props {
  wedding: WeddingType;
}

const ReadConvention: React.FC<Props> = ({ wedding }) => {
  return (
    <>
      <tr>
        <th>구분</th>
        <th className="basic">신랑</th>
        <th className="basic">신부</th>
        <th className="basic red">계</th>
      </tr>

      {wedding.convention && (
        <>
          <tr>
            <th>웨딩홀 사용료</th>
            <td>{wedding.convention.husband_rental}</td>
          </tr>
        </>
      )}
    </>
  );
};
export default ReadConvention;
