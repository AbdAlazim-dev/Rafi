import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../images/logo-images/fulllogo_transparent_nobuffer.png";
import { GrCart } from "react-icons/gr";
import { useSelector } from "react-redux";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

function Navbar() {
  const [mobileNav, setMobileNav] = useState(false);
  const [cartModal, setCartModal] = useState(false);
  const [sticky, setSticky] = useState(false);
  const cart = useSelector((state) => state.cart);

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
            <NavLink to="/catogaries" onClick={handleMobileNav}>
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
        <div className="cart-modal__content"></div>
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
