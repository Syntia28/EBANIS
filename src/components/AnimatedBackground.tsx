"use client";

import React, { useState, useEffect } from "react";

const ORBS = [
  { w:"85vw",  h:"85vw",  bg:"hsla(40,80%,78%,0.62)", blur:80,  top:"-28%",  left:"-18%",        anim:"blobA 48s infinite alternate ease-in-out" },
  { w:"75vw",  h:"75vw",  bg:"hsla(28,75%,74%,0.52)", blur:90,  bottom:"-22%", right:"-18%",      anim:"blobB 58s infinite alternate ease-in-out" },
  { w:"62vw",  h:"62vw",  bg:"hsla(48,85%,84%,0.68)", blur:70,  top:"32%",   right:"5%",          anim:"blobC 38s infinite alternate ease-in-out" },
  { w:"52vw",  h:"52vw",  bg:"hsla(20,70%,76%,0.48)", blur:100, bottom:"12%", left:"8%",          anim:"blobD 52s infinite alternate ease-in-out" },
  { w:"48vw",  h:"48vw",  bg:"hsla(52,88%,88%,0.72)", blur:60,  top:"45%",   left:"35%",          anim:"blobE 30s infinite alternate ease-in-out" },
  { w:"38vw",  h:"38vw",  bg:"hsla(14,65%,78%,0.36)", blur:80,  top:"8%",    right:"18%",         anim:"blobC 44s infinite alternate-reverse ease-in-out" },
];

interface Particle {
  size: number;
  left: number;
  top: number;
  dur: number;
  del: number;
  op: number;
  warm: boolean;
}

export default function AnimatedBackground() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: 40 }).map((_, i) => ({
      size: Math.random() * 2 + 0.8,
      left: Math.random() * 100,
      top: Math.random() * 100,
      dur: Math.random() * 10 + 6,
      del: Math.random() * 8,
      op: Math.random() * 0.35 + 0.1,
      warm: i % 5 === 0,
    }));
    setParticles(generated);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0, left: 0,
        width: "100vw", height: "100vh",
        overflow: "hidden",
        zIndex: 0,
        pointerEvents: "none",
        background: "radial-gradient(ellipse at 50% 0%, hsl(44,55%,97%) 0%, hsl(38,38%,93%) 50%, hsl(36,30%,90%) 100%)",
      }}
    >
      {/* Warm aurora orbs */}
      {ORBS.map((orb, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            borderRadius: "50%",
            width: orb.w, height: orb.h,
            background: `radial-gradient(circle, ${orb.bg} 0%, transparent 65%)`,
            filter: `blur(${orb.blur}px)`,
            top: orb.top ?? "auto",
            bottom: orb.bottom ?? "auto",
            left: orb.left ?? "auto",
            right: orb.right ?? "auto",
            animation: orb.anim,
            pointerEvents: "none",
            mixBlendMode: "multiply",
          }}
        />
      ))}

      {/* Warm fine grid */}
      <div
        style={{
          position: "absolute", inset: 0,
          backgroundImage:
            "linear-gradient(rgba(140,90,20,0.03) 1px, transparent 1px)," +
            "linear-gradient(90deg, rgba(140,90,20,0.03) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          pointerEvents: "none", zIndex: 1,
        }}
      />

      {/* Warm star particles */}
      {particles.map((p, i) => (
        <div
          key={`p-${i}`}
          style={{
            position: "absolute",
            width: `${p.size}px`, height: `${p.size}px`,
            borderRadius: "50%",
            background: p.warm ? `hsla(40,75%,60%,${p.op})` : `rgba(200,160,80,${p.op * 0.6})`,
            left: `${p.left}%`, top: `${p.top}%`,
            animation: `starPulse ${p.dur}s ${p.del}s infinite ease-in-out`,
          }}
        />
      ))}

      {/* Keyframes */}
      <style>{`
        @keyframes blobA {
          0%   { transform: translate(0,0) scale(1); }
          33%  { transform: translate(55px,70px) scale(1.08); }
          66%  { transform: translate(-38px,35px) scale(0.94); }
          100% { transform: translate(18px,-48px) scale(1.03); }
        }
        @keyframes blobB {
          0%   { transform: translate(0,0) scale(1); }
          33%  { transform: translate(-65px,-38px) scale(0.89); }
          66%  { transform: translate(48px,-72px) scale(1.11); }
          100% { transform: translate(-18px,58px) scale(0.96); }
        }
        @keyframes blobC {
          0%   { transform: translate(0,0) scale(1); }
          40%  { transform: translate(-72px,52px) scale(1.13); }
          80%  { transform: translate(52px,-62px) scale(0.87); }
          100% { transform: translate(15px,32px) scale(1.04); }
        }
        @keyframes blobD {
          0%   { transform: translate(0,0) scale(1); }
          50%  { transform: translate(68px,-68px) scale(0.85); }
          100% { transform: translate(-52px,44px) scale(1.15); }
        }
        @keyframes blobE {
          0%   { transform: translate(-50%,-50%) scale(1); }
          50%  { transform: translate(calc(-50% + 95px), calc(-50% - 52px)) scale(1.18); }
          100% { transform: translate(calc(-50% - 38px), calc(-50% + 28px)) scale(0.92); }
        }
        @keyframes starPulse {
          0%, 100% { opacity: 0; transform: scale(0.5); }
          40%, 60%  { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}
