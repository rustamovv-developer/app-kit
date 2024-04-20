import React, { memo } from "react";
import { MdArrowDropDown } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";
import { BsCart } from "react-icons/bs";
import { IoMdSearch } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa6";
import "../../sass/adv.scss";
import { Link } from "react-router-dom";

function Adv() {
  return (
    <section className="adv">
      <div className="container">
        <div className="adv__info">
          <div className="adv__left">
            <div className="adv__left__card">
              <p className="adv__left__text">EN</p>
              <MdArrowDropDown className="adv__left__icon" />
            </div>
            <div className="adv__left__card">
              <p className="adv__left__text">USD</p>
              <MdArrowDropDown className="adv__left__icon" />
            </div>
          </div>
          <div className="adv__right">
            <div className="adv__right__card">
              <FaRegUser className="adv__right__icon" />
              <p className="adv__right__text">My profile</p>
            </div>
            <div className="adv__right__card">
              <BsCart
                style={{ fontSize: "18px" }}
                className="adv__right__icon"
              />
              <h3 className="adv__right__count">2</h3>
            </div>
            <Link to="/like" className="adv__right__card">
              <FaRegHeart
                style={{ fontSize: "18px" }}
                className="adv__right__icon"
              />
              <h3 className="adv__right__count">2</h3>
            </Link>
            <div className="adv__right__card">
              <p className="adv__right__text"> Items</p>
            </div>
            <div className="adv__right__card">
              <h4 className="adv__right__h4">$0.00</h4>
              <IoMdSearch
                style={{ fontSize: "22px" }}
                className="adv__right__icon"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(Adv);
