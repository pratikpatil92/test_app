import axios from 'axios';

import {DEV_API} from "./../ApiEndPoints"

const API = DEV_API + "checkout"

class CheckoutService {

    getCheckout=()=>{
        return axios.get(API);
    }

    createCheckout=(checkout)=>{
        return axios.post(API, checkout);
    }

    getCheckoutById=(checkoutId)=>{
        return axios.get(API + '/' + checkoutId);
    }

    updateCheckout=(checkout, checkoutId)=>{
        return axios.put(API + '/' + checkoutId, checkout);
    }

    deleteCheckout=(checkoutId)=>{
        return axios.delete(API + '/' + checkoutId);
    }

}

export default new CheckoutService()