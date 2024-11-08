import React from "react";
import About from "./About";
import Service from "./Service";
import Image from "next/image";
import Portfolio from "./Portfolio";
import Steps from "./Steps";
import Banner from "./Banner";
import Blog from "./Blog";
import Newsletter from "./Newsletter";
import Testimonials from "./Testimonials";
import Cta3 from "./Cta3";
import Contact from "./Contact";
import Link from "next/link";
import AnimatedText from "@/components/common/AnimatedText";

export default function Home({ onePage = false, dark = false }) {
  return (
    <>
      <section
        className={`page-section scrollSpysection bg-scroll ${
          dark
            ? "bg-dark-1 bg-gradient-gray-dark-2 light-content"
            : "bg-gradient-gray-light-2"
        }`}
        id="about"
      >
        <About />
      </section>
      <section className="full-wrapper">
        <div className="position-relative">
          {/* Decorative Circle */}
          <div className="decoration-18 d-none d-sm-block" />
          <div className="decoration-19 d-none d-sm-block" />
          <div
            className={`page-section bg-dark-1 bg-dark-alpha-80 bg-scroll light-content round-large overflow-hidden`}
            style={{
              backgroundImage: "url(/assets/images/services.png)",
            }}
          >
            <div className="container position-relative">
              <div className="row">
                <div className="col-lg-4 mb-md-60 mb-xs-50">
                  <h2 className="section-title mb-20 wow fadeInUp">
                    Explore Our Capabilities
                  </h2>
                  <p
                    className="section-descr mb-40 wow fadeInUp"
                    data-wow-delay="0.1s"
                  >
                    Discover how Devlift Media helps businesses unlock potential
                    through AI-driven solutions and strategic process
                    optimization.
                  </p>
                  <div
                    className="local-scroll wow fadeInUp"
                    data-wow-delay="0.2s"
                  >
                    {onePage ? (
                      <a
                        href="#services"
                        className="btn btn-mod btn-border-w-light btn-medium btn-round"
                        data-btn-animate="y"
                      >
                        <span className="btn-animate-y">
                          <span className="btn-animate-y-1">
                            View services
                            <i
                              className="mi-arrow-right size-24 align-center"
                              aria-hidden="true"
                            ></i>
                          </span>
                          <span className="btn-animate-y-2" aria-hidden="true">
                            View services
                            <i
                              className="mi-arrow-right size-24 align-center"
                              aria-hidden="true"
                            ></i>
                          </span>
                        </span>
                      </a>
                    ) : (
                      <Link
                        href="services"
                        className="btn btn-mod btn-border-w-light btn-medium btn-round"
                        data-btn-animate="y"
                      >
                        <span className="btn-animate-y">
                          <span className="btn-animate-y-1">
                            View services
                            <i
                              className="mi-arrow-right size-24 align-center"
                              aria-hidden="true"
                            ></i>
                          </span>
                          <span className="btn-animate-y-2" aria-hidden="true">
                            View services
                            <i
                              className="mi-arrow-right size-24 align-center"
                              aria-hidden="true"
                            ></i>
                          </span>
                        </span>
                      </Link>
                    )}
                  </div>
                </div>
                {/* Other Components */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section
        className={`page-section scrollSpysection ${
          dark ? "bg-dark-1 light-content" : ""
        }`}
        id="services"
      >
        <Service />
      </section> */}

      <section
        className={`page-section scrollSpysection overflow-hidden ${
          dark ? "bg-dark-1 light-content" : ""
        }`}
        id="portfolio"
      >
        <div className="container position-relative">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <h2 className="section-caption-gradient mb-20 mb-xs-10">
                Our Portfolio
              </h2>
              <div className="section-line-gradient mx-auto mb-20" />
            </div>
          </div>
          <div className="text-center">
            <h3 className="section-title-repeat mb-40 mb-sm-30">
              <AnimatedText text="Made with Innovation" />
            </h3>
          </div>
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <p className="text-gray mb-70 mb-sm-50">
                Explore how our AI-driven approach has helped clients solve
                complex problems and optimize workflows.
              </p>
            </div>
          </div>
        </div>
        <Portfolio />
      </section>
      <section
        className={`small-section ${
          dark
            ? "bg-dark-1 bg-gradient-light-1 light-content"
            : "bg-gradient-light-1"
        }`}
      >
        <div className="container position-relative">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="row">
                <div className="col-md-8 text-center text-md-start mb-sm-20 d-md-flex">
                  <p className="section-descr-medium w-100 mb-0">
                    We’ve helped several large companies achieve their goals
                    through innovative AI solutions and cutting-edge design.{" "}
                    <br />
                    View our portfolio to see how we can elevate your business.
                  </p>
                </div>
                <div className="col-md-4 text-center text-md-end pt-20 local-scroll">
                  {onePage ? (
                    <a
                      href="#contact"
                      className="btn btn-mod btn-medium btn-grad btn-round"
                      data-btn-animate="y"
                    >
                      Contact us
                    </a>
                  ) : (
                    <Link
                      href="portfolio"
                      className="btn btn-mod btn-medium btn-grad btn-round"
                      data-btn-animate="y"
                    >
                      View our portfolio
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className={`page-section ${dark ? "bg-dark-1 light-content" : ""}`}
      >
        <Steps />
      </section>
      <section className="full-wrapper">
        <div
          className="page-section bg-dark-1 bg-dark-alpha-80 bg-scroll light-content round-large overflow-hidden"
          style={{
            backgroundImage: "url(/assets/images/about-2.jpg)",
          }}
        >
          <Banner />
        </div>
      </section>
      {/* <section
        className={`page-section scrollSpysection ${
          dark ? "bg-dark-1 light-content" : ""
        }`}
        id="blog"
      >
        <Blog />
      </section> */}
      {/* <section
        className={`page-section ${
          dark
            ? "bg-dark-2 bg-dark-alpha-90 light-content"
            : "bg-gray-light-1 bg-light-alpha-90"
        }`}
        style={{
          backgroundImage: "url(/assets/images/demo-slick/section-bg-1.jpg)",
        }}
      >
        <Newsletter />
      </section> */}
      <section
        className={`page-section overflow-hidden ${
          dark ? "bg-dark-2 light-content" : ""
        }`}
      >
        <Testimonials />
      </section>
      <section
        className="page-section bg-scroll light-content"
        style={{
          backgroundImage: "url(/assets/images/process.png)",
        }}
      >
        <div className="bg-overlay bg-gradient-dark-alpha-2 d-none d-md-block" />
        <div className="bg-overlay bg-dark-1 opacity-09 d-md-none" />
        <div className="container position-relative">
          <div className="row wow fadeInUp">
            <div className="col-md-7 offset-md-5 col-lg-6 offset-lg-6 col-xl-5 offset-xl-7">
              <h2 className="section-title mb-40 mb-sm-30">
                Design Jumpstart for Your Business
              </h2>
              <p className="mb-50 mb-sm-40">
                Ready to make an impact with AI? We provide solutions that
                elevate your business strategies.
              </p>
              <Cta3 />
            </div>
          </div>
        </div>
      </section>
      <section
        className={`page-section scrollSpysection ${
          dark ? "bg-dark-1 light-content" : ""
        }`}
        id="contact"
      >
        <div className="row">
          <div className="col-lg-8 offset-lg-2 text-center">
            <h2 className="section-caption-gradient mb-20 mb-xs-10">
              Contact Us
            </h2>
            <h3 className="section-title mb-40 mb-sm-30">
              Let's start building your AI future together.
            </h3>
            <p className="text-gray mb-80 mb-sm-60">
              Our team is ready to help you innovate and grow with tailored AI
              solutions.
            </p>
          </div>
        </div>
        <Contact />
      </section>
    </>
  );
}
