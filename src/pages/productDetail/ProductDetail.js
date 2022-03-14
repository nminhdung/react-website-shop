import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../../context";
import "../../index.css";
import "./productdetail.css";
function ProductDetail() {
  const { data } = useGlobalContext();
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [singleItem, setSingleItem] = useState(null);

  useEffect(() => {
    setLoading(false);
    const item = data.find((item) => item.id == id);
    setSingleItem(item);
  }, [id]);

  if (loading) {
    return <div className="loading">loading</div>;
  }
  if (singleItem) {
    const { img, title, price, desc, ingradients, amount } = singleItem;
    return (
      <article className="grid wide">
        <div className="row product-detail">
          <div className="col l-4 m-4 c-3">
            <img src={img} className="product-detail-img" alt={title} />
          </div>
          <div className="col l-8 m-8 c-9">
            <div className="product-detail-content">
              <h1 className="product-detail-title">{title}</h1>
              <p className="product-detail-price">{price}$</p>
              <div className="product-detail-shortdecs">
                <p className="shortdecs-title">Mô tả ngắn</p>
                <p className="shortdecs-content">{desc.substring(0,250)}...</p>
              </div>
              <div className="product-detail-amount">
                <p className="product-detail-amount-title">Số lượng</p>
                <i className="fas fa-minus amount-icon"></i>
                <input
                  type="number"
                  value={amount}
                  onChange={(e)=>console.log(e)}
                  className="product-detail-input"
                />
                <i className="fas fa-plus amount-icon"></i>
              </div>
              <div className="product-detail-btn">
                <a className="btn-addcart">Thêm vào giỏ hàng</a>
                <a className="btn-addcart">Mua ngay</a>
              </div>
            </div>
          </div>
        </div>
        <div className="row product-description">
          <div className="col l-12 m-12 c-12">
            <p className="product-description-title">Mô tả</p>
            <div className="product-description-content">
              <div className="content-title">{title}</div>
              <p className="full-description">{desc}</p>
            </div>
          </div>
        </div>
      </article>
    );
  } else {
    return (
      <>
        <div>Nothing product</div>
      </>
    );
  }
}

export default ProductDetail;
