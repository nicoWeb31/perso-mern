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
                    <h4 className="heading-tertiary">Laisser moi un message</h4>
                    <form action="" className="form">
                        <div className="form__group">
                            <input type="text" className="form__input" placeholder="votre nom" id="nom" required/>
                            <label htmlFor="nom" className="form__label">Votre nom</label>
                        </div>
                        <div className="form__group">
                            <input type="email" className="form__input" placeholder="votre mail" id="email" required/>
                            <label htmlFor="email" className="form__label">Votre mail</label>
                        </div>
                        <div className="form__group">
                            <textarea name="" id="message" cols="30" rows="10" className="form__input" placeholder="votre message"></textarea>
                            <label htmlFor="massage" className="form__label">Message</label>
                            {/* <input type="email" className="form__input" placeholder="votre nom" id="email" required/> 
                            */}
                        </div>
                    </form>

                </div>

            </div>
        </div>
    )
}

export default Contact
