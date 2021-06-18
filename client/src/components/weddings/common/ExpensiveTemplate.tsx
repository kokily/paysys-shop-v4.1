import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { shadow } from '../../../libs/styles';

// Styles
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 6rem;
  ${shadow(1)}
  animation: 0.2s ease-out 0s 1 fadeIn;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  .title {
    font-size: 1.512rem;
    color: ${oc.violet[7]};
  }
  .name {
    text-align: center;
    strong {
      color: ${oc.cyan[7]};
    }
  }
`;

const Content = styled.div`
  text-align: center;
  .name-pane {
    display: float;
    h3 {
      padding-top: 0.25rem;
      padding-bottom: 0.25rem;
    }
  }
  table {
    font-size: 0.95rem;
  }
  tr {
    &:hover {
      background: rgba(165, 102, 255, 0.2);
    }
  }
  th,
  td {
    border: 1px solid ${oc.gray[4]};
    border-radius: 8px;
    padding-top: 0.15rem;
    padding-bottom: 0.15rem;
  }
  th {
    background: ${oc.violet[4]};
    color: white;
    width: 130px;
    &.basic {
      width: 93.3px;
    }
    &.orange {
      background: ${oc.orange[4]};
    }
    &.cyan {
      background: ${oc.cyan[4]};
    }
    &.red {
      background: ${oc.red[4]};
    }
  }
  td {
    width: 100px;
    font-size: 0.9rem;
    overflow: hidden;
    text-align: right;
    &.sub {
      color: ${oc.blue[9]};
      font-weight: bold;
    }
  }
  input:not(.name) {
    width: 100%;
    border: none;
    text-align: right;
  }
  input.name {
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
    border: 1px solid ${oc.pink[6]};
    border-radius: 4px;
  }
  select {
    padding-left: 1rem;
    padding-right: 1rem;
    border: none;
  }
  .none {
    display: none;
  }
  .date {
    margin-top: 1rem;
    margin-bottom: 1rem;
    input {
      width: 95px;
      height: 25px;
      border: 2px solid ${oc.cyan[7]};
      background: ${oc.cyan[5]};
      color: white;
      border-radius: 3px;
      text-align: center;
      margin-right: 10px;
    }
    select {
      width: 95px;
      height: 25px;
      border: 2px solid ${oc.teal[7]};
      background: ${oc.teal[5]};
      color: white;
      border-radius: 3px;
      text-align: center;
      margin-right: 10px;
    }
  }
`;

interface Props {
  edit?: boolean;
}

const ExpensiveTemplate: React.FC<Props> = ({ children, edit }) => {
  return (
    <Container>
      <h2 className="title">웨딩 정산 {edit ? '수정' : '작성'}</h2>

      <Content>{children}</Content>
    </Container>
  );
};

export default ExpensiveTemplate;
