import React from 'react';

interface Props {
  wedding: WeddingType;
}

const BottomRead: React.FC<Props> = ({ wedding }) => {
  return (
    <>
      <tr>
        <th>폐백음식</th>
        <td>
          {wedding.husband_ceremony
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          원
        </td>
        <td>
          {wedding.bride_ceremony
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          원
        </td>
        <td className="sub">
          {wedding.sum_ceremony
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          원
        </td>

        <th colSpan={4}>답례품 비용</th>
      </tr>

      <tr>
        <th>한 복</th>
        <td>
          {wedding.husband_hanbok
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          원
        </td>
        <td>
          {wedding.bride_hanbok
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          원
        </td>
        <td className="sub">
          {wedding.sum_hanbok.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          원
        </td>

        <th>답례품 분할</th>
        <td className="sub" colSpan={3} style={{ textAlign: 'center' }}>
          {(function () {
            if (wedding.present === 'privacy') {
              return '각각 결제';
            } else if (wedding.present === 'husband') {
              return '신랑 결제';
            } else if (wedding.present === 'bride') {
              return '신부 결제';
            } else {
              return '반반 결제';
            }
          })()}
        </td>
      </tr>

      <tr>
        <th>연 주</th>
        <td>
          {wedding.husband_play
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          원
        </td>
        <td>
          {wedding.bride_play.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          원
        </td>
        <td className="sub">
          {wedding.sum_play.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
        </td>

        <th>답례품 단가</th>
        <td className="sub" colSpan={3} style={{ textAlign: 'center' }}>
          {wedding.present_price
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          원
        </td>
      </tr>

      <tr>
        <th>축 가</th>
        <td>
          {wedding.husband_anthem
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          원
        </td>
        <td>
          {wedding.bride_anthem
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          원
        </td>
        <td className="sub">
          {wedding.sum_anthem.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          원
        </td>

        <th>하객인원</th>
        <td>
          {wedding.husband_present_num
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          명
        </td>
        <td>
          {wedding.bride_present_num
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          명
        </td>
        <td className="sub">
          {wedding.sum_present_num
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          명
        </td>
      </tr>

      <tr>
        <th>사회자</th>
        <td>
          {wedding.husband_moderator
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          원
        </td>
        <td>
          {wedding.bride_moderator
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          원
        </td>
        <td className="sub">
          {wedding.sum_moderator
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          원
        </td>

        <th>답례품 총 비용</th>
        <td>
          {wedding.husband_present
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          원
        </td>
        <td>
          {wedding.bride_present
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          원
        </td>
        <td className="sub">
          {wedding.sum_present.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          원
        </td>
      </tr>

      <tr>
        <th>주 례</th>
        <td>
          {wedding.husband_officiate
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          원
        </td>
        <td>
          {wedding.bride_officiate
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          원
        </td>
        <td className="sub">
          {wedding.sum_officiate
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          원
        </td>
      </tr>

      <tr>
        <th>기 타</th>
        <td>
          {wedding.husband_etc.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          원
        </td>
        <td>
          {wedding.bride_etc.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
        </td>
        <td className="sub">
          {wedding.sum_etc.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
        </td>

        <th colSpan={4}>예약금</th>
      </tr>

      <tr>
        <th>컨벤션 당일</th>
        <td>
          {wedding.husband_conv
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          원
        </td>
        <td>
          {wedding.bride_conv.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          원
        </td>
        <td className="sub">
          {wedding.sum_conv.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
        </td>

        <th>예약금 분할</th>
        <td className="sub" colSpan={3} style={{ textAlign: 'center' }}>
          {(function () {
            if (wedding.reserve === 'half') {
              return '예약금 반반';
            } else if (wedding.reserve === 'husband') {
              return '예약금 신랑';
            } else {
              return '예약금 신부';
            }
          })()}
        </td>
      </tr>

      <tr>
        <th className="orange">총 예식비용</th>
        <td>
          {wedding.husband_wedding
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          원
        </td>
        <td>
          {wedding.bride_wedding
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          원
        </td>
        <td className="sub">
          {wedding.sum_wedding.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          원
        </td>

        <th>예약금</th>
        <td style={{ color: 'red' }}>
          -
          {wedding.husband_reserve
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          원
        </td>
        <td style={{ color: 'red' }}>
          -
          {wedding.bride_reserve
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          원
        </td>
        <td className="sub" style={{ color: 'red' }}>
          -
          {wedding.reserve_pay.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          원
        </td>
      </tr>
    </>
  );
};

export default BottomRead;
