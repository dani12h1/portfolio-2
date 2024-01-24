import { projectsData } from "../../data/projectsData";
import Image from "next/image";

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
      <div>
        <h1>{title}</h1>
        <p>{content.heading}</p>
        <p>{content.text}</p>
        <img src={content.image.src} alt={content.image.alt} width={content.image.width} height={content.image.height} />
      </div>
    </>
  );
}
