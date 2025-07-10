import React, { useState, useEffect } from 'react';
import Layout from '../../compontnts/Layout/Layout'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';


function Shop() {


  const { categoryId } = useParams();
  const items = useSelector((state) => state.allCart.items);
  const [selectedCategory, setSelectedCategory] = useState(categoryId || 'all');
  const [selectedSubcategory, setSelectedSubcategory] = useState('all');
  const [priceRange, setPriceRange] = useState(300);


  const filteredItems = items.filter((item) => {
    const matchCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchSubcategory = selectedSubcategory === 'all' || item.subcategory === selectedSubcategory;
    const matchPrice = item.price <= priceRange;
    return matchCategory && matchSubcategory && matchPrice;
  });

  const handleClearFilters = () => {
    setSelectedCategory('all');
    setSelectedSubcategory('all');
    setPriceRange(300);
  };


  const countByCategory = (cat) =>
    items.filter((item) => cat === 'all' || item.category === cat).length;

  const countBySubcategory = (subcat) =>
    items.filter((item) => {
      if (subcat === 'all') return true;
      return item.subcategory === subcat;
    }).length;

  useEffect(() => {
    if (categoryId) {
      setSelectedCategory(categoryId);
    } else {
      setSelectedCategory('all');
    }
  }, [categoryId]);



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
                      <input
                        className="form-check-input custom-radio"
                        type="radio"
                        name="category"
                        id="catAll"
                        value="all"
                        checked={selectedCategory === 'all'}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                      />
                      <label className="form-check-label" for="catAll">All <small>({countByCategory('all')})</small></label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input custom-radio"
                        type="radio"
                        name="category"
                        id="catMen"
                        value="cat-men"
                        checked={selectedCategory === 'cat-men'}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                      />
                      <label className="form-check-label" for="catMen">Men <small>({countByCategory('cat-men')})</small></label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input custom-radio"
                        type="radio"
                        name="category"
                        id="catWomen"
                        value="cat-women"
                        checked={selectedCategory === 'cat-women'}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                      />
                      <label className="form-check-label" for="catWomen">Women <small>({countByCategory('cat-women')})</small></label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input custom-radio"
                        type="radio"
                        name="category"
                        id="catAccessories"
                        value="accessory"
                        checked={selectedCategory === 'accessory'}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                      />
                      <label className="form-check-label" for="catAccessories">Accessories <small>({countByCategory('accessory')})</small></label>
                    </div>


                  </form>
                </div>

                <div className="filter-section">
                  <h3 className="filter-title">Filter by Products</h3>
                  <form>
                    <div className="form-check">
                      <input
                        className="form-check-input custom-radio"
                        type="radio"
                        name="subcategory"
                        id="All"
                        value="all"
                        checked={selectedSubcategory === 'all'}
                        onChange={(e) => setSelectedSubcategory(e.target.value)}
                      />
                      <label className="form-check-label" for="All">All <small>({countBySubcategory('all')})</small></label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input custom-radio"
                        type="radio"
                        name="subcategory"
                        id="shirt"
                        value="shirt"
                        checked={selectedSubcategory === 'shirt'}
                        onChange={(e) => setSelectedSubcategory(e.target.value)}
                      />
                      <label className="form-check-label" for="shirt">Shirt <small>({countBySubcategory('shirt')})</small></label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input custom-radio"
                        type="radio"
                        name="subcategory"
                        id="jeans"
                        value="jeans"
                        checked={selectedSubcategory === 'jeans'}
                        onChange={(e) => setSelectedSubcategory(e.target.value)}
                      />
                      <label className="form-check-label" for="jeans">Jeans <small>({countBySubcategory('jenas')})</small></label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input custom-radio"
                        type="radio"
                        name="subcategory"
                        id="tshirt"
                        value="tshirt"
                        checked={selectedSubcategory === 'tshirt'}
                        onChange={(e) => setSelectedSubcategory(e.target.value)}
                      />
                      <label className="form-check-label" for="tshirt">T-Shirt <small>({countBySubcategory('tshirt')})</small></label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input custom-radio"
                        type="radio"
                        name="subcategory"
                        id="dress"
                        value="dress"
                        checked={selectedSubcategory === 'dress'}
                        onChange={(e) => setSelectedSubcategory(e.target.value)}
                      />
                      <label className="form-check-label" for="dress">Dress <small>({countBySubcategory('dress')})</small></label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input custom-radio"
                        type="radio"
                        name="subcategory"
                        id="kurta"
                        value="kurta"
                        checked={selectedSubcategory === 'kurta'}
                        onChange={(e) => setSelectedSubcategory(e.target.value)}
                      />
                      <label className="form-check-label" for="kurta">Kurta <small>({countBySubcategory('kurta')})</small></label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input custom-radio"
                        type="radio"
                        name="subcategory"
                        id="bag"
                        value="bag"
                        checked={selectedSubcategory === 'bag'}
                        onChange={(e) => setSelectedSubcategory(e.target.value)}
                      />
                      <label className="form-check-label" for="bag">Bag <small>({countBySubcategory('bag')})</small></label>
                    </div>
                  </form>
                </div>


                <div className="filter-section">
                  <h3 className="filter-title">Filter by price</h3>
                  <div className="price-range">
                    <label>$0 - ${priceRange}</label>
                    <input
                      type="range"
                      className="form-range custom-range"
                      min="0"
                      max="300"
                      value={priceRange}
                      onChange={(e) => setPriceRange(parseInt(e.target.value))} />

                  </div>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="w-75 shop_btn"
                    onClick={handleClearFilters}
                  >
                    Clear Filters
                  </button>
                </div>
              </aside>


              <div className="col-md-9">
                <div className="row">
                  {filteredItems.map((item) => (
                    <div className="col-md-4 col-sm-6" key={item.id}>

                      <div className="product-card">
                        <img src={item.src} alt={item.name} />

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
