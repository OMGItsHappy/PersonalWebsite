'use client'

import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import './table.css'

export default function Courses() {
    /*
CENG	320	SDSMT SD School of Mines	RISC Assembly				A
							
CSC	315	SDSMT SD School of Mines	Data Structures & Algorithms				A
CSC	340	SDSMT SD School of Mines	Software Engineering & Design				B
ENGL	279	SDSMT SD School of Mines	Communication STEM Workplace				A
MATH	315	SDSMT SD School of Mines	Linear Algebra				B
CSC	215	SDSMT SD School of Mines	Programming Techniques				B
CSC	251	SDSMT SD School of Mines	Finite Structures				B
							
MATH	225	SDSMT SD School of Mines	Calculus III				B
CENG	244	SDSMT SD School of Mines	Intro to Digital Systems				B
							
CSC	115	SDSMT SD School of Mines	Test-Driven Software Develop				A
MATH	125	SDSMT SD School of Mines	Calculus II				C
							
							
CENG	325	SDSMT SD School of Mines	CPU & GPU Organization and Architecture				
CSC	372	SDSMT SD School of Mines	Analysis of Algorithms				
CSC	459	SDSMT SD School of Mines	Introduction to Data Science				
CSC	461	SDSMT SD School of Mines	Programming Languages				
CSC	463	SDSMT SD School of Mines	Capstone Design I				

*/

    var Courses = [
        {
            "Course Type": "CENG",
            "Number": "320",
            "Course Name": "RISC Assembly",
            "Grade": "A",
            "Status": "Completed",
        },
        {
            "Course Type": "CSC",
            "Number": "315",
            "Course Name": "Data Structures & Algorithms",
            "Grade": "A",
            "Status": "Completed",
            "null": null
        },
        {
            "Course Type": "CSC",
            "Number": "340",
            "Course Name": "Software Engineering & Design",
            "Grade": "B",
            "Status": "Completed",
            "null": null
        },
        {
            "Course Type": "ENGL",
            "Number": "279",
            "Course Name": "Communication STEM Workplace",
            "Grade": "A",
            "Status": "Completed",
            "null": null
        },
        {
            "Course Type": "MATH",
            "Number": "315",
            "Course Name": "Linear Algebra",
            "Grade": "B",
            "Status": "Completed",
            "null": null
        },
        {
            "Course Type": "CSC",
            "Number": "215",
            "Course Name": "Programming Techniques",
            "Grade": "B",
            "Status": "Completed",
            "null": null
        },
        {
            "Course Type": "CSC",
            "Number": "251",
            "Course Name": "Finite Structures",
            "Grade": "B",
            "Status": "Completed",
            "null": null
        },
        {
            "Course Type": "MATH",
            "Number": "225",
            "Course Name": "Calculus III",
            "Grade": "B",
            "Status": "Completed",
            "null": null
        },
        {
            "Course Type": "CENG",
            "Number": "244",
            "Course Name": "Intro to Digital Systems",
            "Grade": "B",
            "Status": "Completed",
            "null": null
        },
        {
            "Course Type": "CSC",
            "Number": "115",
            "Course Name": "Test-Driven Software Develop",
            "Grade": "A",
            "Status": "Completed",
            "null": null
        },
        {
            "Course Type": "MATH",
            "Number": "125",
            "Course Name": "Calculus II",
            "Grade": "C",
            "Status": "Completed",
            "null": null
        },
        {
            "Course Type": "CENG",
            "Number": "325",
            "Course Name": "CPU & GPU Organization and Architecture",
            "Grade": null,
            "Status": "In Progress",
            "null": null
        },
        {
            "Course Type": "CSC",
            "Number": "372",
            "Course Name": "Analysis of Algorithms",
            "Grade": null,
            "Status": "In Progress",
            "null": null
        },
        {
            "Course Type": "CSC",
            "Number": "459",
            "Course Name": "Introduction to Data Science",
            "Grade": null,
            "Status": "In Progress",
            "null": null
        },
        {
            "Course Type": "CSC",
            "Number": "461",
            "Course Name": "Programming Languages",
            "Grade": null,
            "Status": "In Progress",
            "null": null
        },
        {
            "Course Type": "CSC",
            "Number": "463",
            "Course Name": "Capstone Design I",
            "Grade": null,
            "Status": "In Progress",
            "null": null
        }
    ]

return (<div className='overflow-auto' id = "course-table">

    <div className='m-5 rounded-2xl flex justify-center'>
        <DataTable value = {Courses} stripedRows={true} tableStyle={{maxWidth:"60vw"}} className='custom-datatable'>
            <Column field='Course Type' header='Course Type' />
            <Column field='Number' header='Course Number' />
            <Column field='Course Name' header='Course Name' />
            <Column field='Grade' header='Grade' />
            <Column field='Status' header='Status' />
        </DataTable>
    </div>
</div>)

}