import React from "react";
import "./header.style.scss";
// import logo from "../../img/logo.png";
import { Link, BrowserRouter as Router } from "react-router-dom";

const Header = () => {
    return (
        <Router>
            <header className="header">
                <div className="logo-box">
                    <Link to="/">
                        {/* <img src={logo} alt="logo" className="logo" /> */}
                        <i className="fas fa-home fa-3x logo"></i>
                    </Link>
                </div>
                <div className="text-box">
                    <h1 className="heading-primary">
                        <span className="heading-primary-main">
                            Riot Nicolas
                        </span>
                        <span className="heading-primary-secondary">
                            Création de contenu numérique
                        </span>
                    </h1>

                    <a href="#servives" className="btn btn-white btn-animated">
                        {" "}
                        Mes Services
                    </a>
                </div>
            </header>
        </Router>
    );
};

export default Header;
