import { IProps } from './SearchForm';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';

const UserInfoBox = (userInfo: IProps['userInfo']) => {
  return (
    <Container theme={theme}>
      {userInfo.id ? (
        <User>
          <img src={userInfo.avatar_url} />
          <TextBox>
            <p>유저 이름: {userInfo.login}</p>
            <a href={userInfo.html_url} target='_blank'>
              깃허브
            </a>
            <p>회사: {userInfo.company}</p>
            <p>팔로워: {userInfo.followers}</p>
            <p>팔로잉: {userInfo.following}</p>
            <p>총 레포지트리: {userInfo.public_repos}</p>
            <p>가입일자: {userInfo.created_at}</p>
            <p>최근 활동: {userInfo.updated_at}</p>
          </TextBox>
        </User>
      ) : (
        <p>유저를 찾을 수 없습니다</p>
      )}
    </Container>
  );
};

const Container = styled(ThemeProvider)`
  width: 80%;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.color.second.black};
  border-radius: 9px;
  padding: 15px 30px;
`;

const User = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 150px;
    border-radius: 100%;
    border: 1px solid ${({ theme }) => theme.color.second.white};
  }
`;

const TextBox = styled.div`
  text-align: left;
  margin-left: 30px;
  p {
    margin: 15px 0;
  }
  a {
    text-decoration: underline;
    :hover {
      color: blue;
    }
  }
`;

export default UserInfoBox;
