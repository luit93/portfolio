import Loader from 'react-loaders'
import Letters from '../Letters'
import { useState, useEffect, useRef } from 'react'
import './index.scss'
import emailjs from '@emailjs/browser';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';

const Contact=()=>{
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()
    useEffect(() => {
      const timer = setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 3000)
      return () => clearTimeout(timer)
    }, [])
//func for sending email with emailjs
    const sendEmail= (e)=>{
        e.preventDefault()

        emailjs.sendForm(
                'contact_service',
                'contact_form',
                refForm.current,
                 'vEfnDBDWHZl7gkjH2'
            )
            .then(
                ()=>{
                    alert('Message sent!')
                    window.location.reload(false)
                },
                ()=>{
                    alert('Failed to send message')
                }
            )
    }
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
                <form ref={refForm} onSubmit={sendEmail}>
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
       <div className='map-info'>
        Luit Saikia
        <br/>
       
        Sydney, NSW, Australia<br/>
       <span>luitsaikia1@gmail.com</span>< br/>
       </div>
       {/* <div className='map-wrap'>
        <MapContainer center={[]} zoom={13}>
            <TileLayer url=''/>
            <Marker />
        </MapContainer>
       </div> */}

    </div>
    <Loader type='ball-grid-beat'/>
    </>
   )
}

export default Contact