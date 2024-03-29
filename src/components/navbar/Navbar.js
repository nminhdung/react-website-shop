import React, { useState, useRef, useEffect } from "react";
import { navLinks } from "../../data";
import "./navbar.css";
import { useGlobalContext } from "../../context";
import { Link } from "react-router-dom";
const logo = "/images/logo.png";
function Navbar() {
  const { setOpenFormLogin, setOpenCart, isLogin, setIsLogin, amount } =
    useGlobalContext();

  //menu mobile
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const refCart = useRef(null);
  const navRight = useRef(null);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    const refCartHeight = refCart.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px `;
      navRight.current.style.height = `${refCartHeight+10}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
      navRight.current.style.height = "0px";
    }
  }, [showLinks]);
  //end menu mobile
  return (
    <>
      <nav>
        <section className="navbar-center">
          <div className="nav-left">
            <Link to="/">
              <img className="logo" src={logo} alt="logo" />
            </Link>
            <Link to="/" className="nav-title">
              Fast <br />
              Food
            </Link>
            <button
              className="nav-toggle"
              onClick={() => setShowLinks(!showLinks)}
            >
              <i className="fas fa-bars "></i>
            </button>
          </div>
          <div className="links-contaner" ref={linksContainerRef}>
            <ul className="links" ref={linksRef}>
              {navLinks.map((item) => {
                return (
                  <li key={item.id}>
                    <Link to={item.path} className="link-item">
                      {" "}
                      {item.text}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="nav-right" ref={navRight}>
            <div
              className="cart"
              ref={refCart}
              onClick={() => setOpenCart(true)}
            >
              <i className="fas fa-shopping-cart cart-icon"></i>
              <div className="amount-container">
                <p className="total-amount">{amount}</p>
              </div>
            </div>
            {(isLogin && (
              <div className="user-container">
                <img className="user-login-img" src="/images/logo1.png" />
             
                <button className="btn-login">Đăng xuất</button>
              </div>
            )) || (
              <button
                className="btn-login"
                onClick={() => setOpenFormLogin(true)}
              >
                Đăng Nhập
              </button>
            )}
          </div>
          {/* <div className="social-links">
            <ul className="list-social">
              <li>
                <a href="/" className="social-item">
                  <i className="fab fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="/" className="social-item">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="/" className="social-item">
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="/" className="social-item">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div> */}
        </section>
      </nav>
    </>
  );
}

export default Navbar;
