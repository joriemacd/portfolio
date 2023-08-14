import React from "react";
import { Link } from "react-router-dom";
// import turtleImage from "../images/turtle.jpeg"

const SubPage = ({ id, title, coverImage, category }) => (
  <div className="sub-page">
    <img src={coverImage} alt={`Cover for ${title}`} />
    <Link to={`/work/${title}`}>{title}</Link>
  </div>
);

export default SubPage;