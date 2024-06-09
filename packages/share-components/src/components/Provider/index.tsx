import { ThemeProvider } from '@emotion/react';
import { GlobalStyle, theme } from 'share-components/styles';

interface Props {
  readonly children: React.ReactNode;
}

const Provider: React.FC<Props> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default Provider;
