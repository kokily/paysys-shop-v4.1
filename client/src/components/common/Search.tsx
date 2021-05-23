import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

// Styles
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
  div {
    width: 320px;
    padding: 5px;
    background: #444;
    background: rgba(103, 153, 255, 0.12);
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    -moz-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.4) inset,
      0 1px 0 rgba(255, 255, 255, 0.2);
    -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.4) inset,
      0 1px 0 rgba(255, 255, 255, 0.2);
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.4) inset,
      0 1px 0 rgba(255, 255, 255, 0.2);
    input {
      width: 250px;
      height: 40px;
      padding: 10px 5px;
      float: left;
      font-size: 1rem;
      border: 0;
      background: ${oc.cyan[4]};
      color: white;
      -moz-border-radius: 3px 0 0 3px;
      -webkit-border-radius: 3px 0 0 3px;
      border-radius: 3px 0 0 3px;
      &::placeholder {
        color: white;
      }
      &:focus {
        color: ${oc.violet[9]};
        outline: 0;
        background: #fff;
        -moz-box-shadow: 0 0 2px rgba(0, 0, 0, 0.8) inset;
        -webkit-box-shadow: 0 0 2px rgba(0, 0, 0, 0.8) inset;
        box-shadow: 0 0 2px rgba(0, 0, 0, 0.8) inset;
      }
    }
    button {
      overflow: visible;
      position: relative;
      float: right;
      border: 0;
      padding: 0;
      cursor: pointer;
      width: 60px;
      height: 40px;
      color: #fff;
      font-size: 1rem;
      background: ${oc.cyan[7]};
      -webkit-border-radius: 0 3px 3px 0;
      -moz-border-radius: 0 3px 3px 0;
      border-radius: 0 3px 3px 0;
      text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.3);
      &:-moz-focus-inner {
        border: 0;
        padding: 0;
      }
      &:hover {
        background: ${oc.cyan[5]};
        &:before {
          border-right-color: ${oc.cyan[5]};
        }
      }
      &:active,
      &:focus {
        background: ${oc.cyan[8]};
        transform: translateX(-4px);
        &:before {
          border-right-color: ${oc.cyan[8]};
        }
      }
      &:before {
        content: '';
        position: absolute;
        border-width: 8px 8px 8px 0;
        border-style: solid solid solid none;
        border-color: transparent ${oc.cyan[7]} transparent;
        top: 12px;
        left: -6px;
      }
    }
  }
`;

interface Props {
  mode: string;
  search: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: (e: React.MouseEvent) => void;
  onKeyPress: (
    e: React.KeyboardEvent<HTMLInputElement> & React.MouseEvent
  ) => void;
}

const Search: React.FC<Props> = ({
  mode,
  search,
  onChange,
  onSearch,
  onKeyPress,
}) => {
  return (
    <Container>
      <div>
        <input
          type="text"
          name="search"
          value={search}
          onChange={onChange}
          onKeyPress={onKeyPress}
          placeholder={`${mode}`}
        />
        <button onClick={onSearch}>검색</button>
      </div>
    </Container>
  );
};

export default Search;
