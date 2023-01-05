import { Divider } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardComponent from "../components/CardComponent";
import { cartList } from "../redux/Actions/CartAction";
import { chekoutList } from "../redux/Actions/CheckoutAction";
import { totalPrice } from "../utils/utils";

export default function Checkout() {
  const dispatch = useDispatch();
  const checkoutData = useSelector((state) => state.CheckoutReducer?.checkout);

  useEffect(() => {
    dispatch(chekoutList());
    dispatch(cartList());
  }, [dispatch]);

  if (checkoutData?.length === 0) {
    return (
      <div>
        <h3>Nothing in Checkout</h3>
      </div>
    );
  } else {
    return (
      <div>
        <h3>Thank you for shopping</h3>
        <p>Your order details are below</p>
        <CardComponent>
          {checkoutData?.map((ele) => (
            <div className="cart" key={ele.id}>
              <div>{ele.title}</div>
              <div>Rs{ele.price}/-</div>
            </div>
          ))}
          <Divider />
          <div className="cart">
            <div>Total</div>
            <div>Rs{totalPrice(checkoutData)}/-</div>
          </div>
        </CardComponent>
      </div>
    );
  }
}
