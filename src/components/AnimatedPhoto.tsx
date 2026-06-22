"use client";

import React from "react";

export default function AnimatedPhoto() {
  return (
    <div className="animated-photo-container" aria-hidden="true">
      <div className="animated-photo-layer">
        <img
          src="/galeria/hero_bg.png"
          alt=""
          className="animated-photo"
        />
      </div>
    </div>
  );
}
