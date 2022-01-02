import React, { Fragment, useEffect } from "react";
import Hero from "../../assets/images/home/hero-bg.jpg";
import SectionOneSVG from "../../assets/images/home/section-1.svg";
import SectionTwoSVG from "../../assets/images/home/section-2.svg";
import SectionThreeSVG from "../../assets/images/home/section-3.svg";
import SectionFourSVG from "../../assets/images/home/section-4.svg";
import { Link } from "react-router-dom";
import * as Box from "react-icons/bi";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Home.scss";
import "../../global.scss";

const Home = () => {
  useEffect(() => {
    AOS.init({
      easing: "ease-in",
      offset: 120,
      duration: 1000,
    });
  }, []);
  return (
    <Fragment>
      <section className="banner-home">
        <img src={Hero} className="hero-image" alt="hero-images"></img>
        <div className="banner_text">
          <h3 className="banner_header">Your Place to Talk</h3>
          <p className="banner_info">
            Whether you’re part of a school club, gaming group, worldwide art
            community, or just a handful of friends that want to spend time
            together, Discord makes it easy to talk every day and hang out more
            often.
          </p>
          <div className="download_container">
            <Download>Download Discord</Download>
            <Download>Open Discord in Browser</Download>
          </div>
        </div>
      </section>
      <section className="grid-sections">
        <Gridcard
          image={SectionOneSVG}
          header="An invite-only place with plenty of room to talk"
        >
          Discord servers are organised into topic-based channels where you can
          collaborate, share and just talk about without clogging up a group
          chat.
        </Gridcard>
        <Gridcard image={SectionTwoSVG} header="Where hanging out is easy">
          Grab a seat in a voice channel when you’re free. Friends in your
          server can see you’re around and instantly pop in to talk without
          having to call.
        </Gridcard>
        <Gridcard image={SectionThreeSVG} header="From a few to a fandom">
          Get a community of any size running with moderation tools and custom
          member access. Give members special powers, set up private channels,
          and more.
        </Gridcard>
        <Gridcard
          image={SectionFourSVG}
          header="Reliable tech for staying close"
        >
          Low-latency voice and video feels like you’re in the same room. Wave
          hello over video, watch friends stream their games, or gather up and
          have a drawing session with screen share.
        </Gridcard>
      </section>
    </Fragment>
  );
};

const Download = (props) => {
  return (
    <Link to="/download" className="side_download home_download">
      <Box.BiDownload />
      <span>{props.children}</span>
    </Link>
  );
};

const Gridcard = (props) => {
  return (
    <div className="card" data-aos="fade-up">
      <img src={props.image} alt="card" className="card-image"></img>
      <div className="card-span">
        <h3 className="card-header">{props.header}</h3>
        <p className="card-para">{props.children}</p>
      </div>
    </div>
  );
};

export default Home;
