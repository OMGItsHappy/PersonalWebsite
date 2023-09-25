'use client'

import { ProgressBar } from "primereact/progressbar"

export default function Skills() {
    return(
        <div id ="page">

            <div id = "items">
                <div id = "page-header">
                    Skills
                </div>
                <div id = "header">
                    Languages
                </div>
                <div id = "content">
                -  Python <br/>
                -  C++<br/>
                -  Java<br/>
                -  JavaScript<br/>
                -  HTML/CSS<br/>
                -  SQL<br/>
                </div>
            </div>
            

        </div>
    )
}

/*<div className="FlexContainer border">
                <div>Python</div>
                <ProgressBar value={50} showValue={false} className="!h-10" id="progBar"/>
                <div></div>
            </div>*/


