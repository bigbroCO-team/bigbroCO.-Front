import { ShareIcon } from 'client/assets';
import * as S from './style';

interface Props {
  productName: string;
  productPercent: number;
  usuallyPrice: number;
  isSale: boolean;
}

const ProductDetailInfo: React.FC<Props> = ({
  productName,
  productPercent,
  usuallyPrice,
  isSale,
}) => {
  const salePrice = isSale
    ? (usuallyPrice * (1 - productPercent / 100)).toLocaleString()
    : usuallyPrice.toLocaleString();

  return (
    <S.Wrapper>
      <S.ProductInfoBox>
        <S.ProductName>{productName}</S.ProductName>
        <S.ProductPrice>
          <S.ProductDetailPrice>
            {isSale ? (
              <>
                <S.ActualPriceBox>
                  <S.ProductPercent>{productPercent}%</S.ProductPercent>
                  <S.ActualPriceText>{salePrice}원</S.ActualPriceText>
                </S.ActualPriceBox>
                <S.UsuallyPrice>{usuallyPrice.toLocaleString()}</S.UsuallyPrice>
              </>
            ) : (
              <S.ActualPriceBox>
                <S.ActualPriceText>{salePrice}원</S.ActualPriceText>
              </S.ActualPriceBox>
            )}
          </S.ProductDetailPrice>

          <S.ShareButton>
            <S.SVGBox>
              <ShareIcon />
            </S.SVGBox>
          </S.ShareButton>
        </S.ProductPrice>
      </S.ProductInfoBox>
    </S.Wrapper>
  );
};

export default ProductDetailInfo;
