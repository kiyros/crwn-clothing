import { Outlet, Link } from "react-router";
import { Fragment } from "react";
import Logo from "../../assets/crown.svg";
import "./navigation.styles.scss";

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to={"/"}>
          <img src={Logo} className=""></img>
          {/* <svg xmlns={Logo} className="logo"></svg> */}
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to={"/shop"}>
            SHOP
          </Link>
          <Link className="nav-link" to={"/sign-in"}>
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
