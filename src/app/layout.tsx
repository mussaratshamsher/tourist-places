import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";



import Footer from "../components/Footer";
import Navbar from "@/components/Navbar";


 

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Karachi, A Beautiful Tourist Place",
  description: "To describe Tourist Places located in karachi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head><link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'/>
     </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main className="top">   
           
                    <span><b>Karachi!</b></span>  A beautiful Tourist Place
                    </main>
       <Navbar />
        {children}
        <Footer />

      </body>
    </html>
  );
}
