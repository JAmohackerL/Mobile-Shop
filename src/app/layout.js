import Footer from "@/components/Footer";
import "./globals.css";
import Navbar from "@/components/Navbar";

import localFont from "next/font/local";

// Font files can be colocated inside of `app`
const myFont = localFont({
  src: [
    {
      path: './fonts/Estedad-Medium.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Estedad-Regular.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/Estedad-Bold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/Estedad-SemiBold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
});
export default function RootLayout({ children }) {
    return (
        <html lang="fa" dir="rtl" className={myFont.className}>
            <body>
                <Navbar />
                <main className="pt-16 ">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
