import { Button, Divider, IconButton } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardComponent from "../components/CardComponent";
import {
  cartList,
  removeAllCart,
  removeCart,
} from "../redux/Actions/CartAction";
import DeleteIcon from "@material-ui/icons/Delete";
import {
  addCheckout,
  removeAllCheckout,
} from "../redux/Actions/CheckoutAction";
import { totalPrice } from "../utils/utils";

export default function Cart() {
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.CartReducer.cart);
  const checkoutData = useSelector((state) => state.CheckoutReducer.checkout);
  const [isDeleted, setIsDeleted] = useState(false);

  useEffect(() => {
    dispatch(cartList());
    if (checkoutData?.length !== 0) {
      dispatch(removeAllCheckout(checkoutData));
    }
  }, [dispatch, checkoutData]);

  useEffect(() => {
    if (isDeleted) {
      dispatch(cartList());
      setIsDeleted(false);
    }
  }, [dispatch, isDeleted]);

  const deleteItem = (id) => {
    setIsDeleted(true);
    dispatch(removeCart(id));
  };

  const onSubmit = () => {
    cartData.map((ele) => {
      return dispatch(addCheckout(ele));
    });
    dispatch(removeAllCart(cartData));
    window.location = "/checkout";
  };

  if (cartData?.length === 0) {
    return (
      <div>
        <h3>Cart is empty</h3>
      </div>
    );
  } else {
    return (
      <>
        <CardComponent>
          {cartData?.map((ele) => (
            <div className="cart" key={ele.id}>
              <div>{ele.title}</div>
              <div>
                Rs{ele.price}/-
                <IconButton
                  aria-label="delete"
                  onClick={() => deleteItem(ele.id)}
                >
                  <DeleteIcon />
                </IconButton>
              </div>
            </div>
          ))}
          <Divider />
          <div className="cart">
            <div>Total</div>
            <div>Rs{totalPrice(cartData)}/-</div>
          </div>
          <div className="cart-button">
            <Button variant="contained" color="secondary" onClick={onSubmit}>
              Checkout
            </Button>
          </div>
        </CardComponent>
      </>
    );
  }
}
