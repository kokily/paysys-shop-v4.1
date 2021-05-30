import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { READ_CLOSED, REMOVE_CLOSED } from '../../libs/graphql/closeds';
import { toast } from 'react-toastify';
import Loading from '../../components/common/Loading';
import ReadClosed from '../../components/closed/ReadClosed';

function ReadSeparateContainer() {
  const history = useHistory();
  const { closedId }: { closedId: string } = useParams();
  const { data, loading, error } = useQuery<{
    ReadClosed: { closed: ClosedType; closed_users: ClosedUserType[] };
  }>(READ_CLOSED, {
    variables: { id: closedId },
  });
  const [RemoveClosed, { client }] = useMutation(REMOVE_CLOSED);

  const onRemoveClosed = async (e: React.MouseEvent) => {
    e.preventDefault();

    if (window.prompt('비밀번호는??') !== '0711') {
      toast.error('누구냐 넌!!!');
      return;
    }

    try {
      const response = await RemoveClosed({
        variables: { id: closedId },
      });

      if (!response || !response.data) return;

      await client.clearStore();

      toast.success('삭제 완료');
      history.push('/separate/closeds');
    } catch (err) {
      toast.error(err);
    }
  };

  if (error) return null;
  if (loading) return <Loading />;

  return (
    <ReadClosed
      closed={data?.ReadClosed.closed || null}
      closed_users={data?.ReadClosed.closed_users || []}
      onRemoveClosed={onRemoveClosed}
    />
  );
}

export default ReadSeparateContainer;
