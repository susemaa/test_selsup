import type { Metadata } from "next";
import "./globals.css";
import Home from "./page";
import sample from '../../sample.json';


export const metadata: Metadata = {
  title: "Test task for selsup",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="w-full max-w-xs mx-auto"><Home params={sample.params} model={sample.model}/></body>
    </html>
  );
}
