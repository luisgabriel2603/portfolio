const LinkNavbar = ({href, children}) =>{

    return(
        <a className=" font-medium hover:text-slate-950 rounded-full hover:bg-slate-200/50 px-5 py-2" href={href}>
            {children}
        </a>
    );
};
export default LinkNavbar