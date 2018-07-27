import { Store } from '../../dataTypes';
import { ADD_PRODUCT } from '../actionsTypes';
import initState from '../initState';

import productsReducer from './products';
import { combineReducers } from 'redux';

const rootReducer = (
    state = initState,
    action: { type: string; payload?: any }
) => {
    const { products } = state;
    return {
        ...state,
        products: productsReducer(products, action)
    };
};

export default rootReducer;
