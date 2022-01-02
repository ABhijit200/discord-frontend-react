import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { navData, sideData } from "./data";
import * as Fa from "react-icons/fa";
import * as Box from "react-icons/bi";
import Logo from "../../assets/images/home/logo.svg";
import logoBlack from "../../assets/images/home/logo-black.svg";
import "./Navbar.scss";
import "../../global.scss";

const Navbar = () => {
  const [click, setClick] = useState(false);
  return (
    <Fragment>
      <nav className="top_nav">
        <img
          alt="top-logo"
          src={Logo}
          className="top-logo"
          onClick={() => (window.location = "/")}
        ></img>
        <ul className="top_ul">
          {navData.map((item) => {
            return (
              <li key={item.id} className={item.content}>
                <Link to={item.url}>{item.content}</Link>
              </li>
            );
          })}
        </ul>
        <Link to="/" className="open-discord">
          Open Discord
        </Link>
        <Fa.FaBars className="fas fa-bars" onClick={() => setClick(!click)} />
      </nav>
      <aside className={click ? "sideNav triggered" : "sideNav"}>
        <header className="side_header">
          <img src={logoBlack} alt="logo-black"></img>
          <Fa.FaTimes
            className="fas fa-times"
            onClick={() => {
              setClick(!click);
            }}
          />
        </header>
        <hr className="side_hr" />
        <ul className="side_ul">
          {sideData.map((item) => {
            return (
              <li className={item.content} key={item.id}>
                <Link to={item.url}>{item.content}</Link>
              </li>
            );
          })}
        </ul>
        <Download>Download</Download>
      </aside>
    </Fragment>
  );
};

const Download = (props) => {
  return (
    <Link to="/download" className="side_download">
      <Box.BiDownload />
      <span>{props.children}</span>
    </Link>
  );
};

export default Navbar;
