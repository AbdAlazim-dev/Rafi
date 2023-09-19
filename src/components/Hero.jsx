import { Link } from "react-router-dom";
function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>
            مقاضي <span>رفيع </span> الاسبوعية
          </h1>
          <p>
            اضف اصناف الى مقاضيك الأسبوعية واحصل على تخفيض <span>15%</span>
          </p>
          <Link to="/catogaries/all">
            <button>منتجاتنا</button>
          </Link>
        </div>
      </div>
    </section>
  );
}
export default Hero;
