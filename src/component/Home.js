import React from "react";
import web from "../image/image1.jpg";
import Common from "./Common";
function Home() {
  return (
    <>
      <Common
        headingOne="Grow your business with"
        headingTwo="We are team of talented developers"
        image={web}
        visit = "/service"
        btnName ="Get Started"
      />
    </>
  );
}

export default Home;
