'use client';

import * as S from './style';

interface Props {
  productImg: string;
  discountPercent: string;
  price: string;
  productName: string;
}

const ProductItem: React.FC<Props> = ({
  productImg,
  discountPercent,
  price,
  productName,
}) => {
  return (
    <S.Wrapper>
      <S.ImgContainer>{productImg}</S.ImgContainer>
      <S.PriceInform>
        <S.DiscountText>{discountPercent}%</S.DiscountText>
        <S.PriceText>{Number(price).toLocaleString()}</S.PriceText>
      </S.PriceInform>
      <S.ClothesText>{productName}</S.ClothesText>
    </S.Wrapper>
  );
};

export default ProductItem;
