import React from "react";

function CategoryFilter({setSelectedCat,categories, search, setSearch}) {  
  
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
      <input type="text" name="search" placeholder="Search by title..." value={search} onChange={e => setSearch(e.target.value)}/>
    </div>
  );
}

export default CategoryFilter;

