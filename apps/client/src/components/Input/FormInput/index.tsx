'use client';

import { forwardRef, useState } from 'react';
import * as S from './style';
import { InputType } from 'client/types';
import { CloseEyesIcon, OpenEyesIcon } from 'client/assets';

interface Props {
  name: string;
  type: InputType;
  errorMessage: string | null;
  placeHolder: string;
  isRequired?: boolean;
  isDisabled?: boolean;
}

const FormInput = forwardRef<HTMLInputElement, Props>(
  ({ name, type, placeHolder, errorMessage, isRequired, isDisabled }, ref) => {
    const [isHidden, setIsHidden] = useState<boolean>(true);

    const handleHiddenButtonClick = () => setIsHidden((prev) => !prev);

    return (
      <S.Container>
        <S.Name>{name}</S.Name>
        <S.InputWrapper>
          <S.Input
            type={type === InputType.TEXT || !isHidden ? type : InputType.TEXT}
            placeholder={placeHolder}
            isError={!!errorMessage}
            ref={ref}
            required={isRequired}
            disabled={isDisabled}
          />
          {type === InputType.PASSWORD && (
            <S.HiddenButton onClick={handleHiddenButtonClick}>
              {isHidden ? <CloseEyesIcon /> : <OpenEyesIcon />}
            </S.HiddenButton>
          )}
        </S.InputWrapper>
        {errorMessage && <S.Error>{errorMessage}</S.Error>}
      </S.Container>
    );
  }
);

FormInput.displayName = 'FormInput';

export default FormInput;
