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
                <div id = "content" className="justify-center flex flex-wrap">
                

            {[
["Python",85,"4 Years"],
["C++",80,"3 Years"],
['git', 80, '3 Years'],
["JavaScript", 60, "1 Year"],
["Next.Js", 50, "6 Months"],
['Linux', 50, "3 Years"],
['Docker', 40, "6 Months"]
            ].map(function(element) {
                    return (
                        <div className="FlexContainer">
                        <div>{element[0]}</div>
                        <div className="flex justify-center">
                            <ProgressBar value={element[1]} showValue={false} className="!h-10" id="progBar"/>
                        </div>
                        <div>
                            {element[2]}
                        </div>
                    </div>
                    )
            })}
            </div>
            </div>

            

        </div>
    )
}




