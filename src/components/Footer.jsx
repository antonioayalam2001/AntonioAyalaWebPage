import styles from "../helpers/styleTailwind.js";
import {logo} from "../assets/index.js";
import {socialMedia} from "../helpers/constants.js";

export const Footer = () => {
    return (
        <footer className={` ${styles.flexCenter} ${styles.paddingY} flex-col`}>
            <div className={` ${styles.flexCenter} md:flex-row flex-col mb-8 w-full`}>
                <div className={'md:flex-[4] flex flex-col justify-center items-start md:justify-start md:mr-10'}>
                    <img src={logo} alt="tony ayala" className={'w-[266px] h-[72px] object-contain'}/>
                    <p className={` ${styles.paragraph} mt-4 max-w-[310px]`}>
                        Podemos hacer multiples cosas juntos, ¿Tienes un proyecto en mente? 
                        Contactame. <br />
                        Página creada con ReactJs
                    </p>
                </div>


                <div className="w-full md:flex-1 flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
                    <div className="flex flex-row md:mt-0 mt-6 justify-around w-[100%]">

                        {socialMedia.map((social) => (
                                <a href={social.link} key={social.id}
                                   className={'cursor-pointer'}
                                ><img src={social.icon} alt={social.id}/></a>
                        ))}
                    </div>
                </div>
            </div>

        </footer>
    );
}