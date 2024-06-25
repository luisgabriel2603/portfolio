import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";

const SideBar = () => {
    return (
        <div className="absolute  w-20 top-[40%] p-5 bg-slate-100 rounded-r-lg z-10 shadow-slate-200 shadow-lg max-sm:hidden">
            <div className="flex flex-col gap-2 text-slate-500 justify-center items-center">
                <a href="https://www.instagram.com/luisgabriel_cm" target="_blank" rel="noreferrer" className="hover:bg-slate-300/50 active:text-slate-950 hover:font-bold p-2 border-slate-300 rounded-full">
                    <FaInstagram size={40} className="text-slate-500 hover:text-pink-600/90" />
                </a>
                <a href="https://github.com/luisgabriel2603" target="_blank" rel="noreferrer" className="hover:bg-slate-300/50 active:text-slate-950 hover:font-bold p-2 border-slate-300 rounded-full">
                    <FaGithub size={40} className="text-slate-500 hover:text-black" />
                </a>
                <a href="https://www.linkedin.com/in/luis-gabriel-mota" target="_blank" rel="noreferrer" className="hover:bg-slate-300/50 active:text-slate-950 hover:font-bold p-2 border-slate-300 rounded-full">
                    <FaLinkedin size={40} className="text-slate-500 hover:text-[#0045b5]" />
                </a>
            </div>

        </div>
    );
};
export default SideBar;