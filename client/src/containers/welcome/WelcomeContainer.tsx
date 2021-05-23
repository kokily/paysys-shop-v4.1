import { useHistory } from 'react-router-dom';
import Welcome from '../../components/welcome/Welcome';

function WelcomeContainer() {
  const history = useHistory();

  const onLink = (url: string) => {
    history.push(`${url}`);
  };

  return <Welcome onLink={onLink} />;
}

export default WelcomeContainer;
