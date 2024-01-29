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
      <section className="mt-72 container mx-auto">
        <div className="lg:flex gap-36 justify-center ">
          <Image className="pb-10" src={me} alt="" width={250} height={200} />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea. Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br></br>
            <br></br>Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?
          </p>
        </div>
      </section>
    </>
  );
}

export default about;
