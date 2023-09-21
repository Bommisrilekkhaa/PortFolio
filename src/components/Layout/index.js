import './index.scss'
import 'font-awesome/css/font-awesome.min.css';
import Sidebar from '../Sidebar/index'
import { Outlet } from 'react-router-dom'

export default function Layout(){
    return (
    <div className='App'>
        <Sidebar />
        <div className='page'>
            <span className='tags top-tags'>&lt;body&gt;</span>
            <ul>
                <li>
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/bommisrilekkhaa-g-91496724b/">
                        <i className="fa fa-linkedin fa-2x" id="likin" aria-hidden="true" ></i>
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="noreferrer" href="https://leetcode.com/BOMMISRILEKKHAA/">
                        <i className="fa fa-code fa-2x" id="leet" aria-hidden="true"></i>
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="noreferrer" href="https://github.com/Bommisrilekkhaa">
                        <i className="fa fa-github fa-2x" id="git"aria-hidden="true"></i>
                    </a>
                </li>
                <li>
                <i className="fa fa-twitter fa-2x" id="twit" aria-hidden="true">
                    <a target="_blank" rel="noreferrer" href="https://twitter.com/bommisrilekkhaa">
                    </a>
                        </i>
                </li>
            </ul>
            <Outlet />

            <span className='tags bottom-tags'>&lt;/body&gt;<br></br></span>
            <span className='tags bottom-tag-html'>&lt;/html&gt;</span>
            

        </div>
    </div>
    )
}