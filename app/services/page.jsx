import Footer from "@/components/footers/Footer";
import Header from "@/components/headers/Header";
import Features from "@/components/homes/home-10/Features";
import { featuresListData } from "@/data/features";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";

const ParallaxContainer = dynamic(
  () => import("@/components/common/ParallaxContainer"),
  {
    ssr: false,
  }
);

const dark = true;

export const metadata = {
  title: "Devlift - Services",
  description:
    "Devlift offers specialized services in development, marketing, design, and AI automation for businesses looking to elevate their digital presence.",
};

export default function StrongServicesPageDark() {
  const services6 = [
    {
      id: "development",
      width: 48,
      height: 64,
      path: "M16 18.75l32 32-4.25 4.25-32-32zM18.625 27l25.125 25.125 1.375-1.375-25.125-25.25zM15 13v-5h2v5h-2zM15 38.5v-5h2v5h-2zM27 24v-2h5v2h-5zM0 24v-2h5v2h-5zM5.875 11.75l3.625 3.625-1.5 1.375-3.5-3.5zM9.5 31.25l-3.625 3.5-1.375-1.375 3.5-3.5zM27.5 13.25l-3.5 3.5-1.5-1.375 3.625-3.625z",
      title: "Development Services",
      text: "Our team can plan, strategize, execute, and maintain tech solutions tailored to your business. From startups to established brands, we act as an extension of your technology department to drive seamless, scalable solutions.",
    },
    {
      id: "marketing",
      width: 60,
      height: 64,
      path: "M60 48h-22v2h8v2h-32.125v-2h8v-2h-21.875v-36h60v36zM2 14v32h56v-32h-56z",
      title: "Digital Marketing Services",
      text: "Our marketing experts increase brand awareness, generate leads, and drive engagement to grow your business. We optimize your resources to expand and scale digital marketing strategies effectively.",
    },
    {
      id: "design",
      width: 50,
      height: 64,
      path: "M0 11h50v42h-50v-42zM9 51v-6h-7v6h7zM9 43v-6h-7v6h7zM9 35v-6h-7v6h7zM9 27v-6h-7v6h7zM9 19v-6h-7v6h7zM39 51v-18h-28v18h28zM39 31v-18h-28v18h28zM48 51v-6h-7v6h7zM48 43v-6h-7v6h7zM48 35v-6h-7v6h7zM48 27v-6h-7v6h7zM48 19v-6h-7v6h7z",
      title: "Design Services",
      text: "Our design team communicates your story through stunning visuals. From branding to mobile UX design and ad graphics, we shape an aesthetic to resonate with your audience.",
    },
    {
      id: "ai-automation",
      width: 48,
      height: 64,
      path: "M44.25 20c2.25 0 3.75 1.625 3.75 3.875v22c0 2.25-1.5 4.125-3.75 4.125h-40c-2.25 0-4.25-1.875-4.25-4.125v-22c0-2.25 2-3.875 4.25-3.875h1.625v-2h4.25v2h1.625c4-4.5 5.375-6 6.875-6h11c1.5 0 2.875 1.5 6.875 6h7.75zM46 45.875v-22c0-1.125-0.625-1.875-1.75-1.875h-8.625l-0.625-0.375c-0.375-0.5-0.875-1-1.25-1.375-1.5-1.625-2.5-3-3.25-3.75-0.625-0.625-0.875-0.5-0.875-0.5h-11s-0.25 0-0.875 0.5c-0.75 0.625-1.75 1.75-3.125 3.375-0.375 0.5-0.875 1.25-1.375 1.75l-0.625 0.375h-8.375c-1.125 0-2.25 0.875-2.25 1.875v22c0 1.125 1.125 2.125 2.25 2.125h40c1 0 1.75-1 1.75-2.125zM24 23.75c5.875 0 10.75 4.75 10.75 10.625s-4.875 10.625-10.75 10.625-10.75-4.75-10.75-10.625 4.875-10.625 10.75-10.625zM24 43c4.75 0 8.75-3.875 8.75-8.625s-4-8.625-8.75-8.625-8.75 3.875-8.75 8.625 4 8.625 8.75 8.625zM36 26.125v-2.125h2.125v2.125h-2.125zM20 34.375c0-2.625 1.375-4 4-4s4 1.375 4 4-1.375 4-4 4-4-1.375-4-4z",
      title: "AI Automation",
      text: "Our AI services include comprehensive audits to identify automation opportunities. We help clients unlock efficiency, increase competitiveness, and streamline processes, with support for grant applications to maximize investment timelines.",
    },
  ];

  return (
    <>
      <div className="theme-strong">
        <div className="dark-mode">
          <div className="page bg-dark-1" id="top">
            <nav className="main-nav dark transparent stick-fixed wow-menubar wch-unset">
              <Header />
            </nav>
            <main className="main">
              <ParallaxContainer
                className="page-section bg-dark-alpha-30 light-content parallax-5"
                style={{ backgroundImage: "url(/assets/images/services.png)" }}
                id="home"
              >
                <div className="container position-relative pt-sm-30">
                  <div className="home-content text-center">
                    <h1 className="hs-title-7 mb-0">
                      <span
                        className="wow charsAnimIn-2"
                        data-splitting="chars"
                      >
                        Our <span className="font-alt">Services</span>
                      </span>
                    </h1>
                  </div>
                </div>
              </ParallaxContainer>

              <section
                className="page-section light-content pt-0"
                id="services"
              >
                <div className="container position-relative mt-120 mt-sm-60">
                  <div className="row mb-n30">
                    {services6.map((elm, i) => (
                      <div
                        key={i}
                        className="col-md-6 col-lg-6 d-flex align-items-stretch mb-30"
                      >
                        <div className="services-3-item round text-center">
                          <div
                            className="wow fadeInUpShort"
                            data-wow-offset={50}
                          >
                            <div className="services-3-icon">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={elm.width}
                                height={elm.height}
                                viewBox={`0 0 ${elm.width} ${elm.height}`}
                                aria-hidden="true"
                              >
                                <path d={elm.path} />
                              </svg>
                            </div>
                            <h3 className="services-3-title">{elm.title}</h3>
                            <div className="services-3-text">{elm.text}</div>

                            <a
                              href={`/services/${elm.id}`}
                              className="opacity-1 no-hover"
                            >
                              <span className="btn mt-3 btn-mod btn-border-grad btn-small btn-round bg-dark text-white">
                                <span data-btn-animate="y">Learn More</span>
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <section className="pt-30">
                <div id="paddingRightContainer" className="container" />
                <div className="row g-0">
                  <div className="col-lg-6 mt-n30 mt-md-0 mb-30 mb-md-0">
                    <div
                      id="paddingRight"
                      className={`split-column-right ${
                        dark ? "bg-dark-2" : "bg-dark-1"
                      } light-content position-relative d-flex align-items-center`}
                      data-rellax-y=""
                      data-rellax-speed="0.5"
                      data-rellax-percentage="0.5"
                    >
                      <div className="position-absolute top-0 start-0 pt-2 ps-2 opacity-02">
                        <Image
                          width={192}
                          height={222}
                          src="/assets/images/demo-strong/decoration.svg"
                          alt=""
                        />
                      </div>
                      <div>
                        <h2 className="section-title mb-30">
                          Responsive, <span className="font-alt">flexible</span>{" "}
                          and customizable.
                        </h2>
                        <p className="mb-50">
                          Devlift’s team tailors every service to match each
                          client’s specific goals, creating sustainable
                          solutions for long-term growth.
                        </p>
                        <div className="row mt-n20">
                          {featuresListData.map((item, index) => (
                            <div
                              key={index}
                              className="col-sm-6 col-lg-12 col-xl-6 d-flex mt-20"
                            >
                              <div className="features-list-icon">
                                <i className="mi-check" />
                              </div>
                              <div className="features-list-text">
                                {item.text}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 d-flex align-items-stretch order-lg-first">
                    <div className="split-image-left">
                      <Image
                        width={1100}
                        height={930}
                        src="/assets/images/demo-strong/split-image-2.jpg"
                        alt="Image Description"
                      />
                      <div className="position-absolute bottom-0 start-0 ps-4 pb-4 d-none d-sm-block">
                        <Image
                          src="/assets/images/demo-strong/circle-text.svg"
                          width={138}
                          height={138}
                          alt="Image Description"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section
                className={`page-section overflow-hidden ${
                  dark ? "bg-dark-1 light-content" : ""
                }`}
              >
                <Features />
              </section>
            </main>

            <footer className="footer-1 bg-dark-2 light-content">
              <Footer />
            </footer>
          </div>
        </div>
      </div>
    </>
  );
}
