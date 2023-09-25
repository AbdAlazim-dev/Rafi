import data from "./AllData";
import { useDispatch } from "react-redux";
import { addToCart } from "../store";
import ProductCard from "./ProductCard";
//icons
import { FiArrowLeft } from "react-icons/fi";
import { FiArrowRight } from "react-icons/fi";
import { useEffect } from "react";

function ProductSlider({ catogary, title, onAdd, buttonTitle }) {
  console.log(catogary);
  //data of the slider
  const dispatch = useDispatch();
  let filteredData = data;
  if (catogary) {
    filteredData = data.filter((product) => product.category === catogary);
  }
  //slider controllers
  const slideLeft = () => {
    const slider = document.querySelector(".product-slider__content");
    slider.scrollLeft -= 250;
  };
  const slideRight = () => {
    const slider = document.querySelector(".product-slider__content");
    slider.scrollLeft += 250;
  };
  //slide left and right with keyboard
  useEffect(() => {
    const slider = document.querySelector(".product-slider__content");
    window.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") {
        slider.scrollLeft -= 250;
      } else if (e.key === "ArrowRight") {
        slider.scrollLeft += 250;
      }
    });
  }, []);

  return (
    <section className="product-slider">
      <div className="container">
        <div className="product-slider__btns-title">
          <h3>{title}</h3>
          <div className="btns">
            <button onClick={slideRight}>
              <FiArrowRight />
            </button>
            <button>
              <FiArrowLeft onClick={slideLeft} />
            </button>
          </div>
        </div>
        <div className="product-slider__content">
          {filteredData.map((product) => {
            return (
              <ProductCard
                buttonTitle={buttonTitle}
                key={product.id}
                product={product}
                onAdd={onAdd}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
export default ProductSlider;
