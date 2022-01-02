import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import errorImage from "../../assets/images/404.png";
import "./Error.scss";
import "../../global.scss";

const Error = () => {
  return (
    <Fragment>
      <div className="error_banner">
        <div className="error_d1">
          <h1 className="error_header">404</h1>
          <h3 className="info_header">WIZARDS BEHIND CURTAINS ?</h3>
          <p className="error_info">
            That's so 1939. Discord is secretly powered by quantum robot
            hamsters. Technology is wild, isn't it? Anyway, you look lost. Here
            is your way back home
            <Link to="/" className="back_home">
              Back Home
            </Link>
          </p>
        </div>
        <div className="error_d2">
          <img src={errorImage} alt="error-pic" className="error_image"></img>
        </div>
      </div>
    </Fragment>
  );
};

export default Error;
