import React, { useState,useEffect,useRef,useContext } from "react";
import { sliders, products } from "./data";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  //categories
  const allCategories = ['all',...new Set(products.map((item)=>item.category))]
  const [categories,setCategories] = useState(allCategories);
  const filetCateogory = (cateogry)=>{
    

  }
  //menu
  const [isOpenSubmenu,setIsOpenSubmenu] = useState(false);
  const [location,setLocation] = useState(null);
  //form
  const [openFormLogin,setOpenFormLogin] = useState(false);
  const openSubmenu = (location)=>{
    setLocation(location);
    setIsOpenSubmenu(true);
  }
  const closeSubmenu = ()=>{
    setIsOpenSubmenu(false);
  }
  return (
    <AppContext.Provider
      value={{
        sliders,
        products,
        isOpenSubmenu,
        location,
        categories,
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
export {AppProvider,AppContext};
