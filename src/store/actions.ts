import { ADD_PRODUCT, SELL_PRODUCT } from './actionsTypes';
import { Products, Sales } from '../dataTypes';

export const addProduct = (product: Products) => ({
    type: ADD_PRODUCT,
    payload: product
});

export const sellProduct = (sale: Sales) => ({
    type: SELL_PRODUCT,
    payload: sale
});
