import { useEffect } from "react";
import { getElementForScroll } from "../../../lib/utils";

const LinkNavbar = ({ href, children }) => {
    useEffect(() => {
        href && getElementForScroll(href.replace("#",""))
    }, [href]);
    return (
        <a className=" font-medium hover:text-slate-950 rounded-full hover:bg-slate-200/50 px-5 py-2" href={href}>
            {children}
        </a>
    );
};
export default LinkNavbar