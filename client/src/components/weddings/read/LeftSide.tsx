import React from 'react';
import ReadConvention from './left/ReadConvention';

interface Props {
  wedding: WeddingType | null;
}

const LeftSide: React.FC<Props> = ({ wedding }) => {
  return (
    <>
      {wedding && (
        <>
          <table>
            <tbody>
              <tr>
                <th colSpan={4}>예식비용</th>
              </tr>

              <ReadConvention wedding={wedding} />
            </tbody>
          </table>
        </>
      )}
    </>
  );
};

export default LeftSide;
