import React from "react";
import "./foodlist.css";
import "../../index.css";
import { useGlobalContext } from "../../context";
function FoodList() {
  const { products } = useGlobalContext();
  return (
    <section className="food-list grid wide">
      <div className="row">
        {products.map((food) => {
          const { id, img, title, price,category } = food;
          return (
            <article key={id} className="col l-4 m-4 c-12">
            <div className="food">
              <img src={img} className="food-img" alt={title} />
              <div className="food-info">
                <h1 className="food-title">{title}</h1>
                <p className="food-price">{price}$</p>
              </div>
              <p className="food-category">{category}</p>
              <button className="food-btn">Xem chi tiết</button>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default FoodList;
