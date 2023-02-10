import { FILTER_BRAND, LOAD_STOCK } from "../actionTypes/actionTypes";

const initialState = {
    filter:{
        brand:[],
        stocked:false,
    }
}

const filterReducer = (state=initialState,action)=>{
    switch(action.type){
        case LOAD_STOCK:
        return {
            ...state,
            filter : {
                ...state.filter,
                stocked: !state.filter.stocked
            }
        }
        
        case FILTER_BRAND:
            let brand = state.filter.brand;
            if(brand.includes(action.playload)){
                brand = brand.filter(i=>i!= action.playload)
            }else{
                brand = [...brand,action.playload]
            }

        return{
            ...state,
            filter:{
                ...state.filter,
                brand
            }
        }
        default:
            return state;
    }
}

export default filterReducer;