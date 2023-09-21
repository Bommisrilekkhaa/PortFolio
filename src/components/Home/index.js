// import logo from '../../assets/logo.png';
import {Link} from 'react-router-dom'
import {useEffect, useState} from 'react';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo/index';

export default function Home(){
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = [' ','B','o', 'm' ,'m','i','s','r','i','l','e','k','k','h','a','a'];
    const jobArray = ['F','u','l','l',' ','s','t','a','c','k',' ','D','e','v','e','l','o','p','e','r'];
    
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        },4000);
        return () =>{
            clearTimeout(timeoutId);
        }
    
    }, [])
    
    return (

        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                    <br />
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>
                    {/* <img src={logo} alt="dev" /> */}
                    <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
                    <br />
                    <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={22} />

                </h1>

                <h2>Frontend Developer / Javascript Expert </h2>
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
            </div>
            <Logo />
        </div>
    )
}