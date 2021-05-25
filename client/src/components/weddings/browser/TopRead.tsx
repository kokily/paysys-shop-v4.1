import React from 'react';

interface Props {
  wedding: WeddingType;
}

const TopRead: React.FC<Props> = ({ wedding }) => {
  return (
    <>
      <tr>
        <th colSpan={4}>예식비용</th>
        <th colSpan={4}>식사비용</th>
      </tr>

      <tr>
        <th>구분</th>
        <th className="basic">신랑</th>
        <th className="basic">신부</th>
        <th className="basic red">계</th>

        <th>구분</th>
        <th className="basic">신랑</th>
        <th className="basic">신부</th>
        <th className="basic red">계</th>
      </tr>

      <tr>
        <th>웨딩홀 사용료</th>
        <td>
          {wedding.husband_rental
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          원
        </td>
        <td>
          {wedding.bride_rental
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          원
        </td>
        <td className="sub">
          {wedding.sum_rental.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          원
        </td>

        <th>식대 분할</th>
        <td className="sub" colSpan={3} style={{ textAlign: 'center' }}>
          {(function () {
            if (wedding.meal === 'privacy') {
              return '각각 결제';
            } else if (wedding.meal === 'husband') {
              return '신랑 결제';
            } else if (wedding.meal === 'bride') {
              return '신부 결제';
            } else {
              return '반반 결제';
            }
          })()}
        </td>
      </tr>

      <tr>
        <th>웨딩업체</th>
        <td>
          {wedding.husband_company
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          원
        </td>
        <td>
          {wedding.bride_company
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          원
        </td>
        <td className="sub">
          {wedding.sum_company.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          원
        </td>

        <th>식대 단가</th>
        <td className="sub" colSpan={3} style={{ textAlign: 'center' }}>
          {wedding.meals_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          원
        </td>
      </tr>

      <tr>
        <th>웨딩업체 추가</th>
        <td>
          {wedding.husband_add.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          원
        </td>
        <td>
          {wedding.bride_add.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
        </td>
        <td className="sub">
          {wedding.sum_add.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
        </td>

        <th>하객인원</th>
        <td>
          {wedding.husband_num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          명
        </td>
        <td>
          {wedding.bride_num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}명
        </td>
        <td className="sub">
          {wedding.sum_num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}명
        </td>
      </tr>

      <tr>
        <th>업체당일 추가</th>
        <td>
          {wedding.husband_today
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          원
        </td>
        <td>
          {wedding.bride_today.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          원
        </td>
        <td className="sub">
          {wedding.sum_today.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
        </td>

        <th>식대 총 비용</th>
        <td>
          {wedding.husband_meal
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          원
        </td>
        <td>
          {wedding.bride_meal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          원
        </td>
        <td className="sub">
          {wedding.sum_meal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
        </td>
      </tr>

      <tr>
        <th>부 케</th>
        <td>
          {wedding.husband_bouquet
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          원
        </td>
        <td>
          {wedding.bride_bouquet
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          원
        </td>
        <td className="sub">
          {wedding.sum_bouquet.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          원
        </td>
      </tr>
    </>
  );
};

export default TopRead;
