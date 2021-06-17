import { useApolloClient, useMutation, useQuery } from '@apollo/react-hooks';
import { useHistory, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  INIT_PASSWORD,
  READ_USER,
  SET_ADMIN,
  SET_EMPLOYEE,
} from '../../../libs/graphql/users';

function useReadUser() {
  const client = useApolloClient();
  const history = useHistory();
  const { userId }: { userId: string } = useParams();
  const { data, loading, error } = useQuery<{ ReadUser: { user: UserType } }>(
    READ_USER,
    {
      variables: { id: userId },
    }
  );
  const [SetAdmin] = useMutation(SET_ADMIN);
  const [SetEmployee] = useMutation(SET_EMPLOYEE);
  const [InitPassword] = useMutation(INIT_PASSWORD);

  const onBack = () => {
    history.push('/users');
  };

  const onSetAdmin = async () => {
    try {
      const response = await SetAdmin({
        variables: { id: userId },
      });

      if (!response || !response.data) return;

      await client.clearStore();

      toast.success('관리자 권한 부여!');
      history.push('/users');
    } catch (err) {
      toast.error(err);
    }
  };

  const onSetEmployee = async () => {
    try {
      const response = await SetEmployee({
        variables: { id: userId },
      });

      if (!response || !response.data) return;

      await client.clearStore();

      toast.success('일반 권한 부여!');
      history.push('/users');
    } catch (err) {
      toast.error(err);
    }
  };

  const onInitPassword = async () => {
    try {
      const response = await InitPassword({
        variables: { id: userId },
      });

      if (!response || !response.data) return;

      await client.clearStore();

      toast.success('비밀번호가 초기화되었습니다.');
      history.push('/users');
    } catch (err) {
      toast.error(err);
    }
  };

  return {
    user: data?.ReadUser.user || null,
    onBack,
    onSetAdmin,
    onSetEmployee,
    onInitPassword,
    loading,
    error,
  };
}

export default useReadUser;
