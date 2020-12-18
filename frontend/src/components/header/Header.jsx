import React from 'react';
import './header.style.css';
import bgImage from './images/img-1.jpg'
const Header = () => {
    return (
        <header className='header' style={{backgroundImage : {bgImage}}}>
            header
            <img src={bgImage}></img>
        </header>
    )
}

export default Header
