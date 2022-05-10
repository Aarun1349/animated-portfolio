import React from "react";
import web from "../image/image2.jpg";
import Common from "./Common";
function About() {
  return (
    <>
      <Common
        headingOne="Welcome To About Page"
        headingTwo="We are team of talented developers"
        image={web}
        visit = "/contact"
        btnName ="Contact Now"
      />
    </>
  );
}

export default About;
