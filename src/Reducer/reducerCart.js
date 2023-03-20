export const reducerCart = (state, action) => {
  if (action.type === "GET_TOTALS") {
    let { total, amount } = state.cartList.reduce(
      (cartTotal, cartItem) => {
        const { price, amount } = cartItem;
        const itemTotal = price * amount;
        cartTotal.total += itemTotal;
        cartTotal.amount += amount;
        return cartTotal;
      },
      {
        total: 0,
        amount: 0,
      }
    );
    total = parseFloat(total.toFixed(2));

    return { ...state, total, amount };
  }
  if (action.type === "ADD_CART") {
    if (state.cartList.length === 0) {
      const newCart = [...state.cartList, action.payload];
      return {
        ...state,
        cartList: newCart,
      };
    } else {
      const oldItem = state.cartList.find(
        (item) => item.id === action.payload.id
      );
      if (oldItem) {
        const newCart = state.cartList.map((item) => {
          if (item.id === oldItem.id) {
            return {
              ...oldItem,
              amount: oldItem.amount + action.payload.amount,
            };
          }
        });
        return { ...state, cartList: newCart };
      } else {
        const newCart = [...state.cartList, action.payload];
        return { ...state, cartList: newCart };
      }
    }
  }
  if (action.type === "REMOVE") {
    const newCart = state.cartList.filter((item) => item.id !== action.payload);
    return { ...state, cartList: newCart };
  }
  if (action.type === "TOGGLE_AMOUNT") {
    const newCart = state.cartList
      .map((item) => {
        if (item.id === action.payload.id) {
          if (action.payload.type === "increase") {
            return { ...item, amount: item.amount + 1 };
          }
          if (action.payload.type === "decrease") {
            return { ...item, amount: item.amount - 1 };
          }
        }
        return item;
      })
      .filter((item) => item.amount !== 0);
    return { ...state, cartList: newCart };
  }
  if (action.type === "CLEAR_ALL") {
    return { ...state, cartList: [] };
  }

  console.log(action.type);
  throw new Error("no matching action type");
};
