import useAuth from './hooks/useAuth';

function Register() {
  const { onBack } = useAuth();

  return (
    <div>
      <h4>미구현</h4>
      <button onClick={onBack}>뒤로가기</button>
    </div>
  );
}

export default Register;
