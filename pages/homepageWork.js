// import Link from "next/link";
// import React, { useEffect, useRef } from "react";
// import { fetchCaseStudies } from "./api/case-study";


// const HomepageProjects = ( { caseStudies } ) => {

//   console.log("ugh")
//   console.log(caseStudies[0]);
// //   const [showNav, toggleNav] = useState(true);

// // useEffect(() => {
// //   const scrollPortoflio = (e) => {
// //       window.scrollTo(window.scrollX + e.deltaY, 0);
// //   };

// //   const setupScrollListener = () => {
// //       if (window.innerWidth > "1080") {
// //           window.removeEventListener("wheel", scrollPortoflio);
// //           window.addEventListener("wheel", scrollPortoflio);
// //       } else {
// //           window.removeEventListener("wheel", scrollPortoflio);
// //       }
// //   };

// //   setupScrollListener();
// //   window.addEventListener("resize", setupScrollListener);

// //   return () => {
// //       window.removeEventListener("resize", setupScrollListener);
// //       window.removeEventListener("wheel", scrollPortoflio);
// //   };
// // }, []);

// return (
//     <div className="home-projects">
//       <section className="projects-container-list">

//     <ul className="progress-bar"></ul>


//     <div className="projects-container">
//       <li className="project-item">
//         <a className="project-content">
//           <span className='project-index'>01</span>
//           <div className="project-right">
//             <h1 className="project-name">Leading Edge</h1>
//             <span className="project-type">web design</span>
//           </div>
//         </a>
//       </li>

//       <li className="project-item">
//         <a className="project-content">
//           <span className='project-index'>01</span>
//           <div className="project-right">
//             <h1 className="project-name">Leading Edge</h1>
//             <span className="project-type">web design</span>
//           </div>
//         </a>
//       </li>
//     </div>
//     </section>

//   </div>
// )

// }


// export async function getStaticProps() {
//   const studies = await fetchCaseStudies();
//   return {
//       props: {
//           caseStudies: studies.map((study) => {
//               return {
//                   title: study.data.title[0].text,
//               };
//           }),
//       },
//   };
// }

// export default HomepageProjects;

