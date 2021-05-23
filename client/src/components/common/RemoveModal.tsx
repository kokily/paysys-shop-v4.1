import React from 'react';
import styled, { css } from 'styled-components';
import oc from 'open-color';
import { shadow } from '../../libs/styles';

// Styles
const ModalBox = styled.div`
  position: fixed;
  z-index: 5000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  width: 320px;
  background: white;
  padding: 1.5rem;
  border-radius: 4px;
  ${shadow(1)};
  animation: 0.3s ease-out 0s 1 slideUpFromBottom;
  h2 {
    margin-top: 0;
    margin-bottom: 1rem;
  }
  p {
    margin-bottom: 3rem;
  }
  .buttons {
    display: flex;
    justify-content: flex-end;
  }
  @keyframes slideUpFromBottom {
    0% {
      transform: translateY(70%);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

const Button = styled.button<ButtonProps>`
  width: 5rem;
  height: 2rem;
  border: none;
  background: ${oc.gray[6]};
  color: white;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 4px;
  cursor: pointer;
  ${(props) =>
    props.cyan &&
    css`
      background: ${oc.cyan[6]};
      &:hover {
        color: ${oc.cyan[6]};
      }
    `}
  &:hover {
    background: ${oc.gray[3]};
    color: ${oc.gray[8]};
  }
  & + & {
    margin-left: 0.75rem;
  }
`;

interface ButtonProps {
  cyan?: boolean;
}

interface Props {
  visible: boolean;
  title?: string;
  content?: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const Modal: React.FC<Props> = ({
  visible,
  title,
  content,
  onConfirm,
  onCancel,
}) => {
  if (!visible) return null;

  return (
    <ModalBox>
      <Content>
        <h2>{title}</h2>
        <p>{content}</p>

        <div className="buttons">
          <Button onClick={onCancel}>취소</Button>
          <Button cyan onClick={onConfirm}>
            확인
          </Button>
        </div>
      </Content>
    </ModalBox>
  );
};

function RemoveModal({ visible, onConfirm, onCancel }: Props) {
  return (
    <Modal
      visible={visible}
      title="삭 제"
      content="정말 삭제하실래용?"
      onConfirm={onConfirm}
      onCancel={onCancel}
    />
  );
}

export default RemoveModal;
