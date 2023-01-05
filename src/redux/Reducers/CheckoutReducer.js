const initialState = {
    checkout: null,
  };
  
  export default function CheckoutReducer(state = initialState, action) {
    switch (action.type) {
      case "SUCCESS_GET_CHECKOUT":
        return {
          ...state,
          checkout: action.payload,
        };
      default:
        return state;
    }
  }
