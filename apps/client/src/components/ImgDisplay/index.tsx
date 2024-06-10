import { useState } from 'react';
import * as S from './style';

interface Props {
  ImgList: string[];
}

const ImgDisplay: React.FC<Props> = ({ ImgList }) => {
  const [mainImg, setMainImg] = useState<string>(ImgList[0]);

  return (
    <S.Container>
      <S.MainImgContainer>
        <S.MainImg src={mainImg} alt='상품 이미지' />
      </S.MainImgContainer>
      <S.SubImgContainer></S.SubImgContainer>
    </S.Container>
  );
};

export default ImgDisplay;
