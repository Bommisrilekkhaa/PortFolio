import './index.scss'
import Logos from '../../../assets/logo.png'
// import {useRef,useEffect} from 'react';

const Logo = () =>{
// const bgRef = useRef();
// const outlineLogoRef = useRef();
// const solidLogoRef = useRef();


    return(
        <div className='logo-container'>
           
            <img className='solid-logo' src={Logos} alt="B"/>
           

        </div>
    )
}
export default Logo;