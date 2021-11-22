import React from 'react';
import ReactDOM from 'react-dom';
import "./WelcomePage.css";
import { GiEvilBook } from 'react-icons/gi';

export default function WelcomePage() {
    return (
     <>
        <div className="containerWelcome">
            <h1 id="welcome">WELCOME! LOST TRAVELER!</h1>
            <GiEvilBook className="welcomeIcon" size="50px"/>
            <p id="welcomeMessage">Ah, i see you've stumbled upon this humble abode.</p>
            <p id="welcomeMessage">I see that this meeting is indeed, fate's work.</p>
            <p id="welcomeMessage">Worry not, weary traveler! You journey have not been in vain!</p>
            <p id="welcomeMessage">What you truly seek, is already in front of you!</p>
            <p id="welcomeMessage">Pry your eyes open to the biggest archive you can find!
            </p>
        </div>
     </>  
    );
}