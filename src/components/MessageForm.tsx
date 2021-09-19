import React from 'react';

import Input from './Input';

import styles from './MessageForm.module.scss';
import { Message, MessageFormElements } from '../types';

interface FormProps {
    onSubmit: (message: Message) => void;
    status: string;
}

function Form({ onSubmit, status }: FormProps) {
    const sending = status === 'sending';
    const error = status === 'error';
    const success = status === 'success';

    const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
        event.preventDefault();

        const form = event.currentTarget;
        const elements = form.elements as MessageFormElements;

        const message: Message = {
            name: elements.name.value,
            email: elements.email.value,
            message: elements.message.value,
        };

        onSubmit(message);
    };

    return (
        <>
            <span>
                {sending && 'Your message is on its way...'}
                {success && 'Your message has been sent'}
                {error && 'Error while sending your message…'}
            </span>
            <form onSubmit={handleSubmit}>
                <fieldset disabled={sending} className={styles.fieldset}>
                    <Input type="text" name="name" />
                    <Input type="email" name="email" />
                    <Input type="textarea" name="message" />
                    <button
                        type="submit"
                        name="submit"
                        className={styles.submit}
                        data-testid="button-submit"
                    >
                        Submit
                    </button>
                </fieldset>
            </form>
        </>
    );
}

export default Form;
