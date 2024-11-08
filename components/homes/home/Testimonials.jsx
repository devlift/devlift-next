"use client";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
    {
      text: "Devlift is a dynamic company with exceptional staff. Each team member that we worked with was friendly, personable, and very reasonable. They listened to us, helped us, developed for us and delivered for us! When given the freedom to create, their creative talents always impressed - just ask for Leah! The amazing team at Devlift helped us improve & re-launch our website, resulting in a more engaged audience including an overall better user experience not to mention dropping our bounce rate by 68%! Website design, development, and deployment are only small fragments from their many areas of multi-media expertise which could help your company grow too. This company is worth exploring for your needs.",
      author: "Jeanette Williams",
      role: "3 reviews • 31 photos",
      imgSrc: "/assets/images/demo-gradient/user-3.jpg",
    },
    {
      text: "My former agency leaned on Devlift for several web-based media programs and we were continuously blown away with not only the final product, but how responsive, professional, and genuinely great to deal with each member of their team is. They were very flexible in working under tight timelines, and the final product was always well received by our clients. If you're looking for a media partner for any of your marketing executions, I'd highly recommend reaching out to Devlift, as I have no doubt you'll be in excellent hands to deliver a top quality execution.",
      author: "Scott Gauvreau",
      role: "5 reviews",
      imgSrc: "/assets/images/demo-gradient/user-2.jpg",
    },
    {
      text: "Devlift was key to helping us get our website up and running, while we got our business up and running. They were very informative and super easy to deal with. Any future questions or assistance we needed, Devlift was only ever an email away! 'Dev'initely recommend Devlift.",
      author: "Steve Goldby",
      role: "3 reviews",
      imgSrc: "/assets/images/demo-gradient/user-1.jpg",
    },

    {
      text: "I've partnered with Devlift on several projects, and one thing's for sure - they always put their customers first. Their level of professionalism is far above what is standard for the digital media industry. If there's an opportunity for a client referral, I always send them to DevLift Media first, because I know the client will be taken care of, and they'll be very satisfied in the end!",
      author: "Mark Mikulec",
      role: "5 reviews",
      imgSrc: "/assets/images/demo-gradient/user-3.jpg",
    },
    {
      text: "Devlift Media redid my website that was in bad need of revamping. Throughout it all they were there to help and offer opinions when unsure of which way to go and what to choose. Everything was done in a professional manner and looks so much better than before. When in the field of doing Accounting & Taxes a professional looking website is a must. That is exactly what I got in return. I highly recommend using Devlift Media.",
      author: "Jeanette Chong",
      role: "2 reviews",
      imgSrc: "/assets/images/demo-gradient/user-2.jpg",
    },
    {
      text: "The DevLift team are great to work with, deliver quality consistently, and are experts in their field! Highly recommend.",
      author: "Matthew Patterson",
      role: "3 reviews",
      imgSrc: "/assets/images/demo-gradient/user-1.jpg",
    },
  ];

  return (
    <div className="container position-relative">
      <div className="row">
        <div className="col-lg-8 offset-lg-2 text-center">
          <h2 className="section-caption-gradient mb-20 mb-xs-10">
            Testimonials
          </h2>
          <div className="section-line-gradient mx-auto mb-20" />
          <h3 className="section-title mb-80 mb-sm-60">
            Devlift template is trusted by customers worldwide.
          </h3>
        </div>
      </div>

      <Swiper
        spaceBetween={0}
        slidesPerView={3}
        modules={[Navigation]}
        navigation={{
          prevEl: ".snbp7",
          nextEl: ".snbn7",
        }}
        breakpoints={{
          1024: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 2,
          },
          0: {
            slidesPerView: 1,
          },
        }}
        watchSlidesProgress
        resizeObserver
        className="testimonials-slider-3 slider-gradient owl-carousel owl-theme overflow-visible position-static"
        style={{
          opacity: 1,
          display: "block",
        }}
      >
        {testimonials.map((testimonial, i) => (
          <SwiperSlide className="owl-item" key={i}>
            <TestimonialItem {...testimonial} />
          </SwiperSlide>
        ))}
        <div className="owl-controls clickable">
          <div className="owl-buttons">
            <div className="owl-prev snbp7" role="button" tabIndex="0">
              <span className="visually-hidden">Previous Slide</span>
              <i className="mi-arrow-left" aria-hidden="true"></i>
            </div>
            <div className="owl-next snbn7" role="button" tabIndex="0">
              <span className="visually-hidden">Next Slide</span>
              <i className="mi-arrow-right" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </Swiper>
    </div>
  );
}

function TestimonialItem({ text, author, role, imgSrc }) {
  const [expanded, setExpanded] = useState(false);
  const toggleExpand = () => setExpanded(!expanded);

  const characterLimit = 150;
  const shortenedText =
    text.length > characterLimit && !expanded
      ? `${text.slice(0, characterLimit)}...`
      : text;

  return (
    <div className="testimonials-3-item testimonials-grad">
      <div className="testimonials-3-icon">
        <i className="icon-quotation-mark" />
      </div>
      <blockquote className="testimonials-3-text">
        <p className="mb-0">
          {shortenedText}
          {text.length > characterLimit && (
            <button onClick={toggleExpand} className="read-more-button">
              {expanded ? "Show Less" : "Read More"}
            </button>
          )}
        </p>
        <footer className="testimonials-3-author pt-30 clearfix">
          <div className="testimonials-3-author-img float-start">
            <Image
              width={44}
              height={44}
              src={imgSrc}
              alt={`${author}'s picture`}
            />
          </div>
          <div className="overflow-hidden">
            {author}
            <div className="small">{role}</div>
          </div>
        </footer>
      </blockquote>
      <style jsx>{`
        .read-more-button {
          background: none;
          border: none;
          color: var(--color-primary-1);
          cursor: pointer;
          padding: 0;
          font-size: 14px;
          margin-left: 5px;
        }
        .read-more-button:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
}
