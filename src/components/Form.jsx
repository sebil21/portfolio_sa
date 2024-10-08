import '../styles/_form.scss';
import { useState, useEffect } from 'react';
import emailJS from '@emailjs/browser';

export default function Form() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [feedback, setFeedback] = useState('');
    const [feedbackType, setFeedbackType] = useState('');

    useEffect(() => {
        emailJS.init('S4O1Ec3hfllAjtCmd');
    }, []);

    const SendMail = (templateParams) => {
        emailJS
            .send('service_360nvjx', 'template_oicrlvg', templateParams)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setFeedback('Votre message a bien été envoyé');
                setFeedbackType('success');
                setTimeout(() => {
                    setFeedback('');
                }, 10000);
            })
            .catch((error) => {
                console.error("Échec de l'envoi:", error);
                setFeedback('Une erreur est survenue, veuillez réessayer');
                setFeedbackType('error');
                setTimeout(() => {
                    setFeedback('');
                }, 10000);
            });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Vérification de l'email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return;
        }

        // Paramètres à envoyer avec EmailJS
        const templateParams = {
            from_name: name,
            email: email,
            message: message,
        };

        // Appel de la fonction SendMail pour envoyer l'email
        SendMail(templateParams);

        // Réinitialisation des champs
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div id="contact" className="form">
            <h2 className="form__title">CONTACT</h2>
            <form onSubmit={handleSubmit} className="form__container">
                <label className="form__label" htmlFor="name">
                    Nom
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="form__input"
                        required
                    />
                </label>
                <label className="form__label" htmlFor="email">
                    Email
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="form__input"
                        required
                    />
                </label>
                <label className="form__label" htmlFor="message">
                    Message
                    <textarea
                        value={message}
                        id="message"
                        name="message"
                        onChange={(e) => setMessage(e.target.value)}
                        className="form__textarea"
                        required
                    />
                </label>
                <button type="submit" className="form__button">
                    Envoyer
                </button>
                {feedback && (
                    <p
                        className={`form__feedback form__feedback--${feedbackType}`}
                    >
                        {feedback}
                    </p>
                )}
            </form>
        </div>
    );
}
