const general = {
    home: '/',
    login: '/login',
    register: '/register',
}

const product = {
    cart: '/cart',
    products: '/products',
    checkout: '/checkout',
    orders: '/orders',
    orderSummary: '/order-summary',
    activeOrders: 'active-orders'
}

export default {
    ...general,
    ...product
}