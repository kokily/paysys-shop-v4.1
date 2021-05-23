import { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import qs from 'qs';
import { LIST_ITEMS } from '../../libs/graphql/items';
import ListMenu from '../../components/home/ListMenu';
import loadable from '@loadable/component';

const ListMenuPage = loadable(() => import('./../../pages/home/ListMenuPage'));

type QueryType = {
  native?: string;
  divide?: string;
};

function ListMenuContainer() {
  const history = useHistory();
  const location = useLocation();
  const [native, setNative] = useState<string>('');
  const [divide, setDivide] = useState<string>('');
  const { data, loading, error } = useQuery<{
    ListItems: { items: ItemType[] };
  }>(LIST_ITEMS, {
    variables: { native, divide },
  });

  const onBack = () => {
    history.goBack();
  };

  const onMenu = (id: string) => {
    history.push(`/menu/${id}`);
  };

  const onLoading = () => {
    ListMenuPage.preload();
  };

  useEffect(() => {
    const { native, divide }: QueryType = qs.parse(location.search, {
      ignoreQueryPrefix: true,
    });

    if (native) setNative(native);
    if (divide) setDivide(divide);
  }, [location.search]);

  if (loading) return null;
  if (error) return null;

  return (
    <ListMenu
      menu={data?.ListItems.items || []}
      onBack={onBack}
      onMenu={onMenu}
      onLoading={onLoading}
    />
  );
}

export default ListMenuContainer;
