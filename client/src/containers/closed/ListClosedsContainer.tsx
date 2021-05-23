import { useHistory } from 'react-router-dom';
import useListCloseds from './hooks/useListCloseds';
import ListCloseds from '../../components/closed/ListCloseds';
import Loading from '../../components/common/Loading';

function ListClosedsContainer() {
  const history = useHistory();
  const { data, loading, error } = useListCloseds();

  const onRead = (id: string) => {
    history.push(`/closed/read/${id}`);
  };

  if (error) return null;
  if (loading) return <Loading />;

  return (
    <ListCloseds closeds={data?.ListCloseds.closeds || []} onRead={onRead} />
  );
}

export default ListClosedsContainer;
