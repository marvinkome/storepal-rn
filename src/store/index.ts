import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';

const logger = (state: any) => (next: any) => (action: any) => {
    console.warn('dispatching', action);
    const result = next(action);
    console.warn('next state', state.getState());
    return result;
};

const store = createStore(reducer);

export default store;
