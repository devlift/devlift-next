import React from "react";
import Image from "next/image";

export default function Steps() {
  const brandLogos = [
    {
      id: 1,
      src: "/assets/images/brand-logos/bens-logo.svg",
      alt: "Bens Logo",
    },
    {
      id: 2,
      src: "/assets/images/brand-logos/chevy-logo.svg",
      alt: "Chevy Logo",
    },
    {
      id: 3,
      src: "/assets/images/brand-logos/corus-logo.svg",
      alt: "Corus Logo",
    },
    {
      id: 4,
      src: "/assets/images/brand-logos/hyundai-logo.svg",
      alt: "Hyundai Logo",
    },
    {
      id: 5,
      src: "/assets/images/brand-logos/loblaws-logo.svg",
      alt: "Loblaws Logo",
    },
    { id: 6, src: "/assets/images/brand-logos/mms-logo.svg", alt: "MMS Logo" },
    { id: 7, src: "/assets/images/brand-logos/oma-logo.svg", alt: "OMA Logo" },
    { id: 8, src: "/assets/images/brand-logos/rbc-logo.svg", alt: "RBC Logo" },
    {
      id: 9,
      src: "/assets/images/brand-logos/samsung-logo.svg",
      alt: "Samsung Logo",
    },
    {
      id: 10,
      src: "/assets/images/brand-logos/toyota-logo.svg",
      alt: "Toyota Logo",
    },
    {
      id: 11,
      src: "/assets/images/brand-logos/vivo-logo.svg",
      alt: "Vivo Logo",
    },
    { id: 12, src: "/assets/images/brand-logos/ytv-logo.svg", alt: "YTV Logo" },
  ];

  return (
    <div className="container position-relative">
      <div className="row mb-80 mb-sm-60">
        <div className="col-md-8 col-lg-6">
          <h2 className="section-title mb-0">Trusted by Leading Brands</h2>
        </div>
        <div className="col-lg-6 pt-20 pt-md-30">
          <p className="text-gray mb-0">
            We’re proud to have collaborated with some of the world’s top
            companies to deliver impactful solutions that drive success.
          </p>
        </div>
      </div>
      {/* Brand Logos Grid */}
      <div className="row mt-n30">
        {brandLogos.map((logo) => (
          <div
            key={logo.id}
            className="col-6 col-md-3 d-flex align-items-stretch mt-30 wow fadeIn"
          >
            <div
              className="features-2-item d-flex align-items-center justify-content-center w-100  p-4 bg-light-gray border rounded shadow-sm"
              style={{ height: "200px" }}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={80}
                height={80}
                className="brand-logo"
              />
            </div>
          </div>
        ))}
      </div>
      {/* End Brand Logos Grid */}
    </div>
  );
}
