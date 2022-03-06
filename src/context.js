import React, { useState, useEffect, useRef, useContext } from "react";
import { sliders, products } from "./data";
import { usePaginate } from "./utils";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [data, setData] = useState(products);
  
  // categories
  // const allCategories = [
  //   "all",
  //   ...new Set(products.map((item) => item.category)),
  // ];
  // const [categories, setCategories] = useState(allCategories);
  // const filterCategory = (category) => {
  //   if (category === "all") {
  //     setData(products);
  //     return;
  //   }
  //   const newFoodList = data.filter((item) => item.category === category);
  //   setData(newFoodList);
  // };
  //paginate product
  // const foodPaginate = usePaginate(data);
  //menu
  const [isOpenSubmenu, setIsOpenSubmenu] = useState(false);
  const [location, setLocation] = useState(null);
  //form
  const [openFormLogin, setOpenFormLogin] = useState(false);
  const openSubmenu = (location) => {
    setLocation(location);
    setIsOpenSubmenu(true);
  };
  const closeSubmenu = () => {
    setIsOpenSubmenu(false);
  };
  return (
    <AppContext.Provider
      value={{
        sliders,
        data,
        // foodPaginate,
        isOpenSubmenu,
        location,
        // categories,
        openFormLogin,
        setOpenFormLogin,
        openSubmenu,
        closeSubmenu,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppProvider, AppContext };
