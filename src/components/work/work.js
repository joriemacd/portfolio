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
      <h1>Work</h1>
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


// import React, { useState } from "react";
// import SubPage from "../subpage/subpage";
// import FilterBar from "../filterbar/filterbar";
// import subPagesData from "../../data/projectpages";
// import "./work.css"

// const Work = () => {
//   const [categoryFilter, setCategoryFilter] = useState("All");

//   const filteredSubPages = categoryFilter === "All"
//     ? subPagesData
//     : subPagesData.filter(page => page.category === categoryFilter);

//   return (
//     <div>
//       <h1>Work</h1>
//       <FilterBar
//         selectedCategory={categoryFilter}
//         onCategoryChange={setCategoryFilter}
//       />
//       <div>
//         <div className="subpage-grid">
//           {filteredSubPages.map(subPage => (
//             <SubPage key={subPage.id} {...subPage} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Work;

// import React, { useState } from "react";
// // import FilterBar from "./FilterBar";
// // import subPagesData from "./subPagesData"; // Import your data

// const Work = () => {
//   const [selectedCategory, setSelectedCategory] = useState("All");
  
//   const filteredSubPages = subPagesData.filter((subpage) => {
//     if (selectedCategory === "All") {
//       return true;
//     }
//     return subpage.categories.includes(selectedCategory);
//   });

//   const handleCategoryChange = (category) => {
//     setSelectedCategory(category);
//   };

//   return (
//     <div>
//       <FilterBar
//         selectedCategory={selectedCategory}
//         onCategoryChange={handleCategoryChange}
//       />
//       <div>
//         {filteredSubPages.map((subpage) => (
//           <div key={subpage.id}>
//             <h2>{subpage.title}</h2>
//             <img src={subpage.coverImage} alt={subpage.title} />
//             <p>{subpage.content}</p>
//             <p>Categories: {subpage.categories.join(", ")}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Work;