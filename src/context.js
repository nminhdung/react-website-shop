import React, {
  useState,
  useEffect,
  useRef,
  useContext,
  useReducer,
} from "react";
import { reducerCart } from "./Reducer/reducerCart";
import { sliders, products } from "./data";
import { usePaginate } from "./utils";
const AppContext = React.createContext();
/*Cart state*/
const initCart = {
  cartList: [],
  amount: 0,
  total: 0,
};
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
  //Cart
  const [openCart, setOpenCart] = useState(false);
  const [state, dispatch] = useReducer(reducerCart, initCart);
  const addCart = (item) => {
    dispatch({ type: "ADD_CART", payload: item });
  };
  const remove = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };
  const toggleAmount = (type, id) => {
    dispatch({ type: "TOGGLE_AMOUNT", payload: { type, id } });
  };
  const clearAll = () => {
    dispatch({ type: "CLEAR_ALL" });
  };
  useEffect(() => {
    dispatch({ type: "GET_TOTALS" });
  }, [state.cartList]);
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
        openCart,
        setOpenCart,
        ...state,
        addCart,
        remove,
        toggleAmount,
        clearAll,
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
