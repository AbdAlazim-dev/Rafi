import { useParams } from "react-router-dom";
import OuterProduct from "../components/outerProduct";
import data from "../components/AllData";
function Catogary() {
  const { catogary } = useParams();
  let filteredData;
  if (catogary === "all") {
    filteredData = data;
  } else {
    filteredData = data.filter((item) => item.category === catogary);
  }
  console.log(filteredData);

  return (
    <section className="picked-catogary">
      <div className="container">
        <div className="picked-catogary__content">
          {filteredData.map((product) => {
            return <OuterProduct key={product.id} product={product} />;
          })}
        </div>
      </div>
    </section>
  );
}
export default Catogary;