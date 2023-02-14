import styles from "../helpers/styleTailwind.js";
import {arrowUp} from "../assets/index.js";

export const BubbleComponent = () => {
    return (
        <div className={` w-[130px] h-[130px] rounded-full  ${styles.flexCenter} p-[2px] cursor-pointer rotateAnim`}>
            {/*Outer circle*/}
            {/*    inner circle*/}
            <div className={`bg-primary w-[100%] h-[100%] rounded-full ${styles.flexCenter} flex-col px-[0.4rem] z-[1]`}>
                {/*    Text*/}
                <div className={`${styles.flexStart} flex-row items-start`}>
                    <p className={'font-glory font-bold text-[1.2rem] leading-[22px] '}>
                        <span className={'text-gradient'}>Curriculum</span>
                    </p>
                        <img src={arrowUp} alt="arrow" className={"h-[23px] w-[23px] object-contain "}/>
                </div>
                <p className={'font-glory font-bold text-[1.2rem] leading-[22px]'}>
                    <a href="./MoraAyalaCurriculumV.pdf" download className={'text-white'}>Vitae</a>
                </p>
            </div>
        </div>
    );
}