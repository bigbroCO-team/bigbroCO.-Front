import styled from '@emotion/styled';
import { theme } from 'shared';

interface Props {
  isClicked: boolean;
}

const Svg = styled.svg<{ isClicked: boolean }>`
  transition: fill 0.3s ease;
  & path {
    fill: ${({ isClicked, theme }) =>
      isClicked ? theme.color.main[50] : theme.color.grey[700]};
    transition: fill 0.3s ease;
  }
`;

const CheckBox: React.FC<Props> = ({ isClicked }) => (
  <Svg
    xmlns='http://www.w3.org/2000/svg'
    width='1.5rem'
    height='1.5rem'
    viewBox='0 0 24 24'
    fill='none'
    isClicked={isClicked}
  >
    <g clipPath='url(#clip0_257_5967)'>
      <path
        d='M12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2ZM15.535 8.381L10.585 13.331L8.465 11.21C8.37216 11.1171 8.26192 11.0434 8.14059 10.9931C8.01926 10.9428 7.8892 10.9168 7.75785 10.9168C7.49258 10.9167 7.23814 11.022 7.0505 11.2095C6.86286 11.397 6.75739 11.6514 6.7573 11.9166C6.7572 12.1819 6.86249 12.4364 7.05 12.624L9.808 15.382C9.91015 15.4842 10.0314 15.5653 10.1649 15.6206C10.2984 15.6759 10.4415 15.7044 10.586 15.7044C10.7305 15.7044 10.8736 15.6759 11.0071 15.6206C11.1406 15.5653 11.2618 15.4842 11.364 15.382L16.95 9.796C17.1376 9.60836 17.2431 9.35386 17.2431 9.0885C17.2431 8.82314 17.1376 8.56864 16.95 8.381C16.7624 8.19336 16.5079 8.08794 16.2425 8.08794C15.9771 8.08794 15.7226 8.19336 15.535 8.381Z'
        fill={isClicked ? theme.color.main[50] : theme.color.grey[700]}
      />
    </g>
    <defs>
      <clipPath id='clip0_257_5967'>
        <rect width='1.5rem' height='1.5rem' fill='white' />
      </clipPath>
    </defs>
  </Svg>
);

export default CheckBox;