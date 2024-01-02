import {tony} from "../assets/index.js";
import styles from "../helpers/styleTailwind.js";

export const AboutMe = () => {
    return (
        <section id={`about`} className={'flex flex-col-reverse md:flex-row p-4'}>
            {/*    left section*/}
            <div className={'flex-1 mt-10 flex justify-center flex-col items-center '}>
                <figure className={' grid items-center personal__image w-[80%]'}>
                    <img src={tony} className={' h-[90%] md:h-[90%] '} alt="Antonio Mora img"/>
                </figure>
            </div>
            {/*    Right Section*/}
            <div className={'flex-1 flex flex-col text-white  justify-center items-center '}>
                <h2 className={` ${styles.heading2}`}>Un poco de mi...</h2>
                <p className={'font-glory font-normal text-dimWhite text-[20px] leading-[30.8px]'}>
                    
                    Mi nombre es Jose Antonio Mora Ayala, nací en el estado de México y actualmente estoy cursando mi último semestre de universidad en la carrera de ingeniería en sistemas computacionales.
                    
                    <span className="italic text-golden font-bold">  Soy una persona que disfrura mucho aprender y estudiar </span> así como socializar con otras personas, me considero una persona dedicada, organizada, confiable, responsable y trabajadora.
                    Se trabajar bajo presión y me gusta mantener un ambiente de trabajo positivo y amigable. <span className="font-bold italic text-golden"> ¿Un reto? ¡Vamos por el! </span>
                    <br /><br />
                    Entre mis principales hobbies se encuentran los videojuegos, cocinar, socializar y seguir aprendiendo todo el tiempo, esas son las principales cosas que me acompañan en mi día a día.
                </p>

            </div>

        </section>
    );
}