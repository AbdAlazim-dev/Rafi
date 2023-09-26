import { useParams } from "react-router-dom";
import data from "../components/AllData";
import { useDispatch } from "react-redux";
import { addToCart, addToWeekly } from "../store";
import ProductSlider from "../components/ProductSlider";
import Footer from "../components/Footer";
import { useState } from "react";

function ProductPage() {
  const [notify, setNotify] = useState(false);
  const [notifyTitle, setNotifyTitle] = useState("");

  const handleAddToCart = (product) => {
    setNotify(true);
    setNotifyTitle(`تمت أضافة ${product.name} لسلتك`);
    dispatch(addToCart(product));
  };
  const handleAddToWeekList = (product) => {
    setNotify(true);
    setNotifyTitle(`تمت أضافة ال${product.name} لمقاضيك الأسبوعية`);
    dispatch(addToWeekly(product));
  };
  if (notify) {
    setTimeout(() => {
      setNotify(false);
    }, 3000);
  }
  const dispatch = useDispatch();
  const { id } = useParams();
  //search for the product with the same id
  const product = data.filter((product) => product.id === parseInt(id));
  //related catogary
  const category = product.find((product) => product.category);
  const realatedCatogary = category.category;
  return (
    <>
      <section className="product-page">
        <div className="container">
          <div className={`add-product-notify ${notify && "noify-active"}`}>
            <h3>{notifyTitle}</h3>
          </div>
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
                    <p className="tax">
                      جميع الأسعار تشمل ضريبة القيمة المضافة
                    </p>
                    <div className="product-page__buttons">
                      <button
                        onClick={() => {
                          handleAddToCart(product);
                        }}
                        className="product-page__add-to-cart"
                      >
                        اضف الى السلة
                      </button>
                      <button
                        onClick={() => {
                          handleAddToWeekList(product);
                        }}
                        className="product-page__add-to-weekly"
                      >
                        اضف الى مقاضيك الاسبوعية
                      </button>
                    </div>
                  </div>
                </div>
                <h3>وصفات</h3>
                <hr />
                <h3>{product.recipe.name}</h3>
                <div className="recipe">
                  <div className="recipe__ingredients">
                    <h5>المكونات</h5>
                    <ul>
                      {product.recipe.ingredients.map((ingredient) => {
                        return <li key={ingredient}>{ingredient}</li>;
                      })}
                    </ul>
                  </div>
                  <div>
                    <h5>طريقة التحضير</h5>
                    <p className="recipe__steps">{product.recipe.steps}</p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </section>
      <ProductSlider
        catogary={realatedCatogary}
        title="منتجات مشابهة"
        onAdd={addToCart}
        buttonTitle="اضف الى السلة"
      />
      <Footer />
    </>
  );
}
export default ProductPage;
