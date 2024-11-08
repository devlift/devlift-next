import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <>
      <div className="container position-relative">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 text-center">
            <div className="wow fadeInUp">
              <h2 className="section-caption-gradient mb-20 mb-xs-10">
                About Devlift Media
              </h2>
              <div className="section-line-gradient mx-auto mb-20" />
              <h3 className="section-title mb-40 mb-sm-30">
                Innovating with AI to drive transformative solutions.
              </h3>
            </div>
            <div className="row text-start text-gray mb-80 mb-sm-60">
              <div
                className="col-md-6 mb-sm-20 wow linesAnimInLong"
                data-splitting="lines"
              >
                At Devlift Media, we specialize in harnessing the power of AI to
                help businesses streamline and optimize their workflows. We
                believe in leveraging cutting-edge technology to unlock the full
                potential of our clients’ operations.
              </div>
              <div
                className="col-md-6 wow linesAnimInLong"
                data-splitting="lines"
              >
                Our team of experts combines strategic insights with advanced AI
                tools to develop solutions that elevate productivity and drive
                growth. Let us partner with you on your journey to create
                efficient, innovative, and impactful digital experiences.
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Images Composition */}
      <div className="position-relative">
        {/* End Decorative Line */}
        <div className="container position-relative">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="composition-7">
                <div className="composition-7-image-1">
                  <div className="composition-7-border" />
                  <div className="composition-7-inner">
                    <Image
                      src="/assets/images/about-1.jpg"
                      alt="Team at Work"
                      width={238}
                      height={296}
                    />
                  </div>
                </div>
                <div className="composition-7-image-2">
                  <div className="composition-7-border" />
                  <div className="composition-7-inner">
                    <Image
                      src="/assets/images/about-2.jpg"
                      alt="AI Solutions in Action"
                      width={398}
                      height={482}
                    />
                  </div>
                </div>
                <div className="composition-7-image-4">
                  <div className="composition-7-border" />
                  <div className="composition-7-inner">
                    <Image
                      src="/assets/images/about-4.jpg"
                      alt="Creative Design Process"
                      width={368}
                      height={456}
                    />
                  </div>
                </div>
                <div className="composition-7-image-3">
                  <div className="composition-7-border" />
                  <div className="composition-7-inner">
                    <Image
                      src="/assets/images/about-3.jpeg"
                      alt="Innovative Technology"
                      width={460}
                      height={308}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
