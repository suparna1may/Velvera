import React from 'react'
import { Link } from 'react-router-dom'
import BannerImg1 from '../../assets/images/ban1.jpg'
import BannerImg2 from '../../assets/images/ban2.jpg'

function Banner() {
  return (
    <>
      
  <section  className="banner">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-7 col-sm-12 col-xs-12">
          <div className="ban-wrap ban1">
          <img src={BannerImg1} className="img-fluid"/>
          <div className="ban_content">
            <h2>Timeless Fashion, Everyday Comfort.</h2>
            <p>From elevated basics to bold statement pieces <br/>
              —discoverlooks that express you.</p>
          </div>
         </div>
        </div>
         
          <div className="col-md-5 col-sm-12 col-xs-12">
            <div className="ban-wrap ban2">
            <img src={BannerImg2} className="img-fluid"/>
            <div className="ban-shop-btn">
              <div className="shp-icn">
              <Link to="/Shop"><i className="fa fa-bag-shopping"></i></Link>
              </div>
              <div className="shp-btn">
                <Link to="/Shop">Shop the Collection</Link>          
              </div>        
          </div>              
          </div>

          
          </div>
          </div>
          </div>  
          </section>
    </>
  )
}

export default Banner
