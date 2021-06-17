import AuthForm from './common/AuthForm';
import useAuth from './hooks/useAuth';

function Login() {
  const { username, password, onChange, onSubmit } = useAuth();

  return (
    <AuthForm
      mode="login"
      username={username}
      password={password}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
}

export default Login;
