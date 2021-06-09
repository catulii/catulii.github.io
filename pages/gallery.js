import React from "react";
import Masonry from "react-masonry-css";
import { getGallery } from "./api/case-study";
import { RichText } from "prismic-reactjs";
import Navigation from "../components/nav";
import Footer from "../components/footer";
import "animate.css";

const Gallery = ({ body }) => {
  return (
    <>
      <Navigation />
      <div className="gallery-container">
      <Masonry data-scroll-section
        breakpointCols={3}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {body.map((galleryItem, i) => (
          <div data-scroll className="gallery-item" key={i}>
            <img src={galleryItem.image.url} />
            <p>  <RichText render={galleryItem.image_caption} /></p>
          </div>
        ))}
      </Masonry>
      </div>
      <Footer />
    </>
  );
};

export async function getStaticProps() {
  const gallery = await getGallery();
  return {
    props: {
      body: gallery.data.gallery_content,
    },
  };
}

export default Gallery;
