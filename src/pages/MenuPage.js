import React, { useState } from "react";
import Products from "../components/Products";
import CatButtons from "../components/CatButtons";
import Pagination from "../components/Pagination";
import { allItems } from "../data/prodcutsData";
// import { Categories } from "../data/categories";

export default function MenuPage({ addToCart , showProduct}) {
  const [selectedCatId, setSelectedCatid] = useState(null);
  const [products, setProducts] = useState(allItems);

  let upperLimit=0;
  let lowerLimit=0;

  const page = ( item ) => {
   if(upperLimit!==item){
    upperLimit = item;
    lowerLimit=upperLimit-9
    setProducts (allItems. filter((product) => {
    if(product.id >= lowerLimit && product.id <=upperLimit) {
      return product;
    }
    })
  )
}
}




  const onCatSelection = (catId) => {
    console.log(catId);
    // console.log(typeof catId);
    setSelectedCatid(catId);
    const filteredItems = allItems.filter((p) => p.categoryId === catId);
    setProducts(filteredItems);
  };


  return (
    <>
      <div className="container mb-5">
        <div className="categories">
        <CatButtons onCatSelection={onCatSelection} selectedCatId={selectedCatId}/>
        </div>
        {/* <Categories /> */}
        <div className="kfc-cardss">
        <Products addToCart={addToCart} items={products} showProduct={showProduct}/>
        </div>
        <Pagination page={page} />
      </div>
    </>
  );
}
