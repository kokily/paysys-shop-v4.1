import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { toast } from 'react-toastify';
import { ADD_CART } from '../../../libs/graphql/cart';
import { READ_ITEM } from '../../../libs/graphql/items';

function useDetailMenu() {
  const history = useHistory();
  const { menuId }: { menuId: string } = useParams();
  const { data, loading, error } = useQuery<{
    ReadItem: { item: ItemType; ok: boolean };
  }>(READ_ITEM, {
    variables: { id: menuId },
  });
  const [AddCart, { client }] = useMutation(ADD_CART);
  const [price, setPrice] = useState<number>(0);
  const [count, setCount] = useState<string>('');

  const onChangeCount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCount(e.target.value);
  };

  const onChangePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(parseInt(e.target.value));
  };

  const onBack = () => {
    history.goBack();
  };

  const onSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();

    if (parseInt(count) < 1 || price < 1) {
      toast.warning('단가 또는 수량을 입력하세요.');
      return;
    }

    try {
      const response = await AddCart({
        variables: {
          item_id: menuId,
          price,
          count: parseInt(count),
        },
      });

      if (!response || !response.data) return;

      await client?.clearStore();

      toast.success('카트 추가');
      history.goBack();
    } catch (err) {
      toast.error(err);
    }
  };

  const onKeyPress = (
    e: React.KeyboardEvent<HTMLInputElement> & React.MouseEvent
  ) => {
    if (e.key === 'Enter') {
      onSubmit(e);
    }
  };

  useEffect(() => {
    if (data?.ReadItem?.ok) {
      if (data.ReadItem.item.price !== 0) {
        setPrice(data.ReadItem.item.price);
      }
    }
  }, [data]);

  return {
    menu: data?.ReadItem.item || null,
    price,
    count,
    onChangeCount,
    onChangePrice,
    onKeyPress,
    onBack,
    onSubmit,
    loading,
    error,
  };
}

export default useDetailMenu;
