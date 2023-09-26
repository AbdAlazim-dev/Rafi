import { Link } from "react-router-dom";
function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>
            <span>رفيع </span>
          </h1>
          <p>خضروات وفواكه عضوية محلية طازجة دومًا</p>
          <Link to="/catogaries/all">
            <button>منتجاتنا</button>
          </Link>
        </div>
      </div>
    </section>
  );
}
export default Hero;
