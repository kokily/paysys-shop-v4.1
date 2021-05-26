import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

// Styles
const Container = styled.div`
  width: 350px;
  margin: 50px auto;
`;

const Tab = styled.div`
  width: 350px;
  height: 20px;
  background: ${oc.gray[8]};
  border-radius: 50px;
`;

const ReceiptBlock = styled.div`
  background: ${oc.gray[3]};
  padding-top: 20px;
  width: 300px;
  height: 300px;
  margin: -10px auto;
  border-radius: 5px 5px 50px 50px;
  -moz-box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
`;

const Paper = styled.div`
  width: 96%;
  border-top: 1px dashed #ccc;
  margin: 0 auto;

  .layout {
    display: flex;
    flex-direction: column;
    color: ${oc.gray[6]};
    font-size: 1.2rem;
    font-weight: bold;

    h4 {
      margin: 10px;
      color: black;
    }

    .total {
      border-top: 1px dashed #ccc;
      border-bottom: 1px dashed #ccc;
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
    }
  }
`;

const Sign = styled.div`
  border-top: 1px dashed #ccc;
  margin-top: 0.5rem;

  .copyright {
    margin-top: 0.5rem;
  }
`;

const Barcode = styled.div`
  height: 10px;
  width: 0;
  box-shadow: 1px 0 0 1px #343434, 5px 0 0 1px #343434, 10px 0 0 1px #343434,
    11px 0 0 1px #343434, 15px 0 0 1px #343434, 18px 0 0 1px #343434,
    22px 0 0 1px #343434, 23px 0 0 1px #343434, 26px 0 0 1px #343434,
    30px 0 0 1px #343434, 35px 0 0 1px #343434, 37px 0 0 1px #343434,
    41px 0 0 1px #343434, 44px 0 0 1px #343434, 47px 0 0 1px #343434,
    51px 0 0 1px #343434, 56px 0 0 1px #343434, 59px 0 0 1px #343434,
    64px 0 0 1px #343434, 68px 0 0 1px #343434, 72px 0 0 1px #343434,
    74px 0 0 1px #343434, 77px 0 0 1px #343434, 81px 0 0 1px #343434;
  display: inline-block;
  margin-right: 85px;
  margin-top: 0.8rem;
`;

interface Props {
  wedding: WeddingType;
}

const Receipt: React.FC<Props> = ({ wedding }) => {
  return (
    <Container>
      {wedding && (
        <>
          <Tab />

          <ReceiptBlock>
            <Paper>
              <div className="layout">
                <h4 style={{ color: oc.gray[6] }}>
                  웨딩 총 비용:{' '}
                  {(
                    wedding.sum_wedding +
                    wedding.sum_meal +
                    wedding.sum_present
                  )
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  원
                </h4>
                <h4 className="total" style={{ color: oc.indigo[8] }}>
                  결제비용 총액:{' '}
                  {(
                    wedding.sum_wedding +
                    wedding.sum_meal +
                    wedding.sum_present -
                    wedding.reserve_pay
                  )
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  원
                </h4>
                <h4>
                  신랑 총 결제비용:{' '}
                  {(
                    wedding.husband_wedding +
                    (function () {
                      if (wedding.meal === 'privacy') {
                        return wedding.husband_meal;
                      } else if (wedding.meal === 'husband') {
                        return wedding.sum_meal;
                      } else if (wedding.meal === 'bride') {
                        return 0;
                      } else {
                        return wedding.sum_meal / 2;
                      }
                    })() +
                    (function () {
                      if (wedding.present === 'privacy') {
                        return wedding.husband_present;
                      } else if (wedding.present === 'husband') {
                        return wedding.sum_present;
                      } else if (wedding.present === 'bride') {
                        return 0;
                      } else {
                        return wedding.sum_present / 2;
                      }
                    })() -
                    wedding.husband_reserve
                  )
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  원
                </h4>
                <h4>
                  신부 총 결제비용:{' '}
                  {(
                    wedding.bride_wedding +
                    (function () {
                      if (wedding.meal === 'privacy') {
                        return wedding.bride_meal;
                      } else if (wedding.meal === 'husband') {
                        return 0;
                      } else if (wedding.meal === 'bride') {
                        return wedding.sum_meal;
                      } else {
                        return wedding.sum_meal / 2;
                      }
                    })() +
                    (function () {
                      if (wedding.present === 'privacy') {
                        return wedding.bride_present;
                      } else if (wedding.present === 'husband') {
                        return 0;
                      } else if (wedding.present === 'bride') {
                        return wedding.sum_present;
                      } else {
                        return wedding.sum_present / 2;
                      }
                    })() -
                    wedding.bride_reserve
                  )
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  원
                </h4>
              </div>

              <Sign>
                <Barcode />
                <br />
                <div className="copyright">이용해 주셔서 감사합니다!</div>
              </Sign>
            </Paper>
          </ReceiptBlock>
        </>
      )}
    </Container>
  );
};

export default Receipt;
