'use client'

import { ProgressBar } from "primereact/progressbar"
import { useEffect } from "react";

export default function Skills() {

    useEffect(() => {

        let observer = new IntersectionObserver( entries => { 
            entries.forEach(entry => {
            // If the element is visible
            if (entry.isIntersecting) {
              // Add the animation class
              entry.target.classList.add("animate__animated", "animate__fadeInUp");
              entry.target.classList.remove('invisible');
              return;
            }
            entry.target.classList.remove("animate__animated", "animate__fadeInUp");
            entry.target.classList.add('invisible');
        })})

        var elements = document.querySelectorAll(".skill-row");

        elements.forEach(element => {
            observer.observe(element);
        })

        //observer.observe(document.querySelectorAll(".FlexContainer"));

    }, [])

    var black = false;

    /*                <div id = "header">
                    Languages
                </div>*/

    return(
        <div id ="page">
            <div id="Skills"></div>
            <div id = "items">
                <div id = "page-header">
                    Skills
                </div>

                <div id = "" className="">
                    <div className="rounded-2xl justify-center flex flex-wrap !p-5" id = "skills-table">

                        <div className="row-header FlexContainer skill-row" key="label" id = "skill-row">
                            <div>Skill</div>
                            <div className="flex justify-center">
                                Skill level
                            </div>
                            <div>
                                Time used
                            </div>
                        </div>

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
                                <div className={"FlexContainer skill-row" } key={element[0]}  id = "skill-row">
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




