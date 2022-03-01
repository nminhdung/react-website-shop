import React, { useState, useEffect } from "react";
import { useGlobalContext } from "../../context";
// import { sliders } from "../../data";
import "./slider.css";
import "../../index.css";

function Slider() {
  const { closeSubmenu,sliders } = useGlobalContext();
  const [index, setIndex] = useState(0);

  const prevClick = () => {
    setIndex((index) => {
      return index - 1;
    });
  };
  const nextClick = () => {
    setIndex((index) => {
      return index + 1;
    });
  };
  useEffect(() => {
    let autoMove = setInterval(() => {
      setIndex((index) => {
        return index + 1;
      });
    }, 3000);
    return () => {
      clearInterval(autoMove);
    };
  }, [index]);
  useEffect(() => {
    let lastIndex = sliders.length - 1;
    if (index > lastIndex) {
      setIndex(0);
    }
    if (index < 0) {
      setIndex(lastIndex);
    }
  }, [index, sliders.length]);
  return (
    <section className="sliders grid ">
      {sliders.map((slide, slideIndex) => {
        let position = "nextSlide";
        if (slideIndex === index) {
          position = "activeSlide";
        } else {
          if (
            slideIndex === index - 1 ||
            (index === 0 && slideIndex === sliders.length - 1)
          ) {
            position = "lastSlide";
          }
        }

        return (
          <article key={slideIndex} className={`${position} slider-item`}>
            <img className="slider-img" src={slide.image} alt="slide" />
          </article>
        );
      })}
      <ul className="list-dot">
        {sliders.map((item, indexDot) => {
          return (
            <li
              key={indexDot}
              onClick={() => setIndex(indexDot)}
              className={`dot-item ${index === indexDot ? "dot-active" : ""}`}
            ></li>
          );
        })}
      </ul>
      <button className="prevBtn" onClick={prevClick}>
        <i className="fas fa-arrow-left"></i>
      </button>
      <button className="nextBtn" onClick={nextClick}>
        <i className="fas fa-arrow-right"></i>
      </button>
    </section>
  );
}

export default Slider;
