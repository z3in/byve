import React from 'react'
import Navbar from './Navbar/Navbar'

const Header = props =>{

    return(
        <header>
            <Navbar/>
            {props.children}
        </header>
    )

}

export default Header