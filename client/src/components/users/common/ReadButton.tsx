import styled, { css } from 'styled-components';
import oc from 'open-color';
import { media, shadow } from '../../../libs/styles';
import RemoveModal from '../../../components/common/RemoveModal';
import useReadModal from '../hooks/useReadModal';

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

const Button = styled.button<{
  menu?: boolean;
  remove?: boolean;
  admin?: boolean;
  employee?: boolean;
  password?: boolean;
}>`
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
    props.admin &&
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
    props.employee &&
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
    props.password &&
    css`
      border: 1px solid ${oc.pink[6]};
      background: white;
      color: ${oc.pink[6]};
      &:hover {
        background: ${oc.pink[6]};
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
  onBack: () => void;
  onAdmin: () => void;
  onEmployee: () => void;
  onInitPassword: () => void;
}

const ReadButton: React.FC<Props> = ({
  onBack,
  onAdmin,
  onEmployee,
  onInitPassword,
}) => {
  const { modal, onRemoveClick, onCancel, onConfirm } = useReadModal();

  return (
    <>
      <Container>
        <Button menu onClick={onBack}>
          목록으로
        </Button>
        <Button remove onClick={onRemoveClick}>
          삭제하기
        </Button>
        <Button employee onClick={onEmployee}>
          일반 강등
        </Button>
        <Button admin onClick={onAdmin}>
          관리자 승급
        </Button>
        <Button password onClick={onInitPassword}>
          비번 초기화
        </Button>
      </Container>
      <RemoveModal visible={modal} onCancel={onCancel} onConfirm={onConfirm} />
    </>
  );
};

export default ReadButton;
