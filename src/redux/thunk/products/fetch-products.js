import { loaded, loadedOneProdcut } from "../../actions/productAction"

export const loadProductData=()=>{

    return async (dispatch,getstate)=>{
        const res = await fetch('http://localhost:5000/products')
        const data = await res.json()
        dispatch(loaded(data))
        
    }
}


export const loadSIngleProductData=(id)=>{

    return async (dispatch,getstate)=>{
        const res = await fetch(`http://localhost:5000/products/${id}`)
        const data = await res.json()
        dispatch(loadedOneProdcut(data))
        
    }
}