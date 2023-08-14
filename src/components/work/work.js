import React, { useState } from "react";
import SubPage from "../subpage/subpage";
import FilterBar from "../filterbar/filterbar";
import subPagesData from "../../data/projectpages";

const Work = () => {
  const [categoryFilter, setCategoryFilter] = useState("All");

  const filteredSubPages = categoryFilter === "All"
    ? subPagesData
    : subPagesData.filter(page => page.category === categoryFilter);

  return (
    <div>
      <h1>Work</h1>
      <FilterBar
        selectedCategory={categoryFilter}
        onCategoryChange={setCategoryFilter}
      />
      <div>
        {filteredSubPages.map(subPage => (
          <SubPage key={subPage.id} {...subPage} />
        ))}
      </div>
    </div>
  );
};

export default Work;