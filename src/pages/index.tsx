import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import NavBar from "../components/navbar";
import SearchBar from "../components/search/searchbar";
import Discover from "../components/discover/discover";
import TravelCard from "./../components/travelcard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <main className="flex flex-col items-center">
        <div className="basis-auto">
          <SearchBar />
        </div>
        <Discover />
        <TravelCard />
      </main>
    </>
  );
}
