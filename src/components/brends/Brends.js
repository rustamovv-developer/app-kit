import React, { memo } from "react";
import "../../sass/brends.scss";

function Brends() {
  return (
    <section className="brends">
      <div className="container">
        <div className="brends__info">
          <div className="brends__card">
            <h2 className="brends__title">FS - QUILTED MAXI CROSS BAG</h2>
            <p className="brends__text">
              $534,33 <strong className="brends__strong">24% Off</strong>
            </p>
            <h3 className="brends__h3">$299,43</h3>
          </div>
          <div className="brends__card">
            <h2 className="brends__title">FS - Nike Air Max 270 React...</h2>
            <p className="brends__text">
              $534,33 <strong className="brends__strong">24% Off</strong>
            </p>
            <h3 className="brends__h3">$299,43</h3>
          </div>
          <div className="brends__card">
            <h2 className="brends__title">FS - Nike Air Max 270 React...</h2>
            <p className="brends__text">
              $534,33 <strong className="brends__strong">24% Off</strong>
            </p>
            <h3 className="brends__h3">$299,43</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(Brends);
