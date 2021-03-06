import React from 'react';
import styled, { css } from 'styled-components';
import oc from 'open-color';
import { shadow } from '../../libs/styles';
import useAddItem from './hooks/useAddItem';

// Styles
const Container = styled.div`
  position: absolute;
  width: 320px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  ${shadow(1)};
  animation: 0.5s ease-out 0s 1 fadeIn;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  .logo {
    background: ${oc.cyan[5]};
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 2rem;
    font-weight: 800;
    letter-spacing: 5px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    cursor: pointer;
    &:hover {
      color: ${oc.cyan[2]};
    }
  }
  form {
    background: white;
    padding: 2rem;
    height: auto;
  }
`;

const InputGroup = styled.div`
  position: relative;
  width: 100%;
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

const Select = styled.select`
  background: ${oc.gray[0]};
  width: 100%;
  padding: 10px;
  padding-left: 0px;
  border: none;
  outline: none;
  font-size: 1rem;
  border-bottom: 1px solid ${oc.cyan[6]};
  margin-bottom: -1rem;
  cursor: pointer;
  &:focus {
    background: ${oc.indigo[6]};
    color: white;
  }
`;

const Button = styled.button<{ cyan?: boolean }>`
  background: ${oc.gray[6]};
  width: 100%;
  border: none;
  margin-top: 1rem;
  padding-top: 0.6rem;
  padding-bottom: 0.4rem;
  color: white;
  text-align: center;
  font-size: 1.25rem;
  font-weight: 600;
  cursor: pointer;
  user-select: none;
  transition: 0.2s all;
  ${shadow(1)};
  &:hover {
    background-color: ${oc.gray[5]};
    ${shadow(2)};
  }
  &:active {
    background-color: ${oc.gray[6]};
  }
  ${(props) =>
    props.cyan &&
    css`
      background: ${oc.cyan[6]};
      &:hover {
        background-color: ${oc.cyan[5]};
        ${shadow(2)};
      }
      &:active {
        background-color: ${oc.cyan[6]};
      }
    `}
`;

function AddItem() {
  const {
    name,
    divide,
    native,
    unit,
    price,
    onChange,
    onSubmit,
    onBack,
    onKeyPress,
  } = useAddItem();

  return (
    <Container>
      <div className="logo">?????? ??????</div>

      <form>
        <InputGroup>
          <Input
            type="text"
            name="name"
            value={name}
            onChange={onChange}
            required
            autoFocus
          />
          <span className="bar" />
          <label>??? ???</label>
        </InputGroup>

        <InputGroup>
          <Select name="divide" value={divide} onChange={onChange}>
            <option value="??????(??????)">??????(??????)</option>
            <option value="??????(??????)">??????(??????)</option>
            <option value="??????(??????)">??????(??????)</option>
            <option value="??????(??????)">??????(??????)</option>
            <option value="??????(??????)">??????(??????)</option>
            <option value="??????(??????)">??????(??????)</option>
            <option value="?????????">?????????</option>
            <option value="????????????">????????????</option>
            <option value="???????????????/?????????">???????????????/?????????</option>
            <option value="??????/???">??????/???</option>
            <option value="?????????/?????????">?????????/?????????</option>
            <option value="??????">??????</option>
            <option value="????????????">????????????</option>
            <option value="?????????">?????????</option>
            <option value="?????????">?????????</option>
            <option value="????????????">????????????</option>
          </Select>
        </InputGroup>

        <InputGroup>
          <Select name="native" value={native} onChange={onChange}>
            <option value="??????">??????</option>
            <option value="?????????">?????????</option>
            <option value="??????">??????</option>
          </Select>
        </InputGroup>

        <InputGroup>
          <Input
            type="text"
            name="unit"
            value={unit}
            onChange={onChange}
            required
          />
          <span className="bar" />
          <label>??? ???</label>
        </InputGroup>

        <InputGroup>
          <Input
            type="text"
            name="price"
            value={price}
            onChange={onChange}
            onKeyPress={onKeyPress}
            required
          />
          <span className="bar" />
          <label>??? ???</label>
        </InputGroup>

        <Button cyan onClick={onSubmit}>
          ????????????
        </Button>
        <Button onClick={onBack}>????????????</Button>
      </form>
    </Container>
  );
}

export default AddItem;
