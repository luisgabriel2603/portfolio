const Home = () => {

    return (
        <div className="w-full h-screen border-b-2 border-slate-100 flex items-center justify-center" id="home">
            <div className="flex flex-col gap-2 max-w-[600px] w-3/5 text-center">
                <span className="border-b border-slate-400 pb-3 ">
                    <span className="text-4xl text-slate-900 uppercase font-semibold pb-8 ">
                        Prazer, meu nome é Luis Gabriel
                    </span>
                </span>
                <span className="text-slate-700 font-semibold pt-2">
                    Seja bem-vindo ao meu site!
                </span>
                <p className="text-slate-500 ">
                    Sou um desenvolvedor web dedicado a criar interfaces intuitivas e funcionais.<br /> Explore meus projetos e sinta-se à vontade para entrar em contato!
                </p>
                <div className="pt-2">   
                    <button type="button" className="mt-2 text-white bg-sky-500 py-3 px-6 rounded-2xl font-semibold transition-all duration-300 ease-in-out transform hover:bg-gradient-to-r hover:from-sky-400 hover:to-sky-500 hover:scale-105 focus:outline-none focus:ring-4 active:ring-sky-300 active:bg-sky-700 active:scale-95">
                        Projetos
                    </button>


                </div>
            </div>
        </div>
    )
}
export default Home;