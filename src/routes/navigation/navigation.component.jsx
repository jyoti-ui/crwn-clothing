import React, { Fragment } from "react";
import "./navigation.styles.scss";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation-container">
        <Link className="logo-container" to="/">
          <CrwnLogo/>
        </Link>
        <div className="nav-link-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/signin">
            SIGN IN
          </Link>
          <Link className="nav-link" to="/shop">
            Payment
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
