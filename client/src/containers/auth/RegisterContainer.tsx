import React, { useReducer } from 'react';
import { useHistory } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { toast } from 'react-toastify';
import { REGISTER } from '../../libs/graphql/auth';
import AuthForm from '../../components/auth/AuthForm';

type StateProps = {
  username: string;
  password: string;
  passwordConfirm: string;
};

type ActionProps = {
  name: string;
  value: string;
};

const reducer = (state: StateProps, action: ActionProps) => {
  return {
    ...state,
    [action.name]: action.value,
  };
};

function RegisterContainer() {
  const history = useHistory();
  const [state, dispatch] = useReducer(reducer, {
    username: '',
    password: '',
    passwordConfirm: '',
  });
  const { username, password, passwordConfirm } = state;
  const [Register] = useMutation(REGISTER);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(e.target);
  };

  const onSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();

    if ([username, password, passwordConfirm].includes('')) {
      toast.error('빈 칸을 모두 채워주세요');
      return;
    }

    try {
      const response = await Register({ variables: { username, password } });

      if (!response || !response.data) return;

      toast.success('사원등록!');
      history.push('/');
    } catch (err) {
      toast.error(err);
    }
  };

  return (
    <AuthForm
      mode="register"
      username={username}
      password={password}
      passwordConfirm={passwordConfirm}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
}

export default RegisterContainer;
