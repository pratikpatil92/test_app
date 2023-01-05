import { toast } from 'react-toastify'
import CheckoutService from '../../services/CheckoutService'

export function chekoutList() {
  return (dispatch)=>{
    CheckoutService.getCheckout().then(response=>{
        dispatch({type:"SUCCESS_GET_CHECKOUT",payload:response.data})
    }).catch(error=>{
        toast.error(error)
    })
  }
}

export function addCheckout(data) {
    return (dispatch)=>{
      CheckoutService.createCheckout(data).then(response=>{
      }).catch(error=>{
          toast.error(error)
      })
    }
  }

export function removeAllCheckout(data){
    return(dispatch)=>{
        data?.map(ele=>{
            return CheckoutService.deleteCheckout(ele.id).then(response=>{
            }).catch(error=>{
                toast.error(error)
            })
        })
        
    }
}