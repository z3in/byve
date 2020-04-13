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
                        <Link>CART<span className="nav-cart-num">0</span></Link>
                    </li>
                    <li>
                        <Link to="/signup">SIGN UP</Link>
                    </li>
                    <li>
                        <Link onClick={handleToggle}>SIGN IN</Link>
                    </li>
                </ul>
            </div>
        </nav>
        <Login handleToggle={handleToggle} toggle={toggle}/> 
    </div>
    )
}

export default Navbar