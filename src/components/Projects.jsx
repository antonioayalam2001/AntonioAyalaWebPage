import { projects } from "../helpers/constants";
import styles from "../helpers/styleTailwind";
import Project from "./Project";


export const Projects = () => {
  function openProject(url) {
    window.open(url)
  }
  return (
    <section id={"Projects"} className={`bg-primary ${styles.paddingY}`}>
      <h2 className={`text-4xl text-center text-white font-bold mb-20`}>
        Algunos proyectos
      </h2>
      <div
        className={
          "grid grid-cols-1 sm:grid-cols-2 justify-center md:grid-cols-3  justify-items-center gap-1 "
        }
      >
        {projects.map((project, index) => {
          return (
            <Project key={project.id} {...project} index={index} callback={openProject} />
          );
        })}
      </div>
    </section>
  );
};
