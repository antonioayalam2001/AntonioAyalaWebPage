import {tony} from "../assets/index.js";
import styles from "../helpers/styleTailwind.js";

export const AboutMe = () => {
    return (
        <section id={`About Me`} className={'flex flex-col-reverse md:flex-row p-4'}>
            {/*    left section*/}
            <div className={'flex-1 mt-10 flex justify-center flex-col items-center '}>
                <figure className={' grid items-center personal__image w-[80%]'}>
                    <img src={tony} className={' h-[100%] md:h-[90%] '} alt="Antonio Mora img"/>
                </figure>
            </div>
            {/*    Right Section*/}
            <div className={'flex-1 flex flex-col text-white  justify-around items-center '}>
                <h2 className={` ${styles.heading2}`}>About Me</h2>
                <p className={'font-glory font-normal text-dimWhite text-[18px] leading-[30.8px]'}>My name is Jose Antonio Mora Ayala, I was born in Mexico, currently Im a student of my last semester of college in
                    computer systems engineer.
                    I am a person who enjoys learn and study as well as socialice with other people, I consider myself as a dedicated, organized, reliable , responsable and hard working men.
                    I am a mature team worker and adaptable to all challenging situations
                <br/><br/>
                    Among my main hobbies are the video games, cooking, socialice and keep learning all the time, those are the main things that go with my every single day, and I really enjoy
                    when doing them.
                </p>

            </div>

        </section>
    );
}