import { RichText } from "prismic-reactjs";
import Masonry from "react-masonry-css";
import ImageModal from "../image-modal";

const CaseStudySection = ({ slice }) => {
  const content = slice.primary;

  const renderNext = () => {
    switch (slice.slice_type) {
      case "text":
        return (
          <div  className="content-text">
            <RichText  render={content.section_title} />
            <RichText  render={content.section_paragraph} />
          </div>
        );
      case "image":
        return (
          <span  className="zoomin">
            <ImageModal  image={content.section_image} />
          </span>
        );
      case "gallery":
        return (
          <Masonry
            
            breakpointCols={2}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {slice.items.map((galleryItem, i) => (
              <img className="freelance-img" src={galleryItem.gallery_image.url} />
            ))}
          </Masonry>
        );
    }
  };
  return <div className="stuff">{renderNext()}</div>;
};

export default CaseStudySection;
