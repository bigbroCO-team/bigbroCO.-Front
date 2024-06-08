import * as S from './style';

interface Props {
  name: string;
  value: string;
}

const DisabledInput: React.FC<Props> = ({ name, value }) => {
  return (
    <S.Container>
      <S.Name>{name}</S.Name>
      <S.Input value={value} disabled />
    </S.Container>
  );
};

export default DisabledInput;
