import { addProduct } from "../../actions/productAction"

export const addProductData = (product)=>{

    return async (dispatch)=>{
         const res = await fetch('http://localhost:5000/products',{
            method:"POST",
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify(product)
         })
        const data = await  res.json()
        dispatch(addProduct({...product,_id:res.insertedId}))
    }
}