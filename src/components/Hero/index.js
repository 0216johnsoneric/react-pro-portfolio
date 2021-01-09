import React from 'react'
import "./style.css";

const Hero = () => {
    return (
        <>
        <div className="bigimg" src="https://i.imgur.com/DZsibHk.jpg" id="home">
            <div className="w3-display-middle title justify-text-center" >
                <span className="w3-center w3-black w3-xlarge w3-wide justify-text-center">
                    <span className="w3-hide-small"> Eric Johnson</span>
                    <br/>
                    <span className="w3-hide-small">Software Engineering and Development</span>
                </span>
            </div>
        </div>
        </>
    )
}

export default Hero
