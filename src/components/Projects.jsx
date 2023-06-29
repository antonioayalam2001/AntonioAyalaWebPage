import styles from "../helpers/styleTailwind";
import { projects } from "../helpers/constants";
import { github } from "../assets";


export const Projects = () => {
  function openProject(url) {
    console.log(url);
    window.open(url)
  }
  return (
    <section id={"Projects"} className={`bg-primary ${styles.paddingY}`}>
      <h2 className={`text-4xl text-center text-white font-bold mb-20`}>
        Projects
      </h2>
      <div
        className={
          "grid grid-cols-1 sm:grid-cols-2 justify-center md:grid-cols-3  justify-items-center gap-1 "
        }
      >
        {projects.map((project,index) => {
          return (
            <div className="project_container" key={project.id} >
              <div className="project_image sm:h-[200px] md:h-[240px] overflow-hidden"  >
                <img src={project.img} alt="project"  />
                <a className="absolute bottom-0 right-0 w-[80px] sm:w-[50px] md:w-[75px]  z-[1000]" href={project.gitUrl}><img
                  style={{
                    "filter": `invert(56%) sepia(48%) saturate(5156%) hue-rotate(${60*index}deg) brightness(50%) contrast(101%)`
                  }}
                  src={github} alt="gitIcon" /></a>
                  <h3 className="text-white text-xl font-extrabold" onClick={() => {
              openProject(project.link)
            }}>
                    {project.name}{" "}
                </h3>
              </div>
              <div className="container">
                <div className="grid_container ">
                  <div>
                    <div className="flex-col p-4">
                      <p className=" text-white">{project.desc}</p>

                      <div className="flex flex-col ">
                        <p className="text-white font-bold">Tecnologias:</p>
                        <div className="flex ">
                          {project.icons.map((icon, index) => {
                            return (
                              <div
                                className="icon_container w-[30px] transition-all  rounded-lg py-2  px-1 mr-1.5"
                                key={index}
                              >
                                <img src={icon} className="w-100" alt="icon" />
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
