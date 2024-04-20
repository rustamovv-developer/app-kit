import React, { memo } from "react";
import Header from "../../components/header/Header";
import Brends from "../../components/brends/Brends";
import Products from "../../components/products/Products";
import Adidas from "../../components/adidas/Adidas";

function Home() {
  return (
    <>
      <Header />
      <Brends />
      <Products />
      <Adidas />
    </>
  );
}

export default memo(Home);
