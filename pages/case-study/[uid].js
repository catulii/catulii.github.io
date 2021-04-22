import { fetchCaseStudies } from "../api/case-study";
import { RichText, Link, Date } from "prismic-reactjs";
import PropTypes from "prop-types";
import CaseStudySection from "../../components/case-study-section";
import Footer from "../../components/footer";
import NavigationCS from "../../components/nav";


const CaseStudy = ({ title, blurb, role, focus, body, uid }) => {

  const checkOut = () => {
    switch (uid) {
      case "leadingedge":
        return (
          <div className="bottom">
            <p>You can check out the live site <a href="https://www.leadingedge.org/">here</a></p>
          </div>
        )
        case "afh":
          return (
            <div className="bottom">
              <p>You can check out the hi-fi wireframes <a href="https://www.figma.com/proto/cd09VVWSranlV8Wn0ZjxpS/AFH-Hi-FI-Wireframes?node-id=231%3A4&scaling=min-zoom&page-id=231%3A0">here</a></p>
            </div>
          )
    }
  }
  return (
    <>
      <NavigationCS/>
      <div className="wrapper">
        <div className="casestudy-intro">
          <div className="col-1">
            <p>01</p>
          </div>
          <div className="col-2">
            <p className="stats-title">Role</p>
            <p className="stats-text">
              <RichText render={role} />
            </p>
            <p className="stats-title">Focus</p>
            <p className="stats-text">
              <RichText render={focus} />
            </p>
          </div>
          <div className="col-3">
            <RichText render={title} />
            <RichText render={blurb} />
          </div>
        </div>
        {body.map((slice, i) => (
          <CaseStudySection key={i} slice={slice} />
        ))}
        {checkOut()}

      </div>
      <Footer />
    </>
  );
};

CaseStudy.propTypes = {
  title: PropTypes.array,
};

const getIndex = (studies, uid) => {
  return [...studies].findIndex((val) => val.uid === uid);
};

export async function getStaticProps({ params }) {
  const allStudies = await fetchCaseStudies();
  const studyIndex = getIndex(allStudies, params.uid);
  const study = allStudies[studyIndex];

  return {
    props: {
      uid: params.uid,
      title: study.data.title,
      blurb: study.data.blurb,
      role: study.data.role,
      focus: study.data.focus,
      body: study.data.body,
    },
  };
}

export async function getStaticPaths() {
  const studies = await fetchCaseStudies();
  return {
    paths: studies.map((study) => `/case-study/${study.uid}`),
    fallback: false,
  };
}

export default CaseStudy;
