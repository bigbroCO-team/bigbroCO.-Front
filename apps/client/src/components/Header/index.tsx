import { useRouter, useSelectedLayoutSegment } from 'next/navigation';
import * as S from './style';
import { useState } from 'react';

export const Header = () => {
  const router = useRouter();
  const segment = useSelectedLayoutSegment();
  const navigator = (props: string) => {
    router.push(props);
  };
  const [scrollValue, setScrollValue] = useState(0);
  window.addEventListener('scroll', () => {
    setScrollValue(window.scrollY);
  });

  console.log(segment);

  return (
    <>
      <S.Container type={scrollValue} path={segment}>
        <S.Nav type={'logo'} path={segment} onClick={() => navigator('/')}>
          BIGBRO COMPANY
        </S.Nav>
        <S.NavWrapper>
          <S.Nav type={'CBWAS'} path={segment} onClick={() => navigator(`/CBWAS`)}>
            CBWAS
          </S.Nav>
          <S.Nav type={'S.C.B'} path={segment} onClick={() => navigator(`/S.C.B`)}>
            S.C.B
          </S.Nav>
          <S.Nav type={'BIGBRO'} path={segment} onClick={() => navigator(`/BIGBRO`)}>
            BIGBRO
          </S.Nav>
          <S.Nav type={'GONGNEWGI'} path={segment} onClick={() => navigator(`/GONGNEWGI`)}>
            GONGNEWGI
          </S.Nav>
          <S.Nav type={'SCULFEE'} path={segment} onClick={() => navigator(`/SCULFEE`)}>
            SCULFEE
          </S.Nav>
        </S.NavWrapper>
        <S.Nav type={'Login'} path={segment} onClick={() => navigator(`/login`)}>
          Login
        </S.Nav>
      </S.Container>
    </>
  );
};

export default Header;
