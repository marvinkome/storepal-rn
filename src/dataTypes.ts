export type Products = {
    name: string;
    id: string;
    price: number;
    quantity: number;
};

export type Sales = {
    id: string;
    product_name: string;
    quantity_sold: number;
    date_sold: number;
    amount_paid: number;
    change_remaining: number;
    on_credit: boolean;
    creditor_name?: string;
    amount_owing?: number;
};

export type Creditors = {
    name: string;
    total_ammount_owing: number;
    items_owing: Array<{
        product_id: string;
        name: string;
        amount_owing: number;
        date_purchased: number;
    }>;
};

export type Store = {
    products: Products[];
    creditors: Creditors[];
    sales: Sales[];
};
