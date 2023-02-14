import styles from "../helpers/styleTailwind.js";
import {values} from "../helpers/constants.js";

export const Values = () => (
    <section className={` ${styles.flexCenter} flex-row flex-wrap sm:mb-18 mb-4 mt-4 md:p-[3rem]`}>

        {values.map(({id, title, value}) => (
            <div key={id} className={"flex-1 flex items-center gap-4  rounded-2xl m-3 sm:flex-row flex-col justify-center flex-wrap"}>
                <h4 className={"font-glory font-semibold xs-text-[3rem] text-[2rem] text-white text-center"}>{title}</h4>
                <p className={"font-glory font-light sm:text-[1.2rem] text-[1rem]  text-white  text-center"}>{value}</p>
            </div>
        ))}

    </section>
);