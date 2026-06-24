"use client";

import React from "react";
import { motion } from "framer-motion";

const STATS = [
  { value: "5+",   label: "Años de Trayectoria" },
  { value: "100%", label: "Madera Certificada" },
  { value: "200+", label: "Espacios Transformados" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as const, // easeOutExpo
    },
  },
};

const floatCardEntryVariants = (delay: number) => ({
  hidden: { opacity: 0, x: 45 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      delay: delay,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
});

export default function Hero() {
  return (
    <section
      id="inicio"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        padding: "0",
      }}
    >
      {/* Background image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('/galeria/hero_bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
          backgroundRepeat: "no-repeat",
          animation: "heroKenBurns 22s ease-in-out infinite alternate",
        }}
      />

      {/* LIGHT overlay — left heavy, fades to transparent on right */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `
            linear-gradient(105deg,
              rgba(255, 251, 240, 0.97) 0%,
              rgba(253, 247, 232, 0.88) 38%,
              rgba(250, 242, 220, 0.55) 62%,
              rgba(248, 238, 210, 0.18) 100%
            )
          `,
          zIndex: 1,
        }}
      />

      {/* Bottom fade to background */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "180px",
          background: "linear-gradient(to bottom, transparent, rgba(242, 234, 214, 0.85))",
          zIndex: 2,
        }}
      />

      {/* Decorative warm glow spots */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "8%",
          width: "350px",
          height: "350px",
          background: "radial-gradient(circle, rgba(197,165,95,0.12) 0%, transparent 65%)",
          filter: "blur(60px)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* CONTENT */}
      <div
        style={{
          position: "relative",
          zIndex: 3,
          maxWidth: "1320px",
          margin: "0 auto",
          padding: "130px 40px 80px",
          width: "100%",
        }}
      >
        {/* Parent motion container that triggers staggered entries */}
        <motion.div
          style={{ maxWidth: "680px" }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Eyebrow badge */}
          <motion.div
            variants={itemVariants}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              background: "rgba(255,252,244,0.72)",
              backdropFilter: "blur(20px)",
              borderWidth: "1px",
              borderStyle: "solid",
              borderLeftColor: "rgba(255,255,255,0.95)",
              borderRightColor: "rgba(255,255,255,0.95)",
              borderTopColor: "rgba(255,255,255,0.95)",
              borderBottomColor: "rgba(197,165,95,0.3)",
              borderRadius: "999px",
              padding: "7px 18px 7px 12px",
              marginBottom: "28px",
              boxShadow: "0 2px 16px rgba(100,60,10,0.1), 0 1px 0 rgba(255,255,255,0.98) inset",
            }}
          >
            <span
              style={{
                width: "9px",
                height: "9px",
                borderRadius: "50%",
                background: "radial-gradient(circle, hsl(40,85%,58%), hsl(34,72%,42%))",
                boxShadow: "0 0 8px rgba(197,165,95,0.7)",
                display: "inline-block",
                animation: "pulseBadge 2.5s ease-in-out infinite",
              }}
            />
            <span
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "0.7rem",
                letterSpacing: "0.25em",
                color: "var(--gold-primary)",
                textTransform: "uppercase",
              }}
            >
              Ebanistería y Diseño Exclusivo
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            variants={itemVariants}
            style={{
              fontSize: "clamp(3rem, 6.5vw, 5.2rem)",
              lineHeight: 1.05,
              marginBottom: "22px",
              fontFamily: "var(--font-serif)",
              fontWeight: 600,
              letterSpacing: "0.03em",
            }}
          >
            <span style={{ color: "var(--foreground)", display: "block" }}>Muebles que</span>
            <span
              style={{
                display: "block",
                background: "linear-gradient(120deg, hsl(38,85%,42%) 0%, hsl(44,90%,56%) 30%, hsl(34,80%,36%) 55%, hsl(42,88%,52%) 80%, hsl(38,82%,44%) 100%)",
                backgroundSize: "200% 100%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                animation: "shimmerGold 4s ease-in-out infinite",
                paddingRight: "0.15em", // Prevent WebKit clip cutoff on letter 'n'
              }}
            >
              Transforman
            </span>
            <span style={{ color: "var(--foreground)", display: "block" }}>Espacios</span>
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            variants={itemVariants}
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.75,
              color: "var(--fg-muted)",
              fontWeight: 300,
              maxWidth: "530px",
              marginBottom: "36px",
            }}
          >
            Creamos piezas únicas de ebanistería fina que fusionan arte y funcionalidad.
            Cada diseño es elaborado con maderas nobles seleccionadas y un acabado
            artesanal impecable para hogares sofisticados.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            style={{ display: "flex", gap: "14px", flexWrap: "wrap", marginBottom: "52px" }}
          >
            <a
              href="#catalog"
              className="btn-gold"
              style={{ display: "inline-flex", alignItems: "center", gap: "9px", textDecoration: "none" }}
            >
              Ver Catálogo
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a href="#contact" className="btn-outline" style={{ textDecoration: "none" }}>
              Consultar Proyecto
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            style={{
              display: "flex",
              gap: "0",
              borderTop: "1px solid rgba(197,165,95,0.2)",
              paddingTop: "28px",
            }}
          >
            {STATS.map((s, i) => (
              <div
                key={s.label}
                style={{
                  flex: 1,
                  paddingRight: i < STATS.length - 1 ? "28px" : "0",
                  paddingLeft: i > 0 ? "28px" : "0",
                  borderRight: i < STATS.length - 1 ? "1px solid rgba(197,165,95,0.18)" : "none",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                    fontWeight: 700,
                    background: "linear-gradient(135deg, hsl(38,82%,44%), hsl(32,70%,32%))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    lineHeight: 1,
                    marginBottom: "6px",
                  }}
                >
                  {s.value}
                </div>
                <div
                  style={{
                    fontSize: "0.62rem",
                    letterSpacing: "0.12em",
                    color: "var(--fg-subtle)",
                    textTransform: "uppercase",
                    fontWeight: 500,
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Floating glass cards — right side */}
        <div
          className="hero-float-card"
          style={{
            position: "absolute",
            right: "5%",
            top: "50%",
            transform: "translateY(-50%)",
            display: "none",
            flexDirection: "column",
            gap: "12px",
            width: "230px",
          }}
        >
          {["Cedro Andino", "Tornillo Selecto", "Ébano Africano"].map((wood, i) => (
            <motion.div
              key={wood}
              variants={floatCardEntryVariants(0.4 + i * 0.15)}
              initial="hidden"
              animate="visible"
            >
              <div
                style={{
                  background: "rgba(255, 252, 244, 0.72)",
                  backdropFilter: "blur(40px) saturate(1.8)",
                  borderWidth: "1px",
                  borderStyle: "solid",
                  borderLeftColor: "rgba(255,255,255,0.95)",
                  borderRightColor: "rgba(255,255,255,0.95)",
                  borderTopColor: "rgba(255,255,255,1)",
                  borderBottomColor: "rgba(197,165,95,0.22)",
                  borderRadius: "18px",
                  padding: "14px 18px",
                  display: "flex",
                  alignItems: "center",
                  gap: "13px",
                  boxShadow: "0 6px 24px rgba(100,60,10,0.12), 0 1px 0 rgba(255,255,255,0.98) inset",
                  animation: `floatCard ${3 + i * 0.7}s ease-in-out ${i * 0.4}s infinite alternate`,
                }}
              >
                <div
                  style={{
                    width: "38px",
                    height: "38px",
                    borderRadius: "11px",
                    background: `linear-gradient(135deg, hsl(${24 + i * 8},55%,35%), hsl(${18 + i * 6},48%,26%))`,
                    border: "1px solid rgba(197,165,95,0.25)",
                    flexShrink: 0,
                    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                  }}
                />
                <div>
                  <div style={{ fontSize: "0.72rem", color: "var(--foreground)", fontWeight: 500, marginBottom: "2px" }}>
                    {wood}
                  </div>
                  <div style={{ fontSize: "0.6rem", color: "var(--gold-primary)", letterSpacing: "0.08em" }}>
                    Madera Noble
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "32px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <div
          style={{
            width: "1px",
            height: "48px",
            background: "linear-gradient(to bottom, rgba(197,165,95,0.7), transparent)",
            animation: "scrollLine 2s ease-in-out infinite",
          }}
        />
        <span
          style={{
            fontSize: "0.52rem",
            letterSpacing: "0.3em",
            color: "var(--fg-subtle)",
            textTransform: "uppercase",
          }}
        >
          Scroll
        </span>
      </div>

      <style>{`
        @keyframes heroKenBurns { 0% { transform: scale(1.05) translateY(0); } 100% { transform: scale(1.12) translateY(-15px); } }
        @keyframes shimmerGold  { 0%,100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
        @keyframes pulseBadge   { 0%,100% { box-shadow: 0 0 6px rgba(197,165,95,0.55); } 50% { box-shadow: 0 0 14px rgba(197,165,95,0.9); } }
        @keyframes scrollLine   { 0% { opacity:0; transform:scaleY(0); transform-origin:top; } 50% { opacity:1; transform:scaleY(1); } 100% { opacity:0; transform:scaleY(1); transform-origin:bottom; } }
        @keyframes floatCard    { 0% { transform: translateY(0px); } 100% { transform: translateY(-10px); } }
        @media (min-width: 1100px) { .hero-float-card { display: flex !important; } }
      `}</style>
    </section>
  );
}
