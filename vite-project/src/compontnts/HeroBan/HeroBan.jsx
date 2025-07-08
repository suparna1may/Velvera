import React from 'react'
import { Link } from 'react-router-dom'

function HeroBan() {
  return (
    <>
           <section className="hero-section">
                  <div className="container">
                    <div className="row g-0">
                   
                      <div className="col-md-6 d-flex align-items-center">
                        <div className="hero-content">
                          <h6>STYLE MADE FOR YOU</h6>
                          <h1>FRESH STYLES TO ELEVATE<br/>YOUR EVERYDAY LOOK</h1>
                          <Link to="/Shop" className="hero_btn">Shop Now <i className="fa fa-bag-shopping"></i></Link>
                        </div>
                      </div>
                     
                    </div>
                  </div>
                </section>
    </>
  )
}

export default HeroBan
