import axios from 'axios';

import {DEV_API} from "./../ApiEndPoints"

const API = DEV_API + "products"

class ProductService {

    getProduct=()=>{
        return axios.get(API);
    }

    createProduct=(product)=>{
        return axios.post(API, product);
    }

    getProductById=(productId)=>{
        return axios.get(API + '/' + productId);
    }

    updateProduct=(product, productId)=>{
        return axios.put(API + '/' + productId, product);
    }

    deleteProduct=(productId)=>{
        return axios.delete(API + '/' + productId);
    }

}

export default new ProductService()