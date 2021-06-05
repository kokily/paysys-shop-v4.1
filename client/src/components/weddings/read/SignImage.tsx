import React from 'react';
import styled from 'styled-components';

// Styles
const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2.5rem;
`;

const SignBox = styled.div`
  width: 160px;
  height: 60px;

  img {
    width: 100%;
    height: 100%;
  }
`;

interface Props {
  husband?: string;
  bride?: string;
}

const SignImage: React.FC<Props> = ({ husband, bride }) => {
  return (
    <Container>
      <SignBox>
        <label>신랑님 서명</label>
        {husband && <img src={husband} alt="" />}
      </SignBox>
      <SignBox>
        <label>신부님 서명</label>
        {bride && <img src={bride} alt="" />}
      </SignBox>
    </Container>
  );
};

export default SignImage;
