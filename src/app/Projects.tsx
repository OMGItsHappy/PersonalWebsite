import Image from 'next/image'
import Link from 'next/link'

export default function Projects() {

    return (
        <div id = "page">
            <div id ="Projects"></div>
            <div id = "items">
            <div id = "page-header">
                Projects
            </div>
            <div id = "subheader">
                Homelab
            </div>
            <div id = "content">
            Self-hosted, self-built Linux server utilizing system services and docker. <br/>
            Running game servers and media delivery with control enabled through a local dashboard.
            </div>
            <div id = "subheader">
            Personal Website
            </div>
            <div id = "content">
            Personal website running on Next.js. <br/>Utilized for testing both design and code concepts. Hosted at <Link href = "" className='underline'>oms.bio</Link>.
            </div>
            <div id = "subheader">
                Custom Keyboard
            </div>
            <div id = "content flex flew-row justify-center align-center">
            A fully custom built and designed 75% keyboard. <br/>Hand soldered cherry blue keyboard switches with custom milled steel face and back plates and a wooden center support.
                <div className='flex justify-center pt-5'>
                    <Image src="/Keyboard.jpg"
                    width = {3260/10}
                    height = {2293/10}
                    alt = {"Pic of the keyboard"}
                    className='rounded-xl border'/>
                </div>
            </div>
            </div>
        </div>
    )
}