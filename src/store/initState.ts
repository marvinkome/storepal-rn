const initData = {
    products: [
        {
            name: 'Milk',
            id: '0',
            price: 10,
            quantity: 40
        },
        {
            name: 'Cheese',
            id: '1',
            price: 10,
            quantity: 0
        }
    ],
    creditors: [
        {
            name: 'Rachel Smith',
            total_ammount_owing: 10,
            items_owing: [
                {
                    product_id: 'adbc',
                    name: 'Milk',
                    amount_owing: 10,
                    date_purchased: 0
                }
            ]
        }
    ],
    sales: []
};

export default initData;
