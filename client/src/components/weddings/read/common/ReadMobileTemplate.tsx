import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { shadow } from '../../../../libs/styles';
import ReadButton from './ReadButton';
import RemoveModal from '../../../common/RemoveModal';
import useReadWedding from '../hooks/useReadWedding';
import useReadModal from '../hooks/useReadModal';

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
    background: #e3e0fa;
    color: ${oc.violet[9]};
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
      background: white;
      color: #d941c5;
    }
  }
  td {
    width: 90px;
    font-size: 0.85rem;
    overflow: hidden;
    text-align: right;
    &.sub {
      color: ${oc.violet[9]};
      font-weight: bold;
    }
  }
`;

interface Props {
  children: React.ReactNode;
}

function ReadMobileTemplate({ children }: Props) {
  const { onList, onBack, onUpdate } = useReadWedding();
  const { modal, onRemoveClick, onCancel, onConfirm } = useReadModal();

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
}

export default ReadMobileTemplate;
