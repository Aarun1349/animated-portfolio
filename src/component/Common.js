import React from 'react'
import { NavLink } from "react-router-dom";
function Common(props) {
  return (
    <section id="header" className="d-flex align-center-item">
        <div className="container-fluid nav_tag">
          <div className="row">
            <div className="col-md-10 mx-auto">
              <div className="row">
                <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1 className="my-3">
                    {props.headingOne}
                    <strong className="brand-name"> BaneCorporation</strong>
                  </h1>
                  <h2> {props.headingTwo}</h2>
                  <div className="mt-3">
                    <NavLink className="btn-get-started" to={props.visit}>
                      {props.btnName}
                    </NavLink>
                  </div>
                </div>
                <div className="col-lg-6 order-lg-2 header-image">
                  <img src={props.image} className="img-fluid animated" alt="hae item"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Common