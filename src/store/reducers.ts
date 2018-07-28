import { Creditors } from './../dataTypes';
import { Store, Products, Sales } from '../dataTypes';
import {
    ADD_PRODUCT,
    SELL_PRODUCT,
    EDIT_PRODUCT,
    PAY_DEBT
} from './actionsTypes';
import initState from './initState';

const updateItemInArray = (
    array: any[],
    itemId: string,
    callback: (item: any) => any,
    key = 'id'
) => {
    const updatedItems = array.map((item) => {
        if (item[key] !== itemId) {
            return item;
        }

        const updatedItem = callback(item);
        return updatedItem;
    });

    return updatedItems;
};

function addProductToStore(store: Store, payload: Products): Store {
    const products = store.products.concat(payload);
    return {
        ...store,
        products
    };
}

function editProductInStore(
    store: Store,
    payload: { id: string; name: string; price: number }
): Store {
    const products = updateItemInArray(
        store.products,
        payload.id,
        (item: Products): Products => ({
            ...item,
            ...payload
        })
    );

    const newStore = {
        ...store,
        products
    };

    return newStore;
}

function sellProductReducer(store: Store, payload: Sales): Store {
    // normal sale reducer, i.e w/o credit

    // create new sale data
    const sales = store.sales.concat(payload);

    // find the product and reduce the quantity
    const products = updateItemInArray(
        store.products,
        payload.id,
        (item: Products): Products => ({
            ...item,
            quantity: item.quantity - payload.quantity_sold
        })
    );

    let newStore = {
        ...store,
        products,
        sales
    };

    // sale with credit
    // find the creditor
    if (payload.on_credit) {
        let creditors = store.creditors;

        const creditor = store.creditors.filter(
            (item) => item.name === payload.creditor_name
        );

        // if creditor exist
        if (creditor.length) {
            const amountOwing = payload.amount_owing || 0;
            // add new item to creditor items owing
            // increase amount owing
            creditors = updateItemInArray(
                store.creditors,
                creditor[0].name,
                (item: Creditors): Creditors => {
                    // check if product already already exists
                    const itemsOwing = item.items_owing.filter(
                        (i) => i.product_id === payload.id
                    );

                    let newItemList;
                    if (itemsOwing.length) {
                        // item already exists
                        newItemList = updateItemInArray(
                            item.items_owing,
                            payload.id,
                            (it) => ({
                                ...it,
                                amount_owing: it.amount_owing + amountOwing
                            }),
                            'product_id'
                        );
                    } else {
                        newItemList = item.items_owing.concat({
                            product_id: payload.id,
                            name: payload.product_name,
                            amount_owing: amountOwing,
                            date_purchased: Date.now()
                        });
                    }

                    return {
                        ...item,
                        total_ammount_owing:
                            item.total_ammount_owing + amountOwing,
                        items_owing: newItemList
                    };
                },
                'name'
            );
        } else {
            // create new creditor data
            const creditorName = payload.creditor_name || '';
            const amountOwing = payload.amount_owing || 0;

            creditors = store.creditors.concat({
                name: creditorName,
                total_ammount_owing: amountOwing,
                items_owing: [
                    {
                        product_id: payload.id,
                        name: payload.product_name,
                        amount_owing: amountOwing,
                        date_purchased: payload.date_sold
                    }
                ]
            });
        }

        newStore = {
            ...newStore,
            creditors
        };
    }

    return newStore;
}

function payDebtReducer(
    store: Store,
    payload: {
        product_id: string;
        creditor: string;
        amount_paid: number;
    }
): Store {
    const creditors = updateItemInArray(
        store.creditors,
        payload.creditor,
        (item: Creditors): Creditors => ({
            ...item,
            total_ammount_owing: item.total_ammount_owing - payload.amount_paid,
            items_owing: updateItemInArray(
                item.items_owing,
                payload.product_id,
                (itemOwing: any) => ({
                    ...itemOwing,
                    amount_owing: itemOwing.amount_owing - payload.amount_paid
                }),
                'product_id'
            )
        }),
        'name'
    );

    return {
        ...store,
        creditors
    };
}

type actionType = { type: string; payload?: any };
const rootReducer = (state = initState, action: actionType) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return addProductToStore(state, action.payload);
        case EDIT_PRODUCT:
            return editProductInStore(state, action.payload);
        case SELL_PRODUCT:
            return sellProductReducer(state, action.payload);
        case PAY_DEBT:
            return payDebtReducer(state, action.payload);
        default:
            return state;
    }
};

export default rootReducer;
