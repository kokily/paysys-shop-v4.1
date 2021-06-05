import React from 'react';
import styled, { css } from 'styled-components';
import oc from 'open-color';
import { shadow } from '../../../libs/styles';
import SignCanvas from './mobile/SignCanvas';

// Styles
const Container = styled.div`
  position: fixed;
  z-index: 5000;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SignBox = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 4px;
  ${shadow(1)};
  animation: 0.3s ease-out 0s 1 slideUpFromBottom;
  h2 {
    margin-top: 0;
    margin-bottom: 1rem;
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

const Button = styled.button<{ cyan?: boolean }>`
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

interface Props {
  visible: boolean;
  title: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const SignModal: React.FC<Props> = ({
  visible,
  title,
  onConfirm,
  onCancel,
}) => {
  if (!visible) return null;

  return (
    <Container>
      <SignBox>
        <h2>{title}</h2>

        <SignCanvas width={320} height={240} />

        <div className="buttons">
          <Button onClick={onCancel}>취소</Button>
          <Button cyan onClick={onConfirm}>
            확인
          </Button>
        </div>
      </SignBox>
    </Container>
  );
};

export default SignModal;
