import { github } from "../assets";

export default function Project({ id, link, desc, gitUrl, img, name, icons, index, callback }) {
    return (
        <div className="project_container" key={id} >
            <div className="project_image sm:h-[200px] md:h-[240px] overflow-hidden"  >
                <img src={img} alt="project" />
                <a className="absolute bottom-0 right-0 w-[80px] sm:w-[50px] md:w-[75px]  z-[1000]" href={gitUrl}><img
                    style={{
                        "filter": `invert(56%) sepia(48%) saturate(5156%) hue-rotate(${60 * index}deg) brightness(50%) contrast(101%)`
                    }}
                    src={github} alt="gitIcon" /></a>
                <h3 className="text-white text-xl font-extrabold" onClick={() => {
                    callback(link)
                }}>
                    {name}{" "}
                </h3>
            </div>
            <div className="container">
                <div className="grid_container ">
                    <div>
                        <div className="flex-col p-4">
                            <p className=" text-white">{desc}</p>
                            <div className="flex flex-col ">
                                <p className="text-white font-bold">Tecnologias:</p>
                                <div className="flex ">
                                    {icons.map((icon, index) => {
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
    )
}