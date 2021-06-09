import { RichText } from "prismic-reactjs";
import Masonry from "react-masonry-css";
import ImageModal from "../image-modal";

const CaseStudySection = ({ slice }) => {
  const content = slice.primary;

  const renderNext = () => {
    switch (slice.slice_type) {
      case "text":
        return (
          <div data-scroll-section className="content-text">
            <RichText data-scroll render={content.section_title} />
            <RichText data-scroll render={content.section_paragraph} />
          </div>
        );
      case "image":
        return (
          <span data-scroll-section className="zoomin">
            <ImageModal data-scroll image={content.section_image} />
          </span>
        );
      case "gallery":
        return (
          <Masonry
            data-scroll-section
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
