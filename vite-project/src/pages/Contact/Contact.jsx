import React from 'react'
import Layout from '../../compontnts/Layout/Layout'
import { useForm } from 'react-hook-form';

function Contact() {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
      const onSubmit = (data) => {
        console.log('Form Submitted:', data);
      };

  return (
    <>

    <Layout>
        <section className="breadcrumb_bg">
        <div className="container py-5">
      <div className="text-center py-4">
        <h2 className="fw-bold m-0 main_hd">Contact Us</h2>
        <p className="text-dark m-0 desc">Home <i className="fa fa-angle-right mx-1"></i> Contact Us</p>
      </div>
      </div>
      </section>


      <section className="contact-section checkout_sec">
        <div className="container">
          <div className="row g-4">
     
            <div className="col-lg-7">
              <div className="contact-box">
                <h2 className="contact-title">Get in Touch</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="mb-3">
                    <label for="name" className="form-label">Full Name <span className="text-danger">*</span></label>
                    <input
          type="text"
          className="form-control"
          id="name"
          placeholder="Enter your name"
          {...register('name', { required: 'Name is required' })}
        />
        {errors.name && <p className="text-danger">{errors.name.message}</p>}
                  </div>
                  <div className="mb-3">
                    <label for="email" className="form-label">Email Address <span className="text-danger">*</span></label>
                    <input
          type="email"
          className="form-control"
          id="email"
          placeholder="Enter your email"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^\S+@\S+$/i,
              message: 'Invalid email address',
            },
          })}
        />
        {errors.email && <p className="text-danger">{errors.email.message}</p>}
        </div>
                  <div className="mb-3">
                    <label for="phone" className="form-label">Phone Number</label>
                    <input
          type="tel"
          className="form-control"
          id="phone"
          placeholder="Enter your phone number"
          {...register('phone', {
            pattern: {
              value: /^[0-9]{10,14}$/,
              message: 'Phone number must be 10-14 digits',
            },
          })}
        />
        {errors.phone && <p className="text-danger">{errors.phone.message}</p>}
                  </div>
                  <div className="mb-3">
                    <label for="subject" className="form-label">Subject</label>
                   <input
          type="text"
          className="form-control"
          id="subject"
          placeholder="Subject (optional)"
          {...register('subject')}
        />
                  </div>
                  <div className="mb-3">
                    <label for="message" className="form-label">Message <span className="text-danger">*</span></label>
                    <textarea
          className="form-control"
          id="message"
          rows="5"
          placeholder="Write your message here..."
          {...register('message', { required: 'Message is required' })}
        ></textarea>
        {errors.message && <p className="text-danger">{errors.message.message}</p>}
                 </div>
                  <div className="text-center mt-5 ">
                    {/* <a href="#" className="checkout_btn w-100 text-center">Send Message</a> */}
                    <button type="submit" className="checkout_btn w-40"> Send Message </button>
                  </div>
                </form> 
              </div>
            </div>
      
          
            <div className="col-lg-5">
              <div className="info-box">
                <h5>Contact Information</h5>
                <p><span className="icon">📍</span> 123 Fashion Street, Mumbai, India</p>
                <p><span className="icon">📞</span> +91 98765 43210</p>
                <p><span className="icon">✉️</span> support@yourstore.com</p>
                <hr/>
                <p><strong>Business Hours:</strong></p>
                <p>Mon – Fri: 9:00 AM – 6:00 PM</p>
                <p>Saturday: 10:00 AM – 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      </Layout>
      
    </>
  )
}

export default Contact
