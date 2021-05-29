import React, { useState } from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { shadow } from '../../../libs/styles';
import ReadButton from './ReadButton';
import RemoveModal from '../../common/RemoveModal';

// Styles
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
    color: ${oc.violet[6]};
  }
  .name {
    text-align: center;
    strong {
      color: ${oc.cyan[7]};
    }
  }
`;

const Content = styled.div`
  table {
    display: inline;
    font-size: 0.95rem;
  }
  tr {
    &:hover {
      background: rgba(167, 122, 230, 0.2);
    }
  }
  th,
  td {
    border: 1px solid ${oc.gray[4]};
    border-radius: 8px;
    padding-top: 0.15rem;
    padding-bottom: 0.15rem;
  }
  th {
    background: #a6a6a6;
    color: white;
    width: 130px;
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
      background: white;
      color: ${oc.blue[9]};
    }
  }
  td {
    width: 93.3px;
    font-size: 0.9rem;
    overflow: hidden;
    text-align: right;
    &.sub {
      color: ${oc.blue[9]};
      font-weight: bold;
    }
  }
`;

interface Props {
  onList: () => void;
  onBack: () => void;
  onRemove: () => void;
  onUpdate: () => void;
}

const ReadWeddingTemplate: React.FC<Props> = ({
  children,
  onList,
  onBack,
  onRemove,
  onUpdate,
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

      <Content>
        {children}
        <ReadButton
          onList={onList}
          onBack={onBack}
          onRemoveClick={onRemoveClick}
          onUpdate={onUpdate}
        />
      </Content>

      <RemoveModal visible={modal} onConfirm={onConfirm} onCancel={onCancel} />
    </Container>
  );
};

export default ReadWeddingTemplate;
