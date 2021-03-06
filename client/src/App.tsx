import { RecoilRoot } from 'recoil';
import { Switch, Route, Redirect } from 'react-router-dom';
import loadable from '@loadable/component';
import { useQuery } from '@apollo/react-hooks';
import isLogged from './libs/store/isLogged';
import { ME } from './libs/graphql/auth';
import Loading from './components/common/Loading';
import GlobalStyle from './libs/styles';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Logout Routes Loadable
const LoginPage = loadable(() => import('./pages/auth/LoginPage'));
const RegisterPage = loadable(() => import('./pages/auth/RegisterPage'));

// Login Routes Loadable
const SoldierPage = loadable(() => import('./pages/home/SoldierPage'));
const ReservePage = loadable(() => import('./pages/home/ReservePage'));
const GeneralPage = loadable(() => import('./pages/home/GeneralPage'));
const ListMenuPage = loadable(() => import('./pages/home/ListMenuPage'));
const DetailMenuPage = loadable(() => import('./pages/home/DetailMenuPage'));
const CartPage = loadable(() => import('./pages/cart/CartPage'));
const ListFrontsPage = loadable(() => import('./pages/front/ListFrontsPage'));
const ReadFrontPage = loadable(() => import('./pages/front/ReadFrontPage'));
const ListItemsPage = loadable(() => import('./pages/items/ListItemsPage'));
const ReadItemPage = loadable(() => import('./pages/items/ReadItemPage'));
const AddItemPage = loadable(() => import('./pages/items/AddItemPage'));
const UpdateItemPage = loadable(() => import('./pages/items/UpdateItemPage'));
const ListUsersPage = loadable(() => import('./pages/users/ListUsersPage'));
const ReadUserPage = loadable(() => import('./pages/users/ReadUserPage'));
const PasswordPage = loadable(() => import('./pages/auth/PasswordPage'));
const ListWeddingsPage = loadable(
  () => import('./pages/weddings/ListWeddingsPage')
);
const ExpensiveWeddingPage = loadable(
  () => import('./pages/weddings/ExpensiveWeddingPage')
);
const ReadWeddingPage = loadable(
  () => import('./pages/weddings/ReadWeddingPage')
);
const UpdateWeddingPage = loadable(
  () => import('./pages/weddings/UpdateWeddingPage')
);

// Separation according to account authentication
const LoginRoutes = ({ user }: { user: MeType | null }) => {
  if (!user) {
    localStorage.removeItem('paysys_token');
    document.location.href = '/';
  }

  return (
    <>
      {user && (
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/soldier" />} />
          <Route exact path="/soldier" component={SoldierPage} />
          <Route exact path="/reserve" component={ReservePage} />
          <Route exact path="/general" component={GeneralPage} />
          <Route exact path="/menu" component={ListMenuPage} />
          <Route path="/menu/:menuId" component={DetailMenuPage} />
          <Route exact path="/cart" component={CartPage} />
          <Route exact path="/fronts" component={ListFrontsPage} />
          <Route path="/front/:frontId" component={ReadFrontPage} />

          {user && user.admin && (
            <>
              <Route exact path="/items" component={ListItemsPage} />
              <Route exact path="/item/:itemId" component={ReadItemPage} />
              <Route exact path="/add" component={AddItemPage} />
              <Route
                exact
                path="/item/update/:itemId"
                component={UpdateItemPage}
              />
              <Route exact path="/users" component={ListUsersPage} />
              <Route path="/user/:userId" component={ReadUserPage} />
              <Route exact path="/password" component={PasswordPage} />
              <Route exact path="/weddings" component={ListWeddingsPage} />
              <Route exact path="/expense" component={ExpensiveWeddingPage} />
              <Route
                exact
                path="/wedding/:weddingId"
                component={ReadWeddingPage}
              />
              <Route
                path="/wedding/update/:weddingId"
                component={UpdateWeddingPage}
              />
            </>
          )}
          <Redirect from={'*'} to={'/soldier'} />
        </Switch>
      )}
    </>
  );
};

const LogoutRoutes = () => (
  <Switch>
    <Route exact path="/" component={LoginPage} />
    <Route exact path="/register" component={RegisterPage} />
    <Redirect from={'*'} to={'/'} />
  </Switch>
);

function App() {
  const { data, loading } = useQuery<{ Me: { me: MeType } }>(ME);

  if (loading) return <Loading />;

  return (
    <>
      <RecoilRoot>
        <GlobalStyle />
        {isLogged() ? (
          <LoginRoutes user={data?.Me.me || null} />
        ) : (
          <LogoutRoutes />
        )}
        <ToastContainer position="top-center" draggable={false} />
      </RecoilRoot>
    </>
  );
}

export default App;
