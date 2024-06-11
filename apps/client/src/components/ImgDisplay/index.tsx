import { useState } from 'react';
import * as S from './style';

interface Props {
  imgList: string[];
}

const ImgDisplay: React.FC<Props> = ({ imgList }) => {
  const [mainImg, setMainImg] = useState<string>(imgList[0]);

  return (
    <S.Container>
      <S.MainImg src={mainImg} />
      <S.SubImgContainer>
        {[...imgList].map((img) => (
          <S.SubImg
            key={img}
            src={img}
            isSelected={img === mainImg}
            onClick={() => setMainImg(img)}
          />
        ))}
      </S.SubImgContainer>
    </S.Container>
  );
};

export default ImgDisplay;
