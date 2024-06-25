import { useEffect } from "react";
import { scrollToSection } from "../../lib/utils";



const Home = () => {
    useEffect(() => {
        const link = document.querySelector('button[id="vamos-la"]');
        link.addEventListener('click', (event) => scrollToSection(event, 'sobre'));
    
        return () => {
          link.removeEventListener('click', (event) => scrollToSection(event, 'sobre'));
        };
      }, []);

    return (
        <div className="w-full h-[768px] border-b-2 border-slate-100 flex items-center justify-center" id="home">
            <div className="flex flex-col gap-2 max-w-[600px] w-3/5 text-center">
                <span className="border-b border-slate-400 pb-3 ">
                    <span className="text-4xl max-sm:text-2xl text-slate-900 uppercase font-semibold pb-8 ">
                        Prazer, meu nome é Luis Gabriel
                    </span>
                </span>
                <span className="text-slate-700  italic pt-2">
                    "Onde a arte do design encontra a ciência da programação."

                </span>
                <p className="text-slate-500 ">
                    Sou um desenvolvedor web comprometido em criar interfaces intuitivas e funcionais que proporcionam experiências excepcionais.<br /> Explore meu portfólio e sinta-se à vontade para entrar em contato!
                </p>
                <div className="pt-2">
                    <button type="button" id="vamos-la" className="mt-2 text-white bg-sky-500 py-3 px-6 rounded-2xl font-semibold transition-all duration-300 ease-in-out transform hover:bg-gradient-to-r hover:from-sky-400 hover:to-sky-500 hover:scale-105 focus:outline-none focus:ring-4 active:ring-sky-300 active:bg-sky-700 active:scale-95">
                        Vamos lá
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Home;