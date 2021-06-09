
import React from "react";
import { getGallery } from "./api/case-study";
import Navigation from "../components/nav";
import Footer from "../components/footer";
import "animate.css";

const Gallery = ({body}) => {
    return (
    <>
      <Navigation />
      <div>
          {/* {body.map((galleryItem, i) => (
            //   console.log(galleryItem)
              <img src={galleryItem.image.url} />
            ))
          } */}
      </div>
      <Footer/>
      </>
    )
}

export async function getStaticProps() {
    const gallery = await getGallery();
    return {
      props: {
        body: gallery.data.gallery_content,
      },
    };
  }
  
export default Gallery;
