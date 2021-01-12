import React from 'react'

const About = () => {

    return (
        <>
        
        <div class="bigimg bigimg-2 w3-display-container">
            
                <span class="w3-xxlarge w3-text-white w3-wide">ABOUT</span>
            
        </div>
        
        <div class="w3-content w3-container w3-padding-64" id="about">
            <h2 class="w3-center"><em>ERIC JOHNSON</em></h2>
            <div class="w3-row">
                <div class="u-margin-top-medium">
                    <div class="w3-col m6 w3-center w3-padding-large">
                        <div class="profile__section-left">
                         <div class="image-responsive">
                            <img class="w3-image image-responsive__picture" src="https://i.imgur.com/Hz3qbJN.png" alt="My_Photo" width="500" height="300"/>
                        </div>
                    </div>
                </div>
            </div>

            <div class="w3-col m6 w3-hide-small w3-center w3-padding-large">
                <div class="profile__section-right">
                 <div class="text-box">
                        <div class="text-box__section text-box__section-default">
                            <h4 class="text-box__section--title">Dependable Development</h4>
                            <br></br>
                            <div class="text-box__section--content">
                             <p>
                                Software Engineering and Development with extensive experience in Frontend, Backend, and Database Language’s.
                                Certificate from UConn School of Engineering and Flatiron School in Software Engineering and Development focus on Full
                                Stack Frameworks to build fully functional applications. Extensive knowledge in Frontend HTML5, CSS, JavaScript, and
                                Node.js. Proficiency with Backend Languages Ruby on Rails and Python. Databasing skills including MySQL/MySQL Lite, MongoDB/mongoose/Heroku/MongoDB Atlas, Active
                                Record for Ruby. My technical aptitude in cutting-edge web technologies, combined with adept
                                problem-solving abilities, attention to detail, and determination, make me a strong addition to any engineering team.
                            </p>
                        </div>
                        <br></br>
                        <div class="image-responsive__overlay">
                            <p class="image-responsive__overlay--set1">
                                <a class="card__btn" href="https://www.linkedin.com/in/ericjohnson0216/" target="_blank"><i class="fa fa-linkedin"></i></a>
                                <a class="card__btn" href="https://github.com/0216johnsoneric" target="_blank"><i class="fa fa-github"></i></a>
                                <a class="card__btn" href="https://docs.google.com/document/d/19aane66dM9M0yIDIGvppFZ3ZCYXi3Bteawi76plQlxs" target="_blank"><i class="fas fa-file-word"></i></a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
        
        
        
        </>
    )
}

export default About;
