const About = () => {
    return (
        <div className="w-full flex justify-center flex-col bg-slate-100 py-8 items-center">
            <div className="flex flex-col max-w-[1600px] w-4/5 ">
                <div className="py-8 text-center flex flex-col ">
                    <span className="text-4xl text-slate-900 uppercase font-semibold  ">
                        Sobre
                    </span>
                    <span className="h-[5px] w-10 bg-gradient-to-r from-sky-400 to-sky-500 rounded-full mx-auto my-12" />
                    <div className="grid grid-cols-2 gap-3">
                        <div className="flex flex-col gap-y-4">
                            <span className="border-b pb-3 text-xl text-slate-700 font-semibold">
                                Quem eu sou?
                            </span>
                            <p className="text-left flex flex-col gap-y-3">
                                <span>

                                    Atualmente, sou um <span className="font-medium"> Desenvolvedor Web com foco em Frontend</span> conhecido por construir sites interativos, modernos e funcionais que alcançam os objetivos definidos com sucesso.
                                </span>
                                <span>

                                    Profissional proativo e comunicativo, combino habilidades técnicas robustas com experiência comprovada no gerenciamento de sistemas complexos e bancos de dados variados.
                                </span>
                                <span>

                                    Estou sempre buscando novos desafios e oportunidades para aplicar minha paixão pelo desenvolvimento web e entregar soluções inovadoras que elevam a experiência do usuário.
                                </span>


                            </p>

                        </div>
                        <div className="flex flex-col">
                            <span className="border-b pb-3 text-xl text-slate-700 font-semibold">
                                Minhas habilidades
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default About;