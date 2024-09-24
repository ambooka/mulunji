"use client";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import img from "/assets/images/group-people-volunteering-foodbank-poor-people.jpg";
import { useState } from "react";

function OurStorySection() {
  const [counter, setCounter] = useState(false);
  return (
    <section className="section-padding section-bg" id="our-story-section">
      <ScrollTrigger
        onEnter={() => setCounter(true)}
        onExit={() => setCounter(false)}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12 mb-5 mb-lg-0">
              <img
                src={img}
                sizes="100vw"
                alt="Kind Heart Charity"
                className="custom-text-box-image img-fluid"
              />
            </div>

            <div className="col-lg-6 col-12">
              <div className="custom-text-box">
                <h2 className="mb-2">Our Story</h2>

                <h5 className="mb-3">
                  Mulunji Foundation, Non-Profit Organization
                </h5>

                <p className="mb-0">
                  This is a Bootstrap 5.2.2 CSS template for charity
                  organization websites. You can feel free to use it. Please
                  tell your friends about TemplateMo website. Thank you. HTML
                  CSS files updated on 20 Oct 2022.
                </p>
              </div>

              <div className="row">
                <div className="col-lg-6 col-md-6 col-12">
                  <div className="custom-text-box mb-lg-0">
                    <h5 className="mb-3">Our Mission</h5>

                    <p>
                      Sed leo nisl, posuere at molestie ac, suscipit auctor quis
                      metus
                    </p>

                    <ul className="custom-list mt-2">
                      <li className="custom-list-item d-flex">
                        <i className="bi-check custom-text-box-icon me-2"></i>
                        Charity Theme
                      </li>

                      <li className="custom-list-item d-flex">
                        <i className="bi-check custom-text-box-icon me-2"></i>
                        Semantic HTML
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 col-12">
                  <div className="custom-text-box d-flex flex-wrap d-lg-block mb-lg-0">
                    <div className="counter-thumb">
                      <div className="d-flex">
                        <span
                          className="counter-number"
                          data-from="1"
                          data-to="2009"
                          data-speed="1000"
                        ></span>
                        <span className="counter-number-text">
                          {counter && (
                            <CountUp
                              start={0}
                              end={2023}
                              duration={2.75}
                            ></CountUp>
                          )}
                        </span>
                      </div>

                      <span className="counter-text">Founded</span>
                    </div>

                    <div className="counter-thumb mt-4">
                      <div className="d-flex">
                        <span
                          className="counter-number"
                          data-from="1"
                          data-to="120"
                          data-speed="1000"
                        ></span>
                        <span className="counter-number-text">
                          {counter && (
                            <CountUp
                              start={0}
                              end={120}
                              duration={2.75}
                            ></CountUp>
                          )}
                          B
                        </span>
                      </div>

                      <span className="counter-text">Donations</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollTrigger>
    </section>
  );
}

export default OurStorySection;
