import React from "react";
import "./homepage.style.scss";
import me from '../../img/me.jpg';

const HomePage = () => {
    return (
        <div className="home">
            <div className="u-center-text ">
                <h2 className="heading-secondary">
                    Developper Web/Web Mobile Mern Stack
                </h2>
            </div>
            <div className="row">
                <div className="presentation ">
                    <figure className="presentation__shape">
                        <img src={me} alt="riot nicolas" className="presentation__img"/>
                    </figure>
                    <div className="presentation__text">
                        <h3 className="heading-tertiary u-margin-bottom-small">Qui suis-je ?</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Facilis alias, quos quis soluta dolorem
                            nesciunt fugiat aut rem voluptatibus exercitationem
                            eaque sapiente vitae aliquid, ad officiis
                            accusantium autem consequuntur animi! Omnis
                            voluptatum vero, sapiente est libero deleniti eaque
                            quos reprehenderit nostrum deserunt quaerat ducimus
                            minima recusandae nesciunt assumenda corporis rerum
                            laudantium ea quo consequuntur error earum quae
                            optio. Sed, dolorem? Possimus, cum illum vel eum
                            fugit molestiae autem eaque commodi nulla culpa
                            rerum vitae ducimus amet veniam non earum?
                            Perferendis eum quaerat error porro libero sunt
                            illum architecto molestias! Laborum!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
