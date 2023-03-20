import React from "react";
import "./register.css";
function Register({ typeForm, setTypeForm, setOpenFormLogin }) {
  const exitForm = () => {
    setTypeForm({type:'login'});
    setOpenFormLogin(false);
  };
  return (
    <form className="form">
      <div className="form-header">
        <span className="form-title">Đăng Ký</span>
        <i className="fas fa-times form-icon" onClick={exitForm}></i>
      </div>
      <div className="form-group">
        <label htmlFor="username" className="form-label">
        <i className="fas fa-user icon-auth"></i>
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
        <label htmlFor="Email" className="form-label">
        <i className="fas fa-envelope icon-auth"></i>
          Email
        </label>
        <input
          type="text"
          className="login-input"
          id="Email"
          placeholder="Enter your Email"
        />
      </div>
      <div className="form-group">
        <label htmlFor="password" className="form-label">
        <i className="fas fa-key icon-auth"></i>
          Password
        </label>
        <input
          type="text"
          className="login-input"
          id="password"
          placeholder="Enter your password"
        />
      </div>

      <div className="form-group">
        <label htmlFor="confirmPassword" className="form-label">
        <i className="fas fa-check-circle icon-auth"></i>
          Confirm Password
        </label>
        <input
          type="text"
          className="login-input"
          id="confirmPassword"
          placeholder="Enter your password"
        />
      </div>

      <div className="form-group form-checkbox">
      
        <input
          type="checkbox"
          className="login-input"
          id="checkConfirm"
          placeholder="Enter your password"
        />
          <label htmlFor="checkConfirm" className="form-label lblCheckbox">
           Đồng ý tất cả điều khoản của chúng tôi
        </label>
      </div>
      <div className="form-btn">
        <button className="form-btn-register">Đăng Ký</button>
        <button
          className="form-register-btn-login"
          onClick={() => setTypeForm({type:'login'})}
        >
          Đăng Nhập
        </button>
      </div>
    </form>
  );
}

export default Register;
