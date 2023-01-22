import Loader from 'react-loaders'
import Letters from '../Letters'
import { useState, useEffect } from 'react'
import './index.scss'

const Contact=()=>{
    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {
      const timer = setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 3000)
      return () => clearTimeout(timer)
    }, [])
   return( <>
    <div className='container contact'>
        <div className='text-area'>
            <h1>
            <Letters letterClass={letterClass} strArray={['C','o','n','t','a','c','t',' ','me']} 
            idx={15}/>
            </h1>
            <p>
            Please feel free to reach out to me via email or LinkedIn for any web development projects. Thank you!
            </p>
            <div className='contact-form'>
                <form>
                    <ul>
                        <li className='half'>
                            <input type="text" required placeholder='Name' name="name"/>
                        </li>
                        <li className='half'>
                            <input type="email" required placeholder='Email' name="email"/>
                        </li>
                        <li className=''>
                            <input type="text" required placeholder='Subject' name="subject"/>
                        </li>
                        <li>
                            <textarea required placeholder='Message' name="message"></textarea>
                        </li>
                        <li>
                            <input type='submit' className='flat-bttn' value='SEND'/>
                        </li>
                    </ul>
                </form>
            </div>
        </div>
    </div>
    <Loader type='ball-grid-beat'/>
    </>
   )
}

export default Contact