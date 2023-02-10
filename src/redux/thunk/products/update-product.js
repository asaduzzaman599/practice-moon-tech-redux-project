import { addProduct, updateProduct } from "../../actions/productAction"

export const UpdateProductData = (product)=>{

    return async (dispatch)=>{
         const res = await fetch(`http://localhost:5000/products/${product._id}`,{
            method:"PUT",
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify(product)
         })
        const data =await res.json()
        if(data.acknowledged){
           
        dispatch(updateProduct(product)) 
        }
    }
}