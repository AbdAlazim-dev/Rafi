import Hero from "../components/Hero";
import Why from "../components/Why";
import DontMiss from "../components/DontMiss";
import ProductSlider from "../components/ProductSlider";
import Footer from "../components/Footer";
function Home() {
  return (
    <>
      <Hero />
      <ProductSlider title="وصل حديثًا" />

      <Why />
      <DontMiss />
      <Footer />
    </>
  );
}
export default Home;
