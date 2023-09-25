import { useDispatch } from "react-redux";
import { addToCart } from "../store";
import { Link } from "react-router-dom";

function ProductCard({ product, onAdd, buttonTitle }) {
  const dispatch = useDispatch();
  return (
    <div className="product-card">
      <div className="product-card__image">
        <Link to={`/product/${product.id}`} onClick={() => window.top(0, 0)}>
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
            dispatch(onAdd(product));
          }}
        >
          {buttonTitle}
        </button>
      </div>
    </div>
  );
}
export default ProductCard;
