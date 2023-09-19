import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { TbHomeEco } from "react-icons/tb";
function CatogaryHeader() {
  const [catogaryTitle, setCatogaryTitle] = useState("الكل");

  return (
    <section className="catogary-header">
      <div className="container">
        <span className="home-icon">
          <NavLink>
            <TbHomeEco />
            الرئيسية
          </NavLink>{" "}
        </span>
        <h4 className="catogary-header__current">{catogaryTitle}</h4>
        <div className="catogary-header__menu">
          <NavLink className="catogary" to="all">
            <button onClick={() => setCatogaryTitle("الكل")}>الكل</button>
          </NavLink>
          <NavLink className="catogary" to="fruits">
            <button onClick={() => setCatogaryTitle("فواكه")}>فواكه</button>
          </NavLink>
          <NavLink className="catogary" to="vegetables">
            <button onClick={() => setCatogaryTitle("خضروات")}>خضروات</button>
          </NavLink>
          <NavLink className="catogary" to="plants">
            <button onClick={() => setCatogaryTitle("ورقيات")}>ورقيات</button>
          </NavLink>
        </div>
        <Outlet />
      </div>
    </section>
  );
}
export default CatogaryHeader;
