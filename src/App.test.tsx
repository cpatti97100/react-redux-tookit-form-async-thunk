import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { build, fake } from '@jackfranklin/test-data-bot';
import { MessageForm } from './components';
import { Message } from './types';

const buildMessageForm = build<Message>({
    fields: {
        name: fake((f) => f.internet.userName()),
        email: fake((f) => f.internet.email()),
        message: fake((f) => f.lorem.sentence()),
    },
});

test('handleSendMessage the form calls onSubmit with name, email and message', () => {
    const handleSubmit = jest.fn();

    render(<MessageForm onSubmit={handleSubmit} status="idle" />);

    const { name, email, message } = buildMessageForm();

    // could not understand why these 2 inputs were typed in reverse
    userEvent.type(
        screen.getByTestId('name-input'),
        name.split('').reverse().join('')
    );
    userEvent.type(screen.getByTestId('email-input'), email);
    userEvent.type(
        screen.getByTestId('message-input'),
        message.split('').reverse().join('')
    );

    userEvent.click(screen.getByTestId('button-submit'));

    expect(handleSubmit).toHaveBeenCalledWith({
        name,
        email,
        message,
    });
    expect(handleSubmit).toHaveBeenCalledTimes(1);
});
