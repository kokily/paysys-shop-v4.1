import styled from 'styled-components';
import oc from 'open-color';
import { media } from '../../libs/styles';
import RemoveModal from '../common/RemoveModal';
import useCart from './hooks/useCart';
import useModal from './hooks/useModal';
import CartTop from './common/CartTop';
import CartTotalAmount from './common/CartTotalAmount';
import CartButton from './common/CartButton';

// Styles
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  margin-bottom: 6rem;
  ${media.xsmall} {
    width: 100%;
    padding: 0.2rem;
  }
`;

const Form = styled.form`
  margin-top: 1rem;
  .center {
    width: 350px;
  }
  button {
    float: right;
  }
`;

const InputGroup = styled.div`
  position: relative;
  width: 100%;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  margin-bottom: 30px;
  label {
    position: absolute;
    color: ${oc.gray[9]};
    top: 12px;
    left: 0;
    transition: 0.2s ease all;
  }
  .bar {
    position: relative;
    display: block;
    width: 100%;
    &:before {
      content: '';
      position: absolute;
      left: 50%;
      right: 50%;
      bottom: 0;
      background: ${oc.cyan[8]};
      height: 3px;
      transition: left 0.2s ease-out, right 0.2s ease-out;
    }
  }
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid ${oc.cyan[6]};
  padding: 10px;
  display: block;
  width: 92%;
  &:focus {
    outline: none;
  }
  &:focus ~ label,
  &:valid ~ label {
    top: -10px;
    font-size: 14px;
    color: ${oc.teal[6]};
  }
  &:focus ~ .bar:before {
    left: 0;
    right: 0;
  }
`;

function Cart() {
  const {
    title,
    hall,
    etc,
    cart,
    onChange,
    totalAmount,
    onRemoveOne,
    onSubmit,
    loading,
    error,
  } = useCart();
  const { modal, onRemoveClick, onCancel, onConfirm } = useModal();

  if (loading) return null;
  if (error) return null;

  return (
    <Container>
      <CartTop cart={cart} onRemoveOne={onRemoveOne} />

      <CartTotalAmount totalAmount={totalAmount} />

      <Form>
        <div className="center">
          <InputGroup>
            <Input
              type="text"
              name="title"
              value={title}
              onChange={onChange}
              required
            />
            <span className="bar" />
            <label>
              행사명 <small>(필수)</small>
            </label>
          </InputGroup>
          <InputGroup>
            <Input
              type="text"
              name="hall"
              value={hall}
              onChange={onChange}
              required
            />
            <span className="bar" />
            <label>
              행사홀 <small>(필수)</small>
            </label>
          </InputGroup>
          <InputGroup>
            <Input
              type="text"
              name="etc"
              value={etc}
              onChange={onChange}
              required
            />
            <span className="bar" />
            <label>기타사항</label>
          </InputGroup>
        </div>
        <CartButton onSubmit={onSubmit} onRemoveClick={onRemoveClick} />
      </Form>

      <RemoveModal visible={modal} onConfirm={onConfirm} onCancel={onCancel} />
    </Container>
  );
}

export default Cart;
