
'use client'
import { Button } from 'primereact/button';
import { ProgressBar } from 'primereact/progressbar';

export default function Experience() {
    return (
        <>
        <div id="page">
            <div id = "Experience"></div>
            <div id = "items">
                <div id = "page-header">
                    Experience
                </div>
                <div id = "header">
                    Student Researcher
                </div>
                <div id = "subheader">
                    CatLab, South Dakota Mines
                    <div id = "bold">January 2023 - PRESENT</div>
                </div>
                <div id = "content">
                -  Led the development of Next.js Web Apps for internal use and mine site deployment<br/>
                - Managed a self-driven development environment<br/>
                - Advocated for implementation of proper DevOps cycle and Agile software development<br/>
                </div>
            </div>
            <div id = "items">
                <div id = "header">
                South Dakota Mines LAN Crew
                </div>
                <div id = "subheader">
                South Dakota Mines
                    <div id = "bold">January 2023 - May 2023</div>
                </div>
                <div id = "content">
                - Installed IOT devices on the school network<br/>
                - Reorganized and maintained network closets<br/>
                - Responded to and fixed user problems<br/>
                </div>

            </div>
        </div>
        </>
    )
}

/*
possible scrolling timelime
*/