import styled, { css } from 'styled-components';
import oc from 'open-color';
import React from 'react';

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

const Td = styled.td<{
  soldier?: boolean;
  reserve?: boolean;
  general?: boolean;
}>`
  ${(props) =>
    props.soldier &&
    css`
      background: ${oc.cyan[7]};
      color: white;
    `}

  ${(props) =>
    props.reserve &&
    css`
      background: ${oc.lime[7]};
      color: white;
    `}

  ${(props) =>
    props.general &&
    css`
      background: ${oc.orange[6]};
      color: white;
    `}
`;

interface Props {
  front: BillType;
}

const ReadMobileTable: React.FC<Props> = ({ front }) => {
  return (
    <Container>
      <thead>
        <tr>
          <th>구분</th>
          <th>
            상품명
            <br />
            (단가)
          </th>
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
                <Td
                  soldier={item.native === '현역'}
                  reserve={item.native === '예비역'}
                  general={item.native === '일반'}
                >
                  {item.native}
                </Td>
                <Td
                  soldier={item.native === '현역'}
                  reserve={item.native === '예비역'}
                  general={item.native === '일반'}
                >
                  {item.name}
                  <br />
                  <span style={{ color: oc.gray[4], fontSize: '0.8rem' }}>
                    (
                    {item.price
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    원)
                  </span>
                </Td>
                <Td
                  soldier={item.native === '현역'}
                  reserve={item.native === '예비역'}
                  general={item.native === '일반'}
                >
                  {item.count}
                </Td>
                <Td
                  soldier={item.native === '현역'}
                  reserve={item.native === '예비역'}
                  general={item.native === '일반'}
                >
                  {(item.price * item.count)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  원
                </Td>
              </tr>
            ))}
          </>
        )}
      </tbody>
    </Container>
  );
};

export default ReadMobileTable;
