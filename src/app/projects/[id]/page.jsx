import { projectsData } from "../../data/projectsData";
import Image from "next/image";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/Footer";
import placeholder from "../../assets/logo.png";
export default function ProjectList({ params }) {
  // Find projektet med det matchende id fra params
  const selectedProject = projectsData.find((project) => project.id === parseInt(params.id));

  // Hvis id ikke findes:
  if (!selectedProject) {
    return <div>Project not found</div>;
  }

  const { content } = selectedProject;

  return (
    <>
      <body>
        <Navbar />
        <div className="flex container mx-auto pt-36">
          <section className="">
            <h1 className="pb-4">{content.heading}</h1>
            <div className="flex self-center gap-6 pb-10">
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
                  <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                </svg>
                <div>{content.publishDate}</div>
              </div>
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-tag" viewBox="0 0 16 16">
                  <path d="M6 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-1 0a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0z" />
                  <path d="M2 1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 1 6.586V2a1 1 0 0 1 1-1zm0 5.586l7 7L13.586 9l-7-7H2v4.586z" />
                </svg>
                <div>{content.tags}</div>
              </div>
            </div>
            <div className="flex flex-col md:gap-4 lg:gap-8 gap-6 pb-14 lg:flex-row lg:mx-auto">
              <Image className="rounded-sm lg:w-[32%] w-[100%] h-auto " src={placeholder} alt="placeholder"></Image>
              <Image className="rounded-sm lg:w-[32%] w-[100%] h-auto " src={placeholder} alt="placeholder"></Image>
              <Image className="rounded-sm lg:w-[32%] w-[100%] h-auto " src={placeholder} alt="placeholder"></Image>
            </div>

            <div className="lg:grid grid-cols-3 gap-8">
              <div className="col-span-1">
                <h3>Website:</h3>
                <p className="pb-4 ">{content.website}</p>
                <h3>Tools & Technologies</h3>
                <ul className="pb-4">
                  {content.technologies[0].techs.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}
                </ul>
              </div>
              <div className="col-span-2">
                <h3>Challenge</h3>
                <p className="pb-10">{content.text}</p>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </body>
    </>
  );
}
