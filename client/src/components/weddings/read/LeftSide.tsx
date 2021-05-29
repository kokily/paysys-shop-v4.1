import React from 'react';
import { stringAccounting } from '../../../libs/utils';
import ReadCompany from './left/ReadCompany';
import ReadConvention from './left/ReadConvention';
import ReadEvent from './left/ReadEvent';
import ReadHanbok from './left/ReadHanbok';

interface Props {
  wedding: WeddingType | null;
  convention: ConventionType | null;
  company: CompanyType | null;
  event: EventType | null;
  hanbok: HanbokType | null;
}

const LeftSide: React.FC<Props> = ({
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
                <th className="orange">총 예식비용</th>
                <td>{stringAccounting(wedding.cost_husband)}원</td>
                <td>{stringAccounting(wedding.cost_bride)}원</td>
                <td className="sub">
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

export default LeftSide;
