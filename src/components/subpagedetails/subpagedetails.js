import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import projectpages from "../../data/projectpages";
import { BiArrowBack } from 'react-icons/bi';
import "./subpagedetails.css"


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

  const { title, content, coverImage} = subPage;

  return (
    <div className="sub-page-details">
      <button className="back-button" onClick={goBack}><BiArrowBack className="back-arrow"/></button>
      <div className="page-content">
      <h2>{title}</h2>
        <div className="display-image">
            <img src={coverImage} alt={`Cover for ${title}`} />
        </div>
          <p>{content}</p>
      </div>
      
        
    </div>
  );
};

export default SubPageDetails;