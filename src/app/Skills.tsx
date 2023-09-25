'use client'

import { ProgressBar } from "primereact/progressbar"

export default function Skills() {

    var black = false;

    return(
        <div id ="page">
            <div id="Skills"></div>
            <div id = "items">
                <div id = "page-header">
                    Skills
                </div>
                <div id = "header">
                    Languages
                </div>
                <div id = "content" className="">
                <div className="rounded-2xl justify-center flex flex-wrap w-fit" >

            {[ // + (black ? "bg-gray-900" : "bg-gray-950")
["Python",85,"4 Years"],
["C++",80,"3 Years"],
['git', 80, '3 Years'],
["JavaScript", 60, "1 Year"],
["Next.Js", 50, "6 Months"],
['Linux', 50, "3 Years"],
['Docker', 40, "6 Months"]
            ].map(function(element) {
                black = !black;
                    return (
                        <div className={"FlexContainer " } key={element[0]}>
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

            

        </div>
    )
}




