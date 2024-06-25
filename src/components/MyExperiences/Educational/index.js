import Modal from "../../Utils/Modal";

const Educational = () => {
    return (
        <div className="p-4 text-start">
            <p className="font-semibold mb-4 text-lg">Formações:</p>
            <ul className="list-disc flex flex-col gap-y-5 ">
                <li>
                    <p>Iniciei minha jornada no Instituto Federal de Rondônia (IFRO), onde concluí o curso Técnico em Informática. Durante esse período, adquiri fundamentos sólidos em programação, desenvolvimento de sistemas e gestão de tecnologia da informação.</p>
                </li>
                <li>
                    <p>Atualmente, estou dedicado ao curso de Engenharia da Computação na Universidade da Amazônia (UNAMA), onde continuo a expandir meu conhecimento e aprofundar minhas habilidades na área. Estudar na UNAMA tem sido uma experiência enriquecedora, proporcionando-me não apenas conhecimentos teóricos avançados, mas também a oportunidade de aplicar esses conceitos em projetos práticos e desafiadores.</p>
                </li>

            </ul>

            <p className="font-semibold my-4 text-lg">Projetos e Estágios:</p>
            <ul className="list-decimal flex flex-col gap-y-4">
                <li>
                    <p>Projeto de reestruturação do laboratório de informática na Reserva Extrativista Rio Pacaás Novos.</p>

                    <ul className="list-disc my-2 flex flex-col gap-y-2 max-sm:hidden">
                        <li className="ml-5">
                            <p>
                                Participar do projeto de reestruturação do laboratório de informática na Reserva Extrativista Rio Pacaás Novos, em colaboração com o IFRO Campus Guajará-Mirim, foi uma experiência marcante em minha formação. Como aluno do Curso Técnico em Informática, contribuí na revitalização do espaço educacional da Escola Professor João da Mata dos Santos, instalando softwares educacionais e oferecendo suporte técnico aos moradores locais.

                                O projeto não apenas modernizou o ambiente de aprendizado, mas também implementou energia solar, transformando a escola em um centro de conhecimento sustentável. Essa experiência reforçou meu compromisso com a tecnologia como agente de mudança social e me ensinou a importância da educação para promover o desenvolvimento comunitário.
                            </p>
                        </li>
                        <li className="ml-5">
                            Período: Janeiro a dezembro de 2021
                        </li>

                        <a href="https://portal.ifro.edu.br/guajara-mirim/noticias/article?id=11583" target="_blank" className="max-w-[80%] w-60 text-center ml-5 text-white bg-sky-500 hover:bg-sky-700 px-4 py-2 rounded-lg  hover:no-underline transition duration-300 ease-in-out shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-sky-400" rel="noreferrer">
                            Saiba mais sobre o projeto
                        </a>
                    </ul>
                    <div className="sm:hidden">
                        <Modal label={"Saiba mais"} titleModal="Projeto de reestruturação do laboratório de informática na Reserva Extrativista Rio Pacaás Novos">
                            <ul className="list-disc my-2 flex flex-col gap-y-2">
                                <li className="ml-5">
                                    <p>
                                        Participar do projeto de reestruturação do laboratório de informática na Reserva Extrativista Rio Pacaás Novos, em colaboração com o IFRO Campus Guajará-Mirim, foi uma experiência marcante em minha formação. Como aluno do Curso Técnico em Informática, contribuí na revitalização do espaço educacional da Escola Professor João da Mata dos Santos, instalando softwares educacionais e oferecendo suporte técnico aos moradores locais.

                                        O projeto não apenas modernizou o ambiente de aprendizado, mas também implementou energia solar, transformando a escola em um centro de conhecimento sustentável. Essa experiência reforçou meu compromisso com a tecnologia como agente de mudança social e me ensinou a importância da educação para promover o desenvolvimento comunitário.
                                    </p>
                                </li>
                                <li className="ml-5">
                                    Período: Janeiro a dezembro de 2021
                                </li>

                                <a href="https://portal.ifro.edu.br/guajara-mirim/noticias/article?id=11583" target="_blank" className="max-w-[80%] w-60 text-center ml-5 text-white bg-sky-500 hover:bg-sky-700 px-4 py-2 rounded-lg  hover:no-underline transition duration-300 ease-in-out shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-sky-400" rel="noreferrer">
                                    Saiba mais sobre o projeto
                                </a>
                            </ul>
                        </Modal>
                    </div>

                </li>

                <li>
                    <p>
                        Estágiário do DETRAN -  Departamento Estadual de Trânsito de Rondônia
                    </p >
                    <ul className="list-disc my-2 flex flex-col gap-y-2 max-sm:hidden">
                        <li className="ml-5">
                            <p>

                                Durante meu estágio na Coordenadoria de Recursos Humanos do DETRAN, adquiri habilidades cruciais em gestão de dados, administração organizacional e segurança da informação. A experiência me proporcionou uma compreensão profunda sobre como sistemas governamentais operam e a importância da precisão e da confiabilidade na manipulação de informações sensíveis.

                                Aprendi a utilizar sistemas de gestão de forma estratégica para otimizar processos e melhorar a eficiência operacional. Além disso, o contato direto com diferentes departamentos e colaboradores fortaleceu minhas habilidades interpessoais e minha capacidade de trabalhar em equipe, colaborando efetivamente na resolução de problemas e na implementação de soluções.

                                Esses aprendizados são fundamentais na minha função atual como programador, onde aplico essas habilidades para desenvolver software que não apenas atenda aos requisitos técnicos, mas também ofereça soluções integradas que melhoram tanto a operação quanto a segurança dos sistemas que desenvolvo.
                            </p>
                        </li>
                        <li className="ml-5">
                            Período: Maio de 2022 a abril de 2023
                        </li>
                    </ul>
                    <div className="sm:hidden">
                        <Modal label={"Saiba mais"} titleModal="Estágiário do DETRAN">
                            <ul className="list-disc my-2 flex flex-col gap-y-2">
                                <li className="ml-5">
                                    <p>

                                        Durante meu estágio na Coordenadoria de Recursos Humanos do DETRAN, adquiri habilidades cruciais em gestão de dados, administração organizacional e segurança da informação. A experiência me proporcionou uma compreensão profunda sobre como sistemas governamentais operam e a importância da precisão e da confiabilidade na manipulação de informações sensíveis.

                                        Aprendi a utilizar sistemas de gestão de forma estratégica para otimizar processos e melhorar a eficiência operacional. Além disso, o contato direto com diferentes departamentos e colaboradores fortaleceu minhas habilidades interpessoais e minha capacidade de trabalhar em equipe, colaborando efetivamente na resolução de problemas e na implementação de soluções.

                                        Esses aprendizados são fundamentais na minha função atual como programador, onde aplico essas habilidades para desenvolver software que não apenas atenda aos requisitos técnicos, mas também ofereça soluções integradas que melhoram tanto a operação quanto a segurança dos sistemas que desenvolvo.
                                    </p>
                                </li>
                                <li className="ml-5">
                                    Período: Maio de 2022 a abril de 2023
                                </li>
                            </ul>
                        </Modal>
                    </div>

                </li>
                <li>
                    <p>
                        Estágiário da SEDAM -  Secretaria de Estado do Desenvolvimento Ambiental
                    </p >
                    <ul className="list-disc my-2 flex flex-col gap-y-2 max-sm:hidden">
                        <li className="ml-5">
                            <p>
                                Meu estágio na Secretaria de Estado de Desenvolvimento Ambiental (SEDAM) foi fundamental para minha formação como desenvolvedor. Contribuí no desenvolvimento dos novos sistemas que hoje estão a frente da secretaria e quem fazem parte do processo de renovação tecnológica da secretaria.

                                A experiência na SEDAM me proporcionou uma compreensão profunda sobre a integração da tecnologia na gestão ambiental sustentável. Aprendi a alinhar desenvolvimentos tecnológicos com políticas públicas e necessidades da comunidade, desenvolvendo habilidades em resolução de problemas e trabalho em equipe.

                                Esses aprendizados são essenciais na minha função atual como programador, onde continuo a utilizar as experiências na SEDAM para criar soluções que promovam um ambiente mais sustentável e eficiente.<br />
                                A partir dessa experiência de estágio, fui contratado pela SEDAM, onde atualmente desempenho outras funções.

                            </p>
                        </li>
                        <li className="max-sm:ml-5">
                            Período: Maio de 2023 a Novembro de 2023
                        </li>
                    </ul>
                    <div className="sm:hidden">
                        <Modal label={"Saiba mais"} titleModal="Estágiário da SEDAM">
                            <ul className="list-disc my-2 flex flex-col gap-y-2">
                                <li className="ml-5">
                                    <p>

                                        Durante meu estágio na Coordenadoria de Recursos Humanos do DETRAN, adquiri habilidades cruciais em gestão de dados, administração organizacional e segurança da informação. A experiência me proporcionou uma compreensão profunda sobre como sistemas governamentais operam e a importância da precisão e da confiabilidade na manipulação de informações sensíveis.

                                        Aprendi a utilizar sistemas de gestão de forma estratégica para otimizar processos e melhorar a eficiência operacional. Além disso, o contato direto com diferentes departamentos e colaboradores fortaleceu minhas habilidades interpessoais e minha capacidade de trabalhar em equipe, colaborando efetivamente na resolução de problemas e na implementação de soluções.

                                        Esses aprendizados são fundamentais na minha função atual como programador, onde aplico essas habilidades para desenvolver software que não apenas atenda aos requisitos técnicos, mas também ofereça soluções integradas que melhoram tanto a operação quanto a segurança dos sistemas que desenvolvo.
                                    </p>
                                </li>
                                <li className="ml-5">
                                    Período: Maio de 2022 a abril de 2023
                                </li>
                            </ul>
                        </Modal>
                    </div>

                </li>
            </ul>
        </div>

    );
};

export default Educational;