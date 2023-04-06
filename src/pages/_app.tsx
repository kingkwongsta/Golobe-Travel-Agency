import "@/styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "@next/font/local";

// const gothic = localFont({
//   src: [
//     {
//       path: "../../public/font/Trade Gothic/Trade Gothic LT.ttf",
//       weight: "500",
//     },
//     {
//       path: "../../public/font/Trade Gothic/Trade Gothic LT.ttf",
//       weight: "700",
//     },
//   ],
//   variable: "--font-gothic",
// });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-[#FAFAFA]">
      <Component {...pageProps} />
    </div>
  );
}
