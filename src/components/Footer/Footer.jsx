import React from "react";
import { Logo } from "../../assets";


const Footer = () => {
  return (
    <React.Fragment>
      <footer className="footeer">
        <div className="container footer5">
          <section className="  myfooter">
            <div className="logo-part">
              <img className="magee" src={Logo} alt="" />
              <p className="pee">
                Trafalgar provides progressive, and affordable <br />{" "}
                healthcare, accessible on mobile and online <br />
                for everyone
              </p>
              <span>©Trafalgar PTY LTD 2020. All rights reserved</span>
            </div>

            <div className="company">
              <h4 className="down">Company</h4>
              <p>About</p>
              <p>Testimonial</p>
              <p>Find a dolor</p>
              <p>Apps</p>
            </div>

            <div className="region">
              <h4 className="middle">Region</h4>
              <p>Indonesia</p>
              <p>Singapore</p>
              <p>Hongkong</p>
              <p>Canada</p>
            </div>

            <div className="help">
              <h4 className="center">Help</h4>
              <p>Help centre</p>
              <p>Contact support</p>
              <p>Instructions</p>
              <p>How it works</p>
            </div>
          </section>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
