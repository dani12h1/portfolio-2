import Image from "next/image";
import Navbar from "./components/navbar";
import HeroSection from "./components/HeroSection";
import Head from "next/head";
import Projects from "./components/projects";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>
      <body className="">
        <Navbar />
        <HeroSection />
        <Projects />
        <Footer />
      </body>
    </>
  );
}
