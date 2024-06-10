import styled from '@emotion/styled';
import Image from 'next/image';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const MainImgContainer = styled.div`
  width: 10rem;
  height: 10rem;
`;

export const MainImg = styled(Image)`
  width: 10rem;
`;

export const SubImgContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
