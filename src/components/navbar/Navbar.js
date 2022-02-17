import React, { useState, useRef, useEffect } from "react";
import "../../index.css";
import "./navbar.css";
import { useGlobalContext } from "../../context";
const logo = "./images/logo.png";
function Navbar() {
  const {openSubmenu,isOpenSubmenu,closeSubmenu,setOpenFormLogin} = useGlobalContext();

  //display submenu 
 

  const displaySubmenu = (e)=>{
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left+tempBtn.right)/2;
    openSubmenu(center)
  }
  const handleSubmenu = (e) => {
    if (!e.target.classList.contains("link-item")) {
      closeSubmenu();
    }
  };
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
      navRight.current.style.height = `${refCartHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
      navRight.current.style.height = "0px";
    }
  }, [showLinks]);
  //end menu mobile
  return (
    <>
      <nav onMouseOver={handleSubmenu}>
        <section className="navbar-center">
          <div className="nav-left">
            <img className="logo" src={logo} alt="logo" />
            <span className="nav-title">
              Fast <br />
              Food
            </span>
            <button
              className="nav-toggle"
              onClick={() => setShowLinks(!showLinks)}
            >
              <i className="fas fa-bars "></i>
            </button>
          </div>
          <div className="links-contaner" ref={linksContainerRef}>
            <ul className="links" ref={linksRef}  >
              <li>
                <a href="/" className="link-item">
                  {" "}
                  Trang chủ
                </a>
              </li>
              <li>
                <a href="/" className="link-item" onMouseOver={(e)=>displaySubmenu(e)}>
                  {" "}
                  Giới Thiệu
                </a>
              </li>
              <li>
                <a href="/" className="link-item" onMouseOver={(e)=>displaySubmenu(e)} > 
                  {" "}
                  Sản phẩm
                 
                </a>
              </li>
              <li>
                <a href="/" className="link-item" onMouseOver={(e)=>displaySubmenu(e)}>
                  {" "}
                  Liên hệ
                </a>
              </li>
              <li>
                <a href="/" className="link-item">
                  {" "}
                  Tin tức
                </a>
              </li>
              <li></li>
            </ul>
          </div>
          <div className="nav-right" ref={navRight}>
            <div className="cart" ref={refCart}>
              <i className="fas fa-shopping-bag cart-icon"></i>
              <div className="amount-container">
                <p className="total-amount">4</p>
              </div>
            </div>
            <button className="btn-login" onClick={()=>setOpenFormLogin(true)}>Đăng Nhập</button>
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