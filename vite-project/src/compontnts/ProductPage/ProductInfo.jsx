import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addItemToCart, addToWishlist, removeFromWishlist } from '../../Redux/cartSlice';
import Layout from '../Layout/Layout'
import products from '../ProductCard/ProductImage';

function ProductInfo() {


  const handleWishlistToggle = () => {
    if (isWishlisted) {
      dispatch(removeFromWishlist(product.id));
    } else {
      dispatch(addToWishlist(product));
    }
  };

  const { productId } = useParams();

  const dispatch = useDispatch();
  

  const product = useSelector((state) =>
  state.allCart.items.find((item) => item.id === parseInt(productId))
);


  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState(null);


  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    if (!selectedSize && product.category !== 'accessory') {
      alert('Please select a size.');
      return;
    }

    const updatedProduct = { ...product, quantity, size: selectedSize };
    dispatch(addItemToCart(updatedProduct));
    alert('Product added to cart');

  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const wishlist = useSelector((state) => state.allCart.wishlist);
  const isWishlisted = wishlist.some((item) => item.id === product.id);



  const thumbnails = [product.src, product.src2, product.src3, product.src4].filter(Boolean);
  const mainImg = mainImage || product.src;



  return (
    <>
      <Layout>

        <section className="breadcrumb_bg">
          <div className="container py-5">
            <div className="text-center py-4">
              <h2 className="fw-bold m-0 main_hd">PRODUCT</h2>
              <p className="text-dark m-0 desc">Home <i className="fa fa-angle-right mx-1"></i> Product <i className="fa fa-angle-right mx-1"></i>{product.name}</p>
            </div>
          </div>
        </section>

        <section className="single_product">

          <div className="container my-5">
            <div className="row">

              <div className="col-md-1 d-none d-md-block">
                <div className="single_product_thumb">
                  {thumbnails.map((img, idx) => (
                    <img key={idx} src={img} alt={`thumb${idx}`} className="thumbnail-img mb-2" onClick={() => setMainImage(img)}
                      style={{ cursor: 'pointer' }}
                    />
                  ))}
                  {/* <img src="images/product/product1.jpg" alt="thumb1" className="thumbnail-img" onclick="changeMainImage(this)" />
                  <img src="images/product/product2.jpg" alt="thumb2" className="thumbnail-img" onclick="changeMainImage(this)" />
                  <img src="images/product/product3.jpg" alt="thumb3" className="thumbnail-img" onclick="changeMainImage(this)" />
                  <img src="images/product/product4.jpg" alt="thumb3" className="thumbnail-img" onclick="changeMainImage(this)" /> */}
                </div>



              </div>


              <div className="col-md-5 text-center mb-4">
                <div className="single_product_img">
                  <img src={mainImg} alt="Main Product" className="img-fluid" />
                  {/* <img src={product.src} id="mainImage" alt="Main Product" className="img-fluid" /> */}
                </div>
              </div>

              <div className="col-md-6">
                <div className="single_product_wrap">
                  <h2 className="hd">{product.name}</h2>
                  <h4 className="price mb-4">${product.price}</h4>

                  {product.category !== 'accessory' && (
                  <div className="mb-4">
                    <p className="mb-2 size_hd">Size</p>
                    <div className="d-flex">
                      {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                        <div key={size} className={`size-option ${selectedSize === size ? 'active' : ''}`}
                          onClick={() => setSelectedSize(size)} style={{ cursor: 'pointer' }}>
                          {size}
                        </div>
                      ))}
                    </div>
                  </div>
                  )}


                  <div className="d-flex align-items-center mt-3 mb-4">
                    <div className="input-group me-3" style={{ width: '130px' }}>
                      <button className="btn btn-outline-secondary qty-btn" onClick={handleDecrease}>-</button>
                      <input value={quantity} className="quantity form-control text-center qty-value" type="number" readOnly />
                      <button className="btn btn-outline-secondary qty-btn" onClick={handleIncrease}>+</button>

                    </div>

                    <button onClick={handleAddToCart} className="shop_btn">
                      <i className="fa fa-bag-shopping "></i> <span className="ms-2">Add To Cart</span></button>


                    <button className="wishlist ms-3" onClick={handleWishlistToggle}>
                      <i className={isWishlisted ? "fas fa-heart text-danger" : "far fa-heart"}></i>
                    </button>
                    {/* <button className="wishlist ms-3"><i className="far fa-heart"></i></button> */}
                  </div>


                  <p className="mb-4 size_hd">
                    <i className="fas fa-shipping-fast"></i>
                    <strong className="ms-1">Free shipping :</strong> On all orders
                  </p>


                  <h5 className="main_hd">Description</h5>
                  <p className="desc ">
                    Navy blue, cotton, printed formal shirt by STOP. Expertly tailored from light cotton with a minimal print, this slim-fit shirt features a sharp cut-away collar, buttoned front, structured chest pocket, and full set-in sleeves, ensuring confidence and ease throughout your workday.
                  </p>
                </div>
              </div>
            </div>
          </div>


        </section>

      </Layout>
    </>
  )
}

export default ProductInfo
