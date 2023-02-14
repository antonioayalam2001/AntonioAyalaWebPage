import styles from "../helpers/styleTailwind.js";
import {technologies} from "../helpers/constants.js";
import {ServiceCard} from "./ServiceCard.jsx";

export const Experience = () => {
    return (
        <section id={'Technologies'} className={`${styles.paddingY}`}>
            <h2 className={` ${styles.heading2} mb-20`}>Experience With</h2>
            <div className={'grid grid-cols-2 sm:grid-cols-3 justify-center  justify-items-center gap-4 '}>

                {technologies.map(technology => (
                    <ServiceCard key={technology.id} {...technology} extraStyles = {'w-[100%]'}/>
                ))}

            </div>

        </section>
    );
}