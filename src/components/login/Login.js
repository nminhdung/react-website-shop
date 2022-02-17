import React, { useState } from "react";
import "./login.css";
import "../../index.css";
import Register from "../register/Register";
import { useGlobalContext } from "../../context";
function Login() {
  const { openFormLogin, setOpenFormLogin } = useGlobalContext();
  const [typeForm, setTypeForm] = useState({ type: 'login' ,});
  return (
    <div
      className={`${openFormLogin ? "modal-overlay show" : "modal-overlay"}`}
    >
      {typeForm.type === "register" && (
        <Register
         typeForm={typeForm}
         setTypeForm={setTypeForm}
         setOpenFormLogin={setOpenFormLogin}
        />
      )}
      {typeForm.type === "login" && (
        <form className="form">
          <div className="form-header">
            <span className="form-title">Đăng Nhập</span>
            <i
              className="fas fa-times form-icon"
              onClick={() => setOpenFormLogin(false)}
            ></i>
          </div>
          <div className="form-group">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="login-input"
              id="username"
              placeholder="Enter your username"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="text"
              className="login-input"
              id="password"
              placeholder="Enter your password"
            />
          </div>

          <div className="form-btn">
            <button
              className="form-btn-login"
              
            >
              Đăng Nhập
            </button>
          </div>
          <p className="title-register">
            Bạn có tài khoản chưa ?{" "}
            <span
              className="text-register"
              onClick={() => setTypeForm({type:'register'})}
            >
              Đăng ký
            </span>{" "}
          </p>
          <div className="login-link">
            <div className="link-facebook">
              <i className="fab fa-facebook-square login-link-fb"></i>
              <span className="link-text">Đăng nhập bằng Facebook</span>
            </div>

            <div className="link-google">
              <i className="fab fa-google login-link-gg"></i>
              <span className="link-text">Đăng nhập bằng google</span>
            </div>
          </div>
        </form>
      )}
     
    </div>
  );
}

export default Login;
