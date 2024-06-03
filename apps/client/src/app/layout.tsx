'use client';

import { Provider } from 'share-components';
import Header from '../components/Header';

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <html lang='ko'>
    <body>
      <Provider>
        <Header />
        {children}
      </Provider>
    </body>
  </html>
);

export default RootLayout;
