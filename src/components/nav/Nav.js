import React, { memo } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "../../sass/nav.scss";

function Nav() {
  return (
    <nav className="nav">
      <div className="container">
        <div className="nav__info">
          <Link to={"/"}>
            <img src={logo} alt="nav__img" className="nav__img" />
          </Link>
          <ul className="nav__list">
            <li className="nav__item">
              <NavLink className="nav__link" to={"/"}>
                HOME
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink className="nav__link" to={"/"}>
                BAGS
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink className="nav__link" to={"/"}>
                SNEAKERS
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink className="nav__link" to={"/"}>
                BELT
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink className="nav__link" to={"/"}>
                CONTACT
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default memo(Nav);
