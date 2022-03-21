import React from "react";
import "../../index.css";
import "./cart.css";
import { useGlobalContext } from "../../context";
const cartData = [
  {
    id: 10,
    title: "Bánh Chocolate Cream",
    category: "dessert",
    price: 19.99,
    img: "/images/cupcake-chocolate.png",
    desc: `Bánh cupcake dễ thương đã trở thành một hiện tượng trong giới trẻ Việt hiện nay. Những chiếc bánh cupcake ngon miệng và vô cùng đẹp mắt đã làm bao trái tim yêu ẩm thực rung động. Cupcake có rất nhiều vị phù hợp với mọi lứa tuổi: bánh cupcake socola, bánh cupcake dâu tây sữa chua, bánh cupcake trà xanh… Ta có thể mua cupcake ở bất kì cửa hàng bánh nào. Hay bây giờ có rất nhiều người tự tay làm cupcake tại nhà để làm bánh sinh nhật tặng người thân và bạn bè. Tuy nhiên có những điều thú vị về cupcake mà không phải ai cũng biết. Hãy cùng nhau tìm hiểu nhé!Hoa sinh nhật 2 trong một với cupcake – một chiếc happy birthday cake tuyệt vời để tặng quà sinh nhật cho bạn gái nhỉ? Một chút sáng tạo, cộng với sự giúp đỡ của… bánh quế và kem phủ, bạn đã có ngay cupcake giày cao gót làm quà sinh nhật bạn gái. Con gái không thể chê một món quà sinh nhật tâm lý và tuyệt vời thế này từ bạn trai của mình đâu.
      Chắc hẳn sau những mẫu bánh GATO giới thiệu, bạn đã chọn được một món quà sinh nhật bạn gái, quà tặng sinh nhật gia đình hay bé yêu rồi! Chúc các bạn tìm được một món quà sinh nhật ý nghĩa cho những người quan trọng nhé.Được cái ngắm bánh nở phồng trong lò nướng cũng như ngửi mùi bơ thơm phức lại chẳng cầm lòng được hi hi :P Thế là có hai ổ bánh ra đời trong hai ngày cuối tuần. Trời, nhiều quá ha. Không sao, ăn cùng người thương và bạn bè thân thiết mà, có măm hết cả đâu mà lo, „Eo“ nhỉ! ;) (tự nhủ với cái Eo như thế. Kiểu này lại sắp có cái eo bánh mỳ rồi đây, bởi làm bánh  ngọt thì không thể thiếu trứng và bơ.`,
    ingradients: ["Bột mì", "Sữa", "Kem", "Phô mai"],
    amount: 1,
  },
  {
    id: 2,
    title: "Bánh Chocolate ",
    category: "dessert",
    price: 19.99,
    img: "/images/cupcake-chocolate.png",
    desc: `Bánh cupcake dễ thương đã trở thành một hiện tượng trong giới trẻ Việt hiện nay. Những chiếc bánh cupcake ngon miệng và vô cùng đẹp mắt đã làm bao trái tim yêu ẩm thực rung động. Cupcake có rất nhiều vị phù hợp với mọi lứa tuổi: bánh cupcake socola, bánh cupcake dâu tây sữa chua, bánh cupcake trà xanh… Ta có thể mua cupcake ở bất kì cửa hàng bánh nào. Hay bây giờ có rất nhiều người tự tay làm cupcake tại nhà để làm bánh sinh nhật tặng người thân và bạn bè. Tuy nhiên có những điều thú vị về cupcake mà không phải ai cũng biết. Hãy cùng nhau tìm hiểu nhé!Hoa sinh nhật 2 trong một với cupcake – một chiếc happy birthday cake tuyệt vời để tặng quà sinh nhật cho bạn gái nhỉ? Một chút sáng tạo, cộng với sự giúp đỡ của… bánh quế và kem phủ, bạn đã có ngay cupcake giày cao gót làm quà sinh nhật bạn gái. Con gái không thể chê một món quà sinh nhật tâm lý và tuyệt vời thế này từ bạn trai của mình đâu.
        Chắc hẳn sau những mẫu bánh GATO giới thiệu, bạn đã chọn được một món quà sinh nhật bạn gái, quà tặng sinh nhật gia đình hay bé yêu rồi! Chúc các bạn tìm được một món quà sinh nhật ý nghĩa cho những người quan trọng nhé.Được cái ngắm bánh nở phồng trong lò nướng cũng như ngửi mùi bơ thơm phức lại chẳng cầm lòng được hi hi :P Thế là có hai ổ bánh ra đời trong hai ngày cuối tuần. Trời, nhiều quá ha. Không sao, ăn cùng người thương và bạn bè thân thiết mà, có măm hết cả đâu mà lo, „Eo“ nhỉ! ;) (tự nhủ với cái Eo như thế. Kiểu này lại sắp có cái eo bánh mỳ rồi đây, bởi làm bánh  ngọt thì không thể thiếu trứng và bơ.`,
    ingradients: ["Bột mì", "Sữa", "Kem", "Phô mai"],
    amount: 1,
  },
  
];
function Cart() {
  const { openCart, setOpenCart } = useGlobalContext();
  console.log(cartData)
  if (cartData.length == 0) {
    return (
      <div className={`${openCart ? "modal modal-active" : ""}`}>
        <div
          className={`${
            openCart ? "cart-container cart-open" : "cart-container"
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
          <p className="cart-empty">Không có sản phẩm trong giỏ hàng </p>
          <p className="cart-footer">Tổng cộng :19.99$</p>
        </div>
      </div>
    );
  }
  return (
    <div className={`${openCart ? "modal modal-active" : "modal"}`}>
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
        {cartData.map((item,index)=>{
         return (  <article className="cart-item" key={index} >
            <img
              src="/images/cupcake-chocolate.png"
              className="cart-item-img"
              alt="Bánh Chocolate Cream"
            />
            <div className="cart-item-info">
              <h1 className="cart-item-name">{item.title}</h1>
              <p className="cart-item-price">{item.price}</p>
            </div>
            <div className="cart-item-amount">
              <i className="fas fa-minus cart-icon-amount"></i>
              <p className="cart-item-number">{item.amount}</p>
              <i className="fas fa-plus cart-icon-amount"></i>
            </div>
          </article>)
        })}
       

        <p className="cart-footer">Tổng cộng :19.99$</p>
      </div>
    </div>
  );
}

export default Cart;
