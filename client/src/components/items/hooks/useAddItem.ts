import { useReducer } from 'react';
import { useHistory } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_ITEM } from '../../../libs/graphql/items';
import { toast } from 'react-toastify';

const reducer = (state: ItemState, action: ActionProps) => {
  return {
    ...state,
    [action.name]: action.value,
  };
};

function useAddItem() {
  const history = useHistory();
  const [state, dispatch] = useReducer(reducer, {
    name: '',
    divide: '식사(뷔페)',
    native: '현역',
    unit: '',
    price: '',
  });
  const { name, divide, native, unit, price } = state;
  const [AddItem, { client }] = useMutation(ADD_ITEM);

  const onChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    dispatch(e.target);
  };

  const onSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();

    try {
      const response = await AddItem({
        variables: { name, divide, native, unit, price: parseInt(price) },
      });

      if (!response || !response.data) return;

      await client?.clearStore();

      toast.success('품목 추가 완료');
      history.goBack();
    } catch (err) {
      toast.error(err);
    }
  };

  const onBack = () => {
    history.goBack();
  };

  const onKeyPress = (
    e: React.KeyboardEvent<HTMLInputElement> & React.MouseEvent
  ) => {
    if (e.key === 'Enter') {
      onSubmit(e);
    }
  };

  return {
    name,
    divide,
    native,
    unit,
    price,
    onChange,
    onSubmit,
    onBack,
    onKeyPress,
  };
}

export default useAddItem;
