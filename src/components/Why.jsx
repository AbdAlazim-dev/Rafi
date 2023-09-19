import { GiTomato } from "react-icons/gi";
import { TbTruckDelivery } from "react-icons/tb";
import { FaMoneyBillAlt } from "react-icons/fa";
function Why() {
  return (
    <section className="why-section">
      <div className="container">
        <div className="why-section__content">
          <h3>
            ليش تتسوق من <span>رفيع ؟</span>
          </h3>
          <div className="features">
            <div className="features__feature">
              <GiTomato className="features__feature__icon" />
              <h4>منتجات طازجة دومًا</h4>
              <p>جودة ونظافة، وتغليف أفضل من أي متجر</p>
            </div>
            <div className="features__feature">
              <TbTruckDelivery className="features__feature__icon" />
              <h4>توصيل سريع بسعر منافس</h4>
              <p>
                اطلب قبل 11 صباحًا واستلم في نفس اليوم
                <br /> وإذا تجاوزت سلتك 150 ريال التوصيل مجاني
              </p>
            </div>
            <div className="features__feature">
              <FaMoneyBillAlt className="features__feature__icon" />
              <h4>اسعار تنافسية</h4>
              <p>
                لأن سوق الخضار والفواكه اسعاره متفاوتة رفيع حريص انه يبيع بأفضل
                سعر
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Why;
