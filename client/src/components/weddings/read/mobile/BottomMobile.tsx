import React from 'react';
import { stringAccounting } from '../../../../libs/utils';
import ReadMeal from '../right/ReadMeal';
import ReadPresent from '../right/ReadPresent';
import ReadReserve from '../right/ReadReserve';

interface Props {
  wedding: WeddingType | null;
  meal: MealType | null;
  present: PresentType | null;
  reserve: ReserveType | null;
}

const Vacuity = () => (
  <tr>
    <th
      colSpan={4}
      style={{
        background: 'white',
        color: 'white',
        borderColor: 'white',
      }}
    >
      vacuity
    </th>
  </tr>
);

const BottomMobile: React.FC<Props> = ({ wedding, meal, present, reserve }) => {
  return (
    <>
      {wedding && (
        <table style={{ marginTop: '2rem' }}>
          <tbody>
            <tr>
              <th colSpan={4}>식사비용</th>
            </tr>

            {meal && <ReadMeal meal={meal} />}

            <Vacuity />

            {present && <ReadPresent present={present} />}

            <Vacuity />

            {reserve && <ReadReserve reserve={reserve} />}

            <Vacuity />
            <Vacuity />

            <tr>
              <td colSpan={4} rowSpan={9} style={{ textAlign: 'center' }}>
                <h3 style={{ color: 'silver' }}>
                  웨딩 총 비용:{' '}
                  {stringAccounting(
                    wedding.cost_husband +
                      wedding.cost_bride +
                      wedding.meal_husband +
                      wedding.meal_bride +
                      wedding.present_husband +
                      wedding.present_bride
                  )}
                  원
                </h3>
                <h3 style={{ color: 'blue' }}>
                  결제 총 비용:{' '}
                  {stringAccounting(
                    wedding.cost_husband +
                      wedding.cost_bride +
                      wedding.meal_husband +
                      wedding.meal_bride +
                      wedding.present_husband +
                      wedding.present_bride -
                      wedding.reserve_husband -
                      wedding.reserve_bride
                  )}
                  원
                </h3>
                <h3>
                  신랑 총 결제비용:{' '}
                  {stringAccounting(
                    wedding.cost_husband +
                      wedding.meal_husband +
                      wedding.present_husband -
                      wedding.reserve_husband
                  )}
                  원
                </h3>
                <h3>
                  신부 총 결제비용:{' '}
                  {stringAccounting(
                    wedding.cost_bride +
                      wedding.meal_bride +
                      wedding.present_bride -
                      wedding.reserve_bride
                  )}
                  원
                </h3>
              </td>
            </tr>
          </tbody>
        </table>
      )}
    </>
  );
};

export default BottomMobile;
