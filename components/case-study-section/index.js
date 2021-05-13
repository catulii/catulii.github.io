import { RichText } from "prismic-reactjs";
import ImageModal from "../image-modal";

const CaseStudySection = ({ slice }) => {
  const content = slice.primary;

  const renderNext = () => {

    switch (slice.slice_type) {
      case "text":
        return (
          <div className="content-text">
            <RichText render={content.section_title} />
            <RichText render={content.section_paragraph} />
          </div>
        );
      case "image":
        return (
          <span className="zoomin">
            <ImageModal image={content.section_image} />
          </span>

        );
    }
  };
  return <div className="stuff">{renderNext()}</div>;
};

export default CaseStudySection;
