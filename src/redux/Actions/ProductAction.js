import { toast } from 'react-toastify'
import ProductService from '../../services/ProductService'

export function productList() {
  return (dispatch)=>{
    ProductService.getProduct().then(response=>{
        dispatch({type:"SUCCESS_GET_PRODUCT",payload:response.data})
    }).catch(error=>{
        toast.error(error)
    })
  }
}

export function searchProduct(data) {
  return (dispatch)=>{
   
        dispatch({type:"SUCCESS_SEARCH_PRODUCT",payload:data})
    
  }
}

export function addProduct(data) {
  return (dispatch)=>{
    ProductService.createProduct(data).then(response=>{
      toast.success("Product Add Successfully")
      window.location = "/productManagement"
    }).catch(error=>{
        toast.error(error)
    })
  }
}

export function editProduct(data,id) {
  return (dispatch)=>{
    ProductService.updateProduct(data,id).then(response=>{
      toast.success("Product Update Successfully")
      window.location = "/productManagement"
    }).catch(error=>{
        toast.error(error)
    })
  }
}
