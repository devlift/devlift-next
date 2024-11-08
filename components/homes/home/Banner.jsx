"use client";

import { useState } from "react";

export default function Banner() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className="container position-relative text-center pt-50 pt-sm-0 pb-50 pb-sm-0">
        <a
          onClick={() => setOpen(true)}
          className="big-icon-link lightbox-gallery-1 mfp-iframe"
        >
          <span className="big-icon-gradient">
            <i className="icon-play" />
          </span>
        </a>
        <div>
          <a
            onClick={() => setOpen(true)}
            className="big-icon-link-gradient lightbox-gallery-2 mfp-iframe"
          >
            Play Showreel
          </a>
        </div>
        <div className="opacity-06">1 min. 22 sec.</div>
      </div>

      {/* Custom Modal for Local Video */}
      {isOpen && (
        <div className="video-modal-overlay" onClick={() => setOpen(false)}>
          <div
            className="video-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <video controls autoPlay className="video-player">
              <source src="/assets/videos/intro.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}

      <style jsx>{`
        .video-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }
        .video-modal-content {
          position: relative;
          max-width: 800px;
          width: 90%;
          background: #000;
          padding: 1rem;
          border-radius: 8px;
        }
        .video-player {
          width: 100%;
          height: auto;
          border-radius: 8px;
        }
      `}</style>
    </>
  );
}
