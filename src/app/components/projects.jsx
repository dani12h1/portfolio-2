import React from "react";
import Image from "next/image";
import ciff from "../assets/ciff2.png";
import hogwarts from "../assets/hackgrid.png";
import edc from "../assets/edc2.png";
import dashboard from "../assets/dashboard2.png";

function projects() {
  return (
    <>
      <h2 className="font-bold mx-auto text-center pb-4  text-sort text-3xl">Projects Portfolio</h2>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-5 container mx-auto mb-10">
        <a href="/projects/1" className="shadow-2xl rounded-lg">
          <Image className=" object-cover rounded-lg mx-auto" src={hogwarts} width={500} height={500} alt="Picture of workers" />
          <div className="p-6 text-center">
            <h3 className="font-bold text-center">Hogwarts Student list</h3>
            <p>Case</p>
          </div>
        </a>
        <a href="/projects/3" className="shadow-2xl rounded-lg mx-auto">
          <Image className="object-cover rounded-lg" src={ciff} width={500} height={500} alt="Picture of workers" />
          <div className="p-6 text-center">
            <h3 className="font-bold">Copenhagen Fashion Fair</h3>
            <p>Registration form</p>
          </div>
        </a>
        <a href="/projects/2" className="shadow-2xl rounded-lg mx-auto">
          <Image className="object-cover rounded-lg " src={edc} width={500} height={500} alt="Picture of workers" />
          <div className="p-6 text-center">
            <h3 className="font-bold">EDC</h3>
            <p>Case</p>
          </div>
        </a>
        <a href="/projects/4" className="shadow-2xl rounded-lg mx-auto">
          <Image className="object-cover rounded-lg" src={dashboard} width={500} height={500} alt="Picture of workers" />
          <div className="p-6 text-center ">
            <h3 className="font-bold">Dashboard CIFF</h3>
            <p>Data Visualization</p>
          </div>
        </a>
      </section>
    </>
  );
}

export default projects;
