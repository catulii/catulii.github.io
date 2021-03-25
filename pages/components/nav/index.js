import Link from "next/link";
import React from "react";

const Navigation = (bg) => {

  return (
    <nav className="nav-container">
      <a className="logo-container">
        <div className={!bg ? "nav-text" : "nav-text-active"}>Catu Berretta</div>
      </a>
      <ul className="nav-links-container">
        <li>
          <Link href="/work">
            <a className={!bg ? "nav-text" : "nav-text-active"} id="work-nav">
              work
            </a>
          </Link>
        </li>
        <li>
          <Link href="/about">
          <a className={!bg ? "nav-text" : "nav-text-active"} id="about-nav">
              about
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
