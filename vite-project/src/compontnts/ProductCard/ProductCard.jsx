import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { addToWishlist } from '../../Redux/cartSlice';


function ProductCard() {
  const items = useSelector((state) => state.allCart.items);
  const dispatch = useDispatch();
  return (
    <>
      <section className="featured_pro">
        <div className="container">
          <div className="row flex justify-content-center pb-4">
            <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12 col-lg-12">
              <p className="sub_hd text-center mb-1">Handpicked Favorites Just for You</p>
              <h2 className="main_hd text-center">Featured Products</h2>
              <p className="desc text-center">Discover standout pieces our customers love.<br />Style, quality, and comfort in every stitch.</p>
            </div>
          </div>

          <div className="row g-4">
            {items.slice(0, 4).map((item) => (
              <div className="col-md-3 col-sm-6" key={item.id}>

                <div className="product-card">
                  <img src={item.src} alt={item.name} />

                  <div className="product-overlay">
                    {/* <div className="wishlist-icon"> <i className="far fa-heart"></i></div> */}
                    <div className="wishlist-icon" onClick={() => dispatch(addToWishlist(item))}>
                      <i className="far fa-heart"></i>
                    </div>
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
      </section>

    </>
  )
}

export default ProductCard
