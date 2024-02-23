"use client";

import React from "react";
import { projectsData } from "../../data/projectsData";
import Image from "next/image";
import Navbar from "@/app/components/navbar";
import ToastDemo from "@/app/components/Toaster";
import AnimationEffect from "@/app/components/AnimationEffect";
import Head from "next/head";
import Zoom from "react-medium-image-zoom";

export default function ProjectList({ params }) {
  // Find the project with the matching id from params
  const selectedProject = projectsData.find((project) => project.id === parseInt(params.id));

  // If id is not found:
  if (!selectedProject) {
    return <div>Project not found</div>;
  }

  const { content } = selectedProject;

  return (
    <>
      <Head>
        <title>{content.alt}</title>
      </Head>
      <Navbar />
      <div className="flex container mx-auto pt-36 mb-10">
        <section>
          <h1 className="pb-4 ">{content.heading}</h1>

          <div className="flex self-center lg:gap-6 gap-3 pb-10">
            {/* Clock icon and publish date */}
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
                <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
              </svg>
              <div>{content.publishDate}</div>
            </div>
            {/* Tag icon and tags */}
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-tag" viewBox="0 0 16 16">
                <path d="M6 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-1 0a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0z" />
                <path d="M2 1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 1 6.586V2a1 1 0 0 1 1-1zm0 5.586l7 7L13.586 9l-7-7H2v4.586z" />
              </svg>
              <div>{content.tags}</div>
            </div>
          </div>
          <AnimationEffect delay={0.2}>
            <div className="flex flex-col md:gap-4 lg:gap-8 gap-6 pb-14 lg:flex-row lg:mx-auto">
              {/* Render images */}
              <Image className="rounded-xl lg:w-[32%] w-[100%] h-auto" src={content.image1.src} alt="Project" />
              <Image className="rounded-xl lg:w-[32%] w-[100%] h-auto " src={content.image2.src} alt="Project" />
              <Image className="rounded-xl lg:w-[32%] w-[100%] h-auto " src={content.image3.src} alt="Project" />
            </div>

            <div className="lg:grid grid-cols-3 gap-8">
              <div className="col-span-1 ">
                <h3 className="text-xl">Website</h3>
                <a href={content.website} className="hover:text-lilla text-lg  hover:text-gray-400">
                  {content.alt}
                </a>
                <h3 className="pt-4 text-xl">Tools & Technologies</h3>
                <div className="pb-4">
                  {content.technologies[0].techs.map((tech, index) => (
                    <p className="text-lg" key={index}>
                      {tech}
                    </p>
                  ))}
                </div>
              </div>
              <div className="col-span-2">
                <h3 className=" text-2xl">About the project</h3>
                <p dangerouslySetInnerHTML={{ __html: content.text }} />
              </div>
            </div>
          </AnimationEffect>
        </section>
      </div>
      {/* <Footer /> */}
      <ToastDemo />
    </>
  );
}
