import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

// Styles
const Container = styled.div`
  width: 100%;
  max-width: 430px;
  height: 270px;
  position: relative;
  z-index: 2;
  margin-bottom: 1rem;
  transition: all 0.2s;
  cursor: pointer;

  .content {
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 20px 60px 0 rgba(14, 42, 90, 0.55);
    transform: perspective(2000px) rotateY(0deg) rotateX(0deg) rotate(0deg);
    transform-style: preserve-3d;
    transition: all 0.8s cubic-bezier(0.71, 0.03, 0.56, 0.85);
    backface-visibility: hidden;
    height: 100%;
  }

  &:hover {
    .cover {
      &:after {
        background: rgba(6, 2, 29, 0.2);
      }
    }

    .name {
      color: ${oc.red[9]};
    }
  }
`;

const CardCover = styled.div`
  height: 100%;
  background-color: #1c1d27;
  position: absolute;
  height: 100%;
  background-color: #1c1d27;
  left: 0;
  top: 0;
  width: 100%;
  border-radius: 15px;
  overflow: hidden;

  &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(6, 2, 29, 0.45);
  }

  .bg {
    max-width: 100%;
    display: block;
    max-height: 100%;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

const CardContent = styled.div`
  font-family: 'Source Code Pro', monospace;
  padding: 25px 15px;
  position: relative;
  z-index: 4;
  height: 100%;
  text-shadow: 7px 6px 10px rgba(14, 42, 90, 0.8);
  user-select: none;
`;

const CardTop = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 40px;
  padding: 0 10px;

  .chip {
    width: 60px;
  }

  .type {
    height: 45px;
    position: relative;
    display: flex;
    justify-content: flex-end;
    max-width: 100px;
    margin-left: auto;
    width: 100%;
  }

  .img {
    max-width: 100%;
    object-fit: contain;
    max-height: 100%;
    object-position: top right;
  }
`;

const Number = styled.label`
  font-weight: 500;
  line-height: 1;
  color: #fff;
  font-size: 27px;
  margin-bottom: 35px;
  display: inline-block;
  padding: 10px 15px;
  cursor: pointer;

  .item {
    width: 16px;
    display: inline-block;
  }
`;

const CardBottom = styled.div`
  color: #fff;
  display: flex;
  align-items: flex-start;

  .info {
    color: #fff;
    width: 100%;
    max-width: calc(100% - 85px);
    padding: 10px 15px;
    font-weight: 500;
    display: block;
    cursor: pointer;

    .holder {
      opacity: 0.7;
      font-size: 13px;
      margin-bottom: 6px;
    }
    .name {
      font-size: 18px;
      line-height: 1;
      white-space: nowrap;
      max-width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      text-transform: uppercase;
    }
  }

  .date {
    flex-wrap: wrap;
    font-size: 18px;
    margin-left: auto;
    padding: 10px;
    display: inline-flex;
    width: 80px;
    white-space: nowrap;
    flex-shrink: 0;
    cursor: pointer;

    .title {
      opacity: 0.7;
      font-size: 13px;
      padding-bottom: 6px;
      width: 100%;
    }
    .item {
    }
  }
`;

const CardMiddle = () => (
  <Number>
    <div className="item">#</div>
    <div className="item">#</div>
    <div className="item">#</div>
    <div className="item">#</div>
  </Number>
);

interface Props {
  title: string;
  num: number;
  url: string;
  onLink: (url: string) => void;
}

const Card: React.FC<Props> = ({ title, num, url, onLink }) => {
  return (
    <Container onClick={() => onLink(url)}>
      <div className="content">
        <div className="item">
          <CardCover className="cover">
            <img src={`/card0${num}.jpeg`} className="bg" alt="" />
          </CardCover>

          <CardContent>
            <CardTop className="top">
              <img src="/chip.png" className="chip" alt="" />
              <div className="type">
                <img src="/visa.png" className="img" alt="" />
              </div>
            </CardTop>

            <CardMiddle />
            <CardMiddle />
            <CardMiddle />
            <CardMiddle />

            <CardBottom>
              <label className="info">
                <div className="holder">Card Holder</div>
                <div className="name">{title}</div>
              </label>

              <div className="date">
                <label className="title">Expires</label>
                <label className="item">MM</label>/
                <label className="item">YY</label>
              </div>
            </CardBottom>
          </CardContent>
        </div>
      </div>
    </Container>
  );
};

export default Card;
