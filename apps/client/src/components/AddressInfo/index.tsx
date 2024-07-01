import React, { useState } from 'react';
import * as S from './style';

interface Props {
  Id: number;
  AddressName: string;
  PhoneNumber: string;
  Address: string;
  Detail: string;
  IsSelected: boolean;
}

const AddressInfo: React.FC<Props> = ({
  Id,
  AddressName,
  PhoneNumber,
  Address,
  Detail,
  IsSelected,
}) => {
  const [selected, setSelected] = useState(IsSelected);

  const infoModify = () => {
    alert(`modify ${Id}`);
  };

  const infoDelete = () => {
    alert(`modify ${Id}`);
  };

  return (
    <S.Container state={selected}>
      <S.TitleSmall>{AddressName}</S.TitleSmall>
      <S.BodySmall>{PhoneNumber}</S.BodySmall>
      <S.BodySmall>{Address}</S.BodySmall>
      <S.BodySmall>{Detail}</S.BodySmall>
      <S.ButtonContainer>
        <S.InfoButtonContainer>
          <S.InfoButton onClick={() => infoModify()}>수정</S.InfoButton>
          <S.InfoButton onClick={() => infoDelete()}>삭제</S.InfoButton>
        </S.InfoButtonContainer>
        <S.IsSelectButton
          selected={selected}
          onClick={() => setSelected((prev) => !prev)}
        >
          선택
        </S.IsSelectButton>
      </S.ButtonContainer>
    </S.Container>
  );
};

export default AddressInfo;