import { toast } from 'react-toastify'
import CartService from '../../services/CartService'

export function cartList() {
  return (dispatch)=>{
    CartService.getCart().then(response=>{
        dispatch({type:"SUCCESS_GET_CART",payload:response.data})
    }).catch(error=>{
        toast.error(error)
    })
  }
}

export function addCart(data) {
    return (dispatch)=>{
      CartService.createCart(data).then(response=>{
          dispatch({type:"SUCCESS_CREATE_CART",payload:response.data})
      }).catch(error=>{
          toast.error(error)
      })
    }
  }

export function removeCart(id){
    return(dispatch)=>{
        CartService.deleteCart(id).then(response=>{
            toast.success("Item Delete Successfully")
        }).catch(error=>{
            toast.error(error)
        })
    }
} 

export function removeAllCart(data){
    return(dispatch)=>{
        data?.map(ele=>{
            return CartService.deleteCart(ele.id).then(response=>{
                
            }).catch(error=>{
                toast.error(error)
            })
        })
        
    }
}