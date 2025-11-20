import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromWishlist } from '../../Redux/cartSlice';
import { Link } from 'react-router-dom';
import Layout from '../../compontnts/Layout/Layout';

function Wishlist() {
    const wishlistItems = useSelector(state => state.allCart.wishlist);
    const dispatch = useDispatch();
  
    return (
        <>
       <Layout>
       <section className="breadcrumb_bg">
        <div className="container py-5">
      <div className="text-center py-4">
        <h2 className="fw-bold m-0 main_hd">WISHLIST</h2>
        <p className="text-dark m-0 desc">Home <i className="fa fa-angle-right mx-1"></i> Wishlist</p>
      </div>
      </div>
      </section>
       <section className="wishlist_sec py-5">
        <div className="container">
         
          <div className="row">
            {wishlistItems.length === 0 ? (
              <p>Your wishlist is empty.</p>
            ) : (
              wishlistItems.map(item => (
                <div className="col-md-3 col-sm-6 mb-4" key={item.id}>
                  <div className="product-card">
                    <img src={item.src} alt={item.name} />
                    <div className="product-overlay">
                      <button onClick={() => dispatch(removeFromWishlist(item.id))} className="wishlist-icon">
                        <i className="fas fa-trash"></i>
                      </button> 
                      <Link to={`/product/${item.id}`} className="shop_btn">View <i className="fa fa-eye"></i></Link>
                    </div>
                    </div>
                    <div className="product-info">
                      <h6>{item.name}</h6>
                      <p>${item.price}</p>
                    </div>
                 
                </div>
              ))
            )}
          </div>
        </div>
      </section>
        </Layout>
      </>
    );
  }
  


export default Wishlist;
