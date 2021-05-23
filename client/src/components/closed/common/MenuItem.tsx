import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import oc from 'open-color';

// Styles
const ItemBox = styled.div<MenuItemProps>`
  padding: 0.75rem 1rem;
  font-weight: 500;
  line-height: 1.5;
  color: ${oc.gray[9]};
  cursor: pointer;
  transition: 0.2s all;
  &:hover {
    background: ${oc.teal[1]};
  }
`;

const LinkItem = styled(Link)`
  display: block;
  color: inherit;
`;

interface MenuItemProps {
  to?: string;
  red?: boolean;
  onClick?: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ children, to, onClick }) => {
  const jsx = <ItemBox onClick={onClick}>{children}</ItemBox>;

  return to ? <LinkItem to={to}>{jsx}</LinkItem> : jsx;
};

export default MenuItem;
