import "../styles/styles.scss";
import React, { useRef, useState, useEffect } from "react";
import ReactDOM from 'react-dom';

function MyApp({ Component, pageProps }) {
  const containerRef = useRef(null);


  return (
  
  <main>
  <Component {...pageProps} />
  </main>
  )
}

export default MyApp
