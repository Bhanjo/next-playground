import Router from 'next/router';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';

const Main = () => {
  const handleRoute = () => {
    Router.push('/search-user');
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <h1>
          PlayGround <br />
          Next.js and TypeScript
        </h1>
        <ButtonList>
          <UserFindBtn onClick={handleRoute}>깃허브 유저 검색</UserFindBtn>
        </ButtonList>
      </Container>
    </ThemeProvider>
  );
};

const Container = styled.div`
  background-color: ${({ theme }) => theme.color.second.black};
  color: ${({ theme }) => theme.color.primary.white};
  padding: 50px 0;
  transition: 0.3s ease-out;
  h1 {
    text-align: center;
    font-weight: bold;
    font-size: 18px;
  }
`;

const ButtonList = styled.div`
  width: 250px;
  margin: 25px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const UserFindBtn = styled.button`
  transition: 0.3s ease-out;
  background-color: transparent;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.color.second.white};
  font-size: 20px;
  color: ${({ theme }) => theme.color.primary.white};
  padding: 12px 10px;
  cursor: pointer;
  :hover {
    background-color: ${({ theme }) => theme.color.third.black};
  }
`;

export default Main;
