import {
  ADD_PRODUCT,
  ADD_TO_CART,
  PRODUCT_LOADED,
  PRODUCT_ONE_LOADED,
  REMOVE_FROM_CART,
  REMOVE_PRODUCT,
  UPDATE_PRODUCT,
} from "../actionTypes/actionTypes";

const initialState = {
  cart: [],
  products: [],
  product:{}
};

const productReducer = (state = initialState, action) => {
  const selectedProduct = state.cart?.find(
    (product) => product._id === action.payload._id
  );

  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case UPDATE_PRODUCT:
      const index = state.products?.filter(i=>i._id!==action.payload._id)
      const productsData = [...index,action.payload]
      return {
        ...state,
        products: [...productsData],
      };
    case REMOVE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(
          (product) => product._id !== action.payload
        ),
      };
    case ADD_TO_CART:
      if (selectedProduct) {
        const newCart = state.cart.filter(
          (product) => product._id !== selectedProduct._id
        );

        selectedProduct.quantity = selectedProduct.quantity + 1;

        return {
          ...state,
          cart: [...newCart, selectedProduct],
        };
      }
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
      };
    case REMOVE_FROM_CART:
      if (selectedProduct.quantity > 1) {
        const newCart = state.cart.filter(
          (product) => product._id !== selectedProduct._id
        );
        selectedProduct.quantity = selectedProduct.quantity - 1;

        return {
          ...state,
          cart: [...newCart, selectedProduct],
        };
      }
      return {
        ...state,
        cart: state.cart.filter(
          (product) => product._id !== action.payload._id
        ),
      };

    case PRODUCT_LOADED:
      return {
        ...state,
        products: action.payload,
      };

    case PRODUCT_ONE_LOADED:
      return {
        ...state,
        product: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;
