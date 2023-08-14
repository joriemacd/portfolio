import React, { useState } from "react";
import './filterbar.css'

const FilterBar = ({ selectedCategory, onCategoryChange }) => {
  const categories = ["All", "Category A", "Category B"]; // Add more categories as needed

  const [activeCategory, setActiveCategory] = useState(selectedCategory);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    onCategoryChange(category);
  };

  return (
    <div>
      {/* <label>Filter by Category:</label> */}
      {categories.map(category => (
        // <label key={category}>
        <label
          key={category}
          className={activeCategory === category ? "active" : ""}
        >
         <input
            type="radio"
            name="category"
            value={category}
            checked={activeCategory === category}
            onChange={() => handleCategoryChange(category)}
          />
          {category}
        </label>
      ))}
    </div>
  );
};

export default FilterBar;