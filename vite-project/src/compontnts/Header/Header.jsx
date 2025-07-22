import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import Logo from "../../assets/images/logo.png"
import { setItems } from '../../Redux/cartSlice';


function Header() {
  // Search Product
 
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [input, setInput] = useState('');


  const products = useSelector(state => state.allCart.items);
  useEffect(() => {
    if (products.length === 0) {
      dispatch(setItems(products));
    }
  }, []);

  const results = products.filter(p =>
    p.name.toLowerCase().includes(input.toLowerCase())
  );

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);
  };

  const handleClick = (id) => {
    navigate(`/product/${id}`);
    setInput(''); 
  };

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
            <Link to="/Shop"> <i className="fa fa-bag-shopping"></i> SHOP NOW</Link>

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
                  <li><Link className="dropdown-item" to="/Shop/cat-men">Men’s Collection</Link></li>
                  <li><Link className="dropdown-item" to="/Shop/cat-women">Women’s Collection</Link></li>
                  <li><Link className="dropdown-item" to="/Shop/accessory">Accessories Collection</Link></li>
                </ul>
              </li>

              <li className="nav-item menu-item">
              <Link to="/Contact" className="nav-link active">Contact</Link>
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
              {/* <input type="text" className="search" placeholder="Search Products ..."/> */}
              <input
        type="text"
        className="search"
        placeholder="Search for products..."
        value={input}
        onChange={handleChange}
      />

{input && (
        <div className="search-results position-absolute bg-white shadow-sm p-3">
          {results.length ? (
            results.slice(0, 5).map(product => (
              <div key={product.id} className="d-flex align-items-center mb-2 cursor-pointer"
                onClick={() => handleClick(product.id)}>
                <img src={product.src} alt={product.name} width="50" height="50" className="me-2" />
                <div>
                  <h4>{product.name}</h4>
                  <h3 className="text-danger fw-bold">₹{product.price}</h3>
                </div>
              </div>
            ))
          ) : (
            <div>No matching products found.</div>
          )}
        </div>
      )}

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
