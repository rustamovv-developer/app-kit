import React, { memo } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import img1 from "../../assets/images/footer-1.png";
import img2 from "../../assets/images/footer-2.png";
import endImg from "../../assets/images/footer-3.png";
import "../../sass/footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__info">
          <div className="footer__top">
            <div className="footer__card">
              <Link to={"/"}>
                <img src={logo} alt="logo" className="footer__img" />
                <p className="footer__text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever.Since the 1500s, when an unknown
                  printer.
                </p>
              </Link>
            </div>
            <div className="footer__card">
              <h2 className="footer__title">Follow Us</h2>
              <p className="footer__text">
                Since the 1500s, when an unknown printer took a galley of type
                and scrambled.
              </p>
              <div className="footer__images">
                <img src={img1} alt="footer__img" className="footer__logo" />
                <img src={img2} alt="footer__img" className="footer__logo" />
              </div>
            </div>
            <div className="footer__card">
              <h2 className="footer__title">Contact Us</h2>
              <p className="footer__text">
                E-Comm , 4578 Marmora Road, Glasgow D04 89GR
              </p>
            </div>
          </div>
          <div className="footer__bottom">
            <div className="footer__card">
              <h2 className="footer__title">Infomation</h2>
              <p className="footer__bottom__text">
                About Us <br /> Infomation <br /> Privacy Policy <br /> Terms &
                Conditions
              </p>
            </div>
            <div className="footer__card">
              <h2 className="footer__title">Service</h2>
              <p className="footer__bottom__text">
                About Us <br /> Infomation <br /> Privacy Policy <br /> Terms &
                Conditions
              </p>
            </div>
            <div className="footer__card">
              <h2 className="footer__title">My Account</h2>
              <p className="footer__bottom__text">
                About Us <br /> Infomation <br /> Privacy Policy <br /> Terms &
                Conditions
              </p>
            </div>
            <div className="footer__card">
              <h2 className="footer__title">Our Offers</h2>
              <p className="footer__bottom__text">
                About Us <br /> Infomation <br /> Privacy Policy <br /> Terms &
                Conditions
              </p>
            </div>
          </div>
          <div className="footer__line"></div>
          <div className="footer__end">
            <p className="footer__end__text">
              © 2018 Ecommerce theme by www.bisenbaev.com
            </p>
            <img src={endImg} alt="endImg" className="footer__end__img" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default memo(Footer);
