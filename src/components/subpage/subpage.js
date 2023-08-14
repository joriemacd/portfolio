import React from "react";
import { Link } from "react-router-dom";
// import turtleImage from "../images/turtle.jpeg"
import './subpage.css'

const SubPage = ({ id, title, coverImage, category }) => (
  <div className="sub-page">
    <div className="cover-image">
    <img src={coverImage} alt={`Cover for ${title}`} />
    </div>
    <Link className="title" to={`/work/${title}`}>{title}</Link>
  </div>
);

export default SubPage;
