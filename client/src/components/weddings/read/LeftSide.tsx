import React from 'react';
import ReadCompany from './left/ReadCompany';
import ReadConvention from './left/ReadConvention';

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
            </tbody>
          </table>
        </>
      )}
    </>
  );
};

export default LeftSide;
