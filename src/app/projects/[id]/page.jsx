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
        <div className="flex container mx-auto pt-36">
          <section className="">
            <h1 className="pb-4">{content.heading}</h1>
            <div className="flex flex-col gap-6 pb-14 lg:flex-row lg:mx-auto">
              <Image className="rounded-lg" src={placeholder} alt="placeholder"></Image>
              <Image className="rounded-lg" src={placeholder} alt="placeholder"></Image>
              <Image className="rounded-lg" src={placeholder} alt="placeholder"></Image>
            </div>

            <h3>Website:</h3>
            <p className="pb-4 ">{content.website}</p>
            <h3>Tools & Technologies</h3>
            <ul className="pb-4">
              {content.technologies[0].techs.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
            <h3>Challenge</h3>
            <p className="pb-10">{content.text}</p>
          </section>
        </div>
        <Footer />
      </body>
    </>
  );
}
