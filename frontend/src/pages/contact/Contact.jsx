import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "../../components/spinner/Spinner";
import Alert from "../../components/alert/Alert";
import { createMessage } from "../../redux/actions/massageAction";
import { Field, reduxForm } from "redux-form";

import "./contact.style.scss";

const Contact = ({ history }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [successMess, setSuccessMess] = useState(
        "Votre message a été envoyer avec success!  j'y repondrai des que possible ! merci"
    );

    const dispatch = useDispatch();

    const newMessage = useSelector((state) => state.messages);
    const { loading, error, success } = newMessage;

    useEffect(() => {
        if (success) {
            history.push("/contact");
        }
    }, [history, success]);

    //_________________________________render input______________________________________

    const renderInput = (formProps) => {
        return (
            <div className="form__group">
                <input
                    {...formProps.input}
                    // type="text"
                    className="form__input"
                    placeholder="votre nom"
                    // value={formProps.input.value}
                    // name="name"
                    // onChange={formProps.input.onChange}
                    // id="nom"
                    // required
                />
                <label htmlFor="nom" className="form__label">
                    {formProps.label}
                </label>
            </div>
        );
    };

    const renderTextarea = (formProps) => {
        return(
        <div className="form__group">
            <textarea
                name="message"
                value={formProps.input.value}
                onChange={formProps.input.onChange}
                id="message"
                cols="30"u
                rows="10"
                className="form__input"
                placeholder="votre message"
            ></textarea>
            <label htmlFor="massage" className="form__label">
                {formProps.label}
            </label>
        </div>

        )
    };

    //_________________________________fonction______________________________________
    const onHandleSubmit = (e) => {
        e.preventDefault();
        const data = { name, email, message };
        console.log(data);
        dispatch(createMessage(data));
        setName("");
        setMessage("");
        setEmail("");
    };
    return (
        <div className="contact">
            <div className="u-center-text u-margin-bottom-big">
                <h2 className="heading-secondary">vous pouvez me contacter </h2>
            </div>
            <div className="spin">
                {loading && <Spinner message="" />}
                {error && <Alert variant="danger">{error}</Alert>}
                {success && <Alert variant="success">{successMess}</Alert>}
            </div>

            <div className="formulaire">
                <div className="formulaire__form">
                    <h4>Laisser moi un message</h4>
                    <form onSubmit={onHandleSubmit} className="form">
                        <Field
                            name="name"
                            component={renderInput}
                            label="Votre nom ?"
                        />

                        <Field
                            name="email"
                            component={renderInput}
                            label="Votre mail ?"
                        />
                        
                        <Field name="message" component={renderTextarea} label="Votre Message ?"/>

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

export default reduxForm({
    form: "messageForm",
})(Contact);
