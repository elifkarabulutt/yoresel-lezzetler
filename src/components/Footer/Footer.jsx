import React from "react";

import "../Footer/footer.css";

import  AnasayfaIcon  from "../../assets/images/anasayfa_icon.jpeg";
import {PiYoutubeLogo} from "react-icons/pi";
import {PiTwitterLogo} from "react-icons/pi";
import {PiBrowsersDuotone} from "react-icons/pi";
import {PiPinterestLogo} from "react-icons/pi";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      {/* ----- LOGO START-----*/}
      <div className="logo">
      <img src={AnasayfaIcon} alt="logo"/>
        <div>
          <h1>Yöresel Lezzetler</h1>
        </div>
      </div>
      {/* ----- SOCIAL END-----*/}
      <div className="footer__info">
        <div>
          <h5>Sosyal medya:</h5>
        </div>
        <div className="social fs-2">
          <Link to='#'><span><PiYoutubeLogo/></span></Link>
          <Link to='#'><span><PiTwitterLogo/></span></Link>
          <Link to='#'><span><PiBrowsersDuotone/></span></Link>
          <Link to='#'><span><PiPinterestLogo/></span></Link>
        </div>
      </div>
      {/* ----- SOCIAL START-----*/}
      <div></div>
    </footer>
  );
};

export default Footer;
