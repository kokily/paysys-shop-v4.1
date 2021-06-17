import styled, { css } from 'styled-components';
import oc from 'open-color';
import { shadow } from '../../../libs/styles';

const Button = styled.button<{ submit?: boolean; remove?: boolean }>`
  margin-top: 1rem;
  margin-right: 1rem;
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
    props.submit &&
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
  &:active {
    transform: translateY(3px);
  }
  & + & {
    margin-right: 0.6rem;
  }
`;

interface Props {
  onSubmit: (e: React.MouseEvent) => void;
  onRemoveClick: () => void;
}

const CartButton: React.FC<Props> = ({ onSubmit, onRemoveClick }) => {
  return (
    <>
      <Button submit={true} onClick={onSubmit}>
        전송하기
      </Button>
      <Button remove={true} onClick={onRemoveClick}>
        전체 삭제
      </Button>
    </>
  );
};

export default CartButton;
