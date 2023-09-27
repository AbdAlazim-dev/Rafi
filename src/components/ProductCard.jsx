import { useDispatch } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";

function ProductCard({ product, onAdd, buttonTitle }) {
  const dispatch = useDispatch();

  const [notify, setNotify] = useState(false);
  if (notify) {
    setTimeout(() => {
      setNotify(false);
    }, 3000);
  }
  const handleAddToCart = (product) => {
    setNotify(true);
    dispatch(onAdd(product));
  };
  return (
    <div className="product-card">
      <div className={`notify-container ${notify && "noify-active"}`}>
        <h3>{`تم أضافة ال${product.name} لسلتك ✅  `}</h3>
      </div>
      <div className="product-card__image">
        <Link
          to={`/product/${product.id}`}
          onClick={() => window.scrollTo(0, 0)}
        >
          <img src={product.image} alt={product.title} />
        </Link>
      </div>

      <div className="product-card__content">
        <div className="product-card__name-price">
          <p>
            {product.name},<br /> {product.contain},{product.price}
          </p>
        </div>

        <button
          onClick={() => {
            handleAddToCart(product);
          }}
        >
          {buttonTitle}
        </button>
      </div>
    </div>
  );
}
export default ProductCard;
