import AuthTemplate from '../../components/auth/common/AuthTemplate';
import Login from '../../components/auth/Login';

function LoginPage() {
  return (
    <AuthTemplate mode="login">
      <Login />
    </AuthTemplate>
  );
}

export default LoginPage;
