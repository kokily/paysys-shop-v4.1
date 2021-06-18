import React from 'react';
import styled, { css } from 'styled-components';
import oc from 'open-color';
import { shadow } from '../../../libs/styles';
import useExpensive from './hooks/useExpensive';

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`;

const Button = styled.button<{
  menu?: boolean;
  remove?: boolean;
  patch?: boolean;
}>`
  width: 6rem;
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
&:active {
    transform: translateY(3px);
  }
  & + & {
    margin-left: 0.5rem;
  }
`;

function ExpenseButton() {
  const { onBack, onSubmit } = useExpensive();

  return (
    <ButtonBox>
      <Button remove={true} onClick={onBack}>
        취소하기
      </Button>
      <Button menu={true} onClick={onSubmit}>
        저장하기
      </Button>
    </ButtonBox>
  );
}

export default ExpenseButton;
