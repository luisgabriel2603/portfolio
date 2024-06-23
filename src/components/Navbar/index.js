import { FaCircleUser } from "react-icons/fa6";
import LinkNavbar from "./Link";

const Navbar = () => {

    return (
        <nav className="z-50 fixed flex justify-between bg-slate-100 h-20 w-full  items-center  text-slate-700 shadow-slate-200 shadow-xl">
            <a className="flex gap-1 items-center hover:cursor-pointer hover:text-slate-950 border-r mx-5 pr-8 h-4/6 border-slate-300" href="#home">
                <FaCircleUser size={36} className="p-1" />
                <span className="font-semibold text-lg">
                    Luis Gabriel
                </span>
            </a>
            <div className="flex gap-5 items-center">
                <LinkNavbar>
                    Home
                </LinkNavbar>
                <LinkNavbar>
                    Sobre
                </LinkNavbar>
                <LinkNavbar>
                    Projetos
                </LinkNavbar>
                <LinkNavbar>
                    Contato
                </LinkNavbar>
            </div>
        </nav>
    );
};
export default Navbar;