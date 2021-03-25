import { RichText } from "prismic-reactjs";
import { getAbout } from "./api/case-study";

const About = ({ description }) => {
  console.log(description);

  return (
    <>
      <div>
        <p className="about-description">
          <RichText render={description} />
        </p>
      </div>
    </>
  );
};

export async function getStaticProps() {
  const about = await getAbout();
  return {
    props: {
      description: about.data.description,
    },
  };
}
export default About;
