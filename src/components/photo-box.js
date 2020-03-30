import React from "react"

// Utilities
import './style.css'


const PhotoBox = (props) => {
  return (
    <section className="photo-box">
      <section className="photo-circle">
          <div className="image-cropper">
              <img src={props.picture} className="rounded" alt="pic" />
          </div>
      </section>

      <header className="header-bar">
          <h1>Darren Hoyland</h1>
          <h2>Full Stack Developer</h2>
          <h2>Writer</h2>
      </header>
    </section>
  );
}

export default PhotoBox
