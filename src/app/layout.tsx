
import "./globals.css";
import { Inter } from "next/font/google";
import {ThemeProvider} from "next-themes";
import Navbar from "@/src/components-ui/header/Navbar";
import React from "react";





const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "e-bike Blog App",
  description: "The E-bike Blog App!",
};

export default function RootLayout({ children }:{children:React.ReactNode}) {
  return (
      <html lang="en">
      <body className={inter.className}>

        <ThemeProvider attribute='class'>
            <main className="container">
              <div className="wrapper">
              <Navbar/>
                {children}
              </div>
            </main>
        </ThemeProvider>
      </body>
      </html>
  );
}