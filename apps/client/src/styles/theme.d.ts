import '@emotion/react';

import { theme } from 'share-components';

type ExtendedTheme = typeof theme;

declare module '@emotion/react' {
  interface Theme extends ExtendedTheme {}
}
