import AuthTemplate from '../../components/auth/common/AuthTemplate';
import Register from '../../components/auth/Register';

function RegisterPage() {
  return (
    <AuthTemplate mode="register">
      <Register />
    </AuthTemplate>
  );
}

export default RegisterPage;
