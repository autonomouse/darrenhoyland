import React from "react"

// Utilities
import './style.css'

// Components
import Categories from "../components/categories"
import Tags from "../components/tags"


const PhotoBox = (children) => {
  return (
    <>
        <Categories />
        <Tags />
    </>
  );
}

export default PhotoBox
