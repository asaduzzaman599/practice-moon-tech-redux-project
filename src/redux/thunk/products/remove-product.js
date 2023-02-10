import { removeProduct } from "../../actions/productAction"

export const removeProductData =  (_id)=>{
    return async (dispatch) => {
        const res = await fetch(`http://localhost:5000/products/${_id}`,{
            method: "DELETE"
        })
        const data  = await res.json()
        if(data.acknowledged){
          dispatch (removeProduct(_id))  
        }
    }

}