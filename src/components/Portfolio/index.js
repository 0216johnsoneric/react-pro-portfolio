import React from 'react'
import "./style.css";

const Portfolio = () => {

    return (
       <>

        <div class="portfolio w3-container w3-padding-64" id="portfolio">
            <div class="section bg1"></div>
            <h2 class="w3-center w3-xxlarge w3-wide"><em>PORTFOLIO</em></h2>
            <p class="w3-center"><em>My latest projects!</em></p>
            <br/>
        </div>
        
        <div class="w3-row-padding w3-center w3-section">

            <div class="w3-col m4">
                <div class="card">
                    <img class="card__img" src="https://i.imgur.com/dQF9XGq.png" alt="Boxoffice Media"/>
                    <h2 class="card__title">Boxoffice Media</h2>
                    <p class="card__text">Media app that utilizing Foundation Framework and API calls to allow a user to look up Movie and TV Show Data worldwide!</p>
                    <a class="card__btn" href="https://0216johnsoneric.github.io/Boxoffice-Movies/" target="_blank" class="">Live Demo</a>
                    <a class="card__btn" href="https://github.com/0216johnsoneric/Boxoffice-Movies" target="_blank" class=""><i class="fa fa-github fa-2x"></i></a>
                </div>
            </div>
        

        <div class="w3-col m4">
            <div class="card">
                <img class="card__img" src="https://i.imgur.com/cJbwqxF.png" alt="Javascript Code Quiz"/>
                <h2 class="card__title">Javascript Quiz</h2>
                <p class="card__text">Try to beat the clock and compete against friend for the highscore and the chance to be the master of the Javascript Code Quiz!</p>
                <a class="card__btn" href="https://0216johnsoneric.github.io/Code-Quiz/ " target="_blank" class="">Live Demo</a>
                <a class="card__btn" href="https://github.com/0216johnsoneric/Code-Quiz" target="_blank" class=""><i class="fa fa-github fa-2x"></i></a>
            </div>
        </div>

        <div class="w3-col m4">
            <div class="card">
                <img class="card__img" src="https://i.imgur.com/BZu6Why.png" alt="Weather Dashboard"/>
                <h2 class="card__title">Weather Dashboard</h2>
                <p class="card__text">Dynamic API app that is tasked with retrieving data from OpenWeather API and uses the data to display the current and 5-Day forecast.</p>
                <a class="card__btn" href="https://0216johnsoneric.github.io/Weather-Dashboard/" target="_blank" class="">Demo</a>
                <a class="card__btn" href="https://github.com/0216johnsoneric/Weather-Dashboard" target="_blank" class=""><i class="fa fa-github fa-2x"></i></a>
            </div>
        </div>

        <div class="w3-row-padding w3-center w3-section">

            <div class="w3-col m4">
                <div class="card">
                    <img class="card__img" src="https://i.imgur.com/bYVkmjo.png" alt="Recipe Tracker"/>
                    <h2 class="card__title">Recipe Tracker</h2>
                    <p class="card__text">A colorful recipe app that allows the user to Create, Read, Update, Search and Delete a Recipe List!</p>
                    <a class="card__btn" href="https://recipe-tracker-app.herokuapp.com/" target="_blank" class="">Live Demo</a>
                    <a class="card__btn" href="https://github.com/0216johnsoneric/Sequelize-Recipe-Tracker" target="_blank" class=""><i class="fa fa-github fa-2x"></i></a>
                </div>
            </div>

            <div class="w3-col m4">
                <div class="card">
                    <img class="card__img" src="https://i.imgur.com/tfonWZn.png" alt="Node Burgers"/>
                    <h2 class="card__title">Node Burgers</h2>
                    <p class="card__text">Node burger app let's you create a burger logger with MySQL, Node, Express, Handlebars, and Customized ORM's!</p>
                    <a class="card__btn" href="https://devour-node-burgers.herokuapp.com/" target="_blank" class="">Live Demo</a>
                    <a class="card__btn" href="https://github.com/0216johnsoneric/node-burgers" target="_blank" class=""><i class="fa fa-github fa-2x"></i></a>
                </div>
            </div>

            <div class="w3-col m4">
                <div class="card">
                    <img class="card__img" src="https://i.imgur.com/sx0MGcG.png" alt="Note Taker"/>
                    <h2 class="card__title">Note Taker</h2>
                    <p class="card__text">This note taker application can be used to write, save, and delete notes!</p>
                    <a class="card__btn" href="https://notes-taker-apps.herokuapp.com/" target="_blank" class="">Live Demo</a>
                    <a class="card__btn" href="https://github.com/0216johnsoneric/Note-Taker" target="_blank" class=""><i class="fa fa-github fa-2x"></i></a>
                </div>
            </div>

        </div>
    </div>
        </>
    )
}

export default Portfolio
