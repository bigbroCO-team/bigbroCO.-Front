import styled from '@emotion/styled';

export const Container = styled.header<{ type: number; path: string | null }>`
  display: flex;
  position: fixed;
  top: 0;
  width: 100%;
  padding: 1.5rem 0;
  justify-content: space-around;
  align-items: flex-end;
  background: ${({ theme, type, path }) => {
    if (typeof window !== 'undefined') {
      return path !== null && type > window.innerHeight
        ? theme.color.black
        : null;
    }
    return null;
  }};
`;

export const NavWrapper = styled.div`
  display: flex;
  width: 50rem;
  justify-content: space-between;
`;

export const Nav = styled.nav<{ type: string; path: string | null }>`
  color: ${({ theme, type, path }) => {
    if (type === 'logo') {
      return theme.color.white;
    }
    return path === type ? theme.color.main[50] : theme.color.grey[500];
  }};
  font-family: 'ImFellGreatPrimer';
  ${({ theme }) => theme.typo.titleSmall};
`;
