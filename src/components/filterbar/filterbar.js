import React from "react";

const FilterBar = ({ selectedCategory, onCategoryChange }) => {
  const categories = ["All", "Category A", "Category B"]; // Add more categories as needed

  return (
    <div>
      <label>Filter by Category:</label>
      {categories.map(category => (
        <label key={category}>
          <input
            type="radio"
            name="category"
            value={category}
            checked={selectedCategory === category}
            onChange={() => onCategoryChange(category)}
          />
          {category}
        </label>
      ))}
    </div>
  );
};

export default FilterBar;