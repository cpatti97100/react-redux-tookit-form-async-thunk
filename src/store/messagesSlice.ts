import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

interface Message {
    name: string;
    email: string;
    message: string;
}

interface MessagesState {
    sentMessages: Array<Message>;
}

const initialState: MessagesState = {
    sentMessages: [],
};

const submitForm = createAsyncThunk(
    'messages/formSubmitted',
    async (message: Message) => {
        try {
            const response: Message = await new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (Math.random() >= 0.5) {
                        resolve(message);
                    }

                    reject('Could not send message :(');
                }, 3000);
            });

            return response;
        } catch (error) {
            throw new Error('Error!');
        }
    }
);

export const messagesSlice = createSlice({
    name: 'messages',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(submitForm.fulfilled, (state, action) => {
            state.sentMessages.push(action.payload);
        });
    },
});

export { submitForm };

export default messagesSlice.reducer;
