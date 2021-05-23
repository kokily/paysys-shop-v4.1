import { Switch, Route, Redirect } from 'react-router-dom';
import loadable from '@loadable/component';
import { useReactiveVar } from '@apollo/client';
import { useQuery } from '@apollo/react-hooks';
import isLogged from './libs/store/isLogged';
import { ME } from './libs/graphql/auth';
import ListClosedsPage from './pages/closed/ListClosedsPage';
import ReadClosedsPage from './pages/closed/ReadClosedPage';
import AddClosedsPage from './pages/closed/AddClosedPage';
import Loading from './components/common/Loading';
import GlobalStyle from './libs/styles';
import { ToastContainer } from 'react-toastify';

const WelcomePage = loadable(() => import('./pages/WelcomePage'), {
  fallback: <div>로딩 중</div>,
});

// Separation according to account authentication
const LoginRoutes = () => <Switch></Switch>;
const LogoutRoutes = () => (
  <Switch>
    <Route exact path="/" component={WelcomePage} />
    <Route exact path="/closed" component={ListClosedsPage} />
    <Route path="/closed/:id" component={ReadClosedsPage} />
    <Route exact path="/closed/add" component={AddClosedsPage} />
    <Redirect from={'*'} to={'/'} />
  </Switch>
);

function App() {
  const isLoggedIn = useReactiveVar(isLogged);
  const { data, loading } = useQuery<{ Me: { me: MeType } }>(ME);

  if (loading) return <Loading />;

  return (
    <>
      <GlobalStyle />
      {isLoggedIn ? <LoginRoutes /> : <LogoutRoutes />}
      <ToastContainer position="top-center" draggable={false} />
    </>
  );
}

export default App;
