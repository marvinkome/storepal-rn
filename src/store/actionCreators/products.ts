import { ADD_PRODUCT } from './../actionsTypes';
import { Products } from '../../dataTypes';

export const addProduct = (product: Products) => ({
    type: ADD_PRODUCT,
    payload: product
});
