import type { NextPage } from 'next';
import styled from 'styled-components';

import SearchForm from './SearchForm';

const SearchUser: NextPage = () => {
  return (
    <Container>
      <h1>GitHub User find</h1>
      <SearchForm />
    </Container>
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
export default SearchUser;
