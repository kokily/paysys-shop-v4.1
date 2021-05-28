import React from 'react';
import { stringAccounting } from '../../../libs/utils';

interface Props extends ExpensiveEventType {
  onChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => void;
}

const Event: React.FC<Props> = ({
  play_husband,
  play_bride,
  anthem_husband,
  anthem_bride,
  moderator_husband,
  moderator_bride,
  officiate_husband,
  officiate_bride,
  onChange,
}) => {
  return (
    <>
      <h3>행사업체 비용</h3>

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
            <th>연 주</th>
            <td>
              <input
                type="number"
                name="play_husband"
                value={play_husband}
                onChange={onChange}
              />
            </td>
            <td>
              <input
                type="number"
                name="play_bride"
                value={play_bride}
                onChange={onChange}
              />
            </td>
            <td>
              {stringAccounting(parseInt(play_husband) + parseInt(play_bride))}
              원
            </td>
          </tr>

          <tr>
            <th>축 가</th>
            <td>
              <input
                type="number"
                name="anthem_husband"
                value={anthem_husband}
                onChange={onChange}
              />
            </td>
            <td>
              <input
                type="number"
                name="anthem_bride"
                value={anthem_bride}
                onChange={onChange}
              />
            </td>
            <td>
              {stringAccounting(
                parseInt(anthem_husband) + parseInt(anthem_bride)
              )}
              원
            </td>
          </tr>

          <tr>
            <th>사회자</th>
            <td>
              <input
                type="number"
                name="moderator_husband"
                value={moderator_husband}
                onChange={onChange}
              />
            </td>
            <td>
              <input
                type="number"
                name="moderator_bride"
                value={moderator_bride}
                onChange={onChange}
              />
            </td>
            <td>
              {stringAccounting(
                parseInt(moderator_husband) + parseInt(moderator_bride)
              )}
              원
            </td>
          </tr>

          <tr>
            <th>주 례</th>
            <td>
              <input
                type="number"
                name="officiate_husband"
                value={officiate_husband}
                onChange={onChange}
              />
            </td>
            <td>
              <input
                type="number"
                name="officiate_bride"
                value={officiate_bride}
                onChange={onChange}
              />
            </td>
            <td>
              {stringAccounting(
                parseInt(officiate_husband) + parseInt(officiate_bride)
              )}
              원
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Event;
