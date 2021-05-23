import AuthTemplate from '../../components/auth/AuthTemplate';
import LoginContainer from '../../containers/auth/LoginContainer';

function LoginPage() {
  return (
    <AuthTemplate mode="login">
      <LoginContainer />
    </AuthTemplate>
  );
}

export default LoginPage;
