import Link from "next/link";
import { Button } from "primereact/button";

export default function Education() {
    return (<>
    <div id = "page">
        <div id = "Education"></div>
        <div id = "items" >
            <div id='page-header'>
                <h1>Education</h1>
            </div>
            <div id = "header">
            South Dakota Mines
            </div>
            <div id = "subheader">
            B.S. Computer Science, Computational Statistics Minor<br></br>
            Expected Graduation <span id= "bold">December 2024</span>
            </div>
            <div id= "content">
            3.5 GPA<br/>
            Dean&apos;s List Spring 2023<br></br>
            <Link href = "/courses">
                <Button className="mt-5 p-button-primary bg-transparent">Courses</Button>
            </Link>
            </div>
        </div>
    </div>
    </>)
}
