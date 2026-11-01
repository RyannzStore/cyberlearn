import './globals.css';
import AppProvider from '@/components/AppProvider';
import AppShell from '@/components/AppShell';
import { BackgroundDecor } from '@/components/Illustrations';

export const metadata = {
  title: {
    default: 'CyberLearn — Learn. Explore. Secure.',
    template: '%s · CyberLearn',
  },
  description:
    'CyberLearn: platform edukasi cybersecurity interaktif dengan 36 modul, quiz, lab simulasi, dan progres belajar yang tersimpan. / Interactive cybersecurity learning platform.',
};

export const viewport = {
  themeColor: '#07090b',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body>
        <BackgroundDecor />
        <AppProvider>
          <AppShell>{children}</AppShell>
        </AppProvider>
      </body>
    </html>
  );
}
