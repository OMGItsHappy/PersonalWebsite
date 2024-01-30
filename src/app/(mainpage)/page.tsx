'use client'
import Image from 'next/image'
import "./document.css"
import AboutMe from './MainPageSections/aboutMe'
import Education from './MainPageSections/Education'
import Experience from './MainPageSections/Experience'
import ProfessionalDevelopment from './MainPageSections/ProfessionalDevelopment'
import Projects from './MainPageSections/Projects'
import Skills from './MainPageSections/Skills'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import 'animate.css';
import Spinner from '../(testing)/spinner/Spinner'
import { RandomAnimation } from './Helpers'
import SeeMyWork from './MainPageSections/SeeMyWork'



export default function Home({params} : {params : {name : string}}) {

  let [scroll, setScroll] = useState(0)
  let [time, setTime] = useState(Date.now())

  function handleScroll(event: React.UIEvent<EventTarget>) { 
    const target = event.currentTarget as HTMLDivElement;

    if (target.scrollTop > scroll && Date.now() - time > 50) {
      document.getElementsByClassName("navbar")[0].classList.add("hidden")
      
      setTime(Date.now())
    }
     else if (target.scrollTop < scroll && Date.now() - time > 500) {
      document.getElementsByClassName("navbar")[0].classList.remove("hidden")
      setTime(Date.now())
     }

    setScroll(scroll => target.scrollTop);
  }

  return (
    <main id = 'main-page' 
    className="overflow-auto pt-[20vh] animate__animated animate__fadeInUp"  
    >
      <div>
        
        {params.name}
        <RandomAnimation>
          <AboutMe/>
          <Education/>
          <Experience/>
          <ProfessionalDevelopment/>
          <Projects/>
          <SeeMyWork/>
        </RandomAnimation>

        <Skills/>


        <div className='flex justify-center items-center'>

          <div id = 'footer'>
          <Link href = "https://vercel.com/" id = 'link'>
              
                Hosted by <span className='my-underline'>Vercel</span>
              
            </Link>
            <Link 
              href = 'https://github.com/OMGItsHappy/PersonalWebsite' 
              id = "link">
            Code hosted on <span className='my-underline'>GitHub</span>
            </Link>
            <Link href='mailto: oliverschwab03@gmail.com' id = "link"><span className ='my-underline'>Contact Me!</span></Link>
          </div>

        </div>
      </div>
    </main>
  )
}