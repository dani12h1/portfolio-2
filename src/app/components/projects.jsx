import React from "react";
import Image from "next/image";
import hogwart from "../assets/hogwarts.png";
import ciff from "../assets/ciff.png";

function projects() {
  return (
    <>
      <h2 className="font-bold mx-auto text-center pb-4 bg-hvid text-sort text-3xl">Projects Portfolio</h2>
      <section className="bg-hvid text-sort h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 container mx-auto">
        <div className="shadow-2xl rounded-lg mx-4">
          <Image className="rounded-t-lg object-cover" src={hogwart} width={600} height={600} alt="Picture of workers" />
          <div className="p-6 text-center">
            <h3 className="font-bold">Hogwarts Student list</h3>
            <p>Case</p>
          </div>
        </div>
        <div className="shadow-2xl rounded-lg mx-4">
          <Image className="rounded-t-lg object-cover" src={ciff} width={600} height={600} alt="Picture of workers" />
          <div className="p-6 text-center">
            <h3 className="font-bold">Copenhagen Fashion Fair</h3>
            <p>Registration form</p>
          </div>
        </div>
        <div className="shadow-2xl rounded-lg mx-4">
          <Image className="rounded-t-lg object-cover" src={ciff} width={600} height={600} alt="Picture of workers" />
          <div className="p-6 text-center">
            <h3 className="font-bold">EDC</h3>
            <p>Case</p>
          </div>
        </div>
        <div className="shadow-2xl rounded-lg mx-4 mb-10">
          <Image className="rounded-t-lg object-cover" src={ciff} width={600} height={600} alt="Picture of workers" />
          <div className="p-6 text-center ">
            <h3 className="font-bold">Dashboard CIFF</h3>
            <p>Data Visualization</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default projects;
