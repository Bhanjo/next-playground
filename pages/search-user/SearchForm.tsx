import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';
import { useState } from 'react';
import useUserFind from '../../hooks/useUserFind';
import UserInfoBox from './UserInfoBox';

export interface IProps {
  userInfo: {
    login: string;
    id: Number;
    avatar_url: string;
    html_url: string;
    followers: Number;
    following: Number;
    public_repos: Number;
    company: string;
    created_at: string;
    updated_at: string;
  };
}

const SearchForm = () => {
  const [form, setForm] = useState({
    userName: '',
  });
  const [userInfos, setUserInfos] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (form: { userName: string }) => {
    if (!form.userName) alert('유저를 입력해주세요!');
    setUserInfos(form.userName);
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(form);
    setForm({
      userName: '',
    });
  };

  // git user fetch
  const gitUserFindUrl = `${process.env.NEXT_PUBLIC_GIIUSER_URL}/${userInfos}`;
  const { userInfo, error } = useUserFind(gitUserFindUrl);

  return (
    <ThemeProvider theme={theme}>
      <FormContainer onSubmit={handleSubmit}>
        <input name='userName' value={form.userName} onChange={onChange} />
        <button type='submit'>검색</button>
      </FormContainer>
      <UserInfoBox {...userInfo} />
    </ThemeProvider>
  );
};

const FormContainer = styled.form`
  display: flex;
  width: 370px;
  height: 40px;
  background-color: ${({ theme }) => theme.color.primary.white};
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.color.second.white};
  margin: 30px auto;
  justify-content: space-between;
  button {
    width: 20%;
    background-color: ${({ theme }) => theme.color.third.black};
    border-radius: 0 4px 4px 0;
    color: ${({ theme }) => theme.color.primary.white};
    font-weight: bold;
    cursor: pointer;
    :hover {
      background-color: ${({ theme }) => theme.color.second.black};
    }
  }
  input {
    width: 100%;
  }
`;

export default SearchForm;
