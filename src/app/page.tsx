import Image from 'next/image'
import "./document.css"
import AboutMe from './aboutMe'
import Education from './Education'
import Experience from './Experience'
import ProfessionalDevelopment from './ProfessionalDevelopment'
import Projects from './Projects'
import Skills from './Skills'


export default function Home() {
  return (
    <main className="overflow-auto pt-5 ">
      <AboutMe />
      <Education/>
      <Experience/>
      <ProfessionalDevelopment/>
      <Projects/>
      <Skills/>
    </main>
  )
}
