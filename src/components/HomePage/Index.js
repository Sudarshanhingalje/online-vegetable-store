import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser, faSearch, faBars, faPhone, faEnvelope, faMapMarkerAlt, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Index.css';
import logo from "../../images/logo.jpg";


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from "swiper/modules";
import 'swiper/css/autoplay';

 



const Index = () => {

  const [isMenuVisible, setIsMenuVisible] = useState(false); 
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [isLoginVisible, setIsLoginVisible] = useState(false);

  const toggleMenu = () => setIsMenuVisible(!isMenuVisible);
  const toggleSearch = () => setIsSearchVisible(!isSearchVisible);
  const toggleCart = () => setIsCartVisible(!isCartVisible);
  const toggleLogin = () => setIsLoginVisible(!isLoginVisible);

  return (
    <div className="index">
     

     <nav className="navbar">
     <h1 className="main-title">
    <img 
      src={logo} 
      alt="Green Basket Logo" 
      className="logo" 
    />
    green basket 
</h1>
    
  <a href="#home">Home</a>
  <a href="#features">Features</a>
  <a href="#products">Products</a>
  <a href="#categories">Categories</a>
  <a href="#review">Review</a>
  <a href="#blogs">Blogs</a>
</nav>



      <div className="icons">
        <FontAwesomeIcon icon={faBars} className="icon" id="menu-btn" onClick={toggleMenu} />
        <FontAwesomeIcon icon={faSearch} className="icon" id="search-btn" onClick={toggleSearch} />
        <FontAwesomeIcon icon={faShoppingCart} className="icon" id="cart-btn" onClick={toggleCart} />
        <FontAwesomeIcon icon={faUser} className="icon" id="login-btn" onClick={toggleLogin} />
      </div>

      {isMenuVisible && (
        <form className="menu-bar">
          {/* <input type="menu" id="menu-bar" placeholder="menu" /> */}
          <a href="#home">Home</a>
          <a href="#features">Features</a>
         <a href="#products">Products</a>
          <a href="#categories">Categories</a>
          <a href="#review">Review</a>
           <a href="#blogs">Blogs</a> 
       
        </form>
      )}

      {isSearchVisible && (
        <form className="search-form">
          <input type="search" id="search-box" placeholder="search here..." />
          <label htmlFor="search-box">
            <FontAwesomeIcon icon={faSearch} />
          </label>
        </form>
      )}

      {isCartVisible && (
        <div className="shopping-cart">
     <h1>Your Cart is Empty</h1>
      <p>Add items to your cart to get started!</p>
         
        </div>
      )}

      {isLoginVisible && (
        <form className="login-form">
          <h3>Login Now</h3>
          <input type="email" placeholder="your email" className="box" />
          <input type="password" placeholder="your password" className="box" />
          <p>Forgot your password? <a href=" ">Click here</a></p>
          <p>Don't have an account? <a href="/Registration">Create now</a></p>
          <button type="submit" className="btn">Login now</button>
        </form>
      )}

      <section className="home" id="home">
        <div className="content">
          <h3>Healthy and <span>Sustainable</span></h3>
          <h3> Choices for You</h3>
          <p>Too busy to visit the store? Discover a world of organic options at your fingertips! Nature’s Basket is your ultimate destination for all things fresh and natural.</p>
          <a href="# products" className="btn">Shop now</a>
        </div>
      </section>

      <section className="features" id="features">
        <h2 className="heading">Our <span>Features</span></h2>
        <div className="box-container">
          <FeatureBox
            title="100% Natural"
            description="All our products are sourced from organic farms and are free from harmful chemicals."
          />
          <FeatureBox
            title="Complimentary Shipping"
            description="Get complimentary shipping on all orders exceeding $50 within the local area."
          />
          <FeatureBox
            title="Secure Payments"
            description="We provide multiple secure payment methods to ensure your shopping experience is safe and easy."
          />
        </div>
      </section>

      {/* Products Section */}
      <section className="products" id="products">
        <h2 className="heading">Our <span>Products</span></h2>
        <ProductSlider />
      </section>

      {/* Categories Section */}
      <section className="categories" id="categories">
        <h2 className="heading">Product <span>Categories</span></h2>
        <div className="box-container">
          <CategoryBox
            image="../images/cat-1.png"     
           
            title="Organic Vegetables"
            discount="45"
          />
          <CategoryBox
            image="/images/cat-2.png"
            title="Fresh Fruits"
            discount="40"
          />
          <CategoryBox
            image="/images/cat-3.png"
            title="Dairy Products"
            discount="35"
          />
          <CategoryBox
            image="/images/cat-4.png"
            title="Free-range Meats"
            discount="30"
          />
        </div>
      </section>

      {/* Review Section */}
      <ReviewSection />

      {/* Footer */}
      <footer className="footer">
        <div className="box-container">
          <div className="box">
            <h3>Green Basket <FontAwesomeIcon icon={faShoppingCart} /></h3>
            <p>Your trusted source for fresh, organic produce delivered right to your door.</p>
            <div className="social-links">
              <a href=" "><FontAwesomeIcon icon={faInstagram} /></a>
              <a href=" "><FontAwesomeIcon icon={faLinkedin} /></a>
            </div>
          </div>

          <div className="box">
            <h3>Contact Info</h3>
            <a href="#  " className="contact-link">
              <FontAwesomeIcon icon={faPhone} /> +91 9579853955
            </a>
            <a href="#  " className="contact-link">
              <FontAwesomeIcon icon={faEnvelope} /> contact@greenbasket.com
            </a>
            <a href="#  " className="contact-link">
              <FontAwesomeIcon icon={faMapMarkerAlt} /> Kolhapur, India - 416110
            </a>
          </div>

{/* here we used .map function for the go the required spots on spa app */}

          <div className="box">
            <h3>Quick Links</h3>
            {['home', 'features', 'products', 'categories', 'review', 'blogs'].map(link =>(
              <a key={link} href={`#${link}`} className="quick-link">
                <FontAwesomeIcon icon={faArrowRight} /> {link}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

// Helper Components
// const CartItem = ({ image, name, price, quantity }) => (
//   <div className="box">
//     <FontAwesomeIcon icon={faTrash} className="delete-icon" />
//     <img src={image} alt={name} />
//     <div className="content">
//       <h3>{name}</h3>
//       <span className="price">{price} / kg</span>
//       <span className="quantity">qty: {quantity}</span>
//     </div>
//   </div>
// );

// Cart Item Component
const CartItem = ({ image, name, price, quantity }) => (
    <div className="cart-item">
      <img src={image} alt={name} />
      <div className="cart-item-details">
        <h4>{name}</h4>
        <p>{quantity} x ${price}</p>
      </div>
    </div>
  );

const FeatureBox = ({ title, description }) => (
  <div className="box">
    <h3>{title}</h3>
<p>{description}</p>
    <a href="#  " className="btn">Learn more</a>
  </div>
);

const CategoryBox = ({ image, title, discount }) => (
  <div className="box">
    <img src={image} alt={title} />
    <h3>{title}</h3>
    <p>up to {discount}% off</p>
    <a href="#  " className="btn">Shop now</a>
  </div>
);

const ReviewSection = () => {
    const reviews = [
      {
        img: "/images/pic-1.png",
        text: "Green Basket offers the best quality organic produce I've found. Their delivery is always on time!",
        name: "Emily Johnson",
      },
      {
        img: "/images/pic-2.png",
        text: "Fresh vegetables straight from the farm! Love the quality and freshness.",
        name: "Rahul Deshmukh",
      },
      {
        img: "/images/pic-3.png",
        text: "Ordering groceries has never been this easy. Highly recommend Green Basket!",
        name: "Sneha Patil",
      },
      {
        img: "/images/pic-4.png",
        text: "The organic fruits and vegetables are the best in the market. Five stars!",
        name: "Aarav Gupta",
      },
      {
        img: "/images/pic-5.png",
        text: "Their customer service and quality products make me come back every time.",
        name: "Priya Sharma",
      },
    ];
  
    return (
      <section className="review" id="review">
        <h2 className="heading">
          Customer <span>Reviews</span>
        </h2>
        <Swiper
          spaceBetween={30}
          slidesPerView={2}
          loop={true}
          autoplay={{
            delay: 5000,
            
          }}
          modules={[Autoplay]}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            480: {
              slidesPerView: 1,
            },
          }}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="box">
                <img src={review.img} alt={review.name} />
                <p>{review.text}</p>
                <h3>{review.name}</h3>
                <div className="stars">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="star">★</span>
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    );
  };

const ProductSlider = () => {
    const [cart, setCart] = useState([]); // Cart state
    const [isCartVisible, setIsCartVisible] = useState(false); // Toggle cart visibility
    const products = [
      { name: "Organic Oranges", price: "4.99", img: "product-1.png" },
      { name: "Fresh Onions", price: "2.99", img: "product-2.png" },
      { name: "Free-Range Chicken", price: "10.99", img: "product-3.png" },
      { name: "Organic Cabbage", price: "2.49", img: "product-4.png" },
      { name: "Organic Oranges", price: "4.99", img: "product-1.png" },
      { name: "Fresh Onions", price: "2.99", img: "product-2.png" },
      { name: "Free-Range Chicken", price: "10.99", img: "product-3.png" },
      { name: "Organic Cabbage", price: "2.49", img: "product-4.png" },
    ];
  
    // Function to handle adding a product to the cart
    const handleAddToCart = (product) => {
      const newCart = [...cart];
      const existingProduct = newCart.find(item => item.name === product.name);
  
      if (existingProduct) {
        // If product already exists, update the quantity
        existingProduct.quantity += 1;
      } else {
        // If new product, add it to the cart with quantity 1
        newCart.push({ ...product, quantity: 1 });
      }
  
      setCart(newCart);
      setIsCartVisible(true); // Show the cart
    };
  
    // Calculate the total price of the cart
    const totalPrice = cart.reduce((total, item) => total + parseFloat(item.price) * item.quantity, 0);
  
    return (
      <div>
        {/* Product Slider */}
        <Swiper
          spaceBetween={30}
          slidesPerView={4}
          loop={true}
          autoplay={{ delay: 3000 }}
          modules={[Autoplay]}
        >
          {products.map((product, index) => (
            <SwiperSlide key={index}>
              <div className="product-box">
                <img src={`/images/${product.img}`} alt={product.name} />
                <h3>{product.name}</h3>
                <div className="price">${product.price} / kg</div>
                <button onClick={() => handleAddToCart(product)} className="btn">
                  Add to Cart
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
  
        {/* Shopping Cart */}
        
        {isCartVisible && (
          <div className="shopping-cart">
            {cart.map((item, index) => (
              <CartItem
                key={index}
                image={`/images/${item.img}`}
                name={item.name}
                price={item.price}
                quantity={item.quantity}
              />
            ))}
            <div className="total">Total: ${totalPrice.toFixed(2)}</div>
            <a href="/CreditCard" className="btn">Checkout</a>
          </div>
        )}
      </div>
    );
  };

export default Index;