import { stringAccounting } from '../../../../libs/utils';
import ReadMeal from '../common/right/ReadMeal';
import ReadPresent from '../common/right/ReadPresent';
import ReadReserve from '../common/right/ReadReserve';
import useReadWedding from '../hooks/useReadWedding';

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

function BottomMobile() {
  const { wedding, meal, present, reserve } = useReadWedding();

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
}

export default BottomMobile;
