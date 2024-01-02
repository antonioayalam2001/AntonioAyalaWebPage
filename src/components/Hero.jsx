import styles from "../helpers/styleTailwind.js";
import {logoC, star} from '../assets'
import {BubbleComponent} from "./BubbleComponent.jsx";

export const Hero = () => {
    return (
        <section id={'home'} className={` flex md:flex-row flex-col ${styles.paddingY} `}>

            {/*Text container (Left side)*/}
            <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>

                {/*Name container*/}
                <div className={'flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'}>
                    <img src={star} alt="star-icon" className={'w-[16px] h-[16px]'}/>
                    <p className={` ${styles.paragraph} ml-2`}>
                        <span className={'font-glory text-white'}>Antonio</span> Ayala
                    </p>
                </div>

                <div className={`flex flex-row justify-between items-center w-full`}>
                    <h1 className={'text-white font-semibold ss:text-[4rem] text-[3rem] ss:leading-[5rem]'}>Mora
                        Ayala <br className={'sm:block hidden'}/> {" "}
                        <span className={` font-glory text-gradient font-semibold`}>Jose Antonio</span> <br />
                        <span className={` font-glory text-white font-semibold italic text-[2.6rem]`}>Desarrollador Web</span>
                    </h1>

                    <div className={'ss:flex hidden md:mr-4 mr-0'}>
                        <BubbleComponent/>
                    </div>
                </div>

                <p className={` ${styles.paragraph} max-w-[470px] mt-5`}>
                    Soy Jose Antonio, pero todos me llaman Tony, tengo 22 años y soy un Desarrollador Web
                    <span className="italic text-golden font-semibold"> ¿Tienes un proyecto en mente? 
                    Contactame y hagamoslo realidad. </span>
                    <br/>
                    <span className={"text-gradient font-bold"}>
                        Desarrollador en busca de brindar soluciones.
                    </span>
                </p>
            </div>

            {/*    Image container (Right Side)*/}
            <div className={`z-[5] flex-1 flex  ${styles.flexCenter} md:my-0 my-10 `}>
                <figure className={"w-7/12 md:w-8/12  m-auto relative"}>
                    <img src={logoC} alt="logo tony " className={"mx-auto w-[100%] z-[20]"}/>
                    <div
                        className={" absolute bg-pink-gradient w-[40px] h-[40px] top-[70%] right-0 z-[-1]  move  rounded-full"}
                        style={{"--i": "1"}}
                    ></div>
                    <div
                        className={" absolute bg-pink-gradient w-[70px] h-[70px] top-[0%] left-[10%]  z-[-1] move   rounded-full"}
                        style={{"--i": "2"}}
                    ></div>
                    <div
                        className={" absolute bg-pink-gradient w-[25px] h-[25px] top-[100%] left-50  z-[-1]  move   rounded-full"}
                        style={{"--i": "3"}}
                    ></div>
                </figure>
                <div className={" absolute pink__gradient w-[40%] h-[50%] top-0  z-[0]  opacity-50 "}></div>
                <div className={" absolute white__gradient w-[50%] h-[50%] bottom-20 right-20  z-[0]  "}></div>
            </div>

            <div className={`ss:hidden ${styles.flexCenter} sm:mr-0 `}></div>

        </section>
    );
}