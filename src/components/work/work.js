import React, { useState } from "react";
import SubPage from "../subpage/subpage";
import FilterBar from "../filterbar/filterbar";
import subPagesData from "../../data/projectpages";
import "./work.css"

const Work = () => {
  const [categoryFilter, setCategoryFilter] = useState("All");

  const filteredSubPages = categoryFilter === "All"
    ? subPagesData
    : subPagesData.filter(page => page.categories.includes(categoryFilter));

  return (
    <div>
      <h1 className="work-text">Work</h1>
      {/* <h2>This page is currently under construction.</h2> */}
      <FilterBar
        selectedCategory={categoryFilter}
        onCategoryChange={setCategoryFilter}
      />
      <div>
        <div className="subpage-grid">
          {filteredSubPages.map(subPage => (
            <SubPage key={subPage.id} {...subPage} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
