import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import * as Bi from "react-icons/bi";
import DownloadBanner from "../../assets/images/download/banner.svg";
import iOS from "../../assets/images/download/ios.svg";
import Android from "../../assets/images/download/android.svg";
import Linux from "../../assets/images/download/linux.svg";
import Mac from "../../assets/images/download/mac.svg";
import "./Download.scss";
import "../../global.scss";

const getOS = () => {
  let userAgent = window.navigator.userAgent,
    platform = window.navigator.platform,
    macosPlatforms = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"],
    windowsPlatforms = ["Win32", "Win64", "Windows", "WinCE"],
    iosPlatforms = ["iPhone", "iPad", "iPod"],
    os = null;
  if (macosPlatforms.indexOf(platform) !== -1) {
    os = "Mac OS";
  } else if (iosPlatforms.indexOf(platform) !== -1) {
    os = "iOS";
  } else if (windowsPlatforms.indexOf(platform) !== -1) {
    os = "Windows";
  } else if (/Android/.test(userAgent)) {
    os = "Android";
  } else if (!os && /Linux/.test(platform)) {
    os = "Linux";
  }
  return os;
};

const Download = () => {
  return (
    <Fragment>
      <section className="download_banner">
        <div className="download_banner_main">
          <h3 className="download_header">Get Discord for any device</h3>
          <p className="download_para">
            An adventure awaits. Hang out with your friends on our desktop app
            and keep the conversation going on mobile.
          </p>
          <div className="download_button_container">
            <Link to="/error-page" className="download_cta">
              <Bi.BiDownload className="cta_download" />
              <span>Download for {getOS()}</span>
            </Link>
          </div>
        </div>
        <img
          src={DownloadBanner}
          alt="download-banner"
          className="download_banner_image"
        ></img>
      </section>
      <div className="download_grid">
        <div className="d1">
          <DownloadCard header="iOS" image={iOS} />
          <DownloadCard header="Linux" image={Linux} />
          <div className="experimental download_card">
            <h3 className="experimental_header download_card_header">
              Feeling Experimental ?
            </h3>
            <p className="experimental_para">
              Try our Public Test Build and test new features before they
              launch.
            </p>
            <DownloadButton>Download Public Test Build</DownloadButton>
          </div>
        </div>
        <div className="d2">
          <DownloadCard header="Android" image={Android} />
          <DownloadCard header="Mac" image={Mac} />
        </div>
      </div>
    </Fragment>
  );
};

const DownloadCard = (props) => {
  return (
    <Fragment>
      <div className="download_card">
        <h3 className="download_card_header">{props.header}</h3>
        <DownloadButton>Download</DownloadButton>
        <img
          src={props.image}
          alt="download_card_pic"
          className="download_card_image"
        ></img>
      </div>
    </Fragment>
  );
};

const DownloadButton = (props) => {
  return (
    <Link to="/" className="download_card_link">
      {props.children}
    </Link>
  );
};

export default Download;
