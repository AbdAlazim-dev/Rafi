import { GrCart } from "react-icons/gr";
import { useDispatch } from "react-redux";
import { addToCart, addToWeekly } from "../store";
import { Link } from "react-router-dom";
function OuterProduct({ product }) {
  const dispatch = useDispatch();
  return (
    <div className="product-container">
      <Link
        onClick={() => window.top(0, 0)}
        to={`/product/${product.id}`}
        className="product-link"
      >
        <div className="product-container__image">
          <img src={product.image} alt="the product image" />
        </div>
        <div className="product-info">
          <div className="name-price">
            <h4>{product.name}</h4>
            <p>
              {product.price} ريال, {product.contain}
            </p>
          </div>
          <p>{product.origin}</p>
        </div>
      </Link>

      <div className="product-container__buttons">
        <button
          className="add-to-cart"
          onClick={() => {
            dispatch(addToCart(product));
          }}
        >
          <GrCart /> اضف الى السلة
        </button>
        <button
          onClick={() => {
            dispatch(addToWeekly(product));
          }}
          className="add-to-fav"
        >
          اضف لمقاضيك الاسبوعية
        </button>
      </div>
    </div>
  );
}
export default OuterProduct;
