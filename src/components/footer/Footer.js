import React from "react";
import "./footer.css";
import "../../index.css";

function Footer() {
  return (
    <>
      <section className="footer">
        <div className="grid wide">
          <div className="row">
            <div className="col l-3 m-6 c-6">
              <div className="footer-item">
                <h1 className="footer-item_title">Giới thiệu</h1>
                <ul className="footer-item_list">
                  <li className="footer-item_link-about">
                    <a href="/" className="footer-item-text">
                      Trang chủ
                    </a>
                  </li>
                  <li className="footer-item_link-about">
                    <a href="/" className="footer-item-text">
                      Sản phẩm
                    </a>
                  </li>
                  <li className="footer-item_link-about">
                    <a href="/" className="footer-item-text">
                      Tin tức{" "}
                    </a>
                  </li>
                  <li className="footer-item_link-about">
                    <a href="/" className="footer-item-text">
                      Khuyến mãi
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col l-3 m-6 c-6">
              <div className="footer-item">
                <h1 className="footer-item_title">Chính sách</h1>
                <ul className="footer-item_list">
                  <li className="footer-item_link-about">
                    <i className="fas fa-shipping-fast footer-item_link-icon"></i>
                    <a href="/" className="footer-item-text">
                      Giao hàng miễn phí
                    </a>
                  </li>
                  <li className="footer-item_link-about">
                    <i className="fab fa-cc-paypal footer-item_link-icon"></i>
                    <a href="/" className="footer-item-text">
                      Thanh toán online
                    </a>
                  </li>
                  <li className="footer-item_link-about">
                    <i className="fas fa-ticket-alt footer-item_link-icon"></i>
                    <a href="/" className="footer-item-text">
                      Voucher{" "}
                    </a>
                  </li>
                  <li className="footer-item_link-about">
                    <a href="/" className="footer-item-text">
                      <i className="fas fa-gift footer-item_link-icon"></i>
                      Quà tắng
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col l-3 m-6 c-6">
              <div className="footer-item">
                <h1 className="footer-item_title">Liên hệ</h1>
                <ul className="footer-item_list">
                  <li className="footer-item_link-contact">
                    <i className="fas fa-envelope footer-item_link-icon"></i>
                    <a href="/" className="footer-item-text">
                      nminhdung112@gmail.com
                    </a>
                  </li>
                  <li className="footer-item_link-contact">
                    <i className="fas fa-phone-volume footer-item_link-icon"></i>
                    <a href="/" className="footer-item-text">
                      0909.351.644
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col l-3 m-6 c-6">
              <div className="footer-item">
                <h1 className="footer-item_title">Fanpage</h1>
                <ul className="footer-item_list">
                  <li className="footer-item_link-contact">
                    <i className="fab fa-facebook footer-item_link-icon"></i>
                    <a
                      href="https://www.facebook.com"
                      className="footer-item-text"
                    >
                      Facebook
                    </a>
                  </li>
                  <li className="footer-item_link-contact">
                    <i className="fab fa-instagram footer-item_link-icon"></i>
                    <a
                      href="https://www.Instagram.com"
                      className="footer-item-text"
                    >
                      Instagram
                    </a>
                  </li>
                  <li className="footer-item_link-contact">
                    <i class="fab fa-twitter footer-item_link-icon"></i>
                    <a
                      href="https://www.Twitter.com"
                      className="footer-item-text"
                    >
                      Twitter
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="copyright">
        <i className="fas fa-copyright copyright-icon"></i>
        <p className="copyright-text">
          {new Date().getFullYear().toString()} bản quyền giao diện thuộc Dũng
          Nguyễn. All rights reserved
        </p>
      </div>
    </>
  );
}

export default Footer;
