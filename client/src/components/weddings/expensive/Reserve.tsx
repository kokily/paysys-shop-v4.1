interface Props extends ExpensiveReserveType {
  onChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => void;
}

const Reserve: React.FC<Props> = ({ reserve, reserve_pay, onChange }) => {
  return (
    <>
      <h3>예약금</h3>

      <table>
        <tbody>
          <tr>
            <th>구 분</th>
            <th className="basic" style={{ background: 'skyblue' }}>
              신랑
            </th>
            <th className="basic" style={{ background: 'pink' }}>
              신부
            </th>
            <th className="basic red">계</th>
          </tr>

          <tr>
            <th>예약금</th>
            <td className="sub" colSpan={3} style={{ textAlign: 'center' }}>
              <select name="reserve" value={reserve} onChange={onChange}>
                <option value="half">예약금 반반</option>
                <option value="husband">예약금 신랑</option>
                <option value="bride">예약금 신부</option>
              </select>
            </td>
          </tr>

          <tr>
            <th>예약금분할</th>
            <td className="sub" colSpan={3} style={{ textAlign: 'center' }}>
              <input
                type="number"
                name="reserve_pay"
                value={reserve_pay}
                onChange={onChange}
                style={{ textAlign: 'center' }}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Reserve;
