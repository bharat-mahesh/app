// orderStatus: 0 means 'pending', 1 means 'delivered', 2 means 'cancelled';

export const orderData = [
    {
        order_number: 1,
        order_status: 2,
        products: [
            {
                orderId: 102,
                image:[require('../assets/category_images/milk.jpg')],
                item_name: 'Milk',
                order_count: 80,
            },
            {
                orderId: 103,
                image:[require('../assets/category_images/butter.jpg')],
                item_name: 'Butter',
                order_count: 100,
            },
        ],
        tot_ordered_items: 1,
        tot_amnt: '11,078.00',
        farm_name: 'Abc',
        track_order: [
            {
                date_ordered: "08 October 2021",
                shipped: false,
                date_delivered: null,
            }
        ]
    },
    {
        order_number: 2,
        order_status: 1,
        products: [
            {
                orderId: 224,
                image:[require('../assets/category_images/butter.jpg')],
                item_name: 'Milk',
                order_count: 100,
            }
        ],
        tot_ordered_items: 25,
        tot_amnt: '10,000.00',
        farm_name: 'Def',
        track_order: [
            {
                date_ordered: "01 May 2022",
                shipped: true,
                date_delivered: "20 May 2022",
            }
        ]
    },
    {
        order_number: 3,
        order_status: 0,
        products: [
            {
                orderId: 4323,
                image:[require('../assets/category_images/butter_milk.jpeg')],
                item_name: 'Milk',
                order_count: 20,
            }
        ],
        tot_ordered_items: 15,
        tot_amnt: '50,000.00',
        farm_name: 'Hij',
        track_order: [
            {
                date_ordered: "11 August 2022",
                shipped: true,
                date_delivered: null,
            }
        ]
    },
    {
        order_number: 4,
        order_status: 0,
        products: [
            {
                orderId: 943,
                image:[require('../assets/category_images/cheese.jpeg')],
                item_name: 'Milk',
                order_count: 20,
            }
        ],
        tot_ordered_items: 15,
        tot_amnt: '50,000.00',
        farm_name: 'Klm',
        track_order: [
            {
                date_ordered: "15 August 2022",
                shipped: false,
                date_delivered: null,
            }
        ]
    },
]