"use client";

import React from "react";

export default function AnimatedBackground() {
  return (
    <div className="bg-blobs-container">
      {/* Moving gradient mesh using CSS animated divs */}
      <div className="bg-blob blob-1" />
      <div className="bg-blob blob-2" />
      <div className="bg-blob blob-3" />
      <div className="bg-blob blob-4" />

      {/* Structural grid pattern overlay */}
      <div 
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.005) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.005) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          pointerEvents: "none",
          opacity: 0.8,
          zIndex: 1
        }} 
      />
    </div>
  );
}
