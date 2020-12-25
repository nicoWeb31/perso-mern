import React from 'react';
import './contact.style.scss';


const Contact = () => {
    return (
        <div className="contact">
            <div className="u-center-text u-margin-bottom-big">
                <h2 className="heading-secondary">vous pouvez me contacter </h2>
            </div>
            <div className="formulaire">
                <div className="formulaire__form">
                    <h4>Laisser moi un message</h4>
                    <form action="">
                        <div className="form__group">
                            <label htmlFor="nom">Votre nom</label>
                            <input type="text" className="form__input" placeholder="votre nom" id="nom" required/>
                        </div>
                        <div className="form__group">
                            <label htmlFor="email">Votre mail</label>
                            <input type="email" className="form__input" placeholder="votre nom" id="email" required/>
                        </div>
                        <div className="form__group">
                            <label htmlFor="massage">Message</label>
                            {/* <input type="email" className="form__input" placeholder="votre nom" id="email" required/> 
                            */}
                            <textarea name="" id="message" cols="30" rows="10"></textarea>
                        </div>
                    </form>

                </div>

            </div>
        </div>
    )
}

export default Contact
