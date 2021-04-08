import { RichText } from "prismic-reactjs";

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
          <div  className="content-image">
            <img src={content.section_image.url} />
          </div>
        );
    }
  };
  return <div className="stuff">{renderNext()}</div>;
};

export default CaseStudySection;
