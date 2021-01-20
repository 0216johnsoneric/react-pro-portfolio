import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
    return (
        <>
    
            <div className="w3-top zeed">
                <div className="w3-sidebar" id="myNavbar">
                    <a className="w3-bar-item button w3-hover-black w3-hide-medium w3-hide-large w3-right" href="javascript:void(0);" onclick="toggleFunction()" title="Toggle Navigation Menu"> <i className="fa fa-bars"></i></a>
                    <br/><br/>
                    <Link to="/"><a href="#home" className="w3-bar-item button w3-hide-small"> <i className="fa fa-home fa-2x"></i>&emsp;</a></Link>
                    <Link to="/portfolio"><a href="#portfolio" className="w3-bar-item button w3-hide-small"> <i className="fa fa-th fa-2x"></i>&emsp;</a></Link>
                     <Link to="/about"><a href="#about" className="w3-bar-item button w3-hide-small"> <i className="fa fa-user fa-2x"></i></a></Link>
                    <Link to="/contact"><a href="#contact" className="w3-bar-item button w3-hide-small"> <i className="fa fa-envelope fa-2x"></i></a></Link>
                </div>
            </div>
        </>
    )
}

export default Nav;
