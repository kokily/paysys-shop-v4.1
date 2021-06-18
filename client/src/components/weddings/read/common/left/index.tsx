import { stringAccounting } from '../../../../../libs/utils';
import useReadWedding from '../../hooks/useReadWedding';
import ReadConvention from './ReadConvention';
import ReadCompany from './ReadCompany';
import ReadEvent from './ReadEvent';
import ReadHanbok from './ReadHanbok';

function LeftSide() {
  const { wedding, convention, company, event, hanbok } = useReadWedding();

  return (
    <>
      {wedding && (
        <>
          <table>
            <tbody>
              <tr>
                <th colSpan={4}>예식비용</th>
              </tr>

              {convention && <ReadConvention convention={convention} />}
              {company && <ReadCompany company={company} />}
              {event && <ReadEvent event={event} />}
              {hanbok && <ReadHanbok hanbok={hanbok} />}

              <tr>
                <th style={{ background: 'white', color: '#d941c5' }}>
                  총 예식비용
                </th>
                <td style={{ color: '#d941c5' }}>
                  {stringAccounting(wedding.cost_husband)}원
                </td>
                <td style={{ color: '#d941c5' }}>
                  {stringAccounting(wedding.cost_bride)}원
                </td>
                <td style={{ color: '#d941c5', fontWeight: 'bold' }}>
                  {stringAccounting(wedding.cost_husband + wedding.cost_bride)}
                  원
                </td>
              </tr>
            </tbody>
          </table>
        </>
      )}
    </>
  );
}

export default LeftSide;
