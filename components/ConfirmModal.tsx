import React, { MouseEvent, useRef } from 'react';
import styled from 'styled-components';
import Portal from './Portal';

type Props = {
  onClose: () => void;
  onConfirm: () => void;
};

const ConfirmModal = ({ onConfirm, onClose }: Props) => {
  const portalRef = useRef<HTMLDivElement>(null);
  const handleModalClose = (e: MouseEvent) => {
    if (portalRef.current === e.target) {
      onClose();
    }
  };

  return (
    <Portal>
      <Container ref={portalRef} onClick={handleModalClose}>
        <Content>
          저는 모달입니다
          <div>
            <button type='button' onClick={onConfirm}>
              확인
            </button>
            <button type='button' onClick={onClose}>
              취소
            </button>
          </div>
        </Content>
      </Container>
    </Portal>
  );
};

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #00000099;
`;

const Content = styled.div`
  width: 500px;
  height: 400px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.color.primary.white};
  background-color: ${({ theme }) => theme.color.primary.black};
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.color.third.black};
  gap: 50px;
`;

export default ConfirmModal;
