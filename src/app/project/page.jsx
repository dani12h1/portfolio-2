import React from "react";
import Head from "next/head";
import Navbar from "../components/navbar";
import Projects from "../components/projects";

function about() {
  return (
    <>
      <Head>
        <title>About me</title>
      </Head>
      <Navbar />
      <section className="pt-36">
        <Projects />
      </section>
    </>
  );
}

export default about;
