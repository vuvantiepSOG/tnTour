import state from "./state";

export const SET_PRODUCT = (state, products) => {
    state.products = products;
}

export const SET_PRODUCTS = (state, product) => {
    state.product = product;
}

export const GET_CART = (state, cart) => {
    state.cart = cart;
}

export const SET_POSTS = (state, posts) => {
    state.posts = posts;
}

export const ADD_TO_CART = (state, { product, quantity }) => {
    state.cart.push({
        product,
        quantity
    })
}