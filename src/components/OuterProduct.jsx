import { GrCart } from "react-icons/gr";
import { useDispatch } from "react-redux";
import { addToCart } from "../store";
function OuterProduct({ product }) {
  const dispatch = useDispatch();
  return (
    <div className="product-container">
      <img src={product.image} alt="the product image" />
      <div className="product-info">
        <div className="name-price">
          <h4>{product.name}</h4>
          <p>
            {product.price} ريال, {product.contain}
          </p>
        </div>
        <p>{product.origin}</p>
      </div>
      <div className="product-container__buttons">
        <button
          className="add-to-cart"
          onClick={() => {
            dispatch(addToCart(product));
          }}
        >
          <GrCart /> اضف الى السلة
        </button>
        <button className="add-to-fav">اضف لمقاضيك الاسبوعية</button>
      </div>
    </div>
  );
}
export default OuterProduct;
