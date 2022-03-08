import React from "react";
import Navbar from "../components/navbar/Navbar";
import Slider from "../components/slider/Slider";
import Submenu from "../components/submenu/Submenu";
import Login from "../components/login/Login";
import Banner from "../components/banner/Banner";
import Categories from "../components/categories/Categories";
import FoodList from "../components/foodlist/Foodlist";
import Footer from "../components/footer/Footer";
function Home() {
  return (
    <>
      <Slider />
      <Submenu />
      <Login />
      <Banner/>
      <FoodList />
      <Footer/>
    </>
  );
}

export default Home;
