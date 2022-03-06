import React, { useState, useEffect } from "react";
import "./foodlist.css";
import "../../index.css";
import {usePaginate} from "../../utils";
import { useGlobalContext } from "../../context";

function FoodList() {
  const { data } = useGlobalContext();
  const [foods, setFoods] = useState([]);
  const foodPaginate = usePaginate(data);
  const [loadingFood, setLoadingFood] = useState(true);
  const [pageIndex, setPageIndex] = useState(0);
  useEffect(() => {
    setLoadingFood(false);
    setFoods(foodPaginate[pageIndex]);
  }, [loadingFood, pageIndex]);
  const handlePage = (index) => {
    setPageIndex(index);
  };
  const handlePrev = () => {
    setPageIndex((oldPage) => {
      let prevPage = oldPage - 1;
      if (prevPage < 0) {
        prevPage = foodPaginate.length - 1;
      }
      return prevPage;
    });
  };
  const handleNext = () => {
    setPageIndex((oldPage) => {
      let nextPage = oldPage + 1;
      if (nextPage > foodPaginate.length - 1) {
        nextPage = 0;
      }
      return nextPage;
    });
  };
  if (loadingFood) {
    return <div className="loading">Loading....</div>;
  }
  return (
    <>
      <div className="menu-container">
        <h2 className="title-our-menu">Our Menu</h2>
        <div className="underline"></div>
      </div>
      <section className="food-list grid wide">
        <div className="row">
          {foods.map((food) => {
            const { id, img, title, price, category } = food;
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
      <div className="pagination">
        <i
          className="fas fa-arrow-left pagination-icon-prev"
          onClick={handlePrev}
        ></i>
        {foodPaginate.map((item, index) => {
          return (
            <button
              key={index}
              className={`page-btn ${index === pageIndex ? "active-page" : ""}`}
              onClick={() => handlePage(index)}
            >
              {index + 1}
            </button>
          );
        })}
        <i
          className="fas fa-arrow-right pagination-icon-next"
          onClick={handleNext}
        ></i>
      </div>
    </>
  );
}

export default FoodList;
