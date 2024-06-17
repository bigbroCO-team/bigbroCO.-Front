import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const Button = styled.button<{ isSelected: boolean }>`
  ${({ theme }) => theme.typo.bodyMedium};
  color: ${({ theme, isSelected }) =>
    isSelected ? theme.color.background : theme.color.grey[500]};
  background: ${({ theme, isSelected }) =>
    isSelected ? theme.color.main[50] : theme.color.background};
  border: 0.0625rem solid ${({ theme }) => theme.color.grey[500]};
  display: flex;
  padding: 0.75rem 2rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
`;
