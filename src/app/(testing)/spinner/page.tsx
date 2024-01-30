'use client'
import { useState } from "react";
import Spinner from "./Spinner.js";
import AboutMe from "../../(mainpage)/MainPageSections/aboutMe.jsx";
import Skills from "../../(mainpage)/MainPageSections/Skills.jsx";

export default function Page() {

    const [selected, setSelected] = useState(0);

    function logClick (clickId : any) {
        setSelected(clickId);
    }

    const projects = ["Homelab", 'Keyboard', "Longboard", "Website"]

    return (
        <>
        <div className="h-20vh overflow-hidden">
            <Spinner 
            clickFunc = {logClick}
            count = {8}/>
        </div>
        <div className="h-[50vh] bg-blue-800">
            {selected == 0 ? <AboutMe/> : <Skills/>}
        </div>
        
        </>
    )
}