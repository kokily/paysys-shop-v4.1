import { useEffect, useReducer, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useApolloClient, useMutation, useQuery } from '@apollo/react-hooks';
import { toast } from 'react-toastify';
import { ADD_BILL } from '../../../libs/graphql/bills';
import { REMOVE_CART, REMOVE_ONE, VIEW_CART } from '../../../libs/graphql/cart';

const reducer = (state: CartState, action: ActionProps) => {
  return {
    ...state,
    [action.name]: action.value,
  };
};

function useCart() {
  const client = useApolloClient();
  const history = useHistory();
  const { data, loading, error, refetch } = useQuery<{
    ViewCart: {
      ok: boolean;
      error: string | null;
      cart: CartType | null;
    };
  }>(VIEW_CART, {
    fetchPolicy: 'no-cache',
  });
  const [RemoveCart] = useMutation(REMOVE_CART);
  const [RemoveOne] = useMutation(REMOVE_ONE);
  const [AddBill] = useMutation(ADD_BILL);
  const [state, dispatch] = useReducer(reducer, {
    title: '',
    hall: '',
    etc: ' ',
  });
  const { title, hall, etc } = state;
  const [totalAmount, setTotalAmount] = useState(0);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(e.target);
  };

  const onSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();

    if ([title, hall, etc].includes('')) {
      toast.error('빈 칸 없이 입력해주세요.');
      return;
    }

    try {
      const response = await AddBill({
        variables: { title, hall, etc },
      });

      if (!response || !response.data) return;

      await client.clearStore();
      toast.success('전표 전송 성공');

      await RemoveCart();
      history.push('/fronts');
    } catch (err) {
      toast.error(err);
    }
  };

  const onRemoveOne = async (id: string, name: string) => {
    if (window.confirm(`${name} 품목을 삭제합니다!!`)) {
      try {
        const response = await RemoveOne({
          variables: { item_id: id },
        });

        if (!response) return;

        await client.clearStore();
        toast.success('품목 삭제!');

        refetch();
        history.push('/cart');
      } catch (err) {
        toast.error(err);
      }
    } else {
      return;
    }
  };

  useEffect(() => {
    if (data?.ViewCart?.ok) {
      if (data.ViewCart.cart) {
        if (data.ViewCart.cart.items && data.ViewCart.cart.items.length !== 0) {
          let total = 0;
          let list = data.ViewCart.cart.items;

          if (list) {
            for (let key in list) {
              total += list[key].amount;
            }
          }

          setTotalAmount(total);
        }
      }
    }
  }, [data]);

  return {
    title,
    hall,
    etc,
    cart: data?.ViewCart.cart || null,
    onChange,
    totalAmount,
    onRemoveOne,
    onSubmit,
    loading,
    error,
  };
}

export default useCart;
