import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { Link } from 'react-router-dom'
// import LogoTitle from '../../assets/images/logo-l.png'
import Letters from '../Letters'
import './index.scss'
import Logo from './Logo'
const Home= () => {
    const [letterClass, setLetterClass]= useState('text-animate')
    const nameArray= [' ','L','u','i','t']
    const array= [' ','d','e','v']
    useEffect(()=>{ 
        const timer = setTimeout(()=>{
         setLetterClass('text-animate-hover')
        },4000)
        return ()=> clearTimeout(timer)
    },[])
   
    return (
        <>
       
        <div className="container home-page">
            <div className="text-area">
                <h1><span className={letterClass}>Hello</span> 
              
                <br/>
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m </span>


                    {/* <img src={LogoTitle} alt='logo' /> */}
                    <Letters letterClass={letterClass}
                    strArray={nameArray} idx={15}/>
                    <br/>
                    <span className={letterClass}>Front-end</span> 
                    <Letters letterClass={letterClass}
                    strArray={array} idx={22}/>
                </h1>
               
                <Link to='/contact' className='contact-button'>Contact Me</Link>
                
            </div>
            <Logo/>
        </div>
        <Loader type='ball-grid-beat' />
        </>
    )
}

export default Home