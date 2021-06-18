import React from 'react';
import styled, { css } from 'styled-components';
import oc from 'open-color';
import { BrowserView, MobileView } from 'react-device-detect';
import { shadow } from '../../../../libs/styles';

const ButtonBox = styled.div`
  margin-bottom: 1rem;
  display: block;
`;

const Button = styled.button<{
  menu?: boolean;
  patch?: boolean;
  remove?: boolean;
  back?: boolean;
}>`
  margin-top: 2rem;
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
  onList: () => void;
  onBack: () => void;
  onUpdate: () => void;
  onRemoveClick: () => void;
}

const ReadButton: React.FC<Props> = ({
  onList,
  onBack,
  onUpdate,
  onRemoveClick,
}) => {
  return (
    <ButtonBox>
      <Button menu onClick={onList}>
        <BrowserView>목록으로</BrowserView>
        <MobileView>목록</MobileView>
      </Button>
      <Button back onClick={onBack}>
        <BrowserView>뒤로가기</BrowserView>
        <MobileView>뒤로</MobileView>
      </Button>
      <Button patch onClick={onUpdate}>
        <BrowserView>수정하기</BrowserView>
        <MobileView>수정</MobileView>
      </Button>
      <Button remove onClick={onRemoveClick}>
        <BrowserView>삭제하기</BrowserView>
        <MobileView>삭제</MobileView>
      </Button>
    </ButtonBox>
  );
};

export default ReadButton;
