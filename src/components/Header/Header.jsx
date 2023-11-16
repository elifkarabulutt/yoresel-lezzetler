import React, { useRef } from "react";

import  AnasayfaIcon  from "../../assets/images/anasayfa_icon.jpeg";
import { CiSearch } from "react-icons/ci";
import { AiOutlineMenu } from "react-icons/ai";

import "./header.css";
import { Link, NavLink } from "react-router-dom";
import { Container, Row } from "reactstrap";

const nav__links = [
  {
    path: "home",
    display: "Ana Sayfa",
  },
  {
    path: "recipes",
    display: "Tarifler",
  },
  {
    path:"citys",
    display:"Şehirler",
  },
  {
    path: "about",
    display: "Hakkımızda",
  },

];

const Header = () => {
  const menuRef = useRef(null);

  const menuToggle = () => menuRef.current.classList.toggle("active__menu");

  return (
    <header className="header">
      <Container className="container">
        <Row>
          <div className="nav__wrapper">
            {/* ----- LOGO START-----*/}
            <div className="logo">
              <Link to="/home">
               <img src={AnasayfaIcon} alt="logo"/>
              </Link>

              <div>
                <Link to="/home">
                  <h1>Yöresel Lezzetler</h1>
                </Link>
              </div>
            </div>
            {/* ----- LOGO END-----*/}

            {/* ----- NAVIGATION START-----*/}
            <div className="navigation" ref={menuRef} onClick={menuToggle}>
              <ul className="menu">
                {nav__links.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? "nav__active" : ""
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            {/* ----- NAVIGATION END-----*/}

            {/* ----- SEARCH START-----*/}
            <div className="search__box">
              <input type="text" placeholder="Yemek tarifi ara" />
              <span>
                <CiSearch className="search__icon fs-5" />
              </span>
            </div>
            {/* ----- SEARCH END-----*/}

            {/* ----- SEARCH START-----*/}
            <div className="mobile__menu">
              <span onClick={menuToggle}>
                <AiOutlineMenu className="fs-4" />
              </span>
            </div>
            {/* ----- SEARCH END-----*/}
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
