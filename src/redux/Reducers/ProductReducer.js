const initialState = {
    products: null,
  };
  
  export default function ProductReducer(state = initialState, action) {
    switch (action.type) {
      case "SUCCESS_GET_PRODUCT":
        return {
          ...state,
          products: action.payload,
        };
        case "SUCCESS_SEARCH_PRODUCT":
          return{
            ...state,
          products: action.payload,
          }
      default:
        return state;
    }
  }
