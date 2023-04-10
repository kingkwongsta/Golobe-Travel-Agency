import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Montserrat } from "@next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    // <div className="bg-[#FAFAFA]">
    <div className={montserrat.className}>
      <div className="bg-[#FAFAFA]">
        <Component {...pageProps} />
      </div>
    </div>
  );
}
