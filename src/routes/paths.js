const publicRoutes = {
    home: '/',
    login: '/login',
    register: '/register',
}

const gaurdedRoutes = {
    cart: '/cart',
    products: '/products',
    checkout: '/checkout',
    orders: '/orders',
    orderSummary: '/order-summary',
    activeOrders: 'active-orders'
}

export default {
    ...publicRoutes,
    ...gaurdedRoutes
}