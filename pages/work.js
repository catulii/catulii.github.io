import React from "react";
import Navigation from "../components/nav";
import Footer from "../components/footer";
import { fetchCaseStudies } from "./api/case-study";
import { getIndex } from "./api/case-study";
import Link from "next/link";

export default function Work({ caseStudies }) {
  return (
    <>
      <Navigation />
      <div  className="work-wrapper">
        <div  className="content">
          <h1 >All work</h1>
          <div  className="workList">
            {caseStudies.map((study, i) => (
              <Link href={study.url} key={i}>
                <a>
                    <div className="individual">
                    <h2 className="who" >{study.who}</h2>
                  <h2 className="what" >{study.title}</h2>
                    </div>

                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const studies = await fetchCaseStudies();
  const index = await getIndex();

  return {
    props: {
      caseStudies: studies.map((study, i) => {
        return {
          title: study.data.title[0].text,
          url: `/case-study/${encodeURIComponent(study.uid)}`,
          who: study.data.who[0].text,
        };
      }),
    },
  };
}
