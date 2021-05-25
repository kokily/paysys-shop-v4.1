import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import oc from 'open-color';
import { shadow } from '../../libs/styles';

// Styles
const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 6rem;
  ${shadow(1)};
  animation: 0.3s ease-out 0s 1 fadeIn;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  .title {
    font-size: 1.512rem;
    color: ${oc.violet[7]};
  }
  .name {
    strong {
      color: ${oc.cyan[7]};
    }
  }
`;

const Content = styled.div`
  margin-bottom: 2rem;
  align-self: center;
  tr {
    &:hover {
      background: rgba(165, 102, 255, 0.2);
    }
  }
  th,
  td {
    border-radius: 8px;
    padding-top: 0.15rem;
    padding-bottom: 0.15rem;
  }
  th {
    background: ${oc.violet[4]};
    color: white;
    width: 160px;
    &.basic {
      width: 93.3px;
    }
    &.orange {
      background: ${oc.orange[4]};
    }
    &.cyan {
      background: ${oc.cyan[4]};
    }
    &.red {
      background: ${oc.red[4]};
    }
  }
  td {
    width: 90px;
    font-size: 0.85rem;
    overflow: hidden;
    text-align: right;
    &.sub {
      color: ${oc.blue[9]};
      font-weight: bold;
    }
  }
`;

const ButtonPane = styled.div`
  margin-bottom: 1rem;
  display: inline-flex;
`;

const Button = styled.button<{
  menu?: boolean;
  patch?: boolean;
  remove?: boolean;
  back?: boolean;
}>`
  margin-top: 1rem;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 6px;
  padding: 0.5rem;
  padding-bottom: 0.4rem;
  cursor: pointer;
  transition: 0.2s all;
  ${(props) =>
    props.remove &&
    css`
      border: 1px solid ${oc.red[6]};
      background: white;
      color: ${oc.red[6]};
      &:hover {
        background: ${oc.red[6]};
        color: white;
        ${shadow(1)};
      }
    `}
  ${(props) =>
    props.menu &&
    css`
      border: 1px solid ${oc.indigo[6]};
      background: white;
      color: ${oc.indigo[6]};
      &:hover {
        background: ${oc.indigo[6]};
        color: white;
        ${shadow(1)};
      }
    `}
    ${(props) =>
    props.patch &&
    css`
      border: 1px solid ${oc.yellow[6]};
      background: white;
      color: ${oc.yellow[6]};
      &:hover {
        background: ${oc.yellow[6]};
        color: white;
        ${shadow(1)};
      }
    `}
      ${(props) =>
    props.back &&
    css`
      border: 1px solid ${oc.teal[6]};
      background: white;
      color: ${oc.teal[6]};
      &:hover {
        background: ${oc.teal[6]};
        color: white;
        ${shadow(1)};
      }
    `}
  &:active {
    transform: translateY(3px);
  }
  & + & {
    margin-left: 0.5rem;
  }
`;

interface Props {
  wedding: WeddingType | null;
  onList: () => void;
  onBack: () => void;
  onUpdate: () => void;
  onRemove: () => void;
}

const ReadMobileWedding: React.FC<Props> = ({
  wedding,
  onList,
  onBack,
  onUpdate,
  onRemove,
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
    <Container>
      <h2 className="title">웨딩 정산 내역</h2>

      {wedding && (
        <Content>
          <h3 className="name">
            신랑님: <strong>{wedding.husband}</strong>
            <strong style={{ color: 'pink' }}> ♡</strong> 신부님:{' '}
            <strong>{wedding.bride}</strong>
          </h3>

          <h4>
            웨딩일자: {new Date(wedding.wedding_at).toLocaleDateString()}{' '}
            {wedding.event_at}
          </h4>

          <hr style={{ width: '90%' }} />

          <h3>예식비용</h3>
          <table>
            <tbody>
              <tr>
                <th>구분</th>
                <th className="basic">신랑</th>
                <th className="basic">신부</th>
                <th className="basic red">계</th>
              </tr>
            </tbody>
          </table>
        </Content>
      )}
    </Container>
  );
};

export default ReadMobileWedding;
