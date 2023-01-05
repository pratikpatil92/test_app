const initialState = {
    cart: null,
  };
  
  export default function CartReducer(state = initialState, action) {
    switch (action.type) {
      case "SUCCESS_GET_CART":
        return {
          ...state,
          cart: action.payload,
        };
      default:
        return state;
    }
  }
