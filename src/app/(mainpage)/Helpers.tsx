import test from "node:test";
import React, { useEffect } from "react";

export function RandomAnimation({children} : {children : React.ReactNode})
{
    
    // const randomIndex = function() {return Math.floor(Math.random() * strings.length);}
    // const randomString = function(): string {return strings[randomIndex()];}


    useEffect(() => {

        var left = 0;
        const strings = ['animate__fadeInLeft', 'animate__fadeInRight'];

        let observer = new IntersectionObserver(entries => { 
            entries.forEach(entry => {
            // If the element is visible
            if (entry.isIntersecting) {
              // Add the animation class
              entry.target.classList.add(strings[left]);
              left = (left + 1) % strings.length;
              entry.target.classList.remove('invisible');
            }
        })})

        var elements = document.querySelectorAll("#randomly-animate");

        elements.forEach(element => {
            observer.observe(element);
        })

    }, [])

    if (children == null)
    {
        return (
            <></>
        );
    }

    return (<>
            {React.Children.map(children, (child) => {

                return (
                    <div className={"invisible animate__animated "} id = "randomly-animate">
                        {child}
                    </div>
                );
            })}
        </>
    );
}