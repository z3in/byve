import React,{ useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

import Login from '../Forms/Login'

const Navbar = () =>{
    const [toggle,setToggle] = useState('')
    const handleToggle = () =>{
        if(toggle === ''){
            setToggle(' login-active')
        }else{
            setToggle('')
        }
    }
    return(
    <div>
        <nav>
            <div className="nav-container">
                 <Link to="/">BYVE</Link>
                <ul>
                    <li>
                        <Link to="/signup">SIGN UP</Link>
                    </li>
                    <li>
                        <Link to="/login" onClick={handleToggle}>SIGN IN</Link>
                    </li>
                </ul>
            </div>
        </nav>
        <Login handleToggle={handleToggle} toggle={toggle}/> 
    </div>
    )
}

export default Navbar