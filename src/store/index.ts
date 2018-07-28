import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';

const logger = (state: any) => (next: any) => (action: any) => {
    console.warn('dispatching', action);
    const result = next(action);
    console.warn('next state', state.getState());
    return result;
};

// @ts-ignore
const store = createStore(reducer, applyMiddleware(logger));

export default store;
