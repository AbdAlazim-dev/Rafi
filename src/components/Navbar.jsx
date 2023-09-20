import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../images/logo-images/fulllogo_transparent_nobuffer.png";
//icons
import { GrCart } from "react-icons/gr";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
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
  const cart = useSelector((state) => state.cart);
  const cartProducts = cart.map((product, index) => {
    const totalProductPrice = product.price * product.quantity;
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
              <p>
                {product.price} ريال, {product.contain}
              </p>
            </div>
            <div className="cart-modal-product__quantity-price">
              <p>السعر: {totalProductPrice} ريال</p>
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
  const handleQuantityIncrease = (product) => {
    dispatch(increaceQuantity(product));
  };
  const handleQuantityDecreace = (product) => {
    dispatch(decreaceQuantity(product));
  };

  const handleCartModal = () => {
    setCartModal(!cartModal);
  };

  const handleMobileNav = () => {
    setMobileNav(!mobileNav);
  };

  const handleScroll = () => {
    if (window.scrollY < 10) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  window.addEventListener("scroll", handleScroll);

  return (
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
        <TotalCost totalcost={totalcost} />
      </div>
      <div className="container">
        <nav className={`larg-devices-nav ${sticky && "top-header"}`}>
          <NavLink to="/">
            <img src={Logo} alt="rafi-logo" />
          </NavLink>
          <ul className="larg-devices-nav__links">
            <li className="link">
              <NavLink to="/weekly">مقاضيك الأسبوعية</NavLink>
            </li>
            <li className="link">
              <NavLink to="/catogaries">تسوق</NavLink>
            </li>
            <li className="buttons">
              <button className="cart-icon">
                {cart.length > 0 && (
                  <span className="cart-items">{cart.length}</span>
                )}

                <GrCart onClick={handleCartModal} />
              </button>
              <button className="mobile-links-icon" onClick={handleMobileNav}>
                <GiHamburgerMenu />
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
export default Navbar;
