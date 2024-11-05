export default function HomePageLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <body>
          <div>{children}</div>
        </body>
      </html>
    );
  }
  