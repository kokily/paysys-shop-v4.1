import { Switch, Route, Redirect } from 'react-router-dom';
import loadable from '@loadable/component';
import { useReactiveVar } from '@apollo/client';
import { useQuery } from '@apollo/react-hooks';
import isLogged from './libs/store/isLogged';
import { ME } from './libs/graphql/auth';

const WelcomePage = loadable(() => import('./pages/WelcomePage'), {
  fallback: <div>로딩 중</div>,
});

// Separation according to account authentication
const LoginRoutes = () => <Switch></Switch>;
const LogoutRoutes = () => (
  <Switch>
    <Route path="/" component={WelcomePage} />
  </Switch>
);

function App() {
  const isLoggedIn = useReactiveVar(isLogged);
  const { data, loading } = useQuery<{ Me: { me: MeType } }>(ME);

  if (loading) return <div>로딩 중</div>;

  return <>{isLoggedIn ? <LoginRoutes /> : <LogoutRoutes />}</>;
}

export default App;
