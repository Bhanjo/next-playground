import Router from 'next/router';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';

const Header = () => {
  const routeHome = () => {
    Router.push('/');
  };

  return (
    <ThemeProvider theme={theme}>
      <HeadWrapper>
        <button onClick={routeHome}>PlayGround</button>
      </HeadWrapper>
    </ThemeProvider>
  );
};

const HeadWrapper = styled.div`
  display: flex;
  padding: 0 2%;
  align-items: center;
  height: 50px;
  background-color: ${({ theme }) => theme.color.third.black};
  button {
    height: 30px;
    background-color: transparent;
    border-radius: 4px;
    color: ${({ theme }) => theme.color.primary.white};
    cursor: pointer;
    :hover {
      background-color: ${({ theme }) => theme.color.primary.black};
    }
  }
`;

export default Header;
