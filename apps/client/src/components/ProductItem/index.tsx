'use client';

import * as S from './style';

interface Props {
  productImgUrl: string;
  discountPercent: string;
  price: string;
  productName: string;
}

const ProductItem: React.FC<Props> = ({
  productImgUrl,
  discountPercent,
  price,
  productName,
}) => {
  return (
    <S.Wrapper>
      <S.ImgContainer src={productImgUrl} />
      <S.PriceInform>
        <S.DiscountText>{discountPercent}%</S.DiscountText>
        <S.PriceText>{Number(price).toLocaleString()}</S.PriceText>
      </S.PriceInform>
      <S.ClothesText>{productName}</S.ClothesText>
    </S.Wrapper>
  );
};

export default ProductItem;
