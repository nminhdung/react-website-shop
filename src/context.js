import React, { useState, useEffect, useRef, useContext } from "react";
import { sliders, products } from "./data";
import { usePaginate } from "./utils";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [data, setData] = useState(products);

  // categories
  const allCategories = [
    "all",
    ...new Set(products.map((item) => item.category)),
  ];
  const [categories, setCategories] = useState(allCategories);
  const filterCategory = (category) => {
    if (category === "all") {
      setData(products);
      return;
    }
    const newItems = products.filter((item) => item.category === category);
    setData(newItems);
  };
  //paginate product
  // const foodPaginate = usePaginate(data)
  //menu

  //form
  const [openFormLogin, setOpenFormLogin] = useState(false);
  
 
  return (
    <AppContext.Provider
      value={{
        sliders,
        data,
        categories,
        openFormLogin,
        filterCategory,
        setOpenFormLogin,
      
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
