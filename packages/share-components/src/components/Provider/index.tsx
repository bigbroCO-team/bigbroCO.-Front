import { ThemeProvider } from '@emotion/react';
import { theme } from '@/styles';

interface Props {
  readonly children: React.ReactNode;
}

const Provider: React.FC<Props> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Provider;
