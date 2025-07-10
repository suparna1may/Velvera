import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/images/logo.png'

function Footer() {
  return (
    <>
      
<footer>
  <div className="footer_sec">
  <div className="container">
    <div className="row">
      <div className="col-md-3 text-md-start text-center mb-2 mb-md-0">
        <img src={Logo} className="footer_logo img-fluid"/>
        <div className="social">
          <Link to="/" className="text-white me-3"><i className="fab fa-facebook-f"></i></Link>
          <Link to="/" className="text-white me-3"><i className="fab fa-instagram"></i></Link>
          <Link to="/" className="text-white"><i className="fab fa-twitter"></i></Link>
        </div>
      </div>
      <div className="col-md-3 mb-4 mb-md-0">
        <h6 className="hd mb-3">Quick Links</h6>
        <ul className="list-unstyled">
          <li><Link to="/" className="text-decoration-none">Home</Link></li>
          <li><Link to="/Shop" className="text-decoration-none">Shop</Link></li>
          <li><Link to="/Contact" className="text-decoration-none">Contact</Link></li>
        </ul>
      </div>
      <div className="col-md-3 mb-4 mb-md-0">
        <h6 className="hd mb-3">Categories</h6>
        <ul className="list-unstyled small">
          <li><Link to="/Shop/cat-men" className="text-decoration-none">Men Collection</Link></li>
          <li><Link to="/Shop/cat-women"  className="text-decoration-none">Women Collection</Link></li>
          <li><Link to="/Shop/accessory"  className="text-decoration-none">Accessories</Link></li>
        </ul>
      </div>
      <div className="col-md-3">
        <h6 className="hd mb-3">Contact With Us</h6>
        <ul className="list-unstyled">
          <li><Link to="/" className="text-decoration-none"><i className="fas fa-phone-alt me-2"></i> +1 1175511000</Link></li>
          <li><Link to="/" className="text-decoration-none"><i className="fas fa-envelope me-2"></i> support@velvera.com</Link></li>
          </ul>
      </div>
    </div>

  </div>
</div>

<div className="copyright_sec">
  <div className="container">
    <div className="d-flex flex-column flex-md-row justify-content-between">
      <p className="mb-2 mb-md-0">&copy; Copyright 2024 Velvera.</p>
      <div>
        <a href="#" className="text-muted me-3">Terms & Conditions</a>
        <a href="#" className="text-muted me-3">Privacy Policy</a>
        <a href="#" className="text-muted">Shipping Policy</a>
      </div>
    </div>
    </div>
    </div>
</footer>


    </>
  )
}

export default Footer
