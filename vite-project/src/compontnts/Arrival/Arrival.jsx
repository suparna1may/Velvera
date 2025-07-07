import React from 'react'
import { Link } from 'react-router-dom'
import ArrivalImg1 from '../../assets/images/product/arrival-product1.jpg'
import ArrivalImg2 from '../../assets/images/product/arrival-product2.jpg'
import ArrivalImg3 from '../../assets/images/product/arrival-product3.jpg'

function Arrival() {
  return (
    <>
       <section className="arrival_sec">
            <div className="container">
              <div className="row">
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-lg-12 pt-5">
                  <h6 className="sub_hd">Fresh Styles Just Dropped</h6>
                  <h2 className="main_hd">
                    New arrival collection
                  </h2>
                  <p className="desc">Be the first to wear what’s new. 
                    Explore the latest arrivals designed 
                    for standout looks and everyday 
                    comfort.</p>
                    <Link to="/Shop" className="shop_btn">Shop Now <i className="fa fa-bag-shopping"></i></Link>
                </div>

                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-lg-12">
                <Link to="/">
                    <div className="arrival_pro">
                      <img src={ArrivalImg1} className="img-fluid"/>
                      <div className="arrival_pro_wrap d-flex justify-content-between">
                      <div style={{width:'90%'}}>
                          <h3>Men's Formal Trousers</h3>
                          <h4>$120.00</h4>
                          </div>                       
                          <Link to="/"><span><i className="fa fa-bag-shopping"></i></span></Link>
                       
                      </div>                    
                    </div>     
                  </Link>                 
                </div>

                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-lg-12">
                  <Link to="/">
                    <div className="arrival_pro">
                      <img src={ArrivalImg2} className="img-fluid"/>
                      <div className="arrival_pro_wrap d-flex justify-content-between">
                      <div style={{width:'90%'}}>
                          <h3>Women's Kurta</h3>
                          <h4>$90.00</h4>   
                          </div>                    
                          <Link to="/"><span><i className="fa fa-bag-shopping"></i></span></Link>
                       
                      </div>                    
                    </div>     
                  </Link>                 
                </div>

                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-lg-12">
                  <Link to="/">
                    <div className="arrival_pro">
                      <img src={ArrivalImg3} className="img-fluid"/>
                      <div className="arrival_pro_wrap d-flex justify-content-between">
                      <div style={{width:'90%'}}>
                          <h3>Women's Sling Bag</h3>
                          <h4>$65.00</h4>    
                          </div>                   
                          <Link to="/"><span><i className="fa fa-bag-shopping"></i></span></Link>
                       
                      </div>                    
                    </div>     
                  </Link>                 
                </div>


              </div>
              </div>
          </section>
    </>
  )
}

export default Arrival
