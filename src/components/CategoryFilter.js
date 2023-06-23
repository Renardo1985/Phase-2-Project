import React from "react";

function CategoryFilter({selectedCat,setSelectedCat,categories}) {

  
  
    return (
    <div className="categories">
      <label>
        Category
        <select onChange={(e)=> setSelectedCat(e.target.value)} name="category">
          {categories.map((category,index)=>(
            <option key={index}>{category}</option>
          ))}
        </select>
      </label>
    </div>
  );
}

export default CategoryFilter;

