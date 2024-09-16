import "../../Home/globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "TantraFiesta",
  description: "Annual Tech Fest of IIIT Nagpur",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`overflow-x-clip bg-black`}>
        <Navbar />

        {children}
      </body>
    </html>
  );
}
