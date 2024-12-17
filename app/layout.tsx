import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "EngenMe | Mohamed Farouk Hasnaoui Portfolio",
  description:
    "Explore the portfolio of Mohamed Farouk Hasnaoui, a full-stack developer with 2 years of experience building dynamic applications using React, Next.js, Node.js, and database systems (SQL and NoSQL). Passionate about clean code, performance optimization, and delivering user-centric solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-[url('/bg-light.jpg')] dark:bg-[url('/bg-dark.jpg')] bg-cover bg-no-repeat">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
