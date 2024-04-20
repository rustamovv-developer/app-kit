import React, { memo } from "react";
import "../../sass/header.scss";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__info">
          <h2 className="header__title">Super Flash Sale 50% Off</h2>
        </div>
      </div>
    </header>
  );
}

export default memo(Header);
