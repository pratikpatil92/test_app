import { Button, Grid, makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import CardComponent from "../components/CardComponent";
import InputField from "../components/controls/InputField";
import { addProduct, editProduct } from "../redux/Actions/ProductAction";
import ProductService from "../services/ProductService";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root": {
      width: "100%",
      margin: theme.spacing(1),
    },
  },
}));

export default function AddProduct() {
  const classes = useStyles();
  const [values, setValues] = useState({
    title: "",
    brand: "",
    category: "",
    price: "",
    imgPath: "",
  });
  const [errors, setErrors] = useState({});
  const [title, setTitle] = useState("Add");
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      ProductService.getProductById(id).then((res) => {
        let data = res.data;
        setTitle("Update");
        setValues({
          title: data.title,
          brand: data.brand,
          category: data.category,
          price: data.price,
          imgPath: data.imgPath,
        });
      });
    }
  }, [id]);

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ("title" in fieldValues)
      temp.title = fieldValues.title ? "" : "This field is required.";
    if ("price" in fieldValues)
      temp.price = fieldValues.price ? "" : "This field is required.";
    setErrors({
      ...temp,
    });

    if (fieldValues === values)
      return Object.values(temp).every((x) => x === "");
  };

  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = () => {
    if (validate()) {
      let productObj = {
        title: values.title,
        brand: values.brand,
        category: values.category,
        price: values.price,
        imgPath: values.imgPath === "" ? "/img/noImage.jpeg" : values.imgPath,
      };
      if (title === "Add") {
        dispatch(addProduct(productObj));
      } else {
        dispatch(editProduct(productObj, id));
      }
    }
  };

  return (
    <>
      <CardComponent>
        <h3>{title} Product</h3>
        <form className={classes.root} autoComplete="off">
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <InputField
                name="title"
                label="Title"
                value={values.title}
                onChange={handleInputChange}
                error={errors.title}
                varient="outlined"
              />
            </Grid>
            <Grid item xs={6}>
              <InputField
                name="brand"
                label="Brand"
                value={values.brand}
                onChange={handleInputChange}
                varient="outlined"
              />
            </Grid>
            <Grid item xs={6}>
              <InputField
                name="category"
                label="Category"
                value={values.category}
                onChange={handleInputChange}
                varient="outlined"
              />
            </Grid>

            <Grid item xs={6}>
              <InputField
                name="price"
                label="Price"
                value={values.price}
                onChange={handleInputChange}
                error={errors.price}
                varient="outlined"
              />
            </Grid>

            <Grid item xs={6}>
              <InputField
                name="imgPath"
                label="Image"
                value={values.imgPath}
                onChange={handleInputChange}
                varient="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="primary" onClick={onSubmit}>
                {title}
              </Button>{" "}
              <Button variant="contained">Clear</Button>
            </Grid>
          </Grid>
        </form>
      </CardComponent>
    </>
  );
}
