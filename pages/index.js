import Head from "next/head";
import { Client } from "../prismic-configuration";
import Navigation from "./components/nav";
import { fetchCaseStudies } from "./api/case-study";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import "animate.css";

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

  return (
    <>
      {/* <Navigation bg={hover} /> */}
      <div className="main animate__animated animate__fadeInDown">
        <svg src="wave.svg"></svg>
        <div>
          <h1
            className="animate__animated animate__fadeInDown hvr-grow"
            id="catu"
          >
            CATU
          </h1>
          <h1 className="animate__animated animate__fadeInDown" id="is">
            IS
          </h1>
          <h1 className="animate__animated animate__fadeInDown" id="a">
            A
          </h1>

          <a id="designer">DESIGNER*</a>

          <h1 className="animate__animated animate__bounceInUp" id="plus">
            +
          </h1>

          <div className="amongothers">
            <a
              className="amongothers-item animate__animated animate__bounceInRight"
              id="illustrator"
            >
              ILLUSTRATOR
            </a>
            <a
              className="amongothers-item animate__animated animate__bounceInRight"
              id="developer"
            >
              DEVELOPER
            </a>
            <a
              className="amongothers-item animate__animated animate__bounceInRight"
              id="director"
            >
              DESIGN DIRECTOR
            </a>
            <a
              className="amongothers-item animate__animated animate__bounceInRight"
              id="cyclist"
            >
              CYCLIST
            </a>
          </div>

          <h1
            className="hvr-hang animate__animated animate__fadeIn"
            id="scroll"
          >
            SCROLL
          </h1>
          <h1
            className="amongothers-item animate__animated animate__fadeIn"
            id="to"
          >
            TO
          </h1>
          <h1
            className="amongothers-item animate__animated animate__fadeIn"
            id="see"
          >
            SEE
          </h1>
          <img
            className="amongothers-item animate__animated animate__bounceIn"
            id="eyes"
            src="./eyes.png"
          />
          <h1
            className="amongothers-item animate__animated animate__fadeIn"
            id="herwork"
          >
            HER WORK
          </h1>
        </div>
      </div>

      {/* PROJECTS */}
      <div className="all-projects">

      {caseStudies.map((study, i) => (
        <div key={i} className="container">
        <div className="project-info">
          <p className="project-number">0{i+1}</p>
          <div className="project-text">
            <a>
              <h3>{study.whowhen}</h3>
              <h1>{study.title}</h1>
            </a>
            <p>
            {study.blurb}
            </p>
          </div>
        </div>
        <div className="project-asset">
          <img
            className="project-asset-img"
            src={study.coverImage.url}
            alt={study.coverImage.alt}
          ></img>
        </div>
      </div>
      ))};
        
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
          whowhen: study.data.whowhen[0].text,
          blurb: study.data.blurb[0].text,
          coverImage: study.data.landing_image ?? null,
          csImage: study.data.hp_images,
        };
      }),
    },
  };
}
