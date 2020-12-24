import React, {useState} from 'react'
import './buttonNav.style.scss';
import { Link } from 'react-router-dom';


const ButtonNav = () => {
    return (
        <div>
            <input type="checkbox" className="navigation__checkbox" id="navi-toggle" checked={true} />
            <label htmlFor="navi-toggle" className="navigation__button">
            <span class="navigation__icon" aria-hidden="true">&nbsp;</span>

            </label>
            <div className="navigation__background">
                &nbsp;
            </div>
            <nav className="navigation__nav">
                <ul className="navigation__list">
                    <li className="navigation__item">
                        <Link to="/" className="navigation__link"> Accueil</Link>
                    </li>
                    <li className="navigation__item">
                        <Link to="/service" className="navigation__link"> Service</Link>
                    </li>
                    <li className="navigation__item">
                        <Link to="/" className="navigation__link"> Contact</Link>
                    </li>
                    <li className="navigation__item">
                        <Link to="/" className="navigation__link"> A propos !</Link>
                    </li>
                </ul>
            </nav>

        </div>
    )
}


export default ButtonNav
