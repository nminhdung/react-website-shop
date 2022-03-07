import React from "react";
import "./categories.css";
import "../../index.css";
import { useGlobalContext } from "../../context";
function Categories() {
  const { categories,filterCategory } = useGlobalContext();
  return (
    <section className="our-menu">
      <div className="menu-container">
        <h2 className="title-our-menu">Our Menu</h2>
        <div className="underline"></div>
      </div>
      <div className="categories ">
        <ul className="list-category">
          {categories.map((category, index) => {
            return (
              <li key={index} className="category-item">
                <button  className="category-item-link" onClick={()=>filterCategory(category)}>
                  {category}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default Categories;
