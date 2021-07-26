import Link from "next/link";
import React from "react";
import Image1 from "react-svg-loader!./Star.svg";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-socials">
        <Link
          target="_blank"
          href="https://drive.google.com/file/d/1p9RNqgyITIqDf0nnVndHhZrZIWcoX8qK/view?usp=sharing"
        >
          <a>RESUME</a>
        </Link>
        <Link href="https://www.instagram.com/catu.li/">
          <a>INSTAGRAM</a>
        </Link>
        <Link href="https://www.linkedin.com/in/catalinaberretta/">
          <a>LINKEDIN</a>
        </Link>
      </div>
      <div className="footer-email">
        <p className="madeBy">Made with love by Catu</p>
        <Image1 />
        <p>BERRETTA.C@NORTHEASTERN.EDU</p>
      </div>
    </div>
  );
};

export default Footer;
