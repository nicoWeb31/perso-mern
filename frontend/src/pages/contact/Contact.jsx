import React, { useState, useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux'
import Spinner from "../../components/spinner/Spinner";
import Alert from '../../components/alert/Alert';
import { createMessage } from '../../redux/actions/massageAction'


import "./contact.style.scss";

const Contact = ({history}) => {


    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [message,setMessage] = useState('');
    const [successMess, setSuccessMess] = useState("Votre message a été envoyer avec success!  j'y repondrai des que possible ! merci");
    


    const dispatch = useDispatch();

    const newMessage = useSelector(state=>state.messages);
    const {loading, error,success} = newMessage;

    useEffect(()=>{
        if(success){
            history.push('/contact')
        }

    },[history,success]);


    //_________________________________fonction______________________________________
    const onHandleSubmit =(e)=>{
        e.preventDefault();
        const data = {name,email,message};
        console.log(data)
        dispatch(createMessage(data))
        setName('');
        setMessage('');
        setEmail('');
    }
    return (
        <div className="contact">
            <div className="u-center-text u-margin-bottom-big">
                <h2 className="heading-secondary">vous pouvez me contacter </h2>
            </div>
            <div className="spin">
                {loading && <Spinner message="" />}
                {error && <Alert>{error}</Alert>} 
                {success && <Alert variant="success">{successMess}</Alert>} 

            </div>

            <div className="formulaire">
                <div className="formulaire__form">
                    <h4>Laisser moi un message</h4>
                    <form onSubmit={onHandleSubmit} className="form">
                        <div className="form__group">
                            <input
                                
                                type="text"
                                className="form__input"
                                placeholder="votre nom"
                                value={name}
                                name="name"
                                onChange={e=>setName(e.target.value)}
                                id="nom"
                                required
                            />
                            <label htmlFor="nom" className="form__label">
                                Votre nom
                            </label>
                        </div>
                        <div className="form__group">
                            <input
                                type="email"
                                className="form__input"
                                placeholder="votre mail"
                                id="email"
                                name="email"
                                value={email}
                                onChange={e=>setEmail(e.target.value)}
                                required
                            />
                            <label htmlFor="email" className="form__label">
                                Votre mail
                            </label>
                        </div>
                        <div className="form__group">
                            <textarea
                                name="message"
                                value={message}
                                onChange={(e)=>setMessage(e.target.value)}
                                id="message"
                                cols="30"
                                rows="10"
                                className="form__input"
                                placeholder="votre message"
                            ></textarea>
                            <label htmlFor="massage" className="form__label">
                                Message
                            </label>
                            {/* <input type="email" className="form__input" placeholder="votre nom" id="email" required/>
                             */}
                        </div>

                        <button className="btn-submit" type="submit">
                            <i className="fas fa-arrow-right"></i>
                            envoyer
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
