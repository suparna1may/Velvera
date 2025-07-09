import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import ArrivalImg1 from '../../assets/images/product/arrival-product1.jpg'
import ArrivalImg2 from '../../assets/images/product/arrival-product2.jpg'
import ArrivalImg3 from '../../assets/images/product/arrival-product3.jpg'

function Arrival() {
  const items = useSelector((state) => state.allCart.items);
  const dispatch = useDispatch();
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


                {items.slice(-3).map((item) => (
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-lg-12">             
              
                    <div className="arrival_pro">
                      <img src={item.src} className="img-fluid"/>
                      <div className="arrival_pro_wrap d-flex justify-content-between">
                      <div style={{width:'90%'}}>
                          <h3>{item.name}</h3>
                          <h4>${item.price}</h4>
                          </div>                       
                          <Link to={`/product/${item.id}`}><span><i className="fa fa-bag-shopping"></i></span></Link>
                       
                      </div>                    
                    </div>     
                               
                </div>

                ))}



              </div>
              </div>
          </section>
    </>
  )
}

export default Arrival
