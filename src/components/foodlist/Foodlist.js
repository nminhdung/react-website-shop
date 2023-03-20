import React, { useState, useEffect } from "react";
import "./foodlist.css";
import { usePaginate } from "../../utils";
import { useGlobalContext } from "../../context";
import { Link } from "react-router-dom";

function FoodList() {
  const { data } = useGlobalContext();
  const [foods, setFoods] = useState([]);
  const foodPaginate = usePaginate(data);
  const [loadingFood, setLoadingFood] = useState(false);
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
      <section className="food-list grid wide ">
        <div className="row">
          {foods.map((food) => {
            const { id, img, title, price, category } = food;
            return (
              <article
                key={id}
                className="col l-4 m-6 c-12"
                style={{ marginTop: "3.2rem" }}
              >
                <div className="food">
                  <Link to={`/product/${id}`}>
                    <img src={img} className="food-img" alt={title} />
                  </Link>
                  <div className="food-info">
                    <div className="food-description">
                      <h1 className="food-title">{title}</h1>
                      <p className="food-category">{category}</p>
                      <p className="food-price">{price}$</p>
                    </div>
                    <div className="food-footer">
                      <Link to={`/product/${id}`} className="food-btn">
                        Xem chi tiết
                      </Link>
                    </div>
                  </div>
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
