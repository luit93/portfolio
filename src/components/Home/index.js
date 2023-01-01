import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-l.png'
import Letters from '../Letters'
import './index.scss'
const Home= () => {
    const [letterClass, setLetterClass]= useState('text-animate')
    const nameArray= ['u','i','t']
    const jobArray= ['f','r','o','n','t','e','n','d',' ','d','e','v']
    useEffect(()=>{ 
        const timer = setTimeout(()=>{
         setLetterClass('text-animate-hover')
        },4000)
        return ()=> clearTimeout(timer)
    },[])
   
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1><span className={letterClass}>H</span> 
                <span className={`${letterClass} _12`}>i</span>
                <br/>
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>


                    <img src={LogoTitle} alt='logo' />
                    <Letters letterClass={letterClass}
                    strArray={nameArray} idx={15}/>
                    <br/>
                    <Letters letterClass={letterClass}
                    strArray={jobArray} idx={22}/>
                </h1>
                <h2> Frontend Developer</h2>
                <Link to='/contact' className='contact-button'>Contact Me</Link>
                
            </div>
            
        </div>
    )
}

export default Home