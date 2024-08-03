
import "./globals.css";
import { Inter } from "next/font/google";

import Navbar from "@/src/components-ui/header/Navbar";
import React from "react";
import {Providers} from "@/src/providers/ThemeProvider";





const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "e-bike Blog App",
  description: "The E-bike Blog App!",
};

export default function RootLayout({ children }:{children:React.ReactNode}) {
  return (
      <html lang="en">
      <body className={inter.className}>

        <Providers attribute="class" defaultTheme='system' enableSystem>
            <main className='overflow-x-hidden'>

              <Navbar/>
                {children}

            </main>
        </Providers>
      </body>
      </html>
  );
}