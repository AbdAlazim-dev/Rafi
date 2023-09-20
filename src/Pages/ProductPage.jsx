import { useParams } from "react-router-dom";
import data from "../components/AllData";
import { useDispatch } from "react-redux";
import { addToCart } from "../store";
import { useState } from "react";

function ProductPage() {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const { id } = useParams();
  //search for the product with the same id
  const product = data.filter((product) => product.id === parseInt(id));
  console.log(product);
  return (
    <section className="product-page">
      <div className="container">
        {product.map((product) => {
          return (
            <>
              <div key={product.id} className="product-page__content">
                <div className="product-page__image">
                  <img src={product.image} alt="the product image" />
                </div>
                <div className="product-page__info">
                  <h2>
                    {product.name},<br /> {product.contain}
                  </h2>
                  <p className="price">
                    {product.price} ريال
                    <br />
                  </p>
                  <p className="tax">جميع الأسعار تشمل ضريبة القيمة المضافة</p>
                  <div className="product-page__buttons">
                    <button
                      onClick={() => {
                        dispatch(addToCart(product));
                      }}
                      className="product-page__add-to-cart"
                    >
                      اضف الى السلة
                    </button>
                    <button className="product-page__add-to-weekly">
                      اضف الى مقاضيك الاسبوعية
                    </button>
                  </div>
                </div>
              </div>

              <div className="recipe">
                <h5>وصفات</h5>
                <hr />
                <h3>{product.recipe.name}</h3>
                <ul className="recipe__ingredients">
                  <h5>المكونات</h5>
                  {product.recipe.ingredients.map((ingredient) => {
                    return <li key={ingredient}>{ingredient}</li>;
                  })}
                </ul>
                <h5>طريقة التحضير</h5>
                <p className="recipe__steps">{product.recipe.steps}</p>
              </div>
            </>
          );
        })}
      </div>
    </section>
  );
}
export default ProductPage;
