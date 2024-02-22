import React from "react";
import Head from "next/head";
import Navbar from "../components/navbar";
import Image from "next/image";
import me from "../assets/me.png";
import Footer from "../components/Footer";

function about() {
  return (
    <>
      <Head>
        <title>About me</title>
      </Head>
      <Navbar />
      <section className="mt-36 container mx-auto">
        <div className="lg:flex gap-36 justify-center items-center ">
          <Image className=" flex " src={me} alt="" width={350} height={300} />
          <p>
            Hi i&apos;m Daniel, a multimediadesigner dedicated to creating fun and innovative digital solutions.<br></br>
            <br></br>
            Through this portfolio, I invite you to explore my work and discover the different projects I&apos;ve had the privilege to be a part of. Thank you for visiting, and I look forward to the opportunity to collaborate and create something truly extraordinary together.
          </p>
        </div>
      </section>
    </>
  );
}

export default about;
