import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import 'react-datepicker/dist/react-datepicker.css';

// Styles
const Container = styled.div``;

const Content = styled.div``;

const ButtonBox = styled.div``;

const Button = styled.button<{
  menu?: boolean;
  remove?: boolean;
  patch?: boolean;
}>``;

interface Props extends WeddingType {
  
}