import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { shadow } from '../../libs/styles';
import Button from '../../components/common/Button';

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
    tr {
      &:hover {
        background: rgba(0, 0, 0, 0.2);
      }
    }
    th,
    td {
      width: 160px;
      border-radius: 8px;
      padding-top: 0.25rem;
      padding-bottom: 0.25rem;
      text-align: center;
      input {
        width: 75%;
        height: 1.5rem;
        padding: 0.5rem;
        border-radius: 4px;
        outline: none;
      }
    }
    th {
      background: ${oc.indigo[4]};
      color: white;
    }
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

interface Props {
  menu: MenuType | null;
  price: number;
  count: string;
  onChangeCount: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangePrice: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyPress: (
    e: React.KeyboardEvent<HTMLInputElement> & React.MouseEvent
  ) => void;
  onBack: () => void;
  onSubmit: (e: React.MouseEvent) => void;
}

const DetailMenu: React.FC<Props> = ({
  menu,
  price,
  count,
  onChangeCount,
  onChangePrice,
  onKeyPress,
  onBack,
  onSubmit,
}) => {
  return (
    <>
      {menu && (
        <Container>
          <Logo>
            {menu.divide} | {menu.native}
          </Logo>

          <div className="contents">
            <table>
              <tbody>
                <tr>
                  <th>구 분</th>
                  <td>{menu.name}</td>
                </tr>
                <tr>
                  <th>단 가</th>
                  <td>
                    {menu.price === 0 ? (
                      <input
                        type="number"
                        name="price"
                        value={price}
                        onChange={onChangePrice}
                      />
                    ) : (
                      <>
                        {menu.price
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                        원
                      </>
                    )}
                  </td>
                </tr>
                <tr>
                  <th>단 위</th>
                  <td>{menu.unit}</td>
                </tr>
              </tbody>
            </table>

            <hr />

            <div className="number">
              <label htmlFor="count">수 량 : </label>
              <input
                type="text"
                name="count"
                value={count}
                onChange={onChangeCount}
                onKeyPress={onKeyPress}
                autoFocus
              />
            </div>

            <div className="total">
              <h3>
                합계 금액:{' '}
                {menu.price === 0 ? (
                  <>
                    {(price * parseInt(count))
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    원
                  </>
                ) : (
                  <>
                    {(menu.price * parseInt(count))
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    원
                  </>
                )}
              </h3>
            </div>

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
};

export default DetailMenu;
