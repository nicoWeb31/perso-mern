import React from "react";
import { Link } from "react-router-dom";
import "./footer.style.scss";

const Footer = () => {
    return (
        <div className="footer">
            <div className="row">
                <div className="col-6 footer__col1">
                    <div className="footer__logo-box">
                        <i className="fas fa-laptop-code fa-4x footer__logo"></i>
                    </div>
                    <div className="footer__nav">
                        <ul className="footer__list">
                            <li className="footer__item">
                                <Link to="/" className="footer__link">
                                    Accueil
                                </Link>
                            </li>
                            <li className="footer__item">
                                <Link to="/about" className="footer__link">
                                    A Propos
                                </Link>
                            </li>
                            <li className="footer__item">
                                <Link to="/contact" className="footer__link">
                                    Contact
                                </Link>
                            </li>
                            <li className="footer__item">
                                <Link to="/service" className="footer__link">
                                    Service
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-6">
                    <p className="footer__copyright">
                        N'hesitez pas a me <Link href=""> contacter .</Link>
                        Copyright &copy; by Riot Nicolas 2020
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
