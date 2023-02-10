import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../../components/ProductCard";
import { filterBrand, toggleStock } from "../../redux/actions/filterAction";
import { loaded } from "../../redux/actions/productAction";
import { PRODUCT_LOADED } from "../../redux/actionTypes/actionTypes";
import { loadProductData } from "../../redux/thunk/products/fetch-products";

const Home = () => {
  const {stocked, brand}=useSelector(state=>state.filter.filter)
  const {products}=useSelector(state=>state.products)
  const dispatch = useDispatch()


  useEffect(() => {
     dispatch(loadProductData());
  }, []);
 

  const activeClass = "text-white  bg-indigo-500 border-white";

  let content;
  /*/ = products?.map((product) => (
    <ProductCard key={product.model} product={product} />
  ))*/

    content = products?.filter(i=>
      
      stocked? i.status : true).filter(i=>{
      if(brand.length>0) 
        return brand.includes(i.brand)
      return true;
      
    }).map((product) => (
      <ProductCard key={product.model} product={product} />
    ))
  if(brand.length>1){
    content = products?.filter(i=>i.status).map((product) => (
      <ProductCard key={product.model} product={product} />
    ))
  }
  return (
    <div className='max-w-7xl gap-14 mx-auto my-10'>
      <div className='mb-10 flex justify-end gap-5'>
        <button
        onClick={()=>dispatch(toggleStock())}
          className={`border px-3 py-2 rounded-full font-semibold ${stocked && activeClass} `}
        >
          In Stock
        </button>
        <button
          onClick={()=>dispatch(filterBrand('amd'))}
        className={`border px-3 py-2 rounded-full font-semibold ${brand.includes('amd') && activeClass}`}>
          AMD
        </button>
        <button
          onClick={()=>dispatch(filterBrand('intel'))}
         className={`border px-3 py-2 rounded-full font-semibold ${brand.includes('intel') && activeClass}`}>
          Intel
        </button>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14'>
        {
          content
        }
      </div>
    </div>
  );
};

export default Home;
