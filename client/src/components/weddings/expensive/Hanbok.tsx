import React from 'react';
import { stringAccounting } from '../../../libs/utils';

interface Props extends ExpensiveHanbokType {
  onChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => void;
}

const Hanbok: React.FC<Props> = ({
  hanbok_pre_husband,
  hanbok_pre_bride,
  hanbok_post_husband,
  hanbok_post_bride,
  onChange,
}) => {
  return (
    <>
      <h3>한복업체</h3>

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
            <th>한복(선불)</th>
            <td>
              <input
                type="number"
                name="hanbok_pre_husband"
                value={hanbok_pre_husband}
                onChange={onChange}
              />
            </td>
            <td>
              <input
                type="number"
                name="hanbok_pre_bride"
                value={hanbok_pre_bride}
                onChange={onChange}
              />
            </td>
            <td>
              {stringAccounting(
                parseInt(hanbok_pre_husband) + parseInt(hanbok_pre_bride)
              )}
              원
            </td>
          </tr>

          <tr>
            <th>한복(후불)</th>
            <td>
              <input
                type="number"
                name="hanbok_post_husband"
                value={hanbok_post_husband}
                onChange={onChange}
              />
            </td>
            <td>
              <input
                type="number"
                name="hanbok_post_bride"
                value={hanbok_post_bride}
                onChange={onChange}
              />
            </td>
            <td>
              {stringAccounting(
                parseInt(hanbok_post_husband) + parseInt(hanbok_post_bride)
              )}
              원
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Hanbok;
