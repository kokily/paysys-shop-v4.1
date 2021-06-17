import React from 'react';
import styled, { css } from 'styled-components';
import oc from 'open-color';
import { media, shadow } from '../../../libs/styles';
import { BrowserView, MobileView } from 'react-device-detect';

interface ButtonProps {
  remove?: boolean;
  restore?: boolean;
  menu?: boolean;
  reserve?: boolean;
}

// Styles
const Container = styled.div`
  margin-top: 1rem;
  display: flex;
  width: 100%;
  justify-content: center;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button<ButtonProps>`
  margin-top: 1rem;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 6px;
  padding: 0.5rem;
  padding-bottom: 0.4rem;
  cursor: pointer;
  transition: 0.2s all;
  ${media.xsmall} {
    padding: 0.5rem 0.2rem 0.4rem 0.2rem;
  }
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
    props.restore &&
    css`
      border: 1px solid ${oc.cyan[6]};
      background: white;
      color: ${oc.cyan[6]};
      &:hover {
        background: ${oc.cyan[6]};
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
    props.reserve &&
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

interface Props {
  front: BillType | null;
  user: MeType | null;
  onRemoveClick: () => void;
  onRestore: () => void;
  onList: () => void;
  onReserve: () => void;
  onRemoveReserve: () => void;
}

const ReadButton: React.FC<Props> = ({
  front,
  user,
  onRemoveClick,
  onRestore,
  onList,
  onReserve,
  onRemoveReserve,
}) => {
  return (
    <Container>
      <ButtonBox>
        {user && front && (user.admin || front.user_id === user.id) && (
          <>
            <Button remove onClick={onRemoveClick}>
              <BrowserView>삭제하기</BrowserView>
              <MobileView>삭제</MobileView>
            </Button>
            <Button restore onClick={onRestore}>
              <BrowserView>수정하기</BrowserView>
              <MobileView>수정</MobileView>
            </Button>
          </>
        )}
        <Button menu onClick={onList}>
          <BrowserView>목록으로</BrowserView>
          <MobileView>목록</MobileView>
        </Button>
        {user && front && user.admin && (
          <>
            {!front.reserve || front.reserve === 0 ? (
              <Button reserve onClick={onReserve}>
                + 예약금
              </Button>
            ) : (
              <Button reserve onClick={onRemoveReserve}>
                예약금 삭제
              </Button>
            )}
          </>
        )}
      </ButtonBox>
    </Container>
  );
};

export default ReadButton;
