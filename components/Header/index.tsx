import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';

const Header = () => {
  return (
    <ThemeProvider theme={theme}>
      <HeadWrapper>
        <p>PlayGround</p>
      </HeadWrapper>
    </ThemeProvider>
  );
};

const HeadWrapper = styled.div`
  display: flex;
  height: 50px;
  background-color: ${({ theme }) => theme.color.third.black};
  color: ${({ theme }) => theme.color.primary.white};
`;

export default Header;
