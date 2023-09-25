import { BsFillPatchExclamationFill } from "react-icons/bs";
import { CiDeliveryTruck } from "react-icons/ci";
import { GrClose } from "react-icons/gr";
//components
import TotalCost from "./TotalCost";
//redux stuff
import { useSelector, useDispatch } from "react-redux";
//actions creators
import {
  removeFromWeekly,
  increaceWeeklyQuantity,
  decreaceWeeklyQuantity,
} from "../store";

function WeekList() {
  const dispatch = useDispatch();
  const weekList = useSelector((state) => state.weekly);
  //Measure the price of products in the week list and return the total price
  const totalPrice = weekList.reduce((acc, curr) => {
    return acc + curr.price * curr.quantity;
  }, 0);
  console.log(totalPrice);

  //percentage relative to 120
  let percentage = (totalPrice * 100) / 120;
  //stop the percentage to be greater than 100, return 100
  if (percentage === 0) {
    percentage = 5;
  } else if (percentage > 100) {
    percentage = 100;
  }
  //content of the week list
  let content;
  if (weekList.length > 0) {
    content = weekList.map((product, index) => {
      return (
        <>
          <div className="week-list__content__body__product" key={index}>
            <GrClose
              className="close-icon"
              onClick={() => {
                dispatch(removeFromWeekly(product));
              }}
            />
            <img src={product.image} />
            <div className="week-list__content__body__product__info">
              <h4>{product.name}</h4>
              <p>{product.contain}</p>
              <div className="quantity">
                <button
                  //add one more from same product
                  onClick={() => {
                    dispatch(increaceWeeklyQuantity(product));
                  }}
                >
                  +
                </button>
                <span>{product.quantity}</span>
                <button
                  //remove from same product
                  onClick={() => {
                    dispatch(decreaceWeeklyQuantity(product));
                  }}
                >
                  -
                </button>
              </div>
              <div className="total-product-cost">
                <span>{product.price * product.quantity} ريال</span>
              </div>
            </div>
          </div>
        </>
      );
    });
  } else {
    content = (
      <div className="add-to-week-list-note">
        <h3>أضف متجات الى مقاضيك الاسبوعية</h3>
      </div>
    );
  }

  return (
    <section className="week-list">
      <div className="container">
        <div className="week-list__content">
          <div className="week-list__content__header">
            <div className="week-list__content__header_row1">
              <BsFillPatchExclamationFill />
              تجاوز 120 ريال واحصل على شحن مجاني
            </div>
            <div className="week-list__content__header_row2">
              <span className="deleviry-bar">
                <span
                  className="deleviry-bar__fill"
                  style={{ width: percentage + "%" }}
                >
                  <CiDeliveryTruck />
                </span>
              </span>
            </div>
          </div>
          <div className="week-list__content__body">
            {content}
            {weekList.length > 0 && <TotalCost totalcost={totalPrice} />}
          </div>
        </div>
      </div>
    </section>
  );
}
export default WeekList;
