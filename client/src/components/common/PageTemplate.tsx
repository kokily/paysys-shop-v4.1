import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import styled from 'styled-components';
import Header from './Header';
import BottomMenu from './BottomMenu';
import { media } from '../../libs/styles';
import { ME } from '../../libs/graphql/auth';
import { toast } from 'react-toastify';

// Styles
const Main = styled.main`
  margin: 6rem 5rem 0rem 5rem;
  ${media.medium} {
    margin-left: 1rem;
    margin-right: 1rem;
  }
`;

interface Props {
  children: React.ReactNode;
}

const PageTemplate: React.FC<Props> = ({ children }) => {
  const { data, loading } = useQuery<{ Me: { me: MeType | null } }>(ME);

  const onLogout = async () => {
    try {
      localStorage.removeItem('paysys_token');
      document.location.href = '/';
    } catch (err) {
      toast.error(err);
    }
  };

  if (loading) return null;

  return (
    <>
      {!loading && data?.Me.me && (
        <>
          <Header user={data.Me.me} onLogout={onLogout} />
          <Main>{children}</Main>
          <BottomMenu />
        </>
      )}
    </>
  );
};

export default PageTemplate;
