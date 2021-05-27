import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import styled, { css } from 'styled-components';
import oc from 'open-color';
import { media } from '../../libs/styles';
import ReadButton from './ReadButton';
import RemoveModal from '../common/RemoveModal';

interface TdProps {
  soldier?: boolean;
  reserve?: boolean;
  general?: boolean;
}

// Styles
const Container = styled.div`
  margin-top: 1rem;
  margin-bottom: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WhiteBoard = styled.div`
  width: 80%;
  ${media.xsmall} {
    width: 100%;
  }
`;

const InfoHeader = styled.div`
  text-align: center;
  padding-bottom: -1.5rem;
  small {
    color: ${oc.indigo[9]};
  }
`;

const DownBorder = styled.div`
  margin-left: 5rem;
  margin-right: 5rem;
  margin-bottom: 1rem;
  height: 3px;
  background: linear-gradient(to right, ${oc.teal[6]}, ${oc.cyan[5]});
  ${media.medium} {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
`;

const InfoContent = styled.div`
  float: right;
  text-align: center;
  position: relative;
  width: 280px;
  font-size: 0.8rem;
  margin: 30px auto;
  margin-right: 1rem;
  padding: 1rem;
  background: white;
  border-radius: 5px;
  overflow: hidden;
  ${media.xsmall} {
    margin-right: 0.6rem;
  }
  table {
    width: 100%;
    padding: 0;
  }
  tr:hover {
    background: rgba(0, 0, 0, 0.2);
  }
  th,
  td {
    padding-top: 0.3rem;
    padding-bottom: 0.3rem;
    text-align: center;
  }
  th {
    background: ${oc.indigo[9]};
    color: white;
  }
`;

const Content = styled.div`
  .table {
    width: 100%;
    padding: 0;
    border-radius: 0.8rem;
    overflow: hidden;
  }
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

const Td = styled.td<TdProps>`
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

const EtcPane = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  span {
    width: 100%;
    color: ${oc.indigo[9]};
    padding: 15px;
    background-color: ${oc.indigo[1]};
    border-color: ${oc.indigo[2]};
    border: 1px solid transparent;
    border-radius: 4px;
  }
`;

const TotalPane = styled.div`
  width: 100%;
  margin-top: 2rem;
  margin-right: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  .total {
    margin-bottom: 0.75rem;
    transition: 0.2s all;
    .reserve {
      cursor: pointer;
      &:hover {
        color: ${oc.red[3]};
      }
    }
  }
`;

interface Props {
  front: BillType | null;
  user: MeType | null;
  onList: () => void;
  onRemove: () => void;
  onRestore: () => void;
  onReserve: () => void;
  onRemoveReserve: () => void;
}

const ReadFrontMobile: React.FC<Props> = ({
  front,
  user,
  onList,
  onRemove,
  onRestore,
  onReserve,
  onRemoveReserve,
}) => {
  const [modal, setModal] = useState(false);

  const onRemoveClick = () => {
    setModal(true);
  };

  const onCancel = () => {
    setModal(false);
  };

  const onConfirm = () => {
    setModal(false);
    onRemove();
  };

  return (
    <>
      <Helmet>
        <title>{front?.title} - 전표</title>
      </Helmet>

      <Container>
        {front && user && (
          <WhiteBoard>
            <InfoHeader>
              <h2>
                전표 세부내역
                <br />
                <small>[ {front.title} ]</small>
              </h2>
            </InfoHeader>

            <DownBorder />

            <InfoContent>
              <table>
                <tbody>
                  <tr>
                    <th>작성자</th>
                    <td>{front.username} 님</td>
                  </tr>
                  <tr>
                    <th>작성일자</th>
                    <td>{new Date(front.created_at).toLocaleDateString()}</td>
                  </tr>
                  <tr>
                    <th>작성시간</th>
                    <td>{new Date(front.created_at).toLocaleTimeString()}</td>
                  </tr>
                  <tr>
                    <th>행사장소</th>
                    <td>{front.hall}</td>
                  </tr>
                </tbody>
              </table>
            </InfoContent>

            <Content>
              <table className="table">
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
                            <span
                              style={{ color: oc.gray[4], fontSize: '0.8rem' }}
                            >
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
              </table>

              {front.etc !== '' && front.etc !== ' ' && (
                <>
                  <hr />
                  <EtcPane>
                    <span>기타사항 : {front.etc}</span>
                  </EtcPane>
                </>
              )}

              <hr />

              <TotalPane>
                {front.reserve ? (
                  <>
                    <div className="total">
                      총 금액 :{' '}
                      <span style={{ color: 'gray', fontSize: '1.5rem' }}>
                        {front.total_amount
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                      </span>
                      원
                    </div>
                    <div className="total">
                      예약금 :{' '}
                      <span
                        className="reserve"
                        style={{ color: 'red', fontSize: '1.5rem' }}
                      >
                        {front.reserve
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                      </span>
                      원
                    </div>
                    <div className="total">
                      결제금액 :{' '}
                      <span style={{ color: 'blue', fontSize: '2rem' }}>
                        {(front.total_amount - front.reserve)
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                      </span>
                      원
                    </div>
                  </>
                ) : (
                  <div className="total">
                    결제금액 :{' '}
                    <span style={{ color: 'blue', fontSize: '2rem' }}>
                      {front.total_amount
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    </span>
                  </div>
                )}
              </TotalPane>

              <ReadButton
                front={front}
                user={user}
                onRemoveClick={onRemoveClick}
                onRestore={onRestore}
                onList={onList}
                onReserve={onReserve}
                onRemoveReserve={onRemoveReserve}
              />
            </Content>
          </WhiteBoard>
        )}

        <RemoveModal
          visible={modal}
          onConfirm={onConfirm}
          onCancel={onCancel}
        />
      </Container>
    </>
  );
};

export default ReadFrontMobile;
