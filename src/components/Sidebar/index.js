import { Link, NavLink } from 'react-router-dom';
import  './index.scss';
import logo from '../../assets/logo.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faHome, faUser, faEnvelope, faProjectDiagram } from '@fortawesome/free-solid-svg-icons';


export default function Sidebar(){
    return (
        <div className='nav-bar'>
            <Link className='logo object-cover ml-1' to='/'>
                <img src={logo} alt='logo' />
            </Link>
            <nav>
                <NavLink exact="true" activeclassname="active" to='/'>
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="about-link" to='/about'>
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="project-link" to='/project'>
                    <FontAwesomeIcon icon={faProjectDiagram} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="contact-link" to='/contact'>
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                </NavLink>
            </nav>
            <input type="checkbox" value="dim" className='toggle theme-controller m-5'/>

        </div>
    )
}