import styled from 'styled-components';
import Card from './Card';

// Styles
const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

interface Props {
  onLink: (url: string) => void;
}

const Welcome: React.FC<Props> = ({ onLink }) => {
  return (
    <Container>
      <Card title="행사 전표 시스템" num={1} url="/login" onLink={onLink} />
      <Card title="휴업 현황 시스템" num={2} url="/closed" onLink={onLink} />
    </Container>
  );
};

export default Welcome;
