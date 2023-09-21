import Hero from "../components/Hero";
import Why from "../components/Why";
import DontMiss from "../components/DontMiss";
import ProductSlider from "../components/ProductSlider";
function Home() {
  return (
    <>
      <Hero />
      <Why />
      <ProductSlider title="وصل حديثًا" />
      <DontMiss />
    </>
  );
}
export default Home;
