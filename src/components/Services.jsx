import styles, {layout} from "../helpers/styleTailwind.js";
import {services} from "../helpers/constants.js";
import {ServiceCard} from "./ServiceCard.jsx";

export const Services = () => {
    return (
        <section id={'Services'} className={` ${layout.section}`}>

            {/*Left section (Info part)*/}
            <div className={` ${layout.sectionInfo}`}>
                <h2 className={` ${styles.heading2}`}>Services I offer</h2>
                <p className={` ${styles.paragraph} md:max-w-[100%] md:max-w-[470px] max-w-[100%] mt-6`}>
                    Since the beginning of my journey as a freelancer and student i have been improving my hard and soft skills, those have allowed me to gain experience in many areas of interest for
                    me as well as team work and communication.
                    <br/><br/><br/>
                    All the time I am trying to be better at what I do and always come with better ideas and improve previous work as well as learn from past
                    mistakes so those errors can be avoided in future applications, During my time of school I have learned how to interact with people and valorate each one of the persons from a team as
                    well as adapt myself.
                    <br/><br/><br/>
                    I offer a wide range of services which includes: web programming, responsive static websites, react applications, API's creation and consuming as well as programming and teaching
                    in multiple languages, so get the chance to know me and discover I am the right person to your project...
                </p>
            </div>

            {/*    Right Section (Services cards)*/}

            <div className={` ${layout.sectionImg}  flex-col justify-between ss:py-8 gap-4`}>
                {services.map((service) => (
                    <ServiceCard key={service.id} {...service}/>
                ))}
            </div>

        </section>
    );
}