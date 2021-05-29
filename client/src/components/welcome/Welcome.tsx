import styled from 'styled-components';
import oc from 'open-color';

// Styles
const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

interface Props {
  onLink: (url: string) => void;
}

const Welcome: React.FC<Props> = ({ onLink }) => {
  return (
    <Container>
      <Button onClick={() => onLink('/login')}>행사 전표 시스템</Button>
      <Button onClick={() => onLink('/closed')}>휴업 현황 시스템</Button>
    </Container>
  );
};

export default Welcome;
