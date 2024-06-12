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

  const clickHandler = (mode: string) => {
    switch (mode) {
      case 'modify':
        alert(`modify ${Id}`);
        break;
      case 'delete':
        alert(`delete ${Id}`);
        break;
      case 'select':
        setSelected((prev) => !prev);
    }
  };

  return (
    <S.Container state={selected}>
      <div>{AddressName}</div>
      <div>{PhoneNumber}</div>
      <div>{Address}</div>
      <div>{Detail}</div>
      <S.ButtonContainer>
        <S.InfoButtonContainer>
          <S.InfoButton onClick={() => clickHandler('modify')}>
            수정
          </S.InfoButton>
          <S.InfoButton onClick={() => clickHandler('delete')}>
            삭제
          </S.InfoButton>
        </S.InfoButtonContainer>
        <S.IsSelectButton
          state={selected}
          onClick={() => clickHandler('select')}
        >
          선택
        </S.IsSelectButton>
      </S.ButtonContainer>
    </S.Container>
  );
};

export default AddressInfo;
