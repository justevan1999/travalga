import React from "react";
import './style.css'

import {HeroImg, Cardimage, Jarimage, Consultimage, Checkbookimage, Emergeimage, Trackingimage, Travimage, Travimage2, Maskimage, Labimage, Injectimage, Sparimage, Arrowimage} from "../assets"
import 'boxicons';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Home = () => {
  return (
    <>
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-1"></div>
        <div className="col-sm-12 col-md-12 col-lg-10">
          <div className="row coll">
            <div className="col-sm-12 col-md-12 col-lg-6">
              <h4 id="head1">
                Virtual healthcare <br /> for you
              </h4>
              <p id="wahala">
                Trafalgar provides progressive, and affordable <br />{" "}
                healthcare, accessible on mobile and online <br /> for everyone
              </p>
              <button id="consult">Consult today</button>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6">
              <img src={HeroImg} alt="" />
            </div>
          </div>

          <div className="top3">
            <h5>Our Services</h5>
            <p>
              We provide to you the best choiches for you. Adjust it to your
              health needs and make sure your undergo treatment <br /> with our
              highly qualified doctors you can consult with us which type of
              service is suitable for your health
            </p>
          </div>

          <div className="top4 " style={{ marginTop: "3rem" }}>
            <div className="row myzone">
              <div className="col-sm-12 col-md-12 col-lg-4">
                {/* 1st box */}
                <div className="box-1">
                  <img
                    src={Cardimage}
                    alt=""
                    className="w-25"
                    style={{ marginBottom: "30px" }}
                  />
                  <h5>Search doctor</h5>
                  <p>
                    Choose your doctor from thousands <br /> of specialist,
                    general, and trusted <br /> hospitals
                  </p>
                </div>
              </div>

              <div className="col-sm-12 col-md-12 col-lg-4">
                {/* 2nd box */}
                <div className="box-1">
                  <img
                    src={Jarimage}
                    alt=""
                    className="w-25"
                    style={{ marginBottom: "30px" }}
                  />
                  <h5>Online pharmacy</h5>
                  <p>
                    Buy your medicines with our <br /> mobile application with a
                    simple <br /> delivery system
                  </p>
                </div>
              </div>

              <div className="col-sm-12 col-md-12 col-lg-4">
                {/* 3rd box */}
                <div className="box-1">
                  <img
                    src={Consultimage}
                    alt=""
                    className="w-25"
                    style={{ marginBottom: "30px" }}
                  />
                  <h5>Search doctor</h5>
                  <p>
                    Free consultation with our trusted <br /> doctors and get
                    the best <br /> recomendations
                  </p>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-4">
                {/* 4th box */}
                <div className="box-1">
                  <img
                    src={Checkbookimage}
                    alt=""
                    className="w-25"
                    style={{ marginBottom: "30px" }}
                  />
                  <h5>Search doctor</h5>
                  <p>
                    Free consultation with our trusted <br /> doctors and get
                    the best <br /> recomendations
                  </p>
                </div>
              </div>

              {/* 5th box */}
              <div className="col-sm-12 col-md-12 col-lg-4">
                <div className="box-1">
                  <img
                    src={Emergeimage}
                    alt=""
                    className="w-25"
                    style={{ marginBottom: "30px" }}
                  />
                  <h5>Search doctor</h5>
                  <p>
                    You can get 24/7 urgent care for <br /> yourself or your
                    children and your <br /> lovely family
                  </p>
                </div>
              </div>

              {/* 6th box */}
              <div className="col-sm-12 col-md-12 col-lg-4">
                <div className="box-1">
                  <img
                    src={Trackingimage}
                    alt=""
                    className="w-25"
                    style={{ marginBottom: "30px" }}
                  />
                  <h5>Search doctor</h5>
                  <p>
                    Track and save your medical history <br /> and health data{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className="top-beg">
              <button id="their">Learn more</button>
            </div>
          </div>

          <div className="other">
            <div className="row ">
              <div className="col-sm-12 col-md-12 col-lg-6">
                <img src={Travimage} alt="" />
              </div>

              <div className="col-sm-12 col-md-12 col-lg-6">
                <h4>
                  Leading healthcare <br /> providers
                </h4>
                <p>
                  Trafalgar provides progressive, and affordable <br />{" "}
                  healthcare, accessible on mobile and online for <br />{" "}
                  everyone. To us, it’s not just work. We take pride <br /> in
                  the solutions we deliver
                </p>
                <button>Learn more</button>
              </div>
            </div>
          </div>

          <div className="other4">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-6 mt-5">
                <h4 id="load">Download our mobile apps</h4>
                <p>
                  Our dedicated patient engagement app and <br /> web portal
                  allow you to access information <br /> instantaneously (no
                  tedeous form, long calls, <br />
                  or administrative hassle) and securely
                </p>
                <button className="Download">Download</button>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-6">
                <img src={Travimage2} alt="" />
              </div>
            </div>
          </div>

          <div className="big mb-5 py-4">
            <Carousel
              showThumbs={false}
              autoPlay
              infiniteLoop
              interval={5000}
              showArrows={false}
              showStatus={false}
            >
              <div className="py-4">
                <h4>What our customer are saying</h4>
                <div className="check">
                  <div className="main">
                    <div className="man-image">
                      <div className="man">
                        <img
                          src={Maskimage}
                          alt=""
                          style={{ width: "100px" }}
                        />
                      </div>
                      <div className="man-text">
                        <h6>Edward Newgate</h6>
                        <p>Founder Circle</p>
                      </div>
                    </div>
                  </div>

                  <div className="man-info">
                    <p className="beeds">
                      “Our dedicated patient engagement app and <br />
                      web portal allow you to access information <br />{" "}
                      instantaneously (no tedeous form, long calls, <br />
                      or administrative hassle) and securely”
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <h4>What our customer are saying</h4>
                <div className="check">
                  <div className="main">
                    <div className="man-image">
                      <div className="man">
                        <img
                          src={Maskimage}
                          alt=""
                          style={{ width: "100px" }}
                        />
                      </div>
                      <div className="man-text">
                        <h6>Edward Newgate</h6>
                        <p>Founder Circle</p>
                      </div>
                    </div>
                  </div>

                  <div className="man-info">
                    <p className="beeds">
                      “Our dedicated patient engagement app and <br />
                      web portal allow you to access information <br />{" "}
                      instantaneously (no tedeous form, long calls, <br />
                      or administrative hassle) and securely”
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <h4>What our customer are saying</h4>
                <div className="check">
                  <div className="main">
                    <div className="man-image">
                      <div className="man">
                        <img
                          src={Maskimage}
                          alt=""
                          style={{ width: "100px" }}
                        />
                      </div>
                      <div className="man-text">
                        <h6>Edward Newgate</h6>
                        <p>Founder Circle</p>
                      </div>
                    </div>
                  </div>

                  <div className="man-info">
                    <p className="beeds">
                      “Our dedicated patient engagement app and <br />
                      web portal allow you to access information <br />{" "}
                      instantaneously (no tedeous form, long calls, <br />
                      or administrative hassle) and securely”
                    </p>
                  </div>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
        <div className="lab">
          <div className="lab-info">
            <h4 className="Article">Check out our latest article</h4>
            <div className="lab-cards">
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-4">
                  <div
                    className="card lab-card border-0"
                    style={{ width: "18rem" }}
                  >
                    <img
                      className="card-img-top card-mage"
                      src={Injectimage}
                      alt=""
                    ></img>
                    <div className="card-body">
                      <h5 className="card-title">
                        Disease detection, check up in the laboratory
                      </h5>
                      <p className="card-text">
                        In this case, the role of the health laboratory is very
                        important to do a disease detection...
                      </p>
                      <button className="none">Learn more <img className="arrow1" src={Arrowimage} alt="" /> </button>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-4">
                  <div
                    className="card lab-card border-0"
                    style={{ width: "18rem" }}
                  >
                    <img
                      className="card-img-top card-mage"
                      src={Labimage}
                      alt=""
                    ></img>
                    <div className="card-body">
                      <h5 className="card-title">
                        Herbal medicines that are safe for consumption
                      </h5>
                      <p className="card-text">
                        Herbal medicine is very widely used at this time because
                        of its very good for your health...
                      </p>
                      <button className="none">Learn more <img className="arrow1" src={Arrowimage} alt="" /> </button>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-4">
                  <div
                    className="card lab-card border-0 "
                    style={{ width: "18rem" }}
                  >
                    <img
                      className="card-img-top card-mage"
                      src={Sparimage}
                      alt=""
                    ></img>
                    <div className="card-body">
                      <h5 className="card-title">
                        Natural care for healthy facial skin
                      </h5>
                      <p className="card-text">
                        A healthy lifestyle should start from now and also for
                        your skin health. There are some...
                      </p>
                        <button className="none">Learn more <img className="arrow1" src={Arrowimage} alt="" /> </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        

        
        <div className="col-sm-12 col-md-12 col-lg-1"></div>
      </div>
    </>
  );
};

export default Home;

