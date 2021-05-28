import React from 'react';
import ReadMeal from './right/ReadMeal';

interface Props {
  wedding: WeddingType | null;
}

const RightSide: React.FC<Props> = ({ wedding }) => {
  return (
    <>
      {wedding && (
        <>
          <table>
            <tbody>
              <tr>
                <th colSpan={4}>식사비용</th>
              </tr>

              <ReadMeal wedding={wedding} />
            </tbody>
          </table>
        </>
      )}
    </>
  );
};

export default RightSide;
