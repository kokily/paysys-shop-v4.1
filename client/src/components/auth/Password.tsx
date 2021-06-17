import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { shadow } from '../../libs/styles';
import Button from '../../components/common/Button';
import usePassword from './hooks/usePassword';

// Styles
const Container = styled.div`
  position: absolute;
  width: 320px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  ${shadow(1)};
  animation: 0.3s ease-out 0s 1 fadeIn;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const LogoBox = styled.div`
  background: ${oc.violet[5]};
  color: white;
  height: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 0.2rem;
  font-size: 1.212rem;
  font-weight: 800;
  letter-spacing: 2px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  cursor: pointer;
  &:hover {
    color: ${oc.violet[1]};
  }
`;

const ContentBox = styled.div`
  background: white;
  padding: 1.215rem;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  tr {
    &:hover {
      background: rgba(165, 102, 255, 0.2);
    }
  }
  th,
  td {
    border-radius: 8px;
    padding-top: 0.25rem;
    padding-bottom: 0.2rem;
    width: 160px;
    text-align: center;
  }
  th {
    background: ${oc.indigo[4]};
    color: white;
    &.orange {
      background: ${oc.orange[4]};
      padding-top: 0;
      padding-bottom: 0;
    }
    &.cyan {
      background: ${oc.cyan[4]};
      padding-top: 0;
      padding-bottom: 0;
    }
  }
`;

const Input = styled.input`
  width: 100%;
  outline: none;
  padding: 0.5rem;
  border-radius: 4px;
`;

function Password() {
  const { password, onChange, onSubmit, onKeyPress, onCancel } = usePassword();

  return (
    <Container>
      <LogoBox>
        <h2 className="title">비밀번호 변경</h2>
      </LogoBox>

      <ContentBox>
        <table>
          <tbody>
            <tr>
              <th>비밀번호</th>
              <td>
                <Input
                  type="password"
                  name="password"
                  value={password}
                  onChange={onChange}
                  onKeyPress={onKeyPress}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </ContentBox>

      <Button
        submit={'확인'}
        cancel={'취소'}
        onSubmit={onSubmit}
        onCancel={onCancel}
      />
    </Container>
  );
}

export default Password;
