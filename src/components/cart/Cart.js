import React from "react";

import "./cart.css";
import ViewCart from "./ViewCart";
import { useGlobalContext } from "../../context";

function Cart() {
  const { openCart, setOpenCart,cartList,total,clearAll} = useGlobalContext();
  

  return (
    <div className={`${openCart ? "modal modal-active" : "modal"}`} >
      <div
        className={`${
          openCart ? "cart-container cart-open" : "cart-container "
        }`}
      >
        <div className="cart-header">
          <i className="fas fa-shopping-cart cart-header-icon"></i>
          <h1 className="cart-title">Giỏ Hàng</h1>
          <i
            className="fas fa-times cart-icon-close"
            onClick={() => setOpenCart(false)}
          ></i>
        </div>
        {(cartList.length>0 && <ViewCart cartList={cartList}/>) ||  <p className="cart-empty">Không có sản phẩm trong giỏ hàng </p> } 
       
        <p className="clear-cart" onClick={clearAll}>Xóa tất cả</p>
        <p className="cart-footer">Tổng cộng :{total}$</p>
      </div>
    </div>
    /*test*/
  );
}

export default Cart;
