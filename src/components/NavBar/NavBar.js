import React from 'react';
import './NavBar.css';
import Projects from '../Projects/Projects.js';

export default function NavBar() {
    return (
        <div className='NavBar'>
            <div className='Nav-button-projects'>{Projects}</div>
            <div className='Nav-button-resume'>Resume</div>
            <div className='Nav-button-contact-me'>Contact Me</div>
        </div>
    )
}
