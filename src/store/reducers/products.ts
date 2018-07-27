import { Products, Store } from './../../dataTypes';
import { ADD_PRODUCT } from '../actionsTypes';

export function addProductToStore(productStore: Products[], payload: Products) {
    const newProducts = productStore.concat(payload);
    return newProducts;
}

type ActionType = {
    type: string;
    payload?: any;
};

function productReducers(
    productState: Products[] | undefined = [],
    action: ActionType
) {
    switch (action.type) {
        case ADD_PRODUCT:
            return addProductToStore(productState, action.payload);
        default:
            return productState;
    }
}

export default productReducers;
