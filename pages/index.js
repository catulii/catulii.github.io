import Navigation from "./components/nav";
import { getIndex } from "./api/case-study";
import Footer from "./components/footer";
import { fetchCaseStudies } from "./api/case-study";
import React, { useRef, useState } from "react";
import "animate.css";
import Link from "next/link";



export default function Home({ caseStudies, cyclist_img }) {

  const lefteyeRef = useRef(null);
  const rightEyeRef = useRef(null);

  function handleMouseMove(ev) {
    const eyesEl = lefteyeRef.current;
    const eyesElright = rightEyeRef.current;
    const x = eyesEl.getBoundingClientRect().left + eyesEl.style.width / 2;
    const y = eyesEl.getBoundingClientRect().top + eyesEl.style.height / 2;
    const radian = Math.atan2(ev.pageX - x, ev.pageY - y);
    let rot = radian * (180 / Math.PI) * -1 + 270;
    const pop = "rotate(" + rot + "deg)";
    eyesElright.style.transform = pop;
    eyesEl.style.transform = pop;
  }

  return (
    <>
      <Navigation />
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

          {/* <img src={cyclist_img.url}/> */}

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

          <h1 className="animate__animated animate__fadeIn" id="scroll">
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

          <div
            className="amongothers-item animate__animated animate__bounceIn"
            id="eyes"
            className="move-area"
            onMouseMove={(ev) => handleMouseMove(ev)}
          >
            <div className="demeyes">
              <div className="eye" ref={lefteyeRef}>
                <div className="pupil"></div>
              </div>
              <div className="eye" ref={rightEyeRef}>
                <div className="pupil"></div>
              </div>
            </div>
          </div>

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
              <p className="project-number">0{i + 1}</p>
              <div className="project-text">
              <Link href={study.url} key={i}><a className="linkme">
                  <h3>{study.whowhen}</h3>
                  <h1>{study.title}</h1>
                </a></Link> 
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
        ))}
      </div>

      <Footer/>
    </>
  );
}

export async function getStaticProps() {
  const studies = await fetchCaseStudies();
  const index = await getIndex();

  return {
    props: {
      cyclist_img: index.data.cyclist,
      caseStudies: studies.map((study) => {
        return {
          title: study.data.title[0].text,
          url: `/case-study/${encodeURIComponent(study.uid)}`,
          whowhen: study.data.whowhen[0].text,
          blurb: study.data.blurb[0].text,
          coverImage: study.data.landing_image ?? null,
        };
      }),
    },
  };
}

