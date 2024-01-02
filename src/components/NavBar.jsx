import { useState } from "react";
import { close, logo, menu, mexico, us } from '../assets/';
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
            <ul className={ 'list-none sm:flex hidden justify-end items-center flex-1 z-50' }>
                { navLinks.map(({ id, title }, index) => (
                    <li key={ id }
                        className={ ` font-glory text-white ${index === navLinks.length ? "mr-0" : "mr-10"}` }>
                        <a href={ `#${id}` } className={ 'cursor-pointer' }>
                            { title }
                        </a>
                    </li>
                )) }
                <li><a href="./MoraAyalaCurriculumVEs.pdf" download className={ 'bg-gradient-to-r from-zinc-500 to-zinc-800 text-white px-4 py-2 rounded-md hover:bg-gradient-to-b transition-all mr-4 ' }>Curriculum (
                    <img src={ mexico }
                        alt="Spanish"
                        className={ 'w-[20px] h-[20px] inline-block' } />
                    )</a></li>
                <li><a href="./MoraAyalaCurriculumVEn.pdf" download className={ 'bg-gradient-to-r from-zinc-500 to-zinc-800 text-white px-4 py-2 rounded-md hover:bg-gradient-to-b transition-all ' }>Curriculum (
                    <img src={ us }
                        alt="english"
                        className={ 'w-[20px] h-[20px] inline-block' } />
                    )</a></li>
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
                    className={ ` ${toggle ? 'flex flex-col' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[150px] rounded-xl sidebar  ` }>
                    <ul className={ 'flex list-none flex-col justify-end items-center flex-1 gap-4' }>
                        { navLinks.map(({ id, title }, index) => (
                            <li key={ id }
                                className={ `font-glory text-white cursor-pointer ${index === navLinks.length ? "mb-0" : "mb-4"}` }>
                                <a href={ `#${id}` }>
                                    { title }
                                </a>
                            </li>
                        )) }
                        <li> <a href="./MoraAyalaCurriculumVEs.pdf" download className={ 'bg-gradient-to-r from-zinc-500 to-zinc-800 text-white px-4 py-2 rounded-md  ' }>Curriculum (
                            <img src={ mexico }
                                alt="espanol"
                                className={ 'w-[20px] h-[20px] inline-block' } />
                            )</a></li>
                        <li className="mt-4"> <a href="./MoraAyalaCurriculumVEn.pdf" download className={ 'bg-gradient-to-r from-zinc-500 to-zinc-800 text-white px-4 py-2 rounded-md mt-4 ' }>Curriculum (
                            <img src={ us }
                                alt="english"
                                className={ 'w-[20px] h-[20px] inline-block' } />
                            )</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}