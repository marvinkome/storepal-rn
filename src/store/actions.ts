import {
    ADD_PRODUCT,
    SELL_PRODUCT,
    EDIT_PRODUCT,
    PAY_DEBT
} from './actionsTypes';
import { Products, Sales } from '../dataTypes';

export const addProduct = (product: Products) => ({
    type: ADD_PRODUCT,
    payload: product
});

type editPayloadType = {
    id: string;
    name: string;
    price: number;
};
export const editProduct = (productData: editPayloadType) => ({
    type: EDIT_PRODUCT,
    payload: productData
});

export const sellProduct = (sale: Sales) => ({
    type: SELL_PRODUCT,
    payload: sale
});

type payDebtPayloadType = {
    product_id: string;
    creditor: string;
    amount_paid: number;
};
export const payDebt = (paymentData: payDebtPayloadType) => ({
    type: PAY_DEBT,
    payload: paymentData
});
