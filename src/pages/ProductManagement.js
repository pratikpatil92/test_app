import { Button, IconButton, TableBody, TableCell, TableRow, Tooltip } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useTable from "../components/hooks/useTable";
import { productList } from "../redux/Actions/ProductAction";
import { EditOutlined, DeleteOutline } from "@material-ui/icons";
import { useNavigate } from "react-router";
import ProductService from "../services/ProductService";
import { toast } from "react-toastify";
import ProductSearch from "../components/productComponent/ProductSearch";

const headCells = [
  "Id",
  "Title",
  "Brand",
  "Category",
  "Price",
  "ImgPath",
  "Action",
];

export default function ProductManagement() {
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.ProductReducer.products);
  const navigate = useNavigate()
  useEffect(() => {
    dispatch(productList());
  }, [dispatch]);
  const { TblContainer, TblHead } = useTable(headCells);
  const onDeleteItem = id =>{
      ProductService.deleteProduct(id).then(()=>{
          toast.success("Delete product successfully")
    dispatch(productList());

      }).catch(error=>{
          toast.error("Failed")
      })
  }
  return (
    <>
    <div className="productManagementHead">
        <ProductSearch/>
        <Button variant="outlined" color="primary" onClick={()=>navigate("/addProduct")}>Add Product</Button>

    </div>
      <TblContainer>
        <TblHead />
        <TableBody>
          {productData?.map((ele) => (
            <TableRow key={ele.id}>
              <TableCell>{ele.id}</TableCell>
              <TableCell>{ele.title}</TableCell>
              <TableCell>{ele.brand}</TableCell>
              <TableCell>{ele.category}</TableCell>
              <TableCell>{ele.price}</TableCell>
              <TableCell>{ele.imgPath}</TableCell>
              <TableCell>
                <IconButton onClick={()=>navigate(`/editProduct/${ele.id}`)}>
                    <Tooltip title="Edit">
                  <EditOutlined color="secondary" />
                  </Tooltip>
                </IconButton>
                <IconButton onClick={()=>onDeleteItem(ele.id)}>
                    <Tooltip title="Delete">
                  <DeleteOutline color="secondary" />
                  </Tooltip>
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </TblContainer>
    </>
  );
}
