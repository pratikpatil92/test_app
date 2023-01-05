import axios from 'axios';
import { toast } from 'react-toastify';

import {DEV_API} from "./../ApiEndPoints"

const API = DEV_API + "users"

class LoginAndSignUpService {

    getUsers=()=>{
        return axios.get(API);
    }

    createUser=(product)=>{
        return axios.post(API, product);
    }

    proceedLogin = (email, password) =>{
        return axios.get(API+ "?email="+email).then((resp) => {
                console.log(resp)
                if (resp.data.length === 0) {
                    toast.error('Please Enter valid email');
                } else {
                    if (resp.data[0].password === password) {
                        toast.success('Success');
                        localStorage.setItem('token',email);
                        window.location = ('/')
                    }else{
                        toast.error('Please Enter valid credentials');
                    }
                }
            }).catch((err) => {
                toast.error(err.message);
            });
    }

}

export default new LoginAndSignUpService()