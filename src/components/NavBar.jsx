import { useState } from "react";
import { close, logo, menu } from '../assets/';
import { navLinks } from "../helpers/constants.js";

export const NavBar = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <nav className={ "w-full flex py-6 justify-between items-center navbar z-100" }>
            {/*Logo Image and Name*/ }
            <div className={ "flex flex-row-reverse items-center" }>
                <h1 className={ "font-glory text-white text-2xl dark:text-white hidden md:block" }>Tony Ayala</h1>
                <figure className={ "w-[80px]" }>
                    <img className={ "w-8/12" } src={ logo } alt="Tony Ayala Portfolio" />
                </figure>
            </div>


            {/*Desktop View*/ }
            <ul className={ 'flex list-none sm:flex hidden justify-end items-center flex-1 z-50' }>
                { navLinks.map(({ id, title }, index) => (
                    <li key={ id }
                        className={ ` font-glory text-white ${index === navLinks.length ? "mr-0" : "mr-10"}` }>
                        <a href={ `#${id}` } className={ 'cursor-pointer' }>
                            { title }
                        </a>
                    </li>
                )) }
                <li><a href="./MoraAyalaCurriculumV.pdf" download className={ 'bg-gradient-to-r from-pink-300 to-pink-200 text-white px-4 py-2 rounded-md' }>Curriculum</a></li>
            </ul>

            {/*    Mobile devices View*/ }
            <div className={ "sm:hidden flex flex-1 justify-end items-center" }>
                <img
                    onClick={ () => setToggle((prev) => !prev) }
                    src={ toggle ? close : menu }
                    alt="toggleMenu"
                    className={ "w-[28px] h-[28px] object-contain cursor-pointer" }
                />
                <div
                    className={ ` ${toggle ? 'flex flex-col' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[150px] rounded-xl sidebar ` }>
                    <ul className={ 'flex list-none flex-col justify-end items-center flex-1 gap-3' }>
                        { navLinks.map(({ id, title }, index) => (
                            <li key={ id }
                                className={ `font-glory text-white cursor-pointer ${index === navLinks.length ? "mb-0" : "mb-4"}` }>
                                <a href={ `#${id}` }>
                                    { title }
                                </a>
                            </li>
                        )) }
                        <li> <a href="./MoraAyalaCurriculumV.pdf" download className={ 'bg-gradient-to-r from-pink-300 to-pink-200 text-white px-4 py-2 rounded-md' }>Curriculum</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}