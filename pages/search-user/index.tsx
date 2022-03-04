import type { NextPage } from 'next';
import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';

const SearchUser: NextPage = () => {
  const [form, setForm] = useState({
    userName: '',
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (form: { userName: string }) => {
    if (!form.userName) alert('유저를 입력해주세요!');
    console.log(form);
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(form);
    setForm({
      userName: '',
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <h1>GitHub User find</h1>
        <SearchForm onSubmit={handleSubmit}>
          <input name='userName' value={form.userName} onChange={onChange} />
          <button type='submit'>검색</button>
        </SearchForm>
      </Container>
    </ThemeProvider>
  );
};

const Container = styled.div`
  color: ${({ theme }) => theme.color.primary.white};
  text-align: center;
  padding: 50px 0;
  h1 {
    font-size: 35px;
    font-weight: bold;
  }
`;

const SearchForm = styled.form`
  width: 370px;
  height: 40px;
  background-color: ${({ theme }) => theme.color.primary.white};
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.color.second.white};
  margin: 30px auto;
  display: flex;
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
export default SearchUser;
