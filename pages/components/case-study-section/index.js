import { RichText } from "prismic-reactjs";

const CaseStudySection = ({ slice }) => {

  const renderNext = () => {

    switch (slice.slice_type) {
      case "text":
        return (
          <div className="content-text">
            <RichText render={slice.primary.section_title} />
            <RichText render={slice.primary.section_paragraph} />
          </div>
        );
      case "image":
        return (
          <div  className="content-image">
            <img src={slice.primary.section_image.url} />
          </div>
        );
    }
  };
  return <div className="stuff">{renderNext()}</div>;
};

export default CaseStudySection;
