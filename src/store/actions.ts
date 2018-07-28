import { ADD_PRODUCT, SELL_PRODUCT, EDIT_PRODUCT } from './actionsTypes';
import { Products, Sales } from '../dataTypes';

export const addProduct = (product: Products) => ({
    type: ADD_PRODUCT,
    payload: product
});

export const editProduct = (productData: {
    id: string;
    name: string;
    price: number;
}) => ({
    type: EDIT_PRODUCT,
    payload: productData
});

export const sellProduct = (sale: Sales) => ({
    type: SELL_PRODUCT,
    payload: sale
});
