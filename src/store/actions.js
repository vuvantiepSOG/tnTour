import axios from "axios";


export const getProducts = ({ commit }) => {
    axios.get('https://localhost:44336/api/Tours/GetAllTours')
        .then(respone => {
            commit('SET_PRODUCT', respone.data)
        })
}

export const getProduct = ({ commit }, id) => {
    axios.get("https://localhost:44336/api/Tours/GetAllTours?id=" + id)
        .then(res => {
            commit('SET_PRODUCTS', res.data);
        })
}

export const getCart = ({ commit }) => {
    axios.get("https://localhost:44336/api/Cart/GetAllCart")
        .then(res => {
            commit('GET_CART', res.data);
        })
}

export const setCart = ({ commit }) => {
    axios.post("https://localhost:44336/api/Cart/InsertCart", this.data)
        .then(res => {
            commit('SET_CARTs', res.data);
        })
}

export const getPosts = ({ commit }) => {
    axios.get('https://localhost:44350/api/Post/GetAllPost')
        .then(respone => {
            commit('SET_POSTS', respone.data)
        })
}


export const addProductToCart = ({ commit }, { product, quantity }) => {
    commit('ADD_TO_CART', { product, quantity })
}