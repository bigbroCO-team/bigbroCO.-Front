import { useRouter, useSelectedLayoutSegment } from 'next/navigation';
import * as S from './style';
import { useState } from 'react';

export const Header = () => {
  const router = useRouter();
  const segment = useSelectedLayoutSegment();
  const navigator = (props:string) => {
    router.push(props);
  };
  const [scrollValue, setScrollValue] = useState(0);
  window.addEventListener('scroll', () => {
    setScrollValue(window.scrollY);
  });

  return (
    <>
      <S.Container type={scrollValue} path={segment}>
        <S.Nav type={'logo'} onClick={() => navigator('/')}>
          BIGBRO COMPANY
        </S.Nav>
        <S.NavWrapper>
          <S.Nav type={'nav'} onClick={() => navigator(`/CBWAS`)}>
            CBWAS
          </S.Nav>
          <S.Nav type={'nav'} onClick={() => navigator(`/S.C.B`)}>
            S.C.B
          </S.Nav>
          <S.Nav type={'nav'} onClick={() => navigator(`/BIGBRO`)}>
            BIGBRO
          </S.Nav>
          <S.Nav type={'nav'} onClick={() => navigator(`/GONGNEWGI`)}>
            GONGNEWGI
          </S.Nav>
          <S.Nav type={'nav'} onClick={() => navigator(`/SCULFEE`)}>
            SCULFEE
          </S.Nav>
        </S.NavWrapper>
        <S.Nav type={'nav'} onClick={() => navigator(`/login`)}>
          Login
        </S.Nav>
      </S.Container>
    </>
  );
};

export default Header;
