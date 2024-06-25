import { Tab, Tabs } from "../Utils/Tab";
import Educational from "./Educational";
import Professional from "./Profissional";

const MyExperiences = () => {
    return (
        <div className="w-full flex  flex-col  py-24 items-center" id="experiencias">
            <div className="flex flex-col max-w-[1600px] w-4/5 rounded-lg  border-4 border-slate-50 bg-slate-50/85 min-h-[1100px]">
                <div className="py-8 sm:mx-8 text-center flex flex-col ">

                    <span className="max-sm:text-xl text-4xl text-slate-900 uppercase font-semibold bg-slate sm:mb-10 ">
                        Minhas Experiências
                    </span>
                    <span className="h-[5px] w-10 bg-gradient-to-r from-sky-400 to-sky-500 rounded-full mx-auto my-4 max-sm:my-6" />

                    <Tabs numberGrids={2} className="">
                        <Tab component={<Educational />}>Educacionais</Tab>
                        <Tab component={<Professional />}>Profissionais</Tab>
                    </Tabs>

                </div>
            </div>
        </div>

    );
}
export default MyExperiences;