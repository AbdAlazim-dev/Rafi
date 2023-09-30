import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../images/logo-images/fulllogo_transparent_nobuffer.png";
//icons
import { GrCart } from "react-icons/gr";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { GiShoppingCart } from "react-icons/gi";
import { SlCalender } from "react-icons/sl";
//redux stuff
import { useSelector, useDispatch } from "react-redux";
import { increaceQuantity, removeFromCart, decreaceQuantity } from "../store";
//components
import TotalCost from "./TotalCost";

function Navbar() {
  const dispatch = useDispatch();

  const [mobileNav, setMobileNav] = useState(false);
  const [cartModal, setCartModal] = useState(false);
  const [sticky, setSticky] = useState(false);
  //fetch cart from redux store
  let totalcost;
  //fetch cart and weekList from redux store
  const cart = useSelector((state) => state.cart);
  //display cart products
  const cartProducts = cart.map((product, index) => {
    const totalProductPrice = product.price * product.quantity;
    //calculate total cost
    totalcost = cart.reduce((acc, curr) => {
      return acc + curr.price * curr.quantity;
    }, 0);
    return (
      <>
        <div key={index} className="cart-modal-product">
          <img src={product.image} alt="product image" />
          <div className="cart-modal-product__info">
            <div className="cart-modal-product__name-price">
              <h4> {product.name}</h4>
              <p>{product.contain}</p>
            </div>
            <div className="cart-modal-product__quantity-price">
              <p>السعر: {totalProductPrice.toFixed(2)} ريال</p>
              <div className="cart-product__quantity">
                <button
                  onClick={() => {
                    handleQuantityIncrease(product);
                  }}
                >
                  +
                </button>
                <p>الكمية: {product.quantity}</p>
                <button
                  onClick={() => {
                    handleQuantityDecreace(product);
                  }}
                >
                  -
                </button>
              </div>
            </div>
          </div>
          <AiOutlineClose
            onClick={() => {
              dispatch(removeFromCart(product));
            }}
            className="remove-product"
          />
        </div>
      </>
    );
  });
  //handle quantity increase and decreace
  const handleQuantityIncrease = (product) => {
    dispatch(increaceQuantity(product));
  };
  const handleQuantityDecreace = (product) => {
    dispatch(decreaceQuantity(product));
  };
  //handle cart modal and mobile nav
  const handleCartModal = () => {
    setCartModal(!cartModal);
  };

  const handleMobileNav = () => {
    setMobileNav(!mobileNav);
    () => window.scrollTo(0, 0);
  };
  //handle sticky navbar
  const handleScroll = () => {
    if (window.scrollY < 10) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  window.addEventListener("scroll", handleScroll);
  //handle cart content
  let cartContent;
  if (cart.length === 0) {
    cartContent = (
      <div className="empty-cart">
        <GiShoppingCart />
        <h3>سلة المشتريات فارغة</h3>
      </div>
    );
  } else {
    cartContent = <TotalCost totalcost={totalcost} />;
  }
  //prevent scrolling when the cart is open
  if (cartModal) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "unset";
  }
  //hide the the cart when the user click on the overlay
  const handleOverlay = (e) => {
    if (e.target.classList.contains("overley")) {
      setCartModal(false);
    }
  };
  const handleEscape = (e) => {
    if (e.key === "Escape") {
      setCartModal(false);
    }
  };

  useEffect(() => {
    //close the mobile nav when the user click on the overlay
    window.addEventListener("click", handleOverlay);
    //close the mobile nav when the user click escape
    window.addEventListener("keydown", handleEscape);
    return () => {
      window.removeEventListener("click", handleOverlay);
      window.removeEventListener("keydown", handleEscape);
    };
  }, [cartModal]);

  return (
    <>
      <div className={`overley ${cartModal && "open"}`}></div>
      <header>
        <nav className={`mobile-nav ${mobileNav && "nav-open"}`}>
          <AiOutlineClose className="close-nav" onClick={handleMobileNav} />
          <ul className="mobile-nav__links">
            <li>
              <NavLink to="/" onClick={handleMobileNav}>
                الصفحة الرئيسية
              </NavLink>
            </li>
            <li>
              <NavLink to="/weekly" onClick={handleMobileNav}>
                <SlCalender />
                مقاضيك الأسبوعية
              </NavLink>
            </li>
            <li>
              <NavLink to="/catogaries/all" onClick={handleMobileNav}>
                تسوق
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className={`cart-modal ${cartModal && "cart-open"}`}>
          <div className="cart-modal__header">
            <h2>({cart.length})سلة المشتريات</h2>
            <AiOutlineClose onClick={handleCartModal} />
          </div>
          <div className="cart-modal__content">{cartProducts}</div>
          {cartContent}
        </div>
        <div className="container">
          <nav className={`larg-devices-nav ${sticky && "top-header"}`}>
            <NavLink to="/">
              <img src={Logo} alt="rafi-logo" />
            </NavLink>
            <ul className="larg-devices-nav__links">
              <li className="link">
                <NavLink onClick={() => window.scrollTo(0, 0)} to="/weekly">
                  <SlCalender />
                  مقاضيك الأسبوعية
                </NavLink>
              </li>
              <li className="link">
                <NavLink
                  onClick={() => {
                    () => window.scrollTo(0, 0);
                  }}
                  to="/catogaries/all"
                >
                  تسوق
                </NavLink>
              </li>
              <li className="buttons">
                <button className="cart-icon" onClick={handleCartModal}>
                  {cart.length > 0 && (
                    <span className="cart-items">{cart.length}</span>
                  )}

                  <GrCart />
                </button>
                <button className="mobile-links-icon" onClick={handleMobileNav}>
                  <GiHamburgerMenu />
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
export default Navbar;
