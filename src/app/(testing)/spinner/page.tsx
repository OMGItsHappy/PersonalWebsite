'use client'
import { useState } from "react";
import Spinner from "./Spinner.js";

export default function Page() {

    const [selected, setSelected] = useState(0);

    function logClick (clickId : any) {
        setSelected(clickId);
    }

    return (
        <>
        <div className="h-20vh overflow-hidden">
            <Spinner 
            clickFunc = {logClick}
            count = {8}/>
        </div>
        <div className="h-[50vh] bg-blue-800" onClick={() => logClick("1")}>
            {selected}
        </div>
        
        </>
    )
}