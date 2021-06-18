import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import oc from 'open-color';
import { media, shadow } from '../../../libs/styles';
import RemoveModal from '../../common/RemoveModal';
import useModalItem from '../hooks/useModalItem';

// Styles
const Container = styled.div`
  display: contents;
  margin-top: 1rem;
  ${media.large} {
    width: 1200px;
    padding-left: 15rem;
    padding-right: 15rem;
  }
`;

const Button = styled.button<ButtonProps>`
  font-size: 1rem;
  font-weight: bold;
  border-radius: 10px;
  padding: 0.5rem;
  padding-bottom: 0.4rem;
  cursor: pointer;
  transition: 0.2s all;
  ${(props) =>
    props.menu &&
    css`
      border: 1px solid ${oc.cyan[6]};
      background: white;
      color: ${oc.cyan[6]};
      &:hover {
        background: ${oc.blue[6]};
        color: white;
        ${shadow(1)};
      }
    `}
  ${(props) =>
    props.edit &&
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
  
  &:active {
    transform: translateY(3px);
  }
  & + & {
    margin-left: 0.5rem;
  }
`;

interface ButtonProps {
  menu?: boolean;
  edit?: boolean;
  remove?: boolean;
}

interface Props {
  onList: () => void;
  onEdit: () => void;
}

const ReadButton: React.FC<Props> = ({ onList, onEdit }) => {
  const { modal, onRemoveClick, onCancel, onConfirm } = useModalItem();

  return (
    <>
      <Container>
        <Button menu onClick={onList}>
          목록으로
        </Button>
        <Button edit onClick={onEdit}>
          수정하기
        </Button>
        <Button remove onClick={onRemoveClick}>
          삭제하기
        </Button>
      </Container>
      <RemoveModal visible={modal} onConfirm={onConfirm} onCancel={onCancel} />
    </>
  );
};

export default ReadButton;
