import styled from 'styled-components';
import oc from 'open-color';
import { shadow } from '../../../libs/styles';

// Styles
const Table = styled.table`
  width: 100%;
  padding: 0;
  border-radius: 0.8rem;
  overflow: hidden;

  th,
  td {
    padding-top: 1rem;
    padding-bottom: 1rem;
    text-align: center;
  }
  th {
    background: ${oc.teal[7]};
    color: white;
  }
  td {
    border-bottom: 1px solid ${oc.teal[7]};
    strong {
      color: blue;
    }
    button {
      border: none;
      outline: none;
      padding: 0;
      padding-left: 0.5rem;
      padding-right: 0.5rem;
      height: 40px;
      font-size: 0.8rem;
      border: 1px solid ${oc.red[9]};
      border-radius: 4px;
      background: white;
      color: ${oc.red[9]};
      cursor: pointer;
      transition: 0.3s;
      &:hover {
        background: ${oc.red[9]};
        color: white;
        ${shadow(1)};
      }
    }
  }
`;

interface Props {
  cart: CartType | null;
  onRemoveOne: (id: string, name: string) => void;
}

const CartTop: React.FC<Props> = ({ cart, onRemoveOne }) => {
  return (
    <>
      <h2>전표 확인(종합)</h2>

      <Table>
        <thead>
          <tr>
            <th>적용</th>
            <th>수량</th>
            <th>단가</th>
            <th>삭제</th>
          </tr>
        </thead>
        <tbody>
          {cart && cart.items ? (
            cart.items.map((item) => (
              <tr key={item.id}>
                <td>
                  [ {item.native} ]<br />
                  {item.divide}
                </td>
                <td>
                  {item.count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                </td>
                <td>
                  {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  원 /<br />
                  <strong>
                    {item.amount
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    원
                  </strong>
                </td>
                <td>
                  <button onClick={() => onRemoveOne(item.id, item.name)}>
                    삭 제
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={6}>데이터가 없습니다.</td>
            </tr>
          )}
        </tbody>
      </Table>
    </>
  );
};

export default CartTop;
