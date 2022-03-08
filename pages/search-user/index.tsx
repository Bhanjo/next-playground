import type { NextPage } from 'next';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';

import SearchForm from './SearchForm';

const SearchUser: NextPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <h1>GitHub User find</h1>
        <SearchForm />
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
export default SearchUser;
