import React from 'react';
import { stringAccounting } from '../../../../libs/utils';

interface Props {
  company: CompanyType;
}

const ReadCompany: React.FC<Props> = ({ company }) => {
  return (
    <>
      <tr>
        <th>웨딩업체</th>
        <td>{stringAccounting(company.company_husband)}원</td>
        <td>{stringAccounting(company.company_bride)}원</td>
        <td className="sub">
          {stringAccounting(company.company_husband + company.company_bride)}원
        </td>
      </tr>

      <tr>
        <th>야간옥상전구</th>
        <td>{stringAccounting(company.company_husband)}원</td>
        <td>{stringAccounting(company.company_bride)}원</td>
        <td className="sub">
          {stringAccounting(company.company_husband + company.company_bride)}원
        </td>
      </tr>

      <tr>
        <th>메이크업(여)</th>
      </tr>

      <tr>
        <th>메이크업(남)</th>
      </tr>

      <tr>
        <th>셀 렉</th>
      </tr>

      <tr>
        <th>액 자</th>
      </tr>

      <tr>
        <th>드레스</th>
      </tr>

      <tr>
        <th>헤어피스</th>
      </tr>

      <tr>
        <th>가 발</th>
      </tr>

      <tr>
        <th>비디오촬영</th>
      </tr>

      <tr>
        <th>기 타</th>
      </tr>
    </>
  );
}

export default ReadCompany;