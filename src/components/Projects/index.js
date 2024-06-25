import PortalTransparencia from '../../images/portalTransparencia.png';
import PortalSedam from '../../images/portalSedam.png';



const Projects = () => {
    return (
        <div className="w-full flex justify-center flex-col bg-slate-100 py-8 items-center" id="projetos">
            <div className="flex flex-col max-w-[1600px] w-4/5 ">
                <div className="py-8 text-center flex flex-col ">
                    <span className="text-4xl text-slate-900 uppercase font-semibold  ">
                        Projetos
                    </span>
                    <div className="grid grid-cols-12 mt-8  gap-y-16">
                        <div className="col-span-6 max-md:col-span-full flex justify-end max-sm:justify-center ">
                            <img className='max-sm:w-72'
                                alt="Portal da Transparência"
                                src={PortalTransparencia}
                                width={1094}
                                height={256}
                            />
                        </div>
                        <div className="col-span-6 max-md:col-span-full flex flex-col text-start gap-5 justify-center">
                            <span className='text-2xl font-semibold'>
                                Portal da Transparência
                            </span>
                            <span>
                                O Portal da Transparência da Secretaria de Estado do Desenvolvimento Ambiental é uma iniciativa que visa promover o controle social ao disponibilizar dados e informações públicas da SEDAM de forma acessível aos cidadãos.
                            </span>
                            <a href='https://transparencia.sedam.ro.gov.br/' target='_blank' id="vamos-la" className="text-center mt-2 text-white bg-sky-500 py-3 px-6 rounded-2xl font-semibold transition-all duration-300 ease-in-out transform hover:bg-gradient-to-r hover:from-sky-400 hover:to-sky-500  focus:outline-none focus:ring-4 active:ring-sky-300 active:bg-sky-700 " rel="noreferrer">
                                Consulte
                            </a>
                        </div>
                        <div className="col-span-6 max-md:col-span-full flex justify-end max-sm:justify-center items-center  ">
                            <img className='max-sm:w-72'
                                alt="Portal da Transparência"
                                src={PortalSedam}
                                width={700}
                                height={256}
                            />
                        </div>
                        <div className="col-span-6 max-md:col-span-full flex flex-col text-start gap-5 justify-center">
                            <span className='text-2xl font-semibold'>
                                Portal da SEDAM
                            </span>
                            <span>
                                O Portal da Secretaria de Estado do Desenvolvimento Ambiental (SEDAM) é uma plataforma projetada para facilitar o acesso às informações e serviços oferecidos pela SEDAM aos cidadãos. Através deste portal, é possível acessar diversos serviços, incluindo licenciamento, dispensas e declarações, de maneira prática e eficiente.
                            </span>
                            <a href='https://www.sedam.ro.gov.br/' target='_blank' id="vamos-la" className="text-center mt-2 text-white bg-sky-500 py-3 px-6 rounded-2xl font-semibold transition-all duration-300 ease-in-out transform hover:bg-gradient-to-r hover:from-sky-400 hover:to-sky-500  focus:outline-none focus:ring-4 active:ring-sky-300 active:bg-sky-700 " rel="noreferrer">
                                Consulte
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
export default Projects;