import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import CategoryImg1 from '../../assets/images/collection1.jpg';
import CategoryImg2 from '../../assets/images/collection2.jpg';
import CategoryImg3 from '../../assets/images/collection3.jpg';

function Category() {
  const [activeCard, setActiveCard] = useState(0); // 0 = first card active by default

  const categories = [
    {
      img: CategoryImg1,
      title: "Men’s Collection",
      icon: "fas fa-user-tie",
      headline: "Confident. classic. Comfortable.",
      description:
        "Modern classics and everyday essentials designed for comfort, confidence, and style.",
    },
    {
      img: CategoryImg2,
      title: "Women’s Collection",
      icon: "fas fa-user-alt",
      headline: "Style with Effortless Grace",
      description:
        "Effortless fashion that blends elegance, versatility, and comfort—made to move with you.",
    },
    {
      img: CategoryImg3,
      title: "Accessories Collection",
      icon: "fas fa-shopping-bag",
      headline: "Complete Your Look Perfectly",
      description:
        "Finish your look with the perfect accessories—from bold accents to everyday staples.",
    },
  ];

  return (
    <section className="category_sec">
      <div className="container">
        <div className="row flex justify-content-center">
          <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12">
            <h6 className="sub_hd text-center">Find Your Signature Look</h6>
            <h2 className="main_hd text-center">Shop by Category</h2>
            <p className="desc text-center">
              Explore our curated collections designed to suit every mood, moment, and lifestyle. Whether you're dressing up or keeping it casual, we have just the style for you.
            </p>
          </div>
        </div>

        <div className="row flex justify-content-center pt-5">
          <div className="category-grid">
            {categories.map((cat, index) => (
              <div
                className={`category-card ${index === activeCard ? 'active' : ''}`}
                key={index}
                onMouseEnter={() => setActiveCard(index)}
              >
                <div className="image">
                  <img src={cat.img} alt={cat.title} />
                  <div className="label">
                    <h3>{cat.title}</h3>
                  </div>
                </div>
                <div className="content">
                  <div className="content-hover">
                    <span><i className={cat.icon}></i></span>
                    <h3>{cat.headline}</h3>
                    <p>{cat.description}</p>
                    <Link to="/Shop" className="shop_btn">
                      Shop Now <i className="fa fa-bag-shopping"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Category;
