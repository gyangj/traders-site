export const metadata = {
  title: 'TRADERS | BRIGHTEX',
  description: 'Market analysis dashboard for traders.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
