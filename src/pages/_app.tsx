import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Montserrat } from "@next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    // <div className="bg-[#FAFAFA]">
    <div className={`${montserrat.variable} font-sans bg-[#FAFAFA]`}>
      <Component {...pageProps} />
    </div>
  );
}
