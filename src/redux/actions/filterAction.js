import { FILTER_BRAND, LOAD_STOCK } from "../actionTypes/actionTypes";

export const toggleStock = () => {
    return {
      type: LOAD_STOCK,
    };
  };

  export const filterBrand = (brand) => {
    return {
      type: FILTER_BRAND,
      playload: brand,
    };
  };