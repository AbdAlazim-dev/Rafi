import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Weekly from "./Pages/Weekly";
import Catogaries from "./Pages/Catogaries";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weekly" element={<Weekly />} />
        <Route path="/catogaries">
          <Route index element={<Catogaries />} />
          <Route path=":catogary" />
        </Route>
      </Routes>
    </>
  );
}

export default App;
