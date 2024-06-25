
import { FaJsSquare } from "react-icons/fa";
import { FaBootstrap, FaCss3Alt, FaGitAlt, FaHtml5, FaJava, FaReact } from "react-icons/fa6";
import { MdOutlineDesignServices } from "react-icons/md";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMysql, SiTeamspeak, SiTypescript } from "react-icons/si";
import { cn } from "../../lib/utils";
import { BiLogoTypescript } from "react-icons/bi";

const MySkills = [
    {
        icon: <FaReact />,
        text: "React"
    },
    {
        icon: <FaHtml5 />,
        text: "HTML5"
    }, {
        icon: <FaCss3Alt />,
        text: "CSS3"
    },
    {
        icon: <FaJsSquare />,
        text: "JavaScript"
    },
    {
        icon: <BiLogoTypescript size={70} />,
        text: "JavaScript"
    },
    {
        icon: <RiTailwindCssFill />,
        text: "TailwindCSS"
    },
    {
        icon: <FaBootstrap />,
        text: "Bootstrap"
    },
    {
        icon: <FaJava />,
        text: "Java"
    },
    {
        icon: <SiMysql />,
        text: "MySQL"
    },
    {
        icon: <FaGitAlt />,
        text: "Git",

    },
    {
        icon: <MdOutlineDesignServices />,
        text: "Design UX/UI",

    },
    {
        icon: <SiTeamspeak />,
        text: "Comunicação",

    },

]

const About = () => {
    return (
        <div className="w-full flex justify-center flex-col bg-slate-100 py-8  items-center shadow-lg" id="sobre">
            <div className="flex flex-col max-w-[1600px] w-4/5 mb-8">
                <div className="py-8 text-center flex flex-col ">
                    <span className="text-4xl max-sm:text-2xl text-slate-900 uppercase font-semibold  ">
                        Sobre
                    </span>
                    <span className="h-[5px] w-10 bg-gradient-to-r from-sky-400 to-sky-500 rounded-full mx-auto my-12 max-sm:my-6" />
                    <div className="grid grid-cols-2 gap-3">
                        <div className="flex flex-col gap-y-4 max-md:col-span-2">
                            <span className="border-b pb-3 text-xl text-slate-700 font-semibold">
                                Quem eu sou?
                            </span>

                            <p className="text-left flex flex-col gap-y-3">

                                <span>
                                    Atualmente, sou um <span className="font-medium">Desenvolvedor Web com foco em Frontend</span>, com habilidades em criar sites interativos, modernos e funcionais. Meu trabalho é guiado pelo objetivo de desenvolver soluções que não apenas atendam, mas superem as expectativas e necessidades dos usuários.
                                </span>
                                <span>
                                    Sou um profissional proativo e comunicativo, combinando habilidades técnicas robustas com uma vasta experiência em gerenciamento de sistemas complexos e diversos bancos de dados.
                                </span>
                                <span>
                                    Apaixonado por desenvolvimento web, estou constantemente buscando novos desafios e oportunidades para aplicar meus conhecimentos e habilidades. Meu compromisso é oferecer soluções que elevam a experiência do usuário, utilizando as mais recentes tecnologias e melhores práticas da atualidade.
                                </span>
                                <span>
                                    Acredito no poder da colaboração e estou sempre aberto a discutir novas ideias e projetos. Se você tem um desafio ou uma visão para um projeto, eu adoraria ajudar a torná-lo realidade. Explore esse espaço e sinta-se à vontade para entrar em contato!
                                </span>
                            </p>
                        </div>
                        <div className="flex flex-col gap-y-4 max-md:col-span-2 max-md:mt-8">
                            <span className="border-b pb-3 text-xl text-slate-700 font-semibold">
                                Minhas habilidades
                            </span>
                            <div className="grid grid-cols-12 items-center justify-center text-center gap-y-8 p-3">
                                {MySkills.map((skills) => (
                                    <div className={cn("col-span-3  max-md:col-span-6 max-lg:col-span-4 group relative overflow-hidden", String(skills.style))}>
                                        <div className="mx-auto p-1 flex justify-center text-6xl transition-colors duration-500 text-slate-500 group-hover:text-slate-400">
                                            {skills.icon}
                                        </div>
                                        <div className="absolute inset-0 flex items-center justify-center bg-slate-100/80 transition-transform duration-500 transform translate-x-[150%] group-hover:translate-x-0 group-active:translate-x-0 group-focus:translate-x-0 rounded-xl text-slate-950 ">
                                            {skills.text}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default About;