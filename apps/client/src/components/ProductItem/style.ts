import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
`;

export const ImgContainer = styled.div`
  width: 24.75rem;
  height: 24.75rem;
  background-color: black;
`;

export const PriceInform = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
`;

export const DiscountText = styled.p`
  ${({ theme }) => theme.typo.titleSmall};
  color: ${({ theme }) => theme.color.error};
`;

export const PriceText = styled.p`
  ${({ theme }) => theme.typo.titleSmall};
  color: ${({ theme }) => theme.color.white};
`;

export const ClothesText = styled.p`
  ${({ theme }) => theme.typo.bodyLarge};
  color: ${({ theme }) => theme.color.white};
`;
