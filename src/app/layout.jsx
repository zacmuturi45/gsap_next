import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "./Components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Gichuhiisaac",
  description: "Gsap Animation created by me",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} main_layout`}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
