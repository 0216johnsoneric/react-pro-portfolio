import React from 'react'

const Nav = () => {
    return (
        <>
            <div className="w3-top">
                <div className="w3-sidebar" id="myNavbar">
                    <a className="w3-bar-item button w3-hover-black w3-hide-medium w3-hide-large w3-right" href="javascript:void(0);" onclick="toggleFunction()" title="Toggle Navigation Menu"> <i className="fa fa-bars"></i></a>
                    <br/><br/>
                    <a href="#home" className="w3-bar-item button w3-hide-small"> <i className="fa fa-home fa-2x"></i>&emsp;</a>
                    <a href="#portfolio" className="w3-bar-item button w3-hide-small"> <i className="fa fa-th fa-2x"></i>&emsp;</a>
                    <a href="#about" className="w3-bar-item button w3-hide-small"> <i className="fa fa-user fa-2x"></i></a>
                    <a href="#contact" className="w3-bar-item button w3-hide-small"> <i className="fa fa-envelope fa-2x"></i></a>
                </div>

                <div id="mobileNav" className="w3-bar-block w3-white w3-hide w3-hide-large w3-hide-medium">
                    <a href="#home" className="w3-bar-item button">HOME</a>
                    <a href="#portfolio" className="w3-bar-item button">PORTFOLIO</a>
                    <a href="#about" className="w3-bar-item button">ABOUT</a>
                    <a href="#contact" className="w3-bar-item button">CONTACT</a>
                </div>
            </div>
        </>
    )
}

export default Nav
