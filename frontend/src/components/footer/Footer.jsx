import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__logo-box">
                <i
                    class="fas fa-laptop-code fa-5x"
                    className="footer__logo"
                ></i>
            </div>
            <div className="row">
                <div className="col-6">
                    <div className="footer__nav">
                        <ul className="footer__list">
                            <li className="footer__item">
                                <Link to="/" className="footer-link">
                                    Accueil
                                </Link>
                            </li>
                            <li className="footer__item">
                                <Link to="/about" className="footer-link">
                                    A Propos
                                </Link>
                            </li>
                            <li className="footer__item">
                                <Link to="/contact" className="footer-link">
                                    Contact
                                </Link>
                            </li>
                            <li className="footer__item">
                                <Link to="/service" className="footer-link">
                                    Service
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-6">
                    <p className="footer__copyright">
                        Copyright &copy; by Riot Nicolas 2020
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
