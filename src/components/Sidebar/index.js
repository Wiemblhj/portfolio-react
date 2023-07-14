import './index.scss'
import { useState } from 'react'
import { NavLink} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHome, faBars, faUser,faEnvelope, faSuitcase} from '@fortawesome/free-solid-svg-icons'
import {faLinkedin,  faGithub, faSkype} from '@fortawesome/free-brands-svg-icons'
const Sidebar = () => {
  const [showNav, setShowNav] = useState(false);
   return (
    <div className="nav-bar">
   
      <nav className={showNav ? 'mobile-show' : ''}>
        <NavLink exact="true"  activeclassname="active" to="/portfolio-react/" onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="about-link"to="/portfolio-react/about"  onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>

        <NavLink exact="true"
          activeclassname="active"
          className="skills-link"
          to="/portfolio-react/skills"  onClick={() => setShowNav(false)}>
              <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
          </NavLink>

        <NavLink exact="true"
          activeclassname="active"
          className="contact-link"
          to="/portfolio-react/contact"  onClick={() => setShowNav(false)}>
              <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
          </NavLink>   
        
      </nav>

      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/wiem-belhaj-boubaker-a936311a1/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Wiemblhj/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
       
        </li>
        <li>
          <a href="https://join.skype.com/invite/NW010gSCrTA2" rel="noreferrer" target="_blank">
            <FontAwesomeIcon
              icon={faSkype}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
      </ul>
      <FontAwesomeIcon 
          onClick={() => setShowNav(true)}
          icon={faBars}
          color="#ffd700"
          size="3x"
          className='hamburger-icon' />
    </div>
   ) 
};
export default Sidebar ;