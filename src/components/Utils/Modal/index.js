import { useState } from "react"

const Modal = ({ children, label, titleModal }) => {


    const [open, setOpen] = useState(false);
    return (
        <>
            <button data-modal-target="default-modal" data-modal-toggle="default-modal" onClick={() => { setOpen(!open) }} className="block mt-2 text-white bg-sky-500 py-1.5 px-3 text-xs rounded-2xl font-semibold transition-all duration-300 ease-in-out transform hover:bg-gradient-to-r hover:from-sky-400 hover:to-sky-500 hover:scale-105 focus:outline-none focus:ring-4 active:ring-sky-300 active:bg-sky-700 active:scale-95 " type="button">
                {label}
                
            </button>

            <div id="default-modal"
                tabindex="-1"
                aria-hidden={!open}
                className={`${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"} fixed inset-0 z-50 flex justify-center items-center w-full h-screen bg-black bg-opacity-50 transition-opacity duration-300`}
            >
                <div className="relative p-4 w-full max-w-2xl h-full">
                    <div className="relative rounded-lg shadow-xl border-slate-200 border-4 bg-slate-50 py-4 overflow-y-auto max-h-[90vh]">
                        <div className="flex items-center justify-between pt-5 px-5 pb-2 border-b rounded-t border-gray-300 mx-4">
                            <h3 className="text-lg font-semibold text-slate-900 w-full uppercase">
                                {titleModal}
                            </h3>
                            <button type="button" onClick={() => setOpen(!open)} className="absolute top-4 right-0 text-slate-400 bg-transparent hover:text-slate-700/80 rounded-lg text-sm w-8 h-8" data-modal-hide="default-modal">
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                                <span className="sr-only">Fechar</span>
                            </button>
                        </div>
                        <div className="p-4 md:p-5 mx-4 space-y-4 text-slate-700/90 mb-5">
                            {children}
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Modal