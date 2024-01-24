import { projectsData } from "../../data/projectsData";
import Image from "next/image";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/Footer";
import placeholder from "../../assets/placeholder.jpeg";
export default function ProjectList({ params }) {
  // Find the project with the matching id from the params
  const selectedProject = projectsData.find((project) => project.id === parseInt(params.id));

  // If the project with the given id is not found, you can handle it accordingly
  if (!selectedProject) {
    return <div>Project not found</div>;
  }

  const { title, content } = selectedProject;

  return (
    <>
      <body>
        <Navbar />
        <div className="flex container mx-auto pt-32">
          {/* <h1>{title}</h1> */}
          <section>
            <p className="font-bold pb-4">{content.heading}</p>
            <div className="flex flex-col gap-6 pb-14">
              <Image className="rounded-lg" src={placeholder} alt="placeholder"></Image>
              <Image className="rounded-lg" src={placeholder} alt="placeholder"></Image>
              <Image className="rounded-lg" src={placeholder} alt="placeholder"></Image>
            </div>
            <h3 className="font-bold">Website:</h3>
            <p className="pb-4 ">{content.website}</p>
            <h3 className="font-bold">Tools & Technologies</h3>
            <ul className="pb-4">
              {content.technologies[0].techs.map((tech, index) => (
                <li className="" key={index}>
                  {tech}
                </li>
              ))}
            </ul>
            <h3 className="font-bold">Challenge</h3>
            <p className="pb-10">{content.text}</p>
          </section>
        </div>
        <Footer />
      </body>
    </>
  );
}
