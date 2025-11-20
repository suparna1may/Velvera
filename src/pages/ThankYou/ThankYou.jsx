import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';

function ThankYou() {

  const location = useLocation();
  const navigate = useNavigate();
  const order = location.state;

  if (!order) {
    navigate('/');
    return null;
  }



  return (
    <>
         <section className="breadcrumb_bg">
        <div className="container py-5">
      <div className="text-center py-4">
        <h2 className="fw-bold m-0 main_hd">Thank You</h2>
        <p className="text-dark m-0 desc">Home <i className="fa fa-angle-right mx-1"></i> Thank You</p>
      </div>
      </div>
      </section>


<section className="thankyou_sec mt-4"> 
    
    <div className="container">
        <div className="row">
    <div className="thank-you-box">
        <h2>Thank You for Your Order!</h2>
        <p>Your order has been received and is now being processed. You will receive an order confirmation email shortly.</p>
      
        <div className="order-summary">
          <h5>Order Summary</h5>
          <div className="row">
            <div className="col-8"><p>Order Number:</p></div>
            <div className="col-4 text-end"><p>#{order.orderNumber}</p></div>
          </div>
          <div className="row">
            <div className="col-8"><p>Date:</p></div>
            <div className="col-4 text-end"><p>{order.date}</p></div>
          </div>
          <div className="row">
            <div className="col-8"><p>Total:</p></div>
            <div className="col-4 text-end"><p>${order.total}</p></div>
          </div>
          <div className="row">
            <div className="col-8"><p>Payment Method:</p></div>
            <div className="col-4 text-end"><p>COD</p></div>
          </div>
      
     
          <h5 className="mt-4">Items Ordered</h5>
          {order.cart.map((item, idx) => (
          <div className="row" key={idx}>
            <div className="col-8" ><p>{item.name} × {item.quantity}</p></div>
            <div className="col-4 text-end"><p>${item.price}</p></div>
          </div>
          ))}

          
          <div className="row order-total">
            <div className="col-8">Total</div>
            <div className="col-4 text-end">${order.total.toFixed(2)}</div>
          </div>
            
        </div>

        <div className="order-summary">
          <h5>Customer Info:</h5>
          <div className="row">
            <div className="col-8"><p>Name:</p></div>
            <div className="col-4 text-end"><p>{order.customer.firstName} {order.customer.lastName}</p></div>
          </div>
          <div className="row">
            <div className="col-8"><p>Country:</p></div>
            <div className="col-4 text-end"><p>{order.customer.country}</p></div>
          </div>
          <div className="row">
            <div className="col-8"><p>State:</p></div>
            <div className="col-4 text-end"><p>{order.customer.state}</p></div>
          </div>
          <div className="row">
            <div className="col-8"><p>Address:</p></div>
            <div className="col-4 text-end"><p>{order.customer.address}, {order.customer.city}, {order.customer.zip}</p></div>
          </div>
          <div className="row">
            <div className="col-8"><p>Email:</p></div>
            <div className="col-4 text-end"><p>{order.customer.email}</p></div>
          </div>
          <div className="row">
            <div className="col-8"><p>Phone:</p></div>
            <div className="col-4 text-end"><p>{order.customer.phone}</p></div>
          </div>
          </div>
          
      <br/>
        <Link to="/" className="checkout_btn w-100 mt-4 text-center">Back to Home</Link>
       
      </div>
      </div>
      </div>

</section>

    
    </>
  )
}

export default ThankYou
