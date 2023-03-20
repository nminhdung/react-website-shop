import React from "react";
import { useGlobalContext } from "../../context";
function ViewCart({ cartList }) {
  const { remove, toggleAmount } = useGlobalContext();
  return cartList.map((item, index) => {
    return (
      <article className="cart-item" key={item.id}>
        <img
          src={item.img}
          className="cart-item-img"
          alt="Bánh Chocolate Cream"
        />
        <div className="cart-item-info">
          <h1 className="cart-item-name">{item.title}</h1>
          <p className="cart-item-price">{item.price}</p>
        </div>
        <div className="cart-item-amount">
          <i
            className="fas fa-minus cart-icon-amount"
            onClick={() => toggleAmount("decrease", item.id)}
          ></i>
          <p className="cart-item-number">{item.amount}</p>
          <i
            className="fas fa-plus cart-icon-amount"
            onClick={() => toggleAmount("increase", item.id)}
          ></i>
          <i
            className="fas fa-times cart-icon-close"
            onClick={() => remove(item.id)}
          ></i>
        </div>
      </article>
    );
  });
}

export default ViewCart;
