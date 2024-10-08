import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Swimming Library",
  description: "Swimming Library",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="bg-white text-gray-900">
        <header className="p-6 border-b border-gray-200">
          <nav className="container mx-auto flex justify-between items-center">
            <a href="/" className="text-xl font-semibold tracking-tight">
              Swimming Library
            </a>
            <div>
              <a
                href="/swimming-styles"
                className="ml-6 text-gray-600 hover:text-gray-900 transition-colors"
              >
                Swimming Styles
              </a>
            </div>
          </nav>
        </header>
        <main className="container mx-auto py-10 px-4 sm:px-6 lg:px-8 max-w-7xl">
          {children}
        </main>
      </body>
    </html>
  );
}
