import { InputAdornment, Tooltip } from '@material-ui/core';
import React, { memo } from 'react'
import InputField from '../controls/InputField';
import SearchIcon from '@material-ui/icons/Search';
import { useDispatch, useSelector } from 'react-redux';
import { productList, searchProduct } from '../../redux/Actions/ProductAction';


function ProductSearch(props) {
    const [value, setValue] = React.useState("");
    const dispatch = useDispatch()
    const products = useSelector(state=>state.ProductReducer.products)
    const onValueChange = e =>{
        setValue(e.target.value)
    }

    const onSubmit = (e) =>{
        if(e.key === 'Enter'){
            let data = products
            data = data.filter(ele=>{
              return ele.title.toLowerCase().includes(value.toLowerCase())
            })
            dispatch(searchProduct(data))
        }else if (e.keyCode === 8) {
          dispatch(productList())
      }
    }

  return (
    <>
    <InputField value={value} onChange={onValueChange} inputProps={{
          startAdornment: (
            <Tooltip title="Press Enter to Search">
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
            </Tooltip>
          )
        }}  onKeyDown={onSubmit} placeholder="Search Products"/>
    </>
  )
}

export default memo(ProductSearch)
