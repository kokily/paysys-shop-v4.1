import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { useTransition, animated } from 'react-spring';
import OutsideClickHandler from 'react-outside-click-handler';
import DropMenuItem from './DropMenuItem';
import { shadow } from '../../libs/styles';

// Styles
const Container = styled(animated.div)`
  position: absolute;
  top: 100%;
  margin-top: 0.22rem;
  right: 0;
  ${shadow(5)};
  > .menu-wrapper {
    position: relative;
    z-index: 5;
    width: 12rem;
    background: white;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
  }
`;

const Split = styled.div`
  margin-left: 1rem;
  margin-right: 1rem;
  height: 2px;
  background: linear-gradient(to right, ${oc.teal[6]}, ${oc.cyan[5]});
`;

interface Props {
  user: MeType;
  onClose: (e: React.MouseEvent) => void;
  onLogout: () => void;
  visible: boolean;
}

const DropMenu: React.FC<Props> = ({ user, onClose, onLogout, visible }) => {
  const transition = useTransition(visible, null, {
    from: {
      opacity: 0,
      transform: 'scale(0.5)',
    },
    enter: {
      opacity: 1,
      transform: 'scale(1)',
    },
    leave: {
      opacity: 0,
      transform: 'scale(0.5)',
    },
    config: {
      tension: 400,
      friction: 26,
    },
  });

  return (
    <>
      {transition.map(({ item, key, props }) =>
        item ? (
          <OutsideClickHandler key={key} onOutsideClick={onClose}>
            <Container onClick={onClose} style={props}>
              <div className="menu-wrapper">
                <DropMenuItem to={'/password'}>비밀번호 변경</DropMenuItem>
                {user.admin && (
                  <>
                    <Split />

                    <DropMenuItem to={'/weddings'}>웨딩빌지</DropMenuItem>
                    <DropMenuItem to={'/items'}>품목리스트</DropMenuItem>

                    <Split />

                    <DropMenuItem to={'/users'}>사용자 목록</DropMenuItem>
                  </>
                )}

                <Split />

                <DropMenuItem to={'/separate/closeds'}>휴업현황</DropMenuItem>

                <Split />

                <DropMenuItem onClick={onLogout}>로그아웃</DropMenuItem>
              </div>
            </Container>
          </OutsideClickHandler>
        ) : null
      )}
    </>
  );
};

export default DropMenu;
