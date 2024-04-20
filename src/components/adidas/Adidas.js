import React, { memo } from "react";
import img from "../../assets/images/main-bg.png";
import "../../sass/adidas.scss";

function Adidas() {
  return (
    <section className="adidas">
      <div className="container">
        <div className="adidas__info">
          <div className="adidas__left">
            <h2 className="adidas__title">Adidas Men Running Sneakers</h2>
            <p className="adidas__text">
              Performance and design. Taken right to the edge.
            </p>
            <button className="adidas__btn">SHOP NOW</button>
          </div>
          <img src={img} alt="img" className="adidas__img" />
        </div>
      </div>
    </section>
  );
}

export default memo(Adidas);
