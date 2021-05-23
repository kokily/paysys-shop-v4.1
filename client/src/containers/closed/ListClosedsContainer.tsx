import { useHistory } from 'react-router-dom';
import useListCloseds from './hooks/useListCloseds';
import Layout from '../../components/closed/common/Layout';
import ListCloseds from '../../components/closed/ListCloseds';
import Loading from '../../components/common/Loading';

function ListClosedsContainer() {
  const history = useHistory();
  const { data, loading, error, refetch } = useListCloseds();

  const onRead = (id: string) => {
    history.push(`/closed/${id}`);
  };

  if (error) return null;
  if (loading) return <Loading />;

  return (
    <ListCloseds closeds={data?.ListCloseds.closeds || []} onRead={onRead} />
  );
}

export default ListClosedsContainer;
