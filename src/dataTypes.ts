export interface Products {
    name: string;
    id: string;
    price: number;
    quantity: number;
}

export interface Sales {
    id: string;
    product_name: string;
    quantity_sold: number;
    date_sold: number;
    ammount_paid: number;
    change_remaining: number;
    on_credit: boolean;
    creditor_name?: string;
    ammount_owing?: number;
}

export interface Creditors {
    name: string;
    total_ammount_owing: number;
    items_owing: Array<{
        product_id: string;
        name: string;
        ammount_owing: number;
        date_purchased: number;
    }>;
}

export interface Store {
    products: Products[];
    creditors: Creditors[];
    sales: Sales[];
}
