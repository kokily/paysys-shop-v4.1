import React from 'react';

interface Props {
  menu: MenuType;
  price: number;
  count: string;
  onChangeCount: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyPress: (
    e: React.KeyboardEvent<HTMLInputElement> & React.MouseEvent
  ) => void;
}

const DetailInputLabel: React.FC<Props> = ({
  menu,
  price,
  count,
  onChangeCount,
  onKeyPress,
}) => {
  return (
    <>
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
    </>
  );
};

export default DetailInputLabel;
