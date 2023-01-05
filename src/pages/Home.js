import { CircularProgress, Grid } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/productComponent/ProductCard";
import ProductSearch from "../components/productComponent/ProductSearch";
import { addCart } from "../redux/Actions/CartAction";
import { productList } from "../redux/Actions/ProductAction";

export default function Home() {
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.ProductReducer.products);

  useEffect(() => {
    dispatch(productList());
  }, [dispatch]);
 
  const onCreateCart=(ele)=>{
    let obj = {
      title: ele.title,
      Brand: ele.Brand,
      price:ele.price,
      imgPath:ele.imgPath
    }
    dispatch(addCart(obj))
  }




  if(!productData){
      return <CircularProgress/>
  }else return (
    <>
    <div className="d-flex flex-end searchBox">
    <ProductSearch/>
    </div>
      <Grid container spacing={2}>
        {productData?.map((ele) => (
          <Grid key={ele.id} item md={4}>
            <ProductCard
              imgPath={process.env.PUBLIC_URL + ele.imgPath}
              title={ele.title}
              price={ele.price}
              onSubmit={()=>onCreateCart(ele)}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
