import './index.scss'
import Sidebar from '../Sidebar/index'
import { Outlet } from 'react-router-dom'

export default function Layout(){
    return (
    <div className='App'>
        <Sidebar />
        <div className='page'>
            <span className='tags top-tags'>&lt;body&gt;</span>

            <Outlet />

            <span className='tags bottom-tags'>&lt;/body&gt;<br></br></span>
            <span className='tags bottom-tag-html'>&lt;/html&gt;</span>
            

        </div>
    </div>
    )
}