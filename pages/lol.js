{/* <div className="main-component">
        <div className={!bgHover ? "background-gradient" : "alt-gradient"} />

        <div className="home-projects">
         

            <div className="container">
            <div className="projects-container-list">
            {hover ? (
              <div className="image-display">
                <img className="img-homepage"
                  src={caseStudies[index].csImage[0].image.url}
                  alt={caseStudies[index].csImage[0].image.alt}
                />

                <img className="img-homepage"
                  src={caseStudies[index].csImage[1].image.url}
                  alt={caseStudies[index].csImage[1].image.alt}
                />

                <img className="img-homepage"
                  src={caseStudies[index].csImage[2].image.url}
                  alt={caseStudies[index].csImage[2].image.alt}
                />
              </div>
            ) : null}
            <div>

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
          </div>

        </div> */}