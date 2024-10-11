

interface Review {
    id: number;
    name: string;
    image: string;
    rating: number;
    date: string;
    review: string;
}

interface Filter {
    id: number;
    filter:  string;
}

export const REVIEWS: Review[] = [
    {
        id: 1,
        name: 'Charlotte Saunders',
        image: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=633&q=80',
        rating: 4,
        date: 'Nov 3',
        review: 'They can be a breath of fresh air when it comes to a drab afternoon. These are also a great way to jazz up a newsletter or a memo or even to simply print and attach to a bulletin board.'
    },
    {
        id: 2,
        name: 'Thomas Campbell',
        image: 'https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1488&q=80',
        rating: 5,
        date: 'Nov 3',
        review: 'They can be a breath of fresh air when it comes to a drab afternoon. These are also a great way to jazz up a newsletter or a memo or even to simply print and attach to a bulletin board.'
    },
    {
        id: 3,
        name: 'alex holland',
        image: 'https://images.unsplash.com/photo-1557178180-7baf4e4e9735?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
        rating: 4,
        date: 'Nov 3',
        review: 'They can be a breath of fresh air when it comes to a drab afternoon. These are also a great way to jazz up a newsletter or a memo or even to simply print and attach to a bulletin board.'
    },
    {
        id: 4,
        name: 'Thomas Campbell',
        image: 'https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1488&q=80',
        rating: 5,
        date: 'Nov 3',
        review: 'They can be a breath of fresh air when it comes to a drab afternoon. These are also a great way to jazz up a newsletter or a memo or even to simply print and attach to a bulletin board.'
    },
];


export const FILTER: Filter[] = [
    {
        id: 0,
        filter: 'All',
    },
    {
        id: 5,
        filter: '5',
    },
    {
        id: 4,
        filter: '4',
    },
    {
        id: 3,
        filter: '3',
    },
    {
        id: 2,
        filter: '2',
    },
    {
        id: 1,
        filter: '1',
    },
];


