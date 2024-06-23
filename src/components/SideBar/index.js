import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";

const SideBar = () => {
    return (
        <div className="absolute  w-20 top-[40%] p-5 bg-slate-100 rounded-r-lg z-10 shadow-slate-200 shadow-lg">
            <div className="flex flex-col gap-2 text-slate-700">
                <FaInstagram size={36} className="hover:text-slate-950 hover:font-bold p-1 border-b border-slate-300" />
                <FaGithub size={36} className="hover:text-slate-950 hover:font-bold p-1 border-b border-slate-300" />
                <FaLinkedin size={36} className="hover:text-slate-950 hover:font-bold p-1 border-b border-slate-300" />
            </div>
        </div>
    );
};
export default SideBar;