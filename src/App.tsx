import React, { useState } from 'react';
import { MessageForm } from './components';

import { submitForm, useAppDispatch } from './store';

import { AppDispatch } from './store/store';
import { Message } from './types';

async function handleSendMessage(
    message: Message,
    dispatch: AppDispatch,
    setStatus: React.Dispatch<React.SetStateAction<string>>
) {
    setStatus('sending');

    try {
        await dispatch(submitForm(message)).unwrap();

        setStatus('success');
    } catch (error) {
        setStatus('error');
    }
}

function App() {
    const dispatch = useAppDispatch();
    const [status, setStatus] = useState('idle');

    const handleSubmit = (message: Message) => {
        handleSendMessage(message, dispatch, setStatus);
    };

    return <MessageForm onSubmit={handleSubmit} status={status} />;
}

export default App;
export { handleSendMessage };
