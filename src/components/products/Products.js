import React, { memo } from "react";
import { NavLink } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { Link } from "react-router-dom";
import img1 from "../../assets/images/like.png";
import img2 from "../../assets/images/cart.png";
import "../../sass/products.scss";
import { useDispatch } from "react-redux";
import { addToLike } from "../../context/likeSlice";

function Products() {
  let dispatch = useDispatch();
  const { data, loading } = useFetch("https://dummyjson.com/products");

  const handleLike = (e) => {
    e.preventDefault();
    dispatch(addToLike(products));
  };

  let products = data?.data?.products?.map((el) => (
    <div key={el.id} className="products__card">
      <h3 className="products__h3">{el.id}</h3>
      <Link to={""}>
        <img
          src={el.images[0]}
          alt="products__image"
          className="products__img"
        />
      </Link>
      <h2 className="products__title">{el.title}</h2>
      <h4 className="products__rating">{el.rating}</h4>
      <p className="products__text">{el.description}</p>
      <div className="products__hover">
        <Link
          to={`/like/${el.id}`}
          onClick={() => {
            dispatch(addToLike(el));
          }}
        >
          <img src={img1} alt="img" className="products__like" />
        </Link>
        <img src={img2} alt="img" className="products__like" />
      </div>
    </div>
  ));
  return (
    <section className="products">
      <div className="products__top">
        <h2 className="products__top__title">BEST SELLER</h2>
        <ul className="products__list">
          <li className="products__item">
            <NavLink className="products__link" to={"/"}>
              All
            </NavLink>
          </li>
          <li className="products__item">
            <NavLink className="products__link">Bags </NavLink>
          </li>
          <li className="products__item">
            <NavLink className="products__link">Sneakers</NavLink>
          </li>
          <li className="products__item">
            <NavLink className="products__link">Belt</NavLink>
          </li>
          <li className="products__item">
            <NavLink className="products__link">Sunglasses</NavLink>
          </li>
        </ul>
      </div>
      <div className="container">
        <div className="products__info">{products}</div>
      </div>
    </section>
  );
}

export default memo(Products);
