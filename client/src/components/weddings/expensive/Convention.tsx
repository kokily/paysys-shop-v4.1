import { stringAccounting } from '../../../libs/utils';
import useExpensive from './hooks/useExpensive';

function Convention() {
  const {
    rental_husband,
    rental_bride,
    sword_husband,
    sword_bride,
    glove_husband,
    glove_bride,
    bouquet_husband,
    bouquet_bride,
    ceremony_husband,
    ceremony_bride,
    onChange,
  } = useExpensive();

  return (
    <>
      <h3>컨벤션 비용</h3>

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
            <th>웨딩홀 사용료</th>
            <td>
              <input
                type="number"
                name="rental_husband"
                value={rental_husband}
                onChange={onChange}
              />
            </td>
            <td>
              <input
                type="number"
                name="rental_bride"
                value={rental_bride}
                onChange={onChange}
              />
            </td>
            <td>
              {stringAccounting(
                parseInt(rental_husband) + parseInt(rental_bride)
              )}
              원
            </td>
          </tr>

          <tr>
            <th>예도칼</th>
            <td>
              <input
                type="number"
                name="sword_husband"
                value={sword_husband}
                onChange={onChange}
              />
            </td>
            <td>
              <input
                type="number"
                name="sword_bride"
                value={sword_bride}
                onChange={onChange}
              />
            </td>
            <td>
              {stringAccounting(
                parseInt(sword_husband) + parseInt(sword_bride)
              )}
              원
            </td>
          </tr>

          <tr>
            <th>장 갑</th>
            <td>
              <input
                type="number"
                name="glove_husband"
                value={glove_husband}
                onChange={onChange}
              />
            </td>
            <td>
              <input
                type="number"
                name="glove_bride"
                value={glove_bride}
                onChange={onChange}
              />
            </td>
            <td>
              {stringAccounting(
                parseInt(glove_husband) + parseInt(glove_bride)
              )}
              원
            </td>
          </tr>

          <tr>
            <th>부 케</th>
            <td>
              <input
                type="number"
                name="bouquet_husband"
                value={bouquet_husband}
                onChange={onChange}
              />
            </td>
            <td>
              <input
                type="number"
                name="bouquet_bride"
                value={bouquet_bride}
                onChange={onChange}
              />
            </td>
            <td>
              {stringAccounting(
                parseInt(bouquet_husband) + parseInt(bouquet_bride)
              )}
              원
            </td>
          </tr>

          <tr>
            <th>폐백음식</th>
            <td>
              <input
                type="number"
                name="ceremony_husband"
                value={ceremony_husband}
                onChange={onChange}
              />
            </td>
            <td>
              <input
                type="number"
                name="ceremony_bride"
                value={ceremony_bride}
                onChange={onChange}
              />
            </td>
            <td>
              {stringAccounting(
                parseInt(ceremony_husband) + parseInt(ceremony_bride)
              )}
              원
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Convention;
