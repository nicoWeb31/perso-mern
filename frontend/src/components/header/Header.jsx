import React from "react";
import "./header.style.css";
import logo from "../../img/logo.png";

const Header = () => {
    return (
        <header className="header">
            <div className="logo-box">
                <img src={logo} alt="logo" className="logo" />
            </div>
            <div className='text-box'>
                <h1 className="heading-primary">

                    <span className="heading-primary-main">
                        Riot Nicolas
                    </span>
                    <span className="heading-primary-secondary">
                        Création de contenu numérique
                    </span>
                </h1>

                <a href="#" className="btn btn-white btn-animated"> Mes Services</a>
            </div>
        </header>
    );
};

export default Header;
