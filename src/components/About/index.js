import Letters from '../Letters'
import './index.scss'
import { useState,useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faReact,faHtml5,faCss3,faJsSquare,faNodeJs } from '@fortawesome/free-brands-svg-icons'

const About=()=> {
    const [letterClass, setLetterClass]= useState('text-animate')
    useEffect(()=>{ 
        const timer = setTimeout(()=>{
         setLetterClass('text-animate-hover')
        },3000)
        return ()=> clearTimeout(timer)
    },[])
    return (
        <div className='container about-page'>
            <div className='abt-text'>
                <h1>
                   <Letters
                   letterClass={letterClass}
                     strArray={['A','b','o','u','t',' ','m','e']}
                     idx={15}/>
                </h1>
                <p>Hi, my name is Luit and I am a budding front end developer with experience in building React apps.</p>
                <p>I specialize in building intuitive and user-friendly interfaces using HTML, CSS, and JavaScript. I have a strong foundation in web design principles and a passion for creating visually appealing and responsive websites.
</p>
                <p> In my previous role as an intern for Talk5, I was responsible for recreating the hirehunter.com website using the Vuejs framework </p>
             </div>

             <div className='stage-cube-cont'>
                <div className='cube-spinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faHtml5} color="#F06529"/>
                        <FontAwesomeIcon icon={faGithub} color="#EC4V28"/>
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4"/>
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9"/>
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D"/>
                        <FontAwesomeIcon icon={faNodeJs} color="#00FF00"/>

                    </div>
                </div>

             </div>
         </div>
    )
}

export default About