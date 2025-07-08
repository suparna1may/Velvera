import React from 'react'
import { Link } from 'react-router-dom'

function PromoBan() {
  return (
    <>
      <section className="promo-section d-flex align-items-center">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-8 text-center promo-banner justify-content-center">
      <div className="hero-content">
        <h6>Limited Time Offer</h6>
        <h1>FASHION SALE <br/>LOOK GOOD. FEEL BETTER.</h1>
        <Link to="/Shop" className="hero_btn">Shop Now <i className="fa fa-bag-shopping"></i></Link>
      </div>
      </div>

    </div>
  </div>
</section>
    </>
  )
}

export default PromoBan
