import React from 'react';
import KfcCard from './KfcCard';

export default function Products({addToCart, items, showProduct}) {
  return (
    <div className="products-main">
    {
        items.map(item => <KfcCard key={item.id} item={item} addToCart={addToCart} showProduct={showProduct}/>)
    }
    </div>
  )
}
