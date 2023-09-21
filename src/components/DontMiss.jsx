import Dmiss from "../images/home-images/dontMiss.png";

function DontMiss() {
  return (
    <section className="dont-miss">
      <div className="container">
        <div className="dont-miss__content">
          <div className="dont-miss__image">
            <img src={Dmiss} alt="picture with fresh fruits" />
          </div>
          <div className="dont-miss__text">
            <h4>مقاضي رفيع الاسبوعية</h4>
            <p>
              وفر على نفسك وقت وخلي منجاتك طازجة دوما واشترك في مقاضي رفيع
              الاسبوعية
            </p>
            <button>تسوق</button>
          </div>
        </div>
      </div>
    </section>
  );
}
export default DontMiss;
