import React from "react";
import Navbar from "../components/navbar/Navbar";
import Slider from "../components/slider/Slider";
import Submenu from "../components/submenu/Submenu";
import Login from "../components/login/Login";
import Categories from "../components/categories/Categories";
function Home() {
  return (
    <>
      <Slider />
      <Submenu />
      <Login />
      <Categories/>
    </>
  );
}

export default Home;
