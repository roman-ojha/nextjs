import { Metadata } from "next";
export const metadata: Metadata = {
  title: {
    default: "Next.js Child route",
    template: "%s | Roman",
    absolute: "",
  },
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: "white" }}>
        <header>
          <h1>Header</h1>
        </header>
        {children}
        <footer>
          <h1>Footer</h1>
        </footer>
      </body>
    </html>
  );
}
