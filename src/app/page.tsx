import Image from 'next/image'
import "./document.css"
import AboutMe from './aboutMe'
import Education from './Education'
import Experience from './Experience'
import ProfessionalDevelopment from './ProfessionalDevelopment'

export default function Home() {
  return (
    <main className="overflow-auto">
      <AboutMe />
      <Education/>
      <Experience/>
      <ProfessionalDevelopment/>
    </main>
  )
}
