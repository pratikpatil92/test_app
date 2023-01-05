import { combineReducers } from "redux";
import CartReducer from "./CartReducer";
import CheckoutReducer from "./CheckoutReducer";
import ProductReducer from "./ProductReducer";

const reducers = combineReducers({
    ProductReducer: ProductReducer,
    CartReducer:CartReducer,
    CheckoutReducer:CheckoutReducer,
});

export default reducers;