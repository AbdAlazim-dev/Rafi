import Dmiss from "../images/home-images/dontMiss.png";

function DontMiss() {
  return (
    <section className="dont-miss">
      <div className="container">
        <div className="dont-miss__content">
          <div className="dont-miss__text">
            <h4>مقاضي رفيع الاسبوعية</h4>
            <p>
              اضف 5 اصناف الى قاظمة مقاضيك الاسبوعية واحصل على تخفيض 15%, وتجاوز
              120 ريال واحصل على توصيل مجاني اسبوعيًا
            </p>
            <button>تسوق</button>
          </div>
          <div className="dont-miss__image">
            <img src={Dmiss} alt="picture with fresh fruits" />
          </div>
        </div>
      </div>
    </section>
  );
}
export default DontMiss;
