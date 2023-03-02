import React, { Fragment, useContext } from "react";
import "./navigation.styles.scss";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

  const navigate = useNavigate();

  const signOutHandler = async () => {
    await signOutUser();
    navigate("/auth");
  };

  return (
    <Fragment>
      <div className="navigation-container">
        <Link className="logo-container" to="/">
          <CrwnLogo />
        </Link>
        <div className="nav-link-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutHandler}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
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
