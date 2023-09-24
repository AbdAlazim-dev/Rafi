import Visa from "../images/home-images/visa.png";
import Mada from "../images/home-images/mada_icon.jpg";
import MasterCard from "../images/home-images/mastercard.webp";
import FooterImage from "../images/home-images/footer.webp";
//icons
import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <img src={FooterImage} alt="footer img" className="footer-toper" />
        <div className="footer-content">
          <div className="footer-content__col">
            <a>عن رفيع</a>
          </div>
          <div className="footer-content__col">
            <a>تواصل معنا</a>
          </div>
          <div className="footer-content__col">
            <a href="">الاسئلة الشائعة</a>
          </div>
          <div className="col">
            <div className="payment-methods">
              <img src={Mada} alt="Mada logo" />
              <img src={Visa} alt="Visa logo" />
              <img src={MasterCard} alt="MasterCard Logo" />
            </div>
          </div>
        </div>
        <div className="credit-social">
          <p>© 2023 رفيع كل الحقوق محفوظة </p>
          <div className="social-media-icons">
            <a href="https://www.instagram.com/rafeea_app/">
              <AiOutlineInstagram className="instagram" />
            </a>
            <a href="https://www.facebook.com/rafeeaapp/">
              <FaFacebookF className="facebook" />
            </a>
            <a href="mailto:rafea@gmail.com">
              <HiOutlineMail className="mail" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
