import styled from 'styled-components';
import oc from 'open-color';

// Styles
const Container = styled.div`
  position: absolute;
  width: 320px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: 0.5s ease-out 0s 1 fadeIn;
`;

const Button = styled.button`
  background: white;
  width: 100%;
  padding: 0.4rem 0.25rem;
  margin-bottom: 1.2rem;
  color: ${oc.indigo[8]};
  border: 2px solid ${oc.indigo[8]};
  border-radius: 8px;
  cursor: pointer;
  font-size: 1.215rem;
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
