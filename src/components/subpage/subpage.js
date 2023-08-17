import React from "react";
import { Link, useNavigate } from "react-router-dom";
import './subpage.css'

const SubPage = ({ id, title, coverImage, category }) => {
  const navigate = useNavigate();

  const handleLinkClick = () => {
    navigate(`/work/${title}`);
  };

  return (
    <div className="sub-page">
      <div className="cover-image">
        <img src={coverImage} alt={`Cover for ${title}`} />
      </div>
      <Link className="title" to={`/work/${title}`} onClick={handleLinkClick}>
        {title}
      </Link>
    </div>
  );
};

export default SubPage;