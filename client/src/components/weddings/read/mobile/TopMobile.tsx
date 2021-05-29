import React from 'react';
import { stringAccounting } from '../../../../libs/utils';
import ReadConvention from '../left/ReadConvention';
import ReadCompany from '../left/ReadCompany';
import ReadEvent from '../left/ReadEvent';
import ReadHanbok from '../left/ReadHanbok';

interface Props {
  wedding: WeddingType | null;
  convention: ConventionType | null;
  company: CompanyType | null;
  event: EventType | null;
  hanbok: HanbokType | null;
}

const TopMobile: React.FC<Props> = ({
  wedding,
  convention,
  company,
  event,
  hanbok,
}) => {
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
                <th style={{ color: '#d941c5', background: 'white' }}>
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
};

export default TopMobile;
