'use client'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import './theme.css';
import 'primereact/resources/primereact.min.css';
import './document.css'
import React from 'react';


const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <head>
        <title>Oliver Schwab</title>
        <meta property='og:image' content='public\next.svg'></meta>
      </head>
      <body>
        
        {/* <header className='flex justify-center h-[15%]'>
          <nav className='navbar animate__animated animate__fadeInDown'>
            <Link href="/#AboutMe" className='nav-section'>
              About Me
            </Link>
            <Link href="/#Education" className='nav-section'>Education</Link>
            <Link href="/#Experience" className='nav-section'>Experience</Link>
            <Link href="/#Professional-Development" className='nav-section'>Professional Development</Link>
            <Link href="/#Projects" className='nav-section'>Projects</Link>
            <Link href="/#Skills" className='nav-section'>Skills</Link>
          </nav>
        </header> */}
      </body>
      <body className={inter.className}>
        {children}
      </body>

    </html>
  )
}
