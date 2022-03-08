import styled from 'styled-components';
import { useState } from 'react';

const SearchForm = () => {
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
    <FormContainer onSubmit={handleSubmit}>
      <input name='userName' value={form.userName} onChange={onChange} />
      <button type='submit'>검색</button>
    </FormContainer>
  );
};

const FormContainer = styled.form`
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

export default SearchForm;
