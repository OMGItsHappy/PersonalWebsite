'use client'
import Image from 'next/image'
import "./document.css"
import AboutMe from './aboutMe'
import Education from './Education'
import Experience from './Experience'
import ProfessionalDevelopment from './ProfessionalDevelopment'
import Projects from './Projects'
import Skills from './Skills'
import { useEffect, useState } from 'react'
import Link from 'next/link'


export default function Home() {

  return (
    <main className="overflow-auto pt-[20vh]">
      <AboutMe />
      <Education/>
      <Experience/>
      <ProfessionalDevelopment/>
      <Projects/>
      <Skills/>



      <div className='flex justify-center items-center'>

        <div id = 'footer'>
        <Link href = "https://vercel.com/" id = 'link'>
            
              Hosted by <span className='underline'>Vercel</span>
            
          </Link>
          <Link 
            href = 'https://github.com/OMGItsHappy/PersonalWebsite' 
            id = "link">
           Code hosted on <span className='underline'>GitHub</span>
          </Link>
        </div>

      </div>
    </main>
  )
}
