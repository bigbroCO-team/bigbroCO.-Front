'use client';

import { useState } from 'react';
import * as S from './style';

const buttonLabels = [
  '전체',
  '입금확인전',
  '입금확인',
  '배송준비중',
  '배송시작',
  '환불완료',
];

const SelectBtn = () => {
  const [selectedBtn, setSelectedBtn] = useState<string>('전체');

  const buttonClicked = (label: string) => {
    setSelectedBtn(label);
  };

  return (
    <S.Wrapper>
      {buttonLabels.map((label) => (
        <S.Button
          key={label}
          onClick={() => buttonClicked(label)}
          isSelected={selectedBtn === label}
        >
          {label}
        </S.Button>
      ))}
    </S.Wrapper>
  );
};

export default SelectBtn;
