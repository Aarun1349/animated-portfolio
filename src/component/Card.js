import React from "react";
import { NavLink } from "react-router-dom";
import web from "../image/image3.jpg";
function Card() {
  return (
    <>
      <div className="card" style={{borderRadius:"5px", marginBottom:"25px"}} >
        <img src={web} className="card-img-top"  style={{height:"400px"}} alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <NavLink to="/" className="btn btn-primary">
            Go somewhere
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Card;
