

import { useEffect, useState } from "react";
import MyPicture from "../../images/Picture.png"
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { scrollToSection } from "../../lib/utils";

const Navbar = ({ children }) => {
    const [open, setOpen] = useState();

    useEffect(() => {
        const link = document.querySelector('a[href="#home"]');
        if (link) {

            link.addEventListener('click', (event) => scrollToSection(event, 'home'));

            return () => {
                link.removeEventListener('click', (event) => scrollToSection(event, 'home'));
            };
        }
    }, []);
    useEffect(() => {
        const link = document.querySelector('button[id="btnHome"]');
        if (link) {

            link.addEventListener('click', (event) => scrollToSection(event, 'home'));

            return () => {
                link.removeEventListener('click', (event) => scrollToSection(event, 'home'));
            };
        }
    }, []);
    useEffect(() => {
        const link = document.querySelector('button[id="btnSobre"]');
        if (link) {

            link.addEventListener('click', (event) => scrollToSection(event, 'sobre'));

            return () => {
                link.removeEventListener('click', (event) => scrollToSection(event, 'sobre'));
            };
        }
    }, []);
    useEffect(() => {
        const link = document.querySelector('button[id="btnExperiencias"]');
        if (link) {

            link.addEventListener('click', (event) => scrollToSection(event, 'experiencias'));

            return () => {
                link.removeEventListener('click', (event) => scrollToSection(event, 'experiencias'));
            };
        }
    }, []);
    useEffect(() => {
        const link = document.querySelector('button[id="btnProjetos"]');
        if (link) {

            link.addEventListener('click', (event) => scrollToSection(event, 'projetos'));

            return () => {
                link.removeEventListener('click', (event) => scrollToSection(event, 'projetos'));
            };
        }
    }, []);
    return (
        <>
            <nav className={`max-sm:fixed z-50 border-gray-200 border bg-slate-200 h-18 w-full text-slate-700 shadow-slate-300 shadow py-2`}>
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
                    <div className="h-full flex items-center ">
                        <a href="#home" className="flex items-center space-x-3 rtl:space-x-reverse px-4 ">
                            <img
                                src={MyPicture}
                                alt="Minha foto"
                                width={64}
                            />
                            <span className="self-center whitespace-nowrap  font-semibold text-lg max-sm:hidden">Luis Gabriel</span>
                        </a>
                    </div>

                    <button data-collapse-toggle="navbar-default" type="button" onClick={() => setOpen(!open)} className="inline-flex items-center p-2 mr-5 w-10 h-10 justify-center text-sm text-slate-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400  dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>

                    <div
                        className={`${open ? "absolute top-20 block scale-100 opacity-100" : "max-sm:hidden max-sm:scale-0 max-sm:opacity-0"
                            } transition-all duration-300 ease-in-out w-full md:block md:w-auto bg-slate-200 max-sm:shadow-slate-300 max-sm:shadow `}
                        id="navbar-default"
                    >
                        <ul className="font-medium flex flex-col p-1 md:p-0 mt-1 border-t border-slate-400/50  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 mx-5 px-3 max-sm:gap-1 max-sm:mb-3">
                            <li>
                                <button type="button" id="btnHome" classNameName=" font-medium hover:text-slate-950 rounded-full hover:bg-slate-200/50 px-5 py-2">
                                    Home
                                </button>
                            </li>
                            <li>
                                <button type="button" id="btnSobre" classNameName=" font-medium hover:text-slate-950 rounded-full hover:bg-slate-200/50 px-5 py-2">
                                    Sobre
                                </button>
                            </li>
                            <li>
                                <button type="button" id="btnExperiencias" classNameName=" font-medium hover:text-slate-950 rounded-full hover:bg-slate-200/50 px-5 py-2">
                                    Experiências
                                </button>
                            </li>
                            <li className="justify-between flex ">
                                <button type="button" id="btnProjetos" classNameName=" font-medium hover:text-slate-950 rounded-full hover:bg-slate-200/50 px-5 py-2">
                                    Projetos
                                </button>
                                <div className="flex gap-3 sm:hidden ">
                                    <a href="https://www.instagram.com/luisgabriel_cm" target="_blank" rel="noreferrer" className=" font-medium hover:text-slate-950 rounded-full hover:bg-slate-200/50 ">
                                        <FaInstagram className="w-6 h-6 " />
                                    </a>

                                    <a href="https://github.com/luisgabriel2603" target="_blank" rel="noreferrer" className=" font-medium hover:text-slate-950 rounded-full hover:bg-slate-200/50 ">
                                        <FaGithub className="w-6 h-6 " />
                                    </a>

                                    <a href="https://www.linkedin.com/in/luis-gabriel-mota" target="_blank" rel="noreferrer" className=" font-medium hover:text-slate-950 rounded-full hover:bg-slate-200/50 ">
                                        <FaLinkedin className="w-6 h-6 " />
                                    </a>
                                </div>
                            </li>

                            {/* <li>
                                <LinkNavbar href="#contato">
                                    Contato
                                </LinkNavbar>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="h-screen w-screen" onClick={() => { setOpen(false) }} onTouchStart={() => { setOpen(false) }} onKeyDown={() => { setOpen(false) }}>
                {children}
            </div>
        </>
    );
};
export default Navbar;