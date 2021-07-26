import Navigation from "../components/nav";
import { getIndex } from "./api/case-study";
import Footer from "../components/footer";
import { fetchCaseStudies } from "./api/case-study";
import React, { useRef, useState, useEffect } from "react";
import "animate.css";
import Link from "next/link";
import { useLocomotiveScroll } from "react-locomotive-scroll";

export default function Home({ caseStudies }) {
  const { scroll } = useLocomotiveScroll();

  return (
    <div  className="landing-wrapper">
      <Navigation />
      <div className="main">
        <div className="main-container">
          <h1  className="main-about">
              <span className="alt-text">Hi, I’m Catu! </span>I am a designer,
              illustrator and developer living Boston. I love designing and
              building delightful web experiences, drawing fun doodles and
              riding my bicycle with no hands.
          </h1>
        </div>
    

        <div className="right-line">
          <div className="vertical-line"></div>
          <h3 className="vertical-text">See my work</h3>
        </div>
      </div>

      <div  className="projects-container">
        {caseStudies.slice(0).map((study, i) => (
          <div  className="project">
            <div className="project-img">
              <img 
                className="project-asset-img"
                src={study.coverImage.url}
                alt={study.coverImage.alt}
              />
            </div>

            <Link href={study.url} key={i}>
              <a>
                <div className="project-info">
                  <div>0{study.number}</div>
                  <div className="project-text">
                    <h1 className="alt-text">{study.who}</h1>
                    <h1 className="description">{study.title}</h1>
                    <p>{study.when}</p>
                  </div>
                </div>
              </a>
            </Link>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const studies = await fetchCaseStudies();
  const index = await getIndex();

  return {
    props: {
      cyclist_img: index.data.cyclist,
      caseStudies: studies.map((study, i) => {
        return {
          number: i,
          title: study.data.title[0].text,
          url: `/case-study/${encodeURIComponent(study.uid)}`,
          who: study.data.who[0].text,
          when: study.data.when[0].text,
          coverImage: study.data.landing_image ?? null,
        };
      }),
    },
  };
}
