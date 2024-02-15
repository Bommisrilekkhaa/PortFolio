import React from 'react'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import {useEffect, useState} from 'react';
import imageUrl from '../../assets/DSC02105-removebg-preview.png'
import 'font-awesome/css/font-awesome.min.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const About = () => {
    // const imageUrl = '../../assets/DSC02105-removebg-preview.png';
    const [letterClass, setLetterClass] = useState('text-animate');
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        },3000);
        return () =>{
            clearTimeout(timeoutId);
        }
    
    }, [])

  return (
    <div className='container about-page'>
        <div className='text-zone'>
            <h1>
                <AnimatedLetters letterClass={letterClass} strArray={['A','b','o','u','t',' ','m','e']} idx={20} />
            </h1>
            <p style={{alignContent:"space-evenly"}}>I am a dedicated web developer and <span style={{color:"#14c0f9"}}>Java programming expert</span> with a passion for crafting dynamic and interactive web experiences. My expertise spans both front-end and back-end development, allowing me to create end-to-end solutions that deliver seamless user experiences. I have a keen interest in <span style={{color:"#14c0f9"}}>AI and machine learning,</span> which I integrate into my work to enhance web applications with intelligent features. With a commitment to continuous learning and problem-solving, I thrive on tackling complex challenges in the ever-evolving field of web development. My goal is to create innovative, secure, and user-centric web solutions that leave a lasting impact.<span style={{color:"#14c0f9"}}>Let's collaborate to turn ideas into reality.</span></p>
        </div>

        <div className='me'>
        <img src={imageUrl} alt="" />
        </div>
        {/* <div className='stage-cube-cont'>
            <div className='cubespinner'>
                <div className='face1'>
                    <i className="fa fa-database fa-4x " id='database'></i>
                </div>
                <div className='face2'>
                    <i className="fa fa-python fa-4x" id='python'></i>
                </div>
                <div className='face3'>
                    <i className="fa fa-java fa-4x " id='java'></i>
                </div>
                <div className='face4'>
                    <i className="fa fa-css3 fa-4x " id='css'></i>
                </div>
                <div className='face5'>
                    <i className="fa fa-html5 fa-4x" id="html"></i>
                </div>
                <div className='face6'>
                    <i className="fa fa-react fa-2x" id="react"></i>
                </div>

            </div>

        </div> */}

    </div>
  )
}
