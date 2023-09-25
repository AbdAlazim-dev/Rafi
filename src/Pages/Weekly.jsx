import WeekList from "../components/WeekList";
import ProductSlider from "../components/ProductSlider";
import { addToWeekly } from "../store";
import Footer from "../components/Footer";
function Weekly() {
  return (
    <>
      <WeekList />
      <ProductSlider
        title="لا تنسى الأساسيات"
        onAdd={addToWeekly}
        buttonTitle="اضف لمقاضيك"
      />
      <Footer />
    </>
  );
}
export default Weekly;
