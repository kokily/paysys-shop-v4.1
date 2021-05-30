import { useHistory } from 'react-router-dom';
import ListCloseds from '../../components/closed/ListCloseds';
import Loading from '../../components/common/Loading';
import useListSeparates from './hooks/useListSeparates';

function ListSeparatesContainer() {
  const history = useHistory();
  const { data, loading, error } = useListSeparates();

  const onRead = (id: string) => {
    history.push(`/separate/closed/${id}`);
  };

  if (error) return null;
  if (loading) return <Loading />;

  return (
    <ListCloseds closeds={data?.ListCloseds.closeds || []} onRead={onRead} />
  );
}

export default ListSeparatesContainer;
