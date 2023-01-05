import axios from 'axios';

import {DEV_API} from "./../ApiEndPoints"

const API = DEV_API + "cart"

class CartService {

    getCart=()=>{
        return axios.get(API);
    }

    createCart=(cart)=>{
        return axios.post(API, cart);
    }

    getCartById=(cartId)=>{
        return axios.get(API + '/' + cartId);
    }

    updateCart=(cart, cartId)=>{
        return axios.put(API + '/' + cartId, cart);
    }

    deleteCart=(cartId)=>{
        return axios.delete(API + '/' + cartId);
    }

}

export default new CartService()