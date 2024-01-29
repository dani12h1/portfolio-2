import React from "react";
import Image from "next/image";
import ciff from "../assets/ciff2.png";
import hogwarts from "../assets/hackgrid.png";
import edc from "../assets/edc2.png";
import dashboard from "../assets/dashboard2.png";

function projects() {
  return (
    <>
      <h2 className="font-bold mx-auto text-center pb-4 bg-hvid text-sort text-3xl">Projects Portfolio</h2>
      <section className="bg-hvid text-sort h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 container mx-auto">
        <a href="/projects/1" className="shadow-2xl rounded-lg mx-4">
          <Image className="rounded-t-lg object-cover" src={hogwarts} width={600} height={600} alt="Picture of workers" />
          <div className="p-6 text-center">
            <h3 className="font-bold">Hogwarts Student list</h3>
            <p>Case</p>
          </div>
        </a>
        <a href="/projects/3" className="shadow-2xl rounded-lg mx-4">
          <Image className="rounded-t-lg object-cover" src={ciff} width={600} height={600} alt="Picture of workers" />
          <div className="p-6 text-center">
            <h3 className="font-bold">Copenhagen Fashion Fair</h3>
            <p>Registration form</p>
          </div>
        </a>
        <a href="/projects/2" className="shadow-2xl rounded-lg mx-4">
          <Image className="rounded-t-lg object-cover " src={edc} width={600} height={600} alt="Picture of workers" />
          <div className="p-6 text-center">
            <h3 className="font-bold">EDC</h3>
            <p>Case</p>
          </div>
        </a>
        <a href="/projects/4" className="shadow-2xl rounded-lg mx-4 mb-10">
          <Image className="rounded-t-lg object-cover" src={dashboard} width={600} height={600} alt="Picture of workers" />
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
