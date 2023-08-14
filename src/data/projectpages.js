import turtleImage from "../components/images/turtle.jpeg"
import dogImage from "../components/images/dogs.jpeg"
import catImage from "../components/images/catt.jpeg"

const subPagesData = [
    {
      id: 1,
      title: "Rüm App",
      coverImage: turtleImage,
      content: "Content of Page 1...",
      category: "Category A",
    },
    {
      id: 2,
      title: "Page 2",
      coverImage: dogImage,
      content: "Content of Page 2...",
      category: "Category B",
    },
    {
        id: 3,
        title: "Page 3",
        coverImage: catImage,
        content: "Content of Page 3...",
        category: "Category A",
      },
      {
        id: 4,
        title: "Page 4",
        content: "Content of Page 4...",
        category: "Category B",
      },
    // Add more sub-pages
  ];
  
  export default subPagesData;