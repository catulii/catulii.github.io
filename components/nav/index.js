import Link from "next/link";
import React, {useRef, useEffect}from "react";

const Navigation = () => {

  return (
    <nav classname="landing">
      <div className="nav">
        <div>
          <Link href="/">CATU BERRETTA</Link>
        </div>
        <div id="right-nav">
          {/* <Link href="/work">WORK</Link> */}
          <Link href="/about">ABOUT</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
