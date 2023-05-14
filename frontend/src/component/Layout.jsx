import React from "react";
import { Link } from "react-router-dom";

export const Layout = ({ children }) => {
  
  const logout =()=>{
    localStorage.clear();
  }

  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary  bg-primary"
        data-bs-theme="blue"
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <h5>SKYGOAL</h5>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          {localStorage.getItem("token") ? (
            <div className="collapse navbar-collapse" id="navbarSupportedContent"
            onClick={logout}>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
                
                <h5>{localStorage.getItem("user")}</h5>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/login"
                >
                  logout
                </Link>
              </li>
              
              
            </ul>
          </div>
          ) : (
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/login"
                 
                >
                  login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/register">
                  Register
                </Link>
              </li>
            </ul>
          </div>
          )}

          
        </div>
      </nav>
      <main>{children}</main>
    </>
  );
};
