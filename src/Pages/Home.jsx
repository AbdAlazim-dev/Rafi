import Hero from "../components/Hero";
import Why from "../components/Why";
import DontMiss from "../components/DontMiss";
import ProductSlider from "../components/ProductSlider";
import Footer from "../components/Footer";
import { addToCart } from "../store";
function Home() {
  return (
    <>
      <Hero />
      <ProductSlider
        title="وصل حديثًا"
        onAdd={addToCart}
        buttonTitle="اضف للسلة"
      />

      <Why />
      <DontMiss />
      <Footer />
    </>
  );
}
export default Home;
