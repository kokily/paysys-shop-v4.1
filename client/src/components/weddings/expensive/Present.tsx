import { stringAccounting } from '../../../libs/utils';

interface Props extends ExpensivePresentType {
  onChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => void;
}

const Present: React.FC<Props> = ({
  present,
  present_price,
  present_num_husband,
  present_num_bride,
  onChange,
}) => {
  return (
    <>
      <h3>답례품비용</h3>

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
            <th>답례품분할</th>
            <td className="sub" colSpan={3} style={{ textAlign: 'center' }}>
              <select name="present" value={present} onChange={onChange}>
                <option value="privacy">각각 결제</option>
                <option value="husband">신랑 결제</option>
                <option value="bride">신부 결제</option>
                <option value="half">반반 결제</option>
              </select>
            </td>
          </tr>

          <tr>
            <th>답례품단가</th>
            <td className="sub" colSpan={3} style={{ textAlign: 'center' }}>
              <input
                type="number"
                name="present_price"
                value={present_price}
                onChange={onChange}
                style={{ textAlign: 'center' }}
              />
            </td>
          </tr>

          <tr>
            <th>하객인원</th>
            <td>
              <input
                type="number"
                name="present_num_husband"
                value={present_num_husband}
                onChange={onChange}
              />
            </td>
            <td>
              <input
                type="number"
                name="present_num_bride"
                value={present_num_bride}
                onChange={onChange}
              />
            </td>
            <td>
              {stringAccounting(
                parseInt(present_num_husband) + parseInt(present_num_bride)
              )}
              명
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Present;
