import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

type Props = {
  children: React.ReactNode;
};

const Portal = ({ children }: Props) => {
  const [isMounted, setIsMounted] = useState(false);

  // 랜더링 시 마운트 상태 변경
  useEffect(() => {
    setIsMounted(true);

    // 랜더링이 안됐으면(모달 닫힘) false로 후처리
    return () => setIsMounted(false);
  }, []);

  // 마운트가 됐다면 v16 부터 지원하는 createPortal로 포탈 생성
  // createPortal(랜더링할 컴포넌트, 랜더링 시킬 상위 DOM 엘레먼트)
  return isMounted
    ? // @ts-expect-error
      createPortal(children, document.querySelector('#portal') as HTMLElement)
    : null;
};

export default Portal;
