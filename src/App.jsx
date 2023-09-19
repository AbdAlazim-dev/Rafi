import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Weekly from "./Pages/Weekly";
import Catogary from "./Pages/catogary";
import CatogaryHeader from "./components/CatogaryHeader";
import NotFound from "./Pages/NotFound";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weekly" element={<Weekly />} />
        <Route path="/catogaries" element={<CatogaryHeader />}>
          <Route path=":catogary" element={<Catogary />} />
        </Route>
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
