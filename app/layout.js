import { ThemeProvider } from './context/Themecontext';
import './globals.css';

export const metadata = {
  title: 'OneBPHC',
  description: 'Everything you need. One place.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}