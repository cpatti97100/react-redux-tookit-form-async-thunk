import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import messagesSlice from './messagesSlice';

export const store = configureStore({
    reducer: { messages: messagesSlice },
    devTools: true,
    middleware(getDefaultMiddlewares) {
        if (process.env.NODE_ENV !== 'production') {
            return getDefaultMiddlewares().concat(logger);
        } else {
            return getDefaultMiddlewares();
        }
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
