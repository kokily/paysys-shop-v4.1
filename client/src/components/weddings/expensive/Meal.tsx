import React from 'react';
import { stringAccounting } from '../../../libs/utils';

interface Props extends ExpensiveMealType {
  onChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => void;
}

const Meal: React.FC<Props> = ({
  meals,
  meals_price,
  meals_num_husband,
  meals_num_bride,
  onChange,
}) => {
  return (
    <>
      <h3>식사비용</h3>

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
            <th>식대분할</th>
            <td className="sub" colSpan={3} style={{ textAlign: 'center' }}>
              <select name="meals" value={meals} onChange={onChange}>
                <option value="privacy">각각 결제</option>
                <option value="husband">신랑 결제</option>
                <option value="bride">신부 결제</option>
                <option value="half">반반 결제</option>
              </select>
            </td>
          </tr>

          <tr>
            <th>식대단가</th>
            <td className="sub" colSpan={3}>
              <input
                type="number"
                name="meals_price"
                value={meals_price}
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
                name="meals_num_husband"
                value={meals_num_husband}
                onChange={onChange}
              />
            </td>
            <td>
              <input
                type="number"
                name="meals_num_bride"
                value={meals_num_bride}
                onChange={onChange}
              />
            </td>
            <td>
              {stringAccounting(
                parseInt(meals_num_husband) + parseInt(meals_num_bride)
              )}
              명
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Meal;
