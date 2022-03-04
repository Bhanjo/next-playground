import styled from 'styled-components';

const HeadWrapper = styled.div`
  display: flex;
  height: 50px;
  background-color: #1f35ff;
`;

const Header = () => {
  return (
    <HeadWrapper>
      <p>PlayGround</p>
    </HeadWrapper>
  );
};

export default Header;
