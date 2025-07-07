import React, { useEffect } from 'react'
import Layout from '../../compontnts/Layout/Layout';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { decreaseItemQuantity, getCartTotal, increaseItemQuantity, removeItem, clearCart } from '../../Redux/cartSlice';


function Cart() {
    const { cart, totalQuantity, totalPrice } = useSelector((state) => state.allCart);

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getCartTotal());
    }, [cart]);
    
    const subtotal = totalPrice;
 

  return (
    <>
    <Layout>
            <section className="breadcrumb_bg">
        <div className="container py-5">
      <div className="text-center py-4">
        <h2 className="fw-bold m-0 main_hd">CART</h2>
        <p className="text-dark m-0 desc">Home <i className="fa fa-angle-right mx-1"></i> Cart</p>
      </div>
      </div>
      </section>

<section className="cart_sec"> 
    
<div className="container py-5">
    <div className="row">
  
      <div className="col-lg-8">
       
        <table className="table align-middle">
          <thead>
            <tr>
              <th scope="col">Product</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Total</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
          {cart?.map((data) => (
            <tr>
              <td>
                <div className="d-flex align-items-center gap-3">
                  <img src={data.src} className="cart-img img-fluid" alt="{data.name}"/>
                  <span className="pro_name">{data.name} ({data.size})</span>
                </div>
              </td>
              <td>{data.price}</td>
              <td>
                <div className="d-flex align-items-center">
                  <button className="qty-btn" onClick={() => dispatch(decreaseItemQuantity(data.id))}>-</button>
                  <input type="text" value={data.quantity}  onChange={() => null} className="form-control text-center mx-1" style={{width: '50px'}}/>
                  <button className="qty-btn" onClick={() => dispatch(increaseItemQuantity(data.id))}>+</button>

                </div>
              </td>
              <td>${(data.price * data.quantity).toFixed(2)}</td>
              <td><span className="remove-btn" onClick={() => dispatch(removeItem(data.id))}>&times;</span></td>
            </tr>
            ))
        }

         
          </tbody>
        </table>
  

        <div className="d-flex justify-content-end gap-3 cart_bottom">
        <button className="btn btn-outline-dark" onClick={() => dispatch(clearCart())}>Empty cart</button>
        <Link to="/Shop"><button className="btn btn-outline-dark" >Update cart</button></Link>
        </div>
      </div>
  
      <div className="col-lg-4">
        <div className="cart-totals">
          <h5 className="fw-bold mb-4">Cart totals</h5>
          <div className="d-flex justify-content-between border-bottom py-4 heading">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="d-flex justify-content-between border-bottom py-4">
            <span>Shipping</span>
            <span>Free shipping</span>
          </div>
          <div className="d-flex justify-content-between py-4 bottom">
            <strong>Total</strong>
            <strong>${totalPrice.toFixed(2)}</strong>
          </div>
          <Link to="/Checkout" className="checkout_btn w-100 mt-4 d-block text-center">Proceed To Checkout</Link>

        </div>
      </div>
    </div>
  </div>

</section>

</Layout>
    </>
  )
}

export default Cart
