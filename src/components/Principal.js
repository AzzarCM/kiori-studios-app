import React from "react";
import logo from "../assets/svg/logo.svg";
import logo_letra from "../assets/img/kiorilogo.png";
import compu from "../assets/img/compu.png";

export const Princpal = () => {
  return (
    <div className="principal__main-fondo">
      <div className="principal__up-container">
        <div>
          <img alt="logo" src={logo} width="220"/>
        </div>
        <div>
          <p className="principal__text-header">
            WEB DEVELOPMENT - MOBILE DEVELOPMENT - DESIGN - MARKETING -
            ADVERTISIGN
          </p>
        </div>
      </div>
      <div className="principal__down-container">
        <div className="principal__texts">
          <p className="principal__main-title">We are updating</p>
          <p className="principal__paragraph">
            Today is a great day to update, <br />
            we evolve with you to always <br />
            offer <span>the best of the best</span>
          </p>
          <a href="https://www.instagram.com/kioristudios/">
            <button className="principal__contact-us">Contact Us</button>
          </a>
        </div>
        <div>
          <img
            alt="compu"
            src={compu}
            className="principal__compu-img-mobile"
          />
        </div>
      </div>
    </div>
  );
};
