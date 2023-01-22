import Letters from '../Letters'
import './index.scss'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faReact,
  faHtml5,
  faCss3,
  faJsSquare,
  faVuejs,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
    return () => clearTimeout(timer)
  }, [])
  return (
    <>
    <div className="container about">
      <div className="text-area">
        <h1>
          <Letters
            letterClass={letterClass}
            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
            idx={15}
          />
        </h1>
        <p>
          Hi, my name is Luit and I am a budding front end developer with
          experience in building React apps.
        </p>
        <p>
          I specialize in building intuitive and user-friendly interfaces using
          HTML, CSS, and JavaScript. I have a strong foundation in web design
          principles and a passion for creating visually appealing and
          responsive websites.
        </p>
        <p>
          {' '}
          In my previous role as an intern for Talk5, I was responsible for
          recreating the hirehunter.com website using the Vuejs framework{' '}
        </p>
      </div>

      <div className="stage-cube-cont">
        <div className="cube-spinner">
        <div className="face1">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faVuejs} color="#14A919" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGithub} color="#EC4D28" />
            </div>
        </div>
      </div>
    </div>
    page loader
    <Loader type='ball-grid-beat'/>
    </>
  )
}

export default About
