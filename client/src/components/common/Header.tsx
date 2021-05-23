import React, { useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import oc from 'open-color';
import DropMenu from './DropMenu';
import Menu from './Menu';
import useToggle from '../../libs/hooks/useToggle';
import { shadow, media } from '../../libs/styles';

// Styles
const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 100%;
  top: 0px;
  ${shadow(1)};
  z-index: 20;
  .layout {
    background: white;
    display: flex;
    justify-content: center;
    height: auto;
    .header-contents {
      width: 1200px;
      height: 55px;
      display: flex;
      flex-direction: row;
      align-items: center;
      position: relative;
      padding-left: 1rem;
      padding-right: 1rem;
      ${media.large} {
        width: 992px;
      }
      ${media.medium} {
        width: 100%;
      }
    }
  }
`;

const Logo = styled(Link)`
  font-size: 1.4rem;
  letter-spacing: 2px;
  color: ${oc.teal[7]};
  font-family: 'Rajdhani';
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    text-shadow: 0.5px 0.5px;
  }
`;

const Spacer = styled.div`
  flex-grow: 1;
`;

interface Props {
  user: MeType;
  onLogout: () => void;
}

function Header({ user, onLogout }: Props) {
  const [menu, toggleMenu] = useToggle(false);
  const ref = useRef<HTMLDivElement>(null);

  const onOutsideClick = useCallback(
    (e: React.MouseEvent) => {
      if (!ref.current) return;
      if (ref.current.contains(e.target as any)) return;

      toggleMenu();
    },
    [toggleMenu]
  );

  return (
    <Container>
      <div className="layout">
        <div className="header-contents">
          <Logo to="/soldier">행사전표시스템</Logo>

          <Spacer />

          <>
            <div ref={ref}>
              <Menu onClick={toggleMenu} />
            </div>
            <DropMenu
              user={user}
              onClose={onOutsideClick}
              onLogout={onLogout}
              visible={menu}
            />
          </>
        </div>
      </div>
    </Container>
  );
}

export default Header;
