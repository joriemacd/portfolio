// import React from "react";
// import { useParams } from "react-router-dom";
// import projectpages from "../../data/projectpages"

// const SubPageDetails = () => {
//   const { projectName } = useParams();
//   const subPage = projectpages.find(page => page.title === projectName);

//   if (!subPage) {
//     return <div>Sub-page not found</div>;
//   }

//   const { title, content, category } = subPage;

//   return (
//     <div className="sub-page-details">
//       <h2>{title}</h2>
//       <p>{content}</p>
//       <p>Category: {category}</p>
//     </div>
//   );
// };

// export default SubPageDetails;
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import projectpages from "../../data/projectpages";

const SubPageDetails = () => {
  const { projectName } = useParams();
  const subPage = projectpages.find((page) => page.title === projectName);

  const navigate = useNavigate();

  const goBack = () => {
    navigate('/work');
  };

  if (!subPage) {
    return <div>Sub-page not found</div>;
  }

  const { title, content, category } = subPage;

  return (
    <div className="sub-page-details">
    <button onClick={goBack}>Back to Projects</button>
      <h2>{title}</h2>
      <p>{content}</p>
      <p>Category: {category}</p>
      
    </div>
  );
};

export default SubPageDetails;