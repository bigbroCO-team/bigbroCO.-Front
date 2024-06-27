import { useRouter, useSelectedLayoutSegment } from 'next/navigation';
import * as S from './style';
import { useState } from 'react';
import { BIGBROCOMPANYLogo } from 'shared/assets';

const Header = () => {
  const router = useRouter();
  const segment = useSelectedLayoutSegment();
  const navigator = (props: string) => {
    router.push(props);
  };
  const [scrollValue, setScrollValue] = useState(0);
  window.addEventListener('scroll', () => {
    setScrollValue(window.scrollY);
  });
  const clientNavigator = ['CBWAS', 'S.C.B', 'BIGBRO', 'GONGNEWGI', 'SCULFEE'];

  return (
    <S.Container type={scrollValue} path={segment}>
      <S.LogoWapper href='/'>
        <BIGBROCOMPANYLogo />
      </S.LogoWapper>
      <S.NavWrapper>
        {clientNavigator.map((client, idx) => (
          <S.Nav
            key={idx}
            type={client}
            path={segment}
            onClick={() => navigator(`/${client}`)}
          >
            {client}
          </S.Nav>
        ))}
      </S.NavWrapper>
      <S.Nav type={'Login'} path={segment} onClick={() => navigator(`/login`)}>
        Login
      </S.Nav>
    </S.Container>
  );
};

export default Header;
