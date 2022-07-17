import Router from 'next/router';
import { useState } from 'react';
import styled from 'styled-components';
import ConfirmModal from '../components/ConfirmModal';

const Home = () => {
  const [isModalShow, setIsModalShow] = useState(false);
  const [isConfirm, setIsConfirm] = useState(false);

  const handleRoute = (path: string) => {
    Router.push(`/${path}`);
  };

  return (
    <Container>
      {isModalShow && (
        <ConfirmModal
          onClose={() => setIsModalShow(false)}
          onConfirm={() => setIsConfirm(true)}
        />
      )}
      <h1>
        PlayGround <br />
        Next.js and TypeScript <br />
        {isConfirm && '모달 확인을 눌렀습니다!'}
      </h1>
      <ButtonList>
        <CustomBtn onClick={() => handleRoute('search-user')}>
          깃허브 유저 검색
        </CustomBtn>
        <CustomBtn type='button' onClick={() => setIsModalShow(!isModalShow)}>
          모달 팝업
        </CustomBtn>
        <CustomBtn onClick={() => handleRoute('redux-test')}>
          리덕스 연습
        </CustomBtn>
      </ButtonList>
    </Container>
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
  gap: 20px;
`;

const CustomBtn = styled.button`
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

export default Home;
