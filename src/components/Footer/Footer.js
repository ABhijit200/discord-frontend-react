import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/home/logo.svg";
import Flag from "../../assets/images/home/flag.png";
import { d1, d2, d3, d4 } from "./data";
import * as Fa from "react-icons/fa";
import "./Footer.scss";
import "../../global.scss";

const Footer = () => {
  return (
    <footer>
      <div className="wrapper">
        <div className="column_one">
          <h3 className="c1_header header">Your place to talk</h3>
          <span className="flag_and_ul">
            <span className="flag_and_text">
              <img src={Flag} alt="flag" className="footer_flag"></img>
              <span className="language">English, USA</span>
            </span>
            <ul className="social_ul">
              <li>
                <Fa.FaTwitter />
              </li>
              <li>
                <Fa.FaInstagram />
              </li>
              <li>
                <Fa.FaFacebook />
              </li>
              <li>
                <Fa.FaYoutube />
              </li>
            </ul>
          </span>
        </div>
        <div className="column_two">
          <ul className="c2_ul">
            {d1.map((item) => {
              return (
                <li className={item.type} key={Math.random()}>
                  <Link to={item.url}>{item.content}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="column_three">
          <ul className="c2_ul">
            {d2.map((item) => {
              return (
                <li className={item.type} key={Math.random()}>
                  <Link to={item.url}>{item.content}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="column_four">
          <ul className="c2_ul">
            {d3.map((item) => {
              return (
                <li className={item.type} key={Math.random()}>
                  <Link to={item.url}>{item.content}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="column_five">
          <ul className="c2_ul">
            {d4.map((item) => {
              return (
                <li className={item.type} key={Math.random()}>
                  <Link to={item.url}>{item.content}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <hr className="footer_hr"></hr>
      <nav className="footer_nav">
        <img src={Logo} alt="footer_logo" className="footer_logo"></img>
        <Link to="/download" className="footer_open">
          Open Discord
        </Link>
      </nav>
    </footer>
  );
};

export default Footer;
