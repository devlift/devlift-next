import Map from "@/components/common/Map";

import Footer from "@/components/footers/Footer";
import Header from "@/components/headers/Header";
import Contact from "@/components/homes/home-10/Contact";
import dynamic from "next/dynamic";
const ParallaxContainer = dynamic(
  () => import("@/components/common/ParallaxContainer"),
  {
    ssr: false, // Disable server-side rendering
  }
);
const dark = true;
const onePage = false;
export const metadata = {
  title:
    "Strong Contact Dark || Devlift &mdash; One & Multi Page React Nextjs Creative Template",
  description:
    "Devlift &mdash; One & Multi Page React Nextjs Creative Template",
};
export default function StrongContactPageDark() {
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
                style={{
                  backgroundImage:
                    "url(/assets/images/demo-strong/section-bg-1.jpg)",
                }}
                id="home"
              >
                <div className="container position-relative pt-sm-30">
                  {/* Home Section Content */}
                  <div className="home-content text-center">
                    <h1 className="hs-title-7 mb-0">
                      <span
                        className="wow charsAnimIn-2"
                        data-splitting="chars"
                      >
                        Contact <span className="font-alt">Us</span>
                      </span>
                    </h1>
                  </div>
                  {/* End Home Section Content */}
                </div>
              </ParallaxContainer>
              <section
                className={`page-section  scrollSpysection  ${
                  dark ? "bg-dark-1 light-content" : ""
                }`}
                id="contact"
              >
                <Contact />
              </section>
              <div className="google-map light-content">
                <Map />
              </div>
            </main>

            <footer className="footer-1 bg-dark-2 light-content">
              <Footer />
            </footer>
          </div>{" "}
        </div>
      </div>{" "}
    </>
  );
}
