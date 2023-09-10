import React from "react";
import { Categories } from "../data/categories";

export default function CatButtons({onCatSelection, selectedCatId}) {
  return (
    <>
      {Categories.map((cat) => (
        <button 
          type="button" 
          className={
            `cat-btn 
            ${cat.id === selectedCatId? 'btn-info': 'btn-primary'}`
          }
          key={cat.id} 
          onClick={() => onCatSelection(cat.id)}
        >
          {cat.title}
        </button>
      ))}
    </>
  );
}
