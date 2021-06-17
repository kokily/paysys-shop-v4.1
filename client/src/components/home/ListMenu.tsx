import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import MenuItem from './common/MenuItem';
import useListMenu from './hooks/useListMenu';

// Styles
const Container = styled.div`
  margin-bottom: 6rem;
  .title {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const MenuBox = styled.div`
  margin: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
`;

const Button = styled.button`
  background: white;
  width: 120px;
  padding: 0.4rem 0.25rem;
  color: ${oc.indigo[8]};
  border: 2px solid ${oc.indigo[8]};
  border-radius: 8px;
  cursor: pointer;
  font-weight: 700;
  transition: 0.3s;
  &:hover {
    color: white;
    border: 2px outset white;
    background: ${oc.indigo[8]};
  }
  &:active {
    transform: translateY(3px);
  }
`;

function ListMenu() {
  const { menu, onBack, onMenu, onLoading, loading, error } = useListMenu();

  if (loading) return null;
  if (error) return null;

  return (
    <Container onMouseUp={onLoading}>
      {menu && (
        <>
          <div className="title">
            <h2>{menu[0] && menu[0].divide}</h2>
            <Button onClick={onBack}>뒤 로</Button>
          </div>

          <MenuBox>
            {menu.map((item) => (
              <MenuItem key={item.id} item={item} onMenu={onMenu} />
            ))}
          </MenuBox>
        </>
      )}
    </Container>
  );
}

export default ListMenu;
