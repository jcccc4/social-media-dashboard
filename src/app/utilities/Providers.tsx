"use client"
import { ReactNode } from "react";
import { ThemeProvider } from "next-themes";

type AppProps = {
  children: ReactNode;
};

export default function App({ children }: AppProps) {
  return (
    <div>
      <ThemeProvider attribute="class">{children}</ThemeProvider>
    </div>
  );
}
