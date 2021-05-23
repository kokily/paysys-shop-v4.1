import React from 'react';
import styled from 'styled-components';
import { media } from '../../../libs/styles';
import Header from './Header';

// Styles
const Container = styled.div`
  margin-top: 6rem;
  padding: 1rem;
  width: 1200px;
  margin-left: auto;
  margin-right: auto;
  ${media.medium} {
    width: 992px;
  }
  ${media.large} {
    width: 100%;
  }
  ${media.small} {
    width: 360px;
  }
`;

interface Props {}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <Container>{children}</Container>
    </>
  );
};

export default Layout;
