"use client";

import React from "react";
import Image from "next/image";
import { Hammer, Trees, History, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const PILLARS = [
  { icon: <Hammer size={20} />, title: "Artesanía de Precisión", desc: "Cortes perfectos, uniones ocultas y acabados finos y sedosos tallados a mano." },
  { icon: <Trees size={20} />, title: "Sostenibilidad Exclusiva", desc: "Maderas nobles de origen legal con manejo forestal y reforestación responsable." },
  { icon: <Sparkles size={20} />, title: "Diseño Personalizado", desc: "Cada pieza es única, creada desde cero para adaptarse a tu espacio y visión." },
];

const contentContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const textFadeUpVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

const visualEntryVariants = {
  hidden: { opacity: 0, scale: 0.92, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

const pillarsGridVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: "110px 20px",
        position: "relative",
        overflow: "hidden",
        borderTop: "1px solid rgba(197,165,95,0.15)",
      }}
    >
      {/* Ambient warm glow */}
      <div
        style={{
          position: "absolute",
          top: "-10%",
          left: "-5%",
          width: "55vw",
          height: "55vw",
          background: "radial-gradient(circle, hsla(40,80%,74%,0.45) 0%, transparent 65%)",
          filter: "blur(90px)",
          pointerEvents: "none",
          zIndex: 0,
          mixBlendMode: "multiply",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-5%",
          right: "-5%",
          width: "45vw",
          height: "45vw",
          background: "radial-gradient(circle, hsla(24, 92%, 50%, 0.38) 0%, transparent 65%)",
          filter: "blur(90px)",
          pointerEvents: "none",
          zIndex: 0,
          mixBlendMode: "multiply",
        }}
      />

      <div
        className="about-grid"
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "70px",
          alignItems: "center",
        }}
      >
        {/* LEFT: Brand visual (Scroll triggered) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-12%" }}
          variants={visualEntryVariants}
          style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "28px" }}
        >
          <div style={{ position: "relative", width: "360px", height: "360px" }}>
            {/* Outer glow */}
            <div
              style={{
                position: "absolute",
                inset: "-22px",
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(8, 5, 0, 0.18) 0%, transparent 70%)",
                animation: "pulseRing 4s ease-in-out infinite",
              }}
            />
            {/* Rotating dashed ring */}
            <div
              style={{
                position: "absolute",
                inset: "-8px",
                border: "1px dashed rgba(11, 8, 0, 0.3)",
                borderRadius: "50%",
                animation: "spin 40s linear infinite",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: "-3px",
                borderWidth: "1px",
                borderStyle: "solid",
                borderLeftColor: "rgba(197,165,95,0.15)",
                borderRightColor: "rgba(5, 0, 3, 0.15)",
                borderBottomColor: "rgba(17, 12, 1, 0.15)",
                borderTopColor: "rgba(15, 10, 0, 0.55)",
                borderRadius: "50%",
                animation: "spinReverse 22s linear infinite",
              }}
            />
            {/* Main circle — warm light glass */}
            <div
              style={{
                width: "360px",
                height: "360px",
                borderRadius: "50%",
                background: "rgba(0, 0, 0, 0.92)",
                backdropFilter: "blur(40px) saturate(1.6)",
                WebkitBackdropFilter: "blur(40px) saturate(1.6)",
                borderWidth: "1px",
                borderStyle: "solid",
                borderLeftColor: "rgba(255,255,255,0.95)",
                borderRightColor: "rgba(255,255,255,0.95)",
                borderTopColor: "rgba(255,255,255,1)",
                borderBottomColor: "rgba(15, 10, 0, 0.22)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "68px",
                boxShadow:
                  "0 18px 65px rgba(100,60,10,0.14), 0 0 0 1px rgba(255,255,255,0.7) inset, 0 1px 0 rgba(255,255,255,0.98) inset",
              }}
            >
              <Image
                src="/logo/ebanis.png"
                alt="Logo Ebanis"
                className="about-logo-img"
                fill
                sizes="360px"
                style={{
                  objectFit: "contain",
                  filter: "drop-shadow(0 4px 12px rgba(1, 1, 0, 0.2))",
                  transition: "transform 0.6s cubic-bezier(0.16,1,0.3,1)",
                }}
              />
            </div>
          </div>

          {/* Founded badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              background: "rgba(0, 0, 0, 0.88)",
              backdropFilter: "blur(24px)",
              borderWidth: "1px",
              borderStyle: "solid",
              borderLeftColor: "rgba(13, 0, 0, 0.9)",
              borderRightColor: "rgba(255,255,255,0.9)",
              borderTopColor: "rgba(255,255,255,0.98)",
              borderBottomColor: "rgba(15, 10, 1, 0.22)",
              borderRadius: "999px",
              padding: "11px 24px",
              boxShadow: "0 4px 20px rgba(11, 6, 0, 0.1), 0 1px 0 rgba(3, 0, 0, 0.98) inset",
            }}
          >
            <History size={14} style={{ color: "var(--gold-primary)" }} />
            <span
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "0.75rem",
                color: "rgba(255, 255, 255, 0.88)",
                letterSpacing: "0.05em",
              }}
            >
              Fundada en{" "}
              <strong style={{ color: "rgba(239, 211, 26, 0.88)" }}>Cajamarca — 15 Mar, 2021</strong>
            </span>
          </div>
        </motion.div>

        {/* RIGHT: Content (Scroll triggered container) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-12%" }}
          variants={contentContainerVariants}
          style={{ display: "flex", flexDirection: "column", gap: "30px" }}
        >
          {/* Eyebrow */}
          <motion.div
            variants={textFadeUpVariants}
            style={{ display: "flex", alignItems: "center", gap: "12px" }}
          >
            <div
              style={{
                flex: "0 0 28px",
                height: "1px",
                background: "linear-gradient(90deg, transparent, rgba(31, 21, 1, 0.7))",
              }}
            />
            <span
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "0.72rem",
                color: "var(--gold-primary)",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
              }}
            >
              Nuestra Esencia
            </span>
            <div
              style={{
                flex: "0 0 28px",
                height: "1px",
                background: "linear-gradient(90deg, rgba(9, 9, 8, 0.7), transparent)",
              }}
            />
          </motion.div>

          <motion.div variants={textFadeUpVariants}>
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontFamily: "var(--font-serif)",
                lineHeight: 1.12,
                marginBottom: "16px",
              }}
            >
              <span style={{ color: "var(--foreground)" }}>Ebanistería fina con</span> <br />
              <span className="gold-text">alma y precisión</span>
            </h2>
            <div
              style={{
                width: "52px",
                height: "2px",
                borderRadius: "2px",
                background: "var(--gold-primary)",
                marginBottom: "24px",
                opacity: 0.7,
              }}
            />

            <div
              className="narrative-text"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                color: "var(--fg-muted)",
                fontSize: "0.96rem",
                lineHeight: 1.78,
                fontWeight: 300,
              }}
            >
              <p>
                Fundada el{" "}
                <span style={{ color: "var(--foreground)", fontWeight: 500 }}>
                  15 de marzo de 2021
                </span>{" "}
                en la histórica ciudad de Cajamarca, Perú, Ebanis se ha establecido como un referente
                de diseño, elegancia y excelencia en la fabricación de mobiliario a medida.
              </p>
              <p>
                Nos especializamos en la fusión perfecta de carpintería tradicional en maderas finas
                (cedro, tornillo, pino) y melamina de alta calidad — diseñando cocinas integrales,
                dormitorios, closets y mobiliario de oficina con acabados impecables.
              </p>
              <p>
                En Ebanis creemos que el mobiliario es la columna vertebral que define la energía de tu
                entorno. Por ello, combinamos diseño 100% personalizado con precios competitivos,
                adaptados tanto a hogares como a los requerimientos técnicos de arquitectos y
                diseñadores.
              </p>
            </div>
          </motion.div>

          {/* Pillars Staggered Grid */}
          <motion.div
            variants={pillarsGridVariants}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "16px",
              marginTop: "8px",
            }}
          >
            {PILLARS.map((p) => (
              <motion.div
                key={p.title}
                className="pillar-card"
                variants={textFadeUpVariants}
                whileHover={{
                  y: -6,
                  backgroundColor: "rgba(255,252,244,0.85)",
                  borderBottomColor: "rgba(19, 13, 0, 0.38)",
                  boxShadow: "0 12px 36px rgba(100,60,10,0.14), 0 1px 0 rgba(255,255,255,1) inset",
                }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] as const }}
                style={{
                  padding: "20px",
                  borderRadius: "18px",
                  background: "rgba(255,252,244,0.62)",
                  backdropFilter: "blur(24px) saturate(1.6)",
                  borderWidth: "1px",
                  borderStyle: "solid",
                  borderLeftColor: "rgba(255,255,255,0.9)",
                  borderRightColor: "rgba(255,255,255,0.9)",
                  borderTopColor: "rgba(255,255,255,0.98)",
                  borderBottomColor: "rgba(197,165,95,0.2)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  boxShadow: "0 4px 18px rgba(100,60,10,0.08), 0 1px 0 rgba(255,255,255,0.98) inset",
                  position: "relative",
                  overflow: "hidden",
                  cursor: "pointer",
                }}
              >
                {/* Specular */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(135deg, rgba(255,255,255,0.45) 0%, transparent 50%)",
                    borderRadius: "18px",
                    pointerEvents: "none",
                  }}
                />
                <div
                  style={{
                    width: "42px",
                    height: "42px",
                    borderRadius: "12px",
                    background: "rgba(197,165,95,0.12)",
                    borderWidth: "1px",
                    borderStyle: "solid",
                    borderLeftColor: "rgba(16, 11, 1, 0.25)",
                    borderRightColor: "rgba(13, 9, 0, 0.25)",
                    borderBottomColor: "rgba(18, 13, 1, 0.25)",
                    borderTopColor: "rgba(255,255,255,0.8)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--gold-primary)",
                    position: "relative",
                  }}
                >
                  {p.icon}
                </div>
                <div style={{ position: "relative" }}>
                  <h4
                    style={{
                      fontSize: "0.82rem",
                      fontFamily: "var(--font-serif)",
                      color: "var(--foreground)",
                      marginBottom: "6px",
                      letterSpacing: "0.06em",
                    }}
                  >
                    {p.title}
                  </h4>
                  <p style={{ fontSize: "0.78rem", color: "var(--fg-muted)", lineHeight: 1.55 }}>
                    {p.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        @keyframes spin        { from { transform: rotate(0deg); }   to { transform: rotate(360deg); } }
        @keyframes spinReverse { from { transform: rotate(360deg); } to { transform: rotate(0deg); } }
        @keyframes pulseRing   { 0%,100% { opacity: 0.6; } 50% { opacity: 1; } }
        .about-logo-img:hover  { transform: scale(1.05) !important; }
      `}</style>
    </section>
  );
}
