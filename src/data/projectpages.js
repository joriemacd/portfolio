import turtleImage from "../components/images/turtle.jpeg";
import dogImage from "../components/images/dogs.jpeg";
import catImage from "../components/images/catt.jpeg";
import smartScope from "../components/images/smartscope.png";

const subPagesData = [
  {
    id: 1,
    title: "Rüm App",
    coverImage: turtleImage,
    content: "Content of Page 1...",
    categories: ["Design", "Code"],
  },
  {
    id: 2,
    title: "Page 2",
    coverImage: dogImage,
    content: "Content of Page 2...",
    categories: ["Design"],
  },
  {
    id: 3,
    title: "Page 3",
    coverImage: catImage,
    content: "Content of Page 3...",
    categories: ["Code"],
  },
  {
    id: 4,
    title: "Smart Microscope",
    coverImage: smartScope,
    content: "Content of Page 4...",
    categories: ["Design"],
  },
  // Add more sub-pages
];

export default subPagesData;
