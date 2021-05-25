import { useApolloClient, useMutation, useQuery } from '@apollo/react-hooks';
import { useHistory, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import ReadUser from '../../components/users/ReadUser';
import {
  INIT_PASSWORD,
  READ_USER,
  REMOVE_USER,
  SET_ADMIN,
  SET_EMPLOYEE,
} from '../../libs/graphql/users';

function ReadUserContainer() {
  const client = useApolloClient();
  const history = useHistory();
  const { userId }: { userId: string } = useParams();
  const { data, loading, error } = useQuery<{ ReadUser: { user: UserType } }>(
    READ_USER,
    {
      variables: { id: userId },
    }
  );
  const [RemoveUser] = useMutation(REMOVE_USER);
  const [SetAdmin] = useMutation(SET_ADMIN);
  const [SetEmployee] = useMutation(SET_EMPLOYEE);
  const [InitPassword] = useMutation(INIT_PASSWORD);

  const onBack = () => {
    history.push('/users');
  };

  const onRemoveUser = async () => {
    try {
      const response = await RemoveUser({
        variables: { id: userId },
      });

      if (!response) return;

      await client.clearStore();

      toast.success('사용자 삭제 완료');
      history.push('/users');
    } catch (err) {
      toast.error(err);
    }
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

  if (loading) return null;
  if (error) return null;

  return (
    <ReadUser
      user={data?.ReadUser.user || null}
      onBack={onBack}
      onRemoveUser={onRemoveUser}
      onSetAdmin={onSetAdmin}
      onSetEmployee={onSetEmployee}
      onInitPassword={onInitPassword}
    />
  );
}

export default ReadUserContainer;
