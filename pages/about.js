import { RichText } from "prismic-reactjs";
import { getAbout } from "./api/case-study";
import Footer from "./components/footer";
import React, { useRef, useState } from "react";
import Image1 from "react-svg-loader!./Star.svg";

const About = ({
  facts,
  f_img1,
  f_img2,
  f_text,
  stats,
  s_img1,
  s_img2,
  s_text,
  misc,
  m_img1,
  m_img2,
  m_text,
}) => {
  const [tab, setTab] = useState("stats");

  const navDisplay = () => {
    switch (tab) {
      case "facts":
        return facts.map((fact, i) => (
          <div className="test">
            <h3>
              <RichText render={fact.facts_text} />
            </h3>
            {fact.star ? <Image1 className="lilstar" /> : null}
          </div>
        ));
      case "stats":
        return stats.map((stat, i) => (
          <div className="test">
            <h3>
              <RichText render={stat.stats_text} />
            </h3>
            {stat.star ? <Image1 className="lilstar" /> : null}
          </div>
        ));
      case "misc":
        return misc.map((m, i) => (
          <div className="test">
            <h3>
              <RichText render={m.misc_text} />
            </h3>
            {m.star ? <Image1 className="lilstar" /> : null}
          </div>
        ));
    }
  };

  const imageDisplay = () => {
    switch (tab) {
      case "facts":
        return (
          <div className="image-stack">
            <div className="image-stack_item image-stack_item-back">
              <img src={f_img1.url} />
              <RichText render={f_text} />
            </div>
            <div className="image-stack_item image-stack_item-front">
              <img src={f_img2.url} />
            </div>
          </div>
        );
      case "stats":
        return (
          <div className="image-stack">
            <div className="image-stack_item image-stack_item-back">
              <img src={s_img1.url} />
              <RichText render={s_text} />
            </div>
            <div className="image-stack_item image-stack_item-front">
              <img src={s_img2.url} />
            </div>
          </div>
        );
      case "misc":
        return (
          <div className="image-stack">
            <div className="image-stack_item image-stack_item-back">
              <img src={m_img1.url} />
              <RichText render={m_text} />
            </div>
            <div className="image-stack_item image-stack_item-front">
              <img src={m_img2.url} />
            </div>
          </div>
        );
    }
  };

  return (
    <div className="about-wrapper">
      <div className="about">
        <div className="left">
          <div className="info-intro">
            <h1>Hi, I'm Catu!</h1>
          </div>

          <div className="info">
            <div className="tabs-wrapper">
              <nav className="tabs">
                <a className="tab" onMouseEnter={(ev) => setTab("facts")}>
                  FACTS
                </a>
                <a className="tab" onMouseEnter={(ev) => setTab("stats")}>
                  STATS
                </a>
                <a className="tab" onMouseEnter={(ev) => setTab("misc")}>
                  MISC
                </a>
              </nav>
            </div>

            <div className="info-text">{navDisplay()}</div>
          </div>
        </div>
        <div className="right">
          <div className="images">{imageDisplay()}</div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export async function getStaticProps() {
  const about = await getAbout();
  return {
    props: {
      facts: about.data.facts,
      f_img1: about.data.facts_img1 ?? null,
      f_img2: about.data.facts_img2 ?? null,
      f_text: about.data.facts_text ?? null,
      stats: about.data.stats,
      s_img1: about.data.stats_img1 ?? null,
      s_img2: about.data.stats_img2 ?? null,
      s_text: about.data.stats_text ?? null,
      misc: about.data.misc,
      m_img1: about.data.misc_img1 ?? null,
      m_img2: about.data.misc_img2 ?? null,
      m_text: about.data.misc_text ?? null,
    },
  };
}
export default About;
