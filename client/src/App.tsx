import { Switch, Route, Redirect } from 'react-router-dom';
import loadable from '@loadable/component';
import { useQuery } from '@apollo/react-hooks';
import isLogged from './libs/store/isLogged';
import { ME } from './libs/graphql/auth';
import Loading from './components/common/Loading';
import GlobalStyle from './libs/styles';
import { ToastContainer } from 'react-toastify';

// Logout Routes Loadable
const WelcomePage = loadable(() => import('./pages/WelcomePage'));
const ListClosedsPage = loadable(
  () => import('./pages/closed/ListClosedsPage')
);
const ReadClosedsPage = loadable(() => import('./pages/closed/ReadClosedPage'));
const AddClosedsPage = loadable(() => import('./pages/closed/AddClosedPage'));
const LoginPage = loadable(() => import('./pages/auth/LoginPage'));

// Login Routes Loadable
const SoldierPage = loadable(() => import('./pages/home/SoldierPage'));
const ReservePage = loadable(() => import('./pages/home/ReservePage'));
const GeneralPage = loadable(() => import('./pages/home/GeneralPage'));

// Separation according to account authentication
const LoginRoutes = ({ user }: { user: MeType | null }) => (
  <Switch>
    <Route exact path="/" render={() => <Redirect to="/soldier" />} />
    <Route exact path="/soldier" component={SoldierPage} />
    <Route exact path="/reserve" component={ReservePage} />
    <Route exact path="/general" component={GeneralPage} />

    <Redirect from={'*'} to={'/soldier'} />
  </Switch>
);
const LogoutRoutes = () => (
  <Switch>
    <Route exact path="/" component={WelcomePage} />
    <Route exact path="/closed" component={ListClosedsPage} />
    <Route path="/closed/read/:id" component={ReadClosedsPage} />
    <Route exact path="/closed/add" component={AddClosedsPage} />
    <Route exact path="/login" component={LoginPage} />
    <Redirect from={'*'} to={'/'} />
  </Switch>
);

function App() {
  const { data, loading } = useQuery<{ Me: { me: MeType } }>(ME);

  if (loading) return <Loading />;

  return (
    <>
      <GlobalStyle />
      {isLogged() ? (
        <LoginRoutes user={data?.Me.me || null} />
      ) : (
        <LogoutRoutes />
      )}
      <ToastContainer position="top-center" draggable={false} />
    </>
  );
}

export default App;
