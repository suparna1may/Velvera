import React from 'react'
import Layout from '../../compontnts/Layout/Layout'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';

function Shop() {
    const items = useSelector((state) => state.allCart.items);
    const dispatch = useDispatch();

  return (
    <>
      <Layout>
      <section className="breadcrumb_bg">
        <div className="container py-5">
      <div className="text-center py-4">
        <h2 className="fw-bold m-0 main_hd">SHOP</h2>
        <p className="text-dark m-0 desc">Home <i className="fa fa-angle-right mx-1"></i> Shop</p>
      </div>
      </div>
      </section>

      
<section>
    <div className="container py-5">
        <div className="row">
          <aside className="col-md-3 filter-sidebar">
            <h2 className="sidebar_hd">Filters</h2>
            <div className="filter-section">
              <h3 className="filter-title">Filter by categories</h3>
              <form>
                <div className="form-check">
                  <input className="form-check-input custom-radio" type="radio" name="category" id="catAll" checked/>
                  <label className="form-check-label" for="catAll">All <small>(24)</small></label>
                </div>
                <div className="form-check">
                  <input className="form-check-input custom-radio" type="radio" name="category" id="catMen"/>
                  <label className="form-check-label" for="catMen">Men <small>(17)</small></label>
                </div>
                <div className="form-check">
                  <input className="form-check-input custom-radio" type="radio" name="category" id="catWomen"/>
                  <label className="form-check-label" for="catWomen">Women <small>(15)</small></label>
                </div>
                <div className="form-check">
                  <input className="form-check-input custom-radio" type="radio" name="category" id="catAccessories"/>
                  <label className="form-check-label" for="catAccessories">Accessories <small>(7)</small></label>
                </div>

                
              </form>
            </div>
      
            <div className="filter-section">
              <h3 className="filter-title">Filter by categories</h3>
              <form>
                <div className="form-check">
                    <input className="form-check-input custom-radio" type="radio" name="subcategory" id="All" checked/>
                    <label className="form-check-label" for="All">All <small>(13)</small></label>
                  </div>
                <div className="form-check">
                  <input className="form-check-input custom-radio" type="radio" name="subcategory" id="shirt"/>
                  <label className="form-check-label" for="shirt">Shirt <small>(7)</small></label>
                </div>
                <div className="form-check">
                  <input className="form-check-input custom-radio" type="radio" name="subcategory" id="jeans"/>
                  <label className="form-check-label" for="jeans">Jeans <small>(4)</small></label>
                </div>
                <div className="form-check">
                  <input className="form-check-input custom-radio" type="radio" name="subcategory" id="dress"/>
                  <label className="form-check-label" for="dress">Dress <small>(5)</small></label>
                </div>
                <div className="form-check">
                  <input className="form-check-input custom-radio" type="radio" name="subcategory" id="kurta"/>
                  <label className="form-check-label" for="kurta">Kurta <small>(7)</small></label>
                </div>
                <div className="form-check">
                  <input className="form-check-input custom-radio" type="radio" name="subcategory" id="bag"/>
                  <label className="form-check-label" for="bag">Bag <small>(4)</small></label>
                </div>
              </form>
            </div>
      
            <div className="filter-section">
              <h3 className="filter-title">Filter by size</h3>
              <div className="d-flex flex-wrap gap-2">
                <button className="btn btn-sm btn-outline-dark">XS</button>
                <button className="btn btn-sm btn-outline-dark">S</button>
                <button className="btn btn-sm btn-outline-dark">M</button>
                <button className="btn btn-sm btn-outline-dark">L</button>
                <button className="btn btn-sm btn-outline-dark">XL</button>
              </div>
            </div>
      
            <div className="filter-section">
              <h3 className="filter-title">Filter by price</h3>
              <div className="price-range">
                <label>$0 - $300</label>
                <input type="range" className="form-range custom-range" min="0" max="300"/>
              </div>
            </div>
          </aside>
      

          <div className="col-md-9">
            <div className="row">
            {items.map((item) => (
                      <div className="col-md-4 col-sm-6" key={item.id}>
                        
                        <div className="product-card">
                          <img src={item.src} alt={item.name}/>
                         
                          <div className="product-overlay">
                            <div className="wishlist-icon"> <i className="far fa-heart"></i></div>
                            <Link to={`/product/${item.id}`} className="shop_btn">Add To Cart <i className="fa fa-bag-shopping"></i></Link>
                          </div>
                        </div>
                        <div className="product-info">
                          <h6>{item.name}</h6>
                          <p>${item.price}</p>
                        </div>
                      
                      </div>
                    ))}
   

            </div>
          </div>
        </div>
      </div>
      
</section>




      </Layout>
    </>
  )
}

export default Shop
