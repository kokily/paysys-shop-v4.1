import React from 'react';
import styled, { css } from 'styled-components';
import oc from 'open-color';
import { shadow } from '../../libs/styles';

// Styles
const Container = styled.div`
  margin-bottom: 1rem;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`;

const StyledButton = styled.button<ButtonProps>`
  font-size: 1rem;
  font-weight: bold;
  width: 80px;
  border-radius: 6px;
  padding: 0.5rem;
  padding-bottom: 0.4rem;
  cursor: pointer;
  transition: 0.2s all;
  &:active {
    transform: translateY(3px);
  }
  & + & {
    margin-left: 1rem;
  }
  ${(props) =>
    props.cancel &&
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
    props.submit &&
    css`
      border: 1px solid ${oc.violet[6]};
      background: white;
      color: ${oc.violet[6]};
      &:hover {
        background: ${oc.violet[6]};
        color: white;
        ${shadow(1)};
      }
    `}
`;

interface ButtonProps {
  submit?: boolean;
  cancel?: boolean;
}

interface Props {
  submit: string;
  cancel: string;
  onSubmit: (e: React.MouseEvent) => void;
  onCancel: () => void;
}

const Button: React.FC<Props> = ({ submit, cancel, onSubmit, onCancel }) => {
  return (
    <Container>
      <StyledButton submit onClick={onSubmit}>
        {submit}
      </StyledButton>
      <StyledButton cancel onClick={onCancel}>
        {cancel}
      </StyledButton>
    </Container>
  );
};

export default Button;
