import {ADD_TO_CART} from '../actionTypes/actionTypes'
export const productSequence = ( state )=>(next)=>(action)=>{
    if(action.type === ADD_TO_CART){
        action.payload.index = state.getState().products.cart.length
    }
    return next(action)
}