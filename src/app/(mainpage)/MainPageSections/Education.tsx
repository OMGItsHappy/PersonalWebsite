import Link from "next/link";
import { Button } from "primereact/button";
import Courses from "../courses/page";
import { useState } from "react";

export default function Education() {

    const [showCourses, setShowCourses] = useState(false);

    return (<>
    <div id = "page">
        <div id = "Education"></div>
        <div id = "items" >
            <div id='page-header'>
                <h1>Education</h1>
            </div>
            <div id = "header">
            <a href = "https://www.sdsmt.edu/" className="my-underline">South Dakota Mines</a>
            </div>
            <div id = "subheader">
            B.S. Computer Science, Math Minor<br></br>
            Expected Graduation <span id= "bold">December 2024</span>
            </div>
            <div id= "content">
            3.5 GPA<br/>
            Dean&apos;s List Spring 2023<br/>
            Dean&apos;s List Fall 2023<br/><br/>

            <div className={(showCourses 
                ? "animate__animated animate__zoomIn animate-in" 
                : 'animate__animated animate__zoomOut animate-out') 
                + " overflow-auto no-scrollbar rounded-lg"}
                id = "animate-out"
                style={{height:"30%"}}>
                <Courses></Courses>
            </div>
            <Button className="mt-5 p-button-primary bg-transparent" onClick={() => setShowCourses(!showCourses)}>Courses</Button>
            </div>
        </div>
    </div>
    </>)
}
