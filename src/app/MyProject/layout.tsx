export default function MyProjectsLayout({
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
  