import React, { useReducer } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { toast } from 'react-toastify';
import { LOGIN } from '../../libs/graphql/auth';
import AuthForm from '../../components/auth/AuthForm';

type StateProps = {
  username: string;
  password: string;
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

function LoginContainer() {
  const [state, dispatch] = useReducer(reducer, {
    username: '',
    password: '',
  });
  const { username, password } = state;
  const [Login, { client }] = useMutation(LOGIN);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(e.target);
  };

  const onSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();

    if ([username, password].includes('')) {
      toast.error('빈 칸 없이 입력해주세요!');
      return;
    }

    try {
      const response = await Login({
        variables: { username, password },
      });

      if (response.data.Login.error) {
        toast.error(response.data.Login.error);
      } else {
        if (!response || !response.data) return;

        const token = response.data.Login.token;

        localStorage.setItem('paysys_token', token);

        await client.clearStore();

        document.location.href = '/soldier';
      }
    } catch (err) {
      toast.error(err);
    }
  };

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

export default LoginContainer;
