import { Cantata_One, Afacad, Poppins} from "next/font/google";
import { Analytics } from "@vercel/analytics/next"
import "./globals.css";

const cantataOne = Cantata_One({
  variable: "--font-cantata-one",
  weight: '400',
  subsets: ["latin"],
});

const afacad = Afacad({
  variable: "--font-afacad",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: '400',
  subsets: ["latin"],
});

export const metadata = {
  title: "The Cannon",
  description: "Official website for UofT's magazine, The Cannon",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${afacad.variable} ${cantataOne.variable}`}>
      <body className={`antialiased`}>
        {children}
        <Analytics />
      </body> 
    </html>
  );
}
