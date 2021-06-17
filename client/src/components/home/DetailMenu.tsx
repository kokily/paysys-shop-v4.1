import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { shadow } from '../../libs/styles';
import Button from '../../components/common/Button';
import DetailTable from './common/DetailTable';
import useDetailMenu from './hooks/useDetailMenu';
import DetailInputLabel from './common/DetailInputLabel';

// Styles
const Container = styled.div`
  position: absolute;
  width: 320px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
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
  .contents {
    background: white;
    padding: 1.5rem;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    input {
      outline: none;
      padding: 0.5rem;
      margin-left: 1rem;
      border-radius: 4px;
    }
  }
  .total {
    text-align: right;
    color: red;
    margin-bottom: 0;
    padding-bottom: 0.5rem;
    h3 {
      margin-bottom: 0;
      padding-bottom: 0;
    }
  }
`;

const Logo = styled.div`
  background: ${oc.red[5]};
  height: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.7rem;
  font-weight: 800;
  letter-spacing: 2px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    color: ${oc.red[1]};
  }
`;

const ButtonWrapper = styled.div`
  margin-top: 1rem;
  margin-left: auto;
  margin-right: auto;
`;

function DetailMenu() {
  const {
    menu,
    price,
    count,
    onChangeCount,
    onChangePrice,
    onKeyPress,
    onBack,
    onSubmit,
    loading,
    error,
  } = useDetailMenu();

  if (loading) return null;
  if (error) return null;

  return (
    <>
      {menu && (
        <Container>
          <Logo>
            {menu.divide} | {menu.native}
          </Logo>

          <div className="contents">
            <DetailTable
              menu={menu}
              price={price}
              onChangePrice={onChangePrice}
            />

            <hr />

            <DetailInputLabel
              menu={menu}
              price={price}
              count={count}
              onChangeCount={onChangeCount}
              onKeyPress={onKeyPress}
            />

            <ButtonWrapper>
              <Button
                submit="전표전송"
                cancel="취소하기"
                onSubmit={onSubmit}
                onCancel={onBack}
              />
            </ButtonWrapper>
          </div>
        </Container>
      )}
    </>
  );
}

export default DetailMenu;
