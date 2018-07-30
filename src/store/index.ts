import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import reducer from './reducers';

const logger = (state: any) => (next: any) => (action: any) => {
    console.warn('dispatching', action);
    const result = next(action);
    console.warn('next state', state.getState());
    return result;
};

const persistConfig = {
    key: 'root',
    storage
};

// @ts-ignore
const persistedReducer = persistReducer(persistConfig, reducer);
export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
