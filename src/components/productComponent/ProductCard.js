import { Button, Typography } from "@material-ui/core";
import React, { memo } from "react";
import CardComponent from "../CardComponent";

function ProductCard(props) {
  const { imgPath, title, price, onSubmit } = props;
  return (
    <>
      <CardComponent height="250" imgPath={imgPath}>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="subtitle1" >
          Rs {price} /-
        </Typography>
        <div className="cart-button">
        <Button variant="contained" color="secondary" onClick={onSubmit}>Add to Cart</Button>
        </div>
      </CardComponent>
    </>
  );
}

export default memo(ProductCard)
