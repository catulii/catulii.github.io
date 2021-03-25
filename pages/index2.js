import Head from "next/head";
import { Client } from "../prismic-configuration";
import Navigation from "./components/nav";
import { fetchCaseStudies } from "./api/case-study";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import 'animate.css';

export default function Home({ caseStudies }) {
  
  const [bgHover, setBgHover] = useState(false);
  const [hover, setHover] = useState(false);
  const [index, setIndex] = useState(2);
  const workLinks = useRef(null);
  const fornow = true;

  const updateDisplay = (i, hoverState) => {
    setHover(hoverState);
    setIndex(i);
  };

  // console.log(caseStudies.map((study, i) => (study.title)));
// console.log(caseStudies[1].csImage);
  return (
    <>
      <Navigation bg={hover} />
      <div className={!bgHover ? "background-gradient" : "alt-gradient"} />

      <div className="container">
        <div className="images-container">
          {/* HOVER IMAGES */}
          {hover ? (
            <div className="image-display">
              <div className="col1">
                <img
                  className="img-homepage  img-spacing animate__animated animate__fadeInDown"
                  src={caseStudies[index].csImage[0].image.url}
                  alt={caseStudies[index].csImage[0].image.alt}
                />

                <img
                  className="img-homepage animate__animated animate__fadeInDown" 
                  src={caseStudies[index].csImage[1].image.url}
                  alt={caseStudies[index].csImage[1].image.alt}
                />
              </div>
              <div className="col2">
                <img
                  className="img-homepage animate__animated animate__fadeInDown" 
                  src={caseStudies[index].csImage[2].image.url}
                  alt={caseStudies[index].csImage[2].image.alt}
                />
              </div>
            </div>
          ) : null}
        </div>

        {/* PROJECT LIST */}
        <div className="projects-container">
          <div
            className="work-links"
            ref={workLinks}
            onMouseEnter={() => setBgHover(true)}
            onMouseLeave={() => setBgHover(false)}
          >
            {caseStudies.map((study, i) => (
              <li className="project-item">
                <Link key={i} href={study.url}>
                  <a
                    className="project-content"
                    onMouseEnter={() => updateDisplay(i, true)}
                    onMouseLeave={() => updateDisplay(i, false)}
                  >
                    <span className="project-index">0{i + 1}</span>
                    <div className="project-right">
                      <h1 className="project-name">{study.title}</h1>
                      <span className="project-type">{study.type}</span>
                    </div>
                  </a>
                </Link>
              </li>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const studies = await fetchCaseStudies();
  const count = 0;
  return {
    props: {
      caseStudies: studies.map((study) => {
        return {
          number: count,
          title: study.data.title[0].text,
          url: `/work/${encodeURIComponent(study.uid)}`,
          type: study.data.type[0].text,
          coverImage: study.data.landing_image ?? null,
          csImage: study.data.hp_images,
        };
      }),
    },
  };
}
