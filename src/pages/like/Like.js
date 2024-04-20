import React, { memo } from "react";
import Adidas from "../../components/adidas/Adidas";
import { MdArrowDropDown } from "react-icons/md";
import menu1 from "../../assets/images/menu-1.png";
import menu2 from "../../assets/images/menu-2.png";
import { NavLink } from "react-router-dom";
import "../../sass/like.scss";
import { useSelector } from "react-redux";

function Like() {
  let allLikes = useSelector((state) => state.like.value);
  console.log(allLikes);
  return (
    <section className="like">
      <div className="like__start">
        <NavLink className="like__start__link active" to={"/"}>
          Home
        </NavLink>
        <NavLink className="like__start__link" to={"/"}>
          HotIdeal
        </NavLink>
      </div>
      <div className="container">
        <div className="like__info">
          <div className="like__left">
            <h2 className="like__left__title">Hot Deals</h2>
            <div className="like__left__exam">
              <h3 className="like__left__h3">Nike</h3>
              <p className="like__left__text">2</p>
            </div>
            <div className="like__left__exam">
              <h3 className="like__left__h3">Airmax</h3>
              <p className="like__left__text">48</p>
            </div>
            <div className="like__left__exam">
              <h3 className="like__left__h3">Nike</h3>
              <p className="like__left__text">14</p>
            </div>
            <div className="like__left__exam">
              <h3 className="like__left__h3">Adidas</h3>
              <p className="like__left__text">15</p>
            </div>
            <div className="like__left__exam">
              <h3 className="like__left__h3">Vans</h3>
              <p className="like__left__text">23</p>
            </div>
            <div className="like__left__exam">
              <h3 className="like__left__h3">All Stars</h3>
              <p className="like__left__text">1</p>
            </div>
            <div className="like__left__exam like__left__btm">
              <h3 className="like__left__h3">Adidas</h3>
              <p className="like__left__text">95</p>
            </div>
            <h2 className="like__left__title">PRICES</h2>
            <div className="like__left__ranger">
              <h2 className="like__left__h3">Ranger: </h2>
              <h2 className="like__left__h3">$13.99 - $25.99</h2>
            </div>
            <input type="range" className="like__left__input" />
            <h2 className="like__left__title">COLOR</h2>
            <div className="like__left__colors">
              <div className="like__left__blue"></div>
              <div className="like__left__red"></div>
              <div className="like__left__black"></div>
              <div className="like__left__yellow"></div>
              <div className="like__left__pink"></div>
            </div>
            <h2 className="like__left__title">BRAND</h2>
            <div className="like__left__exam">
              <h3 className="like__left__h3">Nike</h3>
              <p className="like__left__text">99</p>
            </div>
            <div className="like__left__exam">
              <h3 className="like__left__h3">Nike</h3>
              <p className="like__left__text">99</p>
            </div>
            <div className="like__left__exam">
              <h3 className="like__left__h3">Adidas</h3>
              <p className="like__left__text">99</p>
            </div>
            <div className="like__left__exam">
              <h3 className="like__left__h3">Siemens</h3>
              <p className="like__left__text">99</p>
            </div>
            <h4 className="like__left__h4">MORE</h4>
          </div>
          <div className="like__right">
            <Adidas />
            <div className="like__right__top">
              <div className="like__right__info">
                <h3 className="like__right__title">13 Items</h3>
                <h3 className="like__right__title">Sort By</h3>
                <h3 className="like__right__title">Name</h3>
                <MdArrowDropDown />
                <h3 className="like__right__title">Show</h3>
                <h3 className="like__right__title">12</h3>
                <MdArrowDropDown />
              </div>
              <div className="like__right__exam">
                <img src={menu1} alt="menu" className="like__right__image" />
                <img src={menu2} alt="menu" className="like__right__image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(Like);
