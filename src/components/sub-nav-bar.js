import React from "react"

// Utilities
import './style.css'


const PhotoBox = () => {
  return (
    <section className="sub-nav-bar">
        <ol>
            <li className="sub-nav-button" key="portfolio" id="active"><a href="...">Portfolio</a></li>
            <li className="sub-nav-button" key="skills"><a href="...">Skills</a></li>
            <li className="sub-nav-button" key="clients"><a href="...">Clients</a></li>
            <li className="sub-nav-button" key="references"><a href="...">References</a></li>
        </ol>
  </section>
  );
}

export default PhotoBox
