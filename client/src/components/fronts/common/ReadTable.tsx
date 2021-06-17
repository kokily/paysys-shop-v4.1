import styled from 'styled-components';
import oc from 'open-color';

// Styles
const Container = styled.table`
  width: 100%;
  padding: 0;
  border-radius: 0.8rem;
  overflow: hidden;

  tr:hover {
    background: ${oc.indigo[3]};
    color: white;
    strong {
      color: ${oc.red[9]};
    }
  }
  th,
  td {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    text-align: center;
    strong {
      color: ${oc.indigo[9]};
    }
  }
  th {
    background: ${oc.indigo[9]};
    color: white;
  }
`;

interface Props {
  front: BillType;
}

const ReadTable: React.FC<Props> = ({ front }) => {
  return (
    <Container>
      <thead>
        <tr>
          <th>구분</th>
          <th>상품명</th>
          <th>단가</th>
          <th>수량</th>
          <th>소계</th>
        </tr>
      </thead>
      <tbody>
        {front.items === null || front.items.length === 0 ? (
          <tr>
            <td colSpan={4}>데이터가 없습니다.</td>
          </tr>
        ) : (
          <>
            {front.items?.map((item, i) => (
              <tr key={i}>
                <td>{item.native}</td>
                <td>{item.name}</td>
                <td>
                  <span style={{ color: oc.gray[6] }}>
                    {item.price
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    원
                  </span>
                </td>
                <td>{item.count}</td>
                <td>
                  {(item.price * item.count)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  원
                </td>
              </tr>
            ))}
          </>
        )}
      </tbody>
    </Container>
  );
};

export default ReadTable;
