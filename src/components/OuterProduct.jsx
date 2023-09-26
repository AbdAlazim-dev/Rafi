import { GrCart } from "react-icons/gr";
import { useDispatch } from "react-redux";
import { addToCart, addToWeekly } from "../store";
import { Link } from "react-router-dom";
import { useState } from "react";
function OuterProduct({ product }) {
  const [notifyTitle, setNotifyTitle] = useState("");
  const [notify, setNotify] = useState(false);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    setNotifyTitle(`تمت أضافة ال${product.name}  لسلتك`);
    setNotify(true);
  };
  const handleAddToWeekList = (product) => {
    dispatch(addToWeekly(product));
    setNotifyTitle(`تمت اضافة ال${product.name} لمقاضيك الأسبوعية`);
    setNotify(true);
  };
  if (notify === true) {
    setTimeout(() => {
      return setNotify(false);
    }, 3000);
  }

  const dispatch = useDispatch();
  return (
    <div className="product-container">
      <div className={`notify-container ${notify && "noify-active"}`}>
        <h3>{notifyTitle}</h3>
      </div>

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
            handleAddToCart(product);
          }}
        >
          <GrCart /> اضف الى السلة
        </button>
        <button
          onClick={() => {
            handleAddToWeekList(product);
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
