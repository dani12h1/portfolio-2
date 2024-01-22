import Image from "next/image";
import Navbar from "./components/navbar";
import HeroSection from "./components/HeroSection";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>
      <Navbar />
      {/* <HeroSection /> */}
    </>
  );
}
