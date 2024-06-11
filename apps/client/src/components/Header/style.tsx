import styled from '@emotion/styled';
import '../../styles/globalStyle.css';

export const Container = styled.header<{ type: number; path: string | null }>`
  display: flex;
  position: fixed;
  width: 100%;
  padding: 1.5rem 0;
  justify-content: space-around;
  align-items: flex-end;
  background: ${({ type, path }) =>
    path !== null ? 'black' : type > window.innerHeight ? 'black' : null};
`;

export const NavWrapper = styled.div`
  display: flex;
  width: 50rem;
  justify-content: space-between;
`;

export const Nav = styled.nav<{ type: string; path: string | null }>`
  color: ${({ type, path }) =>
    type === 'logo' ? '#fff' : path === type ? '#FF952B' : '#8c8c8c'};
  font-family: 'ImFellGreatPrimer';
  font-size: 1.5rem;
  font-style: normal;
  line-height: normal;
`;
