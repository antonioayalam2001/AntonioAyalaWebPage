import { useEffect, useRef, useState } from "react";
import { technologies } from "../helpers/constants.js";
import styles from "../helpers/styleTailwind.js";
import { ServiceCard } from "./ServiceCard.jsx";

export const Experience = () => {
    const [isIntersecting, setIsIntersecting] = useState(false)
    const techsRefContainer = useRef(null)
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsIntersecting((prev) => entry.isIntersecting ? true : false)
            },
            {
                rootMargin: '-100px',
            }
        )
        observer.observe(techsRefContainer.current)
        return () => {
            observer.disconnect()
        }
    }, [])

    useEffect(() => {

        if (isIntersecting) {
            techsRefContainer.current.querySelectorAll('.tech_card').forEach((element, index) => {
                element.classList.remove('slide-out')
                element.classList.add('slide-in')
                element.style.setProperty('--delay', `${(index + 1) * 0.3}s`)
            })
        } else {
            techsRefContainer.current.querySelectorAll('.tech_card').forEach((element, index) => {
                element.classList.remove('slide-in')
                element.classList.add('slide-out')
                element.style.setProperty('--delay', `${(index ) * 0.01}s`)
            })
        }

    }, [isIntersecting])


    return (
        <section id={'Technologies'} className={`${styles.paddingY}`}>
            <h2 className={` ${styles.heading2} mb-20`}>Experience With</h2>
            <div ref={techsRefContainer} className={'grid grid-cols-2 sm:grid-cols-3 justify-center  justify-items-center gap-4 '}>

                {technologies.map(technology => (
                    <ServiceCard key={technology.id} {...technology} extraStyles={'w-[100%]'} extraClassName={"tech_card"} />
                ))}

            </div>

        </section>
    );
}