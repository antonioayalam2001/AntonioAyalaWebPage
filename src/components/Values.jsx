import styles from "../helpers/styleTailwind.js";
import {values} from "../helpers/constants.js";

export const Values = () => (
    <section className={` ${styles.flexStretch} flex-col ss:flex-row sm:mb-18 mb-4 mt-4 md:p-[3rem]`}>

        {values.map(({id, title, value}) => (
            <div key={id} className={"flex-1 flex items-start gap-4 rounded-2xl m-3 sm:flex-row flex-col justify-start flex-wrap content-start"}>
                <h4 className={"font-glory font-semibold xs-text-[3rem] text-[2rem] text-white "}>{title}</h4>
                <p className={"font-glory font-light sm:text-[1.2rem] text-[1rem]  text-white  "}>{value}</p>
            </div>
        ))}

    </section>
);