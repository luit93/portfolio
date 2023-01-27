import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import avatar from '../../assets/images/luit-avatar.jpeg'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome , faUser,faEnvelope, faPastafarianism } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
const Sidebar =()=> (
<div className='nav-bar'>
    <Link className='logo' to='/'>
    <img src={avatar} alt='avatar'/>
    {/* <img className='sub-logo' src={LogoSubtitle} alt='Logo Subtitle'/> */}
    </Link>
    <nav>
        <NavLink exact="true" activeclassname="active" to="/">
            <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
        </NavLink>
       
        <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
            <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="projects-link" to="/projects">
            <FontAwesomeIcon icon={faPastafarianism} color="#4d4d4e"/>
        </NavLink>
      
        <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
        </NavLink>
    </nav>
    <ul>
        <li>
            <a target="_blank" rel='norefferrer' href='https://www.linkedin.com/in/luitsaikia/'>
                <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>
            </a>
        </li>
        <li>
            <a target="_blank" rel='norefferrer' href='https://github.com/luit93'>
                <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
            </a>
        </li>
    </ul>
</div>
)
export default Sidebar