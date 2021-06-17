import styled, { css } from 'styled-components';
import oc from 'open-color';
import { shadow } from '../../../libs/styles';

// Styles
const Container = styled.div<MenuColor>`
  ${(props) =>
    props.soldier &&
    css`
      background: ${oc.cyan[7]};
    `}
  ${(props) =>
    props.reserve &&
    css`
      background: ${oc.lime[7]};
    `}
  ${(props) =>
    props.general &&
    css`
      background: ${oc.orange[6]};
    `}
  color: white;
  ${shadow(1)};
  font-size: 1.215rem;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 100%;
  height: 55px;
  cursor: pointer;
  -webkit-filter: brightness(0.9);
  filter: brightness(0.9);
  &:hover {
    -webkit-filter: brightness(1);
    filter: brightness(1);
  }
  &:active {
    transform: translateY(3px);
  }
`;

interface MenuColor {
  soldier?: boolean;
  reserve?: boolean;
  general?: boolean;
}

interface Props extends MenuColor {
  divide: string;
  onMenu: (e: React.MouseEvent) => void;
}

const Menu: React.FC<Props> = ({
  divide,
  onMenu,
  soldier,
  reserve,
  general,
}) => {
  return (
    <Container
      onClick={onMenu}
      soldier={soldier && true}
      reserve={reserve && true}
      general={general && true}
    >
      {divide}
    </Container>
  );
};

export default Menu;
