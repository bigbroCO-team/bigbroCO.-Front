import styled from '@emotion/styled';

export const Container = styled.div<{ state: boolean }>`
  display: flex;
  width: 37.5rem;
  height: 14.3125rem;
  padding: 1.5rem;
  background-color: black;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: ${({ theme }) => theme.color.white};
  border: ${({ state, theme }) =>
    state ? `0.0625rem solid ${theme.color.main[50]}` : null};
  gap: 0.75rem;

  div:nth-child(1) {
    ${({ theme }) => theme.typo.titleSmall};
  }
  div:nth-child(2) {
    ${({ theme }) => theme.typo.bodySmall};
  }
  div:nth-child(3) {
    ${({ theme }) => theme.typo.bodySmall};
  }
  div:nth-child(4) {
    ${({ theme }) => theme.typo.bodySmall};
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 34.375rem;
  justify-content: space-between;
`;

export const InfoButtonContainer = styled.div`
  display: flex;
`;

export const InfoButton = styled.button`
  display: flex;
  height: 3rem;
  color: ${({ theme }) => theme.color.grey[300]};
  ${({ theme }) => theme.typo.bodyMedium};
  padding: 0.75rem 2rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin-right: 1.5rem;
  border: 0.0625rem solid ${({ theme }) => theme.color.grey[300]};
`;

export const IsSelectButton = styled.button<{ state: boolean }>`
  display: flex;
  height: 3rem;
  color: ${({ state, theme }) =>
    state ? theme.color.black : theme.color.grey[600]};
  background-color: ${({ state, theme }) =>
    state ? theme.color.main[50] : theme.color.grey[300]};
  ${({ theme }) => theme.typo.bodyMedium};
  padding: 0.75rem 2rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  pointer-events: ${({ state }) => (state ? 'none' : null)};
`;
