import React from 'react'
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Projects from './Projects'
import './Page.scss'
const Page = () => {
  return (
    <div className="scroll-container">
        <Home className="section"/>
        <About className="section"/>
        <Projects className="section"/>
        <Contact className="section"/>

    </div>
  )
}

export default Page