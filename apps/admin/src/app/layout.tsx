import { Provider } from 'share-components';

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <html lang='ko'>
    <body>
      <Provider>{children}</Provider>
    </body>
  </html>
);

export default RootLayout;
