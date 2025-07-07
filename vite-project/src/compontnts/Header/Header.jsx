import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import Logo from "../../assets/images/logo.png"

function Header() {
  const wishlistCount = useSelector((state) => state.allCart.wishlist.length);

  const { cart } = useSelector((state) => state.allCart);


  return (
    <>
   
  <section className="top-nav">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h6>
            Enjoy FREE standard delivery on orders over $100.
            <a href="shop"> <i className="fa fa-bag-shopping"></i> SHOP NOW</a>

          </h6>

        </div>
      </div>
    </div>
  </section>

  <header>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">


        <div className="col-xxl-5 col-xl-5 col-xl-5 col-lg-5 col-md-5 col-sm-12 col-xs-12">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="mainNavbar">

            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item menu-item">
              <Link to="/" className="nav-link active">Home</Link>
              </li>
              <li className="nav-item menu-item">
              <Link to="/Shop" className="nav-link active">Shop</Link>
              </li>
              <li className="nav-item menu-item dropdown hover-dropdown">
                <a className="nav-link dropdown-toggle" href="#"  role="button">
                  Categories
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Men’s Collection</a></li>
                  <li><a className="dropdown-item" href="#">Women’s Collection</a></li>
                  <li><a className="dropdown-item" href="#">Accessories Collection</a></li>
                </ul>
              </li>

              <li className="nav-item menu-item">
              <Link to="/" className="nav-link active">Contact</Link>
              </li>    
            </ul>
     
          </div>

          
        </div>
        <div className="col-xxl-2 col-xl-2 col-xl-2 col-lg-2 col-md-2">
          <Link to="/" className="navbar-brand d-none d-md-block">
            <img src={Logo} className="img-fluid logo"/>
          </Link>
        </div>
        <div className="col-xxl-5 col-xl-5 col-xl-5 col-lg-5 col-md-5 col-sm-12 col-xs-12">
          <div className="d-flex justify-content-end">

            <div className="search-box">
              <i className="search-icon fas fa-search"></i>
              <input type="text" className="search" placeholder="Search Products ..."/>
            </div>

            <div className="cart-icn d-flex">
              
              <Link to="/Wishlist"> <i className="fa-solid fa-heart"></i> <span className="wishlist-count">{wishlistCount}</span></Link>
             
              <Link to="/Cart"> <i className="fa-solid fa-bag-shopping"></i> <span>{cart.length}</span> </Link>

            </div>
          </div>



        </div>

      </div>
    </nav>

  </header>
      
    </>
  )
}

export default Header
