import { React, useState } from "react";
import "./navbar.css";
import logo from "../../assets/logo.svg";
import {RiCloseLine, RiMenu3Line } from "react-icons/ri";

const Menu = () => (
  <>
    <p>
      <a href="#home">Home </a>
    </p>
    <p>
      <a href="#whatgpt">What is GPT </a>
    </p>
    <p>
      <a href="#possibility">Open AI</a>
    </p>
    <p>
      <a href="#feature">Case Study </a>
    </p>
    <p>
      <a href="#blog">Library </a>
    </p>
  </>
);
const Navbar = () => {
  const [toggleMenue, setToggleMenue] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-link">
        <div className="gpt3__navbar-link-logo ">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt3__navbar-link_container">
          <Menu />
        </div>
      </div>
      <div className="gpt3__navbar-singup"> 
        <p id="sigin">SignIn</p>
        <button type="button"> SignUp</button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenue ? (
          <RiCloseLine
            size={27}
            color="#fff"
            onClick={() => {
              setToggleMenue(false);
            }}
          />
        ) : (
          <RiMenu3Line
            size={27}
            color="#fff"
            onClick={() => {
              setToggleMenue(true);
            }}
          />
        )}
        {toggleMenue && (
          <div className="gpt3__navbar-menu_container scale-up-center ">
            <div className="gpt3__navbar_container-link">
              <Menu />
              <div className="gpt3__navbar-menu_container-links-sing">
                <p>SignIn</p>
                <button type="button"> SignUp</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
