import '../styles/_form.scss';
import { useState } from 'react';

export default function Form() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [feedback, setFeedback] = useState('');
    const [feedbackType, setFeedbackType] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Vérification de l'email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return;
        }

        setTimeout(() => {
            if (message) {
                setFeedback('Votre message a bien été envoyé');
                setFeedbackType('success');
                setName('');
                setEmail('');
                setMessage('');
            }
        }, 1000);
    };

    return (
        <div id="contact" className="form">
            <h2 className="form__title">CONTACT</h2>
            <form onSubmit={handleSubmit} className="form__container">
                <label className="form__label">
                    Nom
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="form__input"
                        required
                    />
                </label>
                <label className="form__label">
                    Email
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="form__input"
                        required
                    />
                </label>
                <label className="form__label">
                    Message
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="form__textarea"
                        required
                    />
                </label>
                <button type="submit" className="form__button">
                    Envoyer
                </button>
                {feedbackType === 'success' && (
                    <p className="form__feedback form__feedback--success">
                        {feedback}
                    </p>
                )}
            </form>
        </div>
    );
}
