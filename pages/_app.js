import "../styles/styles.scss";
import React, { useRef, useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'

function MyApp({ Component, pageProps }) {
  const containerRef = useRef(null);


  return (
    <LocomotiveScrollProvider
    options={
      {
        smooth: true,
        // ... all available Locomotive Scroll instance options 
      }
    }
    
    containerRef={containerRef}
  > 
  <main data-scroll-container ref={containerRef}>
  <Component {...pageProps} />
  </main>
  </LocomotiveScrollProvider>
  )
}

export default MyApp
