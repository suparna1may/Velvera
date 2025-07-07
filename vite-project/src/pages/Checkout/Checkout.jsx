import React, { useEffect, useState } from 'react'
import Layout from '../../compontnts/Layout/Layout'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getCartTotal } from '../../Redux/cartSlice';
import { useForm } from 'react-hook-form';
import { Country, State } from 'country-state-city';
import { useNavigate } from 'react-router-dom';



function Checkout() {

    const { cart, totalPrice } = useSelector((state) => state.allCart);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedState, setSelectedState] = useState('');

    useEffect(() => {
      dispatch(getCartTotal());
    }, [cart]);

 

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
      const onSubmit = (data) => {
        const selectedCountryName = Country.getAllCountries().find(c => c.isoCode === selectedCountry)?.name;
        const selectedStateName = State.getStatesOfCountry(selectedCountry).find(s => s.isoCode === selectedState)?.name;
    
        const orderData = {
          customer: {
            ...data,
            country: selectedCountryName,
            state: selectedStateName,
          },
          cart,
          total: totalPrice,
          orderNumber: Math.floor(Math.random() * 9000000 + 1000000),
          date: new Date().toLocaleDateString(),
        };
    
        navigate('/thankyou', { state: orderData });
      };
    

 
  return (
    <>
    <Layout>
    <section className="breadcrumb_bg">
        <div className="container py-5">
      <div className="text-center py-4">
        <h2 className="fw-bold m-0 main_hd">Checkout</h2>
        <p className="text-dark m-0 desc">Home <i className="fa fa-angle-right mx-1"></i> Checkout</p>
      </div>
      </div>
      </section>


<section className="checkout_sec"> 
    
<div className="container py-5">
<form onSubmit={handleSubmit(onSubmit)}>
    <div className="row">
 
      <div className="col-lg-7">
        <h3 className="mb-4 fw-bold form_hd">Billing details</h3>
        
          <div className="row mb-3">
            <div className="col-md-6">
              <label className="form-label required">First name</label>
              <input type="text" className="form-control" placeholder="First Name" {...register('firstName', { required: true })} />
            {errors.firstName && <span>First name is required</span>}
            </div>
            <div className="col-md-6">
              <label className="form-label required">Last name</label>
              <input type="text" className="form-control" placeholder="Last Name" {...register('lastName', { required: true })} />
            {errors.lastName && <span>Last name is required</span>}
            </div>
          </div>
  
          <div className="mb-3">
            <label className="form-label required">Country</label>
            <select className="form-select" onChange={(e) => setSelectedCountry(e.target.value)} required>
              <option value="">Select Country</option>
              {Country.getAllCountries().map((country) => (
                <option key={country.isoCode} value={country.isoCode}>
                  {country.name}
                </option>
              ))}
            </select>
          </div>
  
          <div className="mb-3">
            <label className="form-label required">State</label>
            <select className="form-select" onChange={(e) => setSelectedState(e.target.value)} required>
              <option value="">Select State</option>
              {State.getStatesOfCountry(selectedCountry).map((state) => (
                <option key={state.isoCode} value={state.isoCode}>
                  {state.name}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label required">Street address</label>
            <input className="form-control" placeholder="Street Address" {...register('address', { required: true })} />
          </div>
  
          <div className="mb-3">
            <label className="form-label required">Town / City</label>
            <input className="form-control" placeholder="City" {...register('city', { required: true })} />
          </div>
  
          <div className="mb-3">
            <label className="form-label required">ZIP</label>
            <input className="form-control" placeholder="ZIP" {...register('zip', { required: true })} />
          </div>
  
          <div className="mb-3">
            <label className="form-label required">Phone</label>
            <input className="form-control" placeholder="Phone" {...register('phone', { required: true })} />
          </div>
  
          <div className="mb-3">
            <label className="form-label required">Email address</label>
            <input className="form-control" placeholder="Email" type="email" {...register('email', { required: true })} />
          </div>
      
      </div>
  

      <div className="col-lg-5">
        <div className="order-summary cart-totals">
          <h5 className="mb-4 form_hd">Your order</h5>
          <div className="d-flex justify-content-between py-4 border-bottom heading">
            <span>Product</span>
            <span>Total</span>
          </div>
  
          {cart?.map((data) => (
          <div className="d-flex justify-content-between py-4 border-bottom">
            <span>{data.name} × {data.quantity}</span>
            <span>${data.price}</span>
          </div>
          ))}
  
  
          <div className="d-flex justify-content-between py-4 border-bottom">
            <span>Shipping</span>
            <span>Free</span>
          </div>
  
          <div className="d-flex justify-content-between py-4 border-bottom bottom">
            <strong>Total</strong>
            <strong>${totalPrice.toFixed(2)}</strong>
          </div>
  
          <div className="form-check mt-4">
           
            <input className="form-check-input" type="checkbox" {...register('agree', { required: true })} />
            <label>I agree to terms the website Terms and Conditions & Privacy Policy</label>
            {errors.agree && <span>You must agree before submitting</span>}
          </div>

          <button type="submit" className="checkout_btn w-100 mt-4 d-block text-center checkout_btn">Place Order</button>
        
        
        </div>
      </div>

      
    </div>
    </form>
  </div>

</section>

    </Layout>    
    </>
  )
}

export default Checkout
