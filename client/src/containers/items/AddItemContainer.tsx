import React, { useReducer } from 'react';
import { useHistory } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';
import { toast } from 'react-toastify';
import { ADD_ITEM } from '../../libs/graphql/items';
import AddItem from '../../components/items/AddItem';

interface StateProps {
  name: string;
  divide: string;
  native: string;
  unit: string;
  price: string;
}

interface ActionProps {
  name: string;
  value: string;
}

const reducer = (state: StateProps, action: ActionProps) => {
  return {
    ...state,
    [action.name]: action.value,
  };
};

function AddItemContainer() {
  const history = useHistory();
  const [state, dispatch] = useReducer(reducer, {
    name: '',
    divide: '식사(뷔페)',
    native: '현역',
    unit: '',
    price: '',
  });
  const { name, divide, native, unit, price } = state;
  const [AddItemResolver, { client }] = useMutation(ADD_ITEM);

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
      const response = await AddItemResolver({
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

  return (
    <AddItem
      name={name}
      divide={divide}
      native={native}
      unit={unit}
      price={price}
      onChange={onChange}
      onSubmit={onSubmit}
      onBack={onBack}
      onKeyPress={onKeyPress}
    />
  );
}

export default AddItemContainer;
