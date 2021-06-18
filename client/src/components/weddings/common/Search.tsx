import { Link } from 'react-router-dom';
import styled from 'styled-components';
import oc from 'open-color';

const SearchBox = styled.div`
  width: 300px;
  margin: auto;
  margin-top: 1rem;
  margin-bottom: 1rem;
  text-align: center;
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
  a {
    width: 95px;
    float: 1;
    margin: auto;
    margin-top: 1rem;
    margin-bottom: 1rem;
    padding: 0.5rem 0.25rem 0.4rem 0.25rem;
    border: 2px solid ${oc.red[8]};
    border-radius: 8px;
    text-align: center;
    color: ${oc.red[8]};
    font-weight: 700;
    transition: 0.3s;
    &:hover {
      color: white;
      border: 2px solid ${oc.orange[8]};
      background: ${oc.red[8]};
    }
  }
  button {
    width: 95px;
    float: 1;
    font-size: 0.9rem;
    margin: auto;
    margin-top: 1rem;
    margin-bottom: 1rem;
    margin-right: 1rem;
    padding: 0.5rem 0.25rem 0.4rem 0.25rem;
    border: 2px solid ${oc.teal[8]};
    border-radius: 8px;
    text-align: center;
    color: ${oc.teal[8]};
    font-weight: 700;
    transition: 0.3s;
    cursor: pointer;
    &:hover {
      color: white;
      border: 2px solid ${oc.cyan[8]};
      background: ${oc.teal[8]};
    }
  }
`;

interface SearchProps {
  search: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: (e: React.MouseEvent) => void;
  onKeyPress: (
    e: React.KeyboardEvent<HTMLInputElement> & React.MouseEvent
  ) => void;
}

const Search: React.FC<SearchProps> = ({
  search,
  onChange,
  onSearch,
  onKeyPress,
}) => (
  <SearchBox>
    <input
      type="text"
      name="search"
      value={search}
      onChange={onChange}
      onKeyPress={onKeyPress}
    />
    <button onClick={onSearch}>검 색</button>
    <Link to={'/expense'}>웨딩 추가</Link>
  </SearchBox>
);

export default Search;
