"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX, ShieldCheck, Heart, Sparkles, Trophy, Play } from "lucide-react";

interface Benefit {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

const BENEFITS: Benefit[] = [
  {
    icon: <Sparkles size={24} />,
    title: "Diseño y Co-Creación a Medida",
    desc: "Transformamos tus bocetos, planos de arquitectura o ideas abstractas en mobiliario único y sofisticado, diseñado milimétricamente para encajar en tu espacio y estilo de vida.",
  },
  {
    icon: <Trophy size={24} />,
    title: "Maderas Nobles y Acabados de Lujo",
    desc: "Seleccionamos cuidadosamente maderas finas peruanas (cedro, tornillo, pino) combinadas con melaminas importadas de alta densidad. Acabados en lacas de poliuretano sedosas al tacto.",
  },
  {
    icon: <ShieldCheck size={24} />,
    title: "Instalación y Ajuste de Precisión",
    desc: "Cuidamos la carpintería fina tradicional de Cajamarca. Ejecutamos instalaciones minuciosas controlando nivelaciones, descuadres y utilizando herrajes de cierre suave premium.",
  },
  {
    icon: <Heart size={24} />,
    title: "Soporte Local y Confianza desde 2021",
    desc: "Fundados en Cajamarca el 15 de marzo de 2021, nuestro compromiso es absoluto. Ofrecemos precios transparentes, plazos de entrega firmes y un servicio de garantía post-venta de respuesta rápida.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function WhyUs() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState("10:15");
  const [isHydrated, setIsHydrated] = useState(false);

  // Keep simulated time updated on the phone status bar
  useEffect(() => {
    setIsHydrated(true);

    const updateTime = () => {
      const now = new Date();
      const hrs = String(now.getHours()).padStart(2, "0");
      const mins = String(now.getMinutes()).padStart(2, "0");
      setCurrentTime(`${hrs}:${mins}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  // Sync muted imperatively to avoid SSR hydration mismatch.
  // React does not serialize the `muted` attribute correctly during SSR.
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  const handleToggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      const newMuted = !videoRef.current.muted;
      videoRef.current.muted = newMuted;
      setIsMuted(newMuted);
    }
  };

  const handleTogglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play().catch((err) => console.log("Video play interrupted:", err));
        setIsPlaying(true);
      }
    }
  };

  return (
    <section
      id="why-ebanis"
      style={{
        padding: "100px 20px",
        position: "relative",
        overflow: "hidden",
        borderTop: "1px solid rgba(197,165,95,0.15)",
        borderBottom: "1px solid rgba(197,165,95,0.15)",
      }}
    >
      {/* Background ambient orbs */}
      <div
        style={{
          position: "absolute",
          top: "30%",
          right: "-10%",
          width: "50vw",
          height: "50vw",
          background: "radial-gradient(circle, hsla(38, 80%, 75%, 0.35) 0%, transparent 70%)",
          filter: "blur(110px)",
          pointerEvents: "none",
          zIndex: 0,
          mixBlendMode: "multiply",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          left: "-10%",
          width: "45vw",
          height: "45vw",
          background: "radial-gradient(circle, hsla(24, 75%, 65%, 0.25) 0%, transparent 70%)",
          filter: "blur(100px)",
          pointerEvents: "none",
          zIndex: 0,
          mixBlendMode: "multiply",
        }}
      />

      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-12%" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: "center", marginBottom: "65px" }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "14px",
            }}
          >
            <div
              style={{
                width: "36px",
                height: "1px",
                background: "linear-gradient(90deg, transparent, rgba(197,165,95,0.6))",
              }}
            />
            <span
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "0.7rem",
                color: "var(--gold-primary)",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
              }}
            >
              Nuestra Propuesta
            </span>
            <div
              style={{
                width: "36px",
                height: "1px",
                background: "linear-gradient(90deg, rgba(197,165,95,0.6), transparent)",
              }}
            />
          </div>
          <h2
            style={{
              fontSize: "clamp(2rem, 4.5vw, 3.2rem)",
              lineHeight: 1.1,
              marginBottom: "18px",
              color: "var(--foreground)",
            }}
          >
            ¿Por qué trabajar con <br />
            <span className="gold-text">Ebanis Soluciones</span>?
          </h2>
          <p
            style={{
              color: "var(--fg-muted)",
              maxWidth: "580px",
              margin: "0 auto",
              fontSize: "0.95rem",
              fontWeight: 300,
              lineHeight: 1.7,
            }}
          >
            Descubre nuestra esencia de trabajo, precisión técnica y la dedicación vertida en cada
            milímetro de madera a través de nuestra presentación en video.
          </p>
        </motion.div>

        {/* Core Layout Grid */}
        <div
          className="why-us-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 0.9fr",
            gap: "70px",
            alignItems: "center",
          }}
        >
          {/* LEFT: Benefits column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-12%" }}
            variants={containerVariants}
            style={{ display: "flex", flexDirection: "column", gap: "28px" }}
          >
            {BENEFITS.map((benefit) => (
              <motion.div
                key={benefit.title}
                whileHover={{
                  x: 8,
                  backgroundColor: "rgba(255, 253, 248, 0.8)",
                  boxShadow: "0 10px 30px rgba(100, 60, 10, 0.08)",
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                style={{
                  display: "flex",
                  gap: "20px",
                  padding: "24px",
                  borderRadius: "20px",
                  background: "rgba(255, 252, 244, 0.45)",
                  backdropFilter: "blur(16px)",
                  border: "1px solid rgba(255,255,255,0.7)",
                  borderBottomColor: "rgba(197,165,95,0.15)",
                  cursor: "pointer",
                }}
              >
                {/* Icon wrapper */}
                <div
                  style={{
                    flex: "0 0 50px",
                    height: "50px",
                    borderRadius: "15px",
                    background: "rgba(197,165,95,0.12)",
                    border: "1px solid rgba(197,165,95,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--gold-primary)",
                  }}
                >
                  {benefit.icon}
                </div>
                {/* Content text */}
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <h4
                    style={{
                      fontSize: "0.95rem",
                      fontFamily: "var(--font-serif)",
                      color: "var(--foreground)",
                      letterSpacing: "0.04em",
                      fontWeight: 600,
                    }}
                  >
                    {benefit.title}
                  </h4>
                  <p
                    style={{
                      fontSize: "0.82rem",
                      color: "var(--fg-muted)",
                      lineHeight: 1.62,
                      fontWeight: 300,
                    }}
                  >
                    {benefit.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* RIGHT: Smartphone Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 35 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-12%" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
            }}
          >
            {/* Soft shadow background glow behind the phone */}
            <div
              style={{
                position: "absolute",
                width: "280px",
                height: "560px",
                borderRadius: "50px",
                background: "radial-gradient(circle, rgba(197, 165, 95, 0.22) 0%, transparent 75%)",
                filter: "blur(40px)",
                zIndex: 0,
                pointerEvents: "none",
              }}
            />

            {/* Smartphone Outer Shell */}
            <div
              className="phone-mockup"
              onClick={handleTogglePlay}
              style={{
                width: "295px",
                height: "590px",
                borderRadius: "44px",
                background: "#080605",
                border: "9px solid #14110f",
                boxShadow:
                  "0 25px 65px -10px rgba(0, 0, 0, 0.45), 0 0 0 2px rgba(197,165,95,0.45), inset 0 0 4px rgba(255,255,255,0.15)",
                position: "relative",
                zIndex: 1,
                cursor: "pointer",
                overflow: "hidden",
                userSelect: "none",
                display: "flex",
                flexDirection: "column",
                transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s",
              }}
            >
              {/* Metallic Rim Glare */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: "35px",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  pointerEvents: "none",
                  zIndex: 15,
                }}
              />

              {/* Status Bar */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "36px",
                  padding: "0 22px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  fontSize: "11px",
                  color: "#ffffff",
                  fontFamily: "var(--font-sans)",
                  fontWeight: 500,
                  zIndex: 12,
                  background: "linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, transparent 100%)",
                }}
              >
                <span>{currentTime}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                  {/* Signal Icon */}
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M2 22h20V2z" />
                  </svg>
                  {/* Wifi Icon */}
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 21l-12-12c4-4 10-6 12-6s8 2 12 6l-12 12z" />
                  </svg>
                  {/* Battery Icon */}
                  <div
                    style={{
                      width: "18px",
                      height: "9px",
                      border: "1px solid #ffffff",
                      borderRadius: "2px",
                      padding: "1px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        width: "80%",
                        height: "100%",
                        background: "#ffffff",
                        borderRadius: "1px",
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Dynamic Island / Camera Notch */}
              <div
                style={{
                  position: "absolute",
                  top: "10px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "85px",
                  height: "22px",
                  borderRadius: "11px",
                  background: "#000000",
                  zIndex: 14,
                  boxShadow: "0 1px 3px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  paddingRight: "8px",
                }}
              >
                {/* Tiny lens reflection */}
                <div
                  style={{
                    width: "4.5px",
                    height: "4.5px",
                    borderRadius: "50%",
                    background: "radial-gradient(circle at 30% 30%, #3a4b6e 0%, #0d121c 100%)",
                    boxShadow: "0 0 1px rgba(255,255,255,0.5)",
                  }}
                />
              </div>

              {/* Video Element Screen */}
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "35px",
                  overflow: "hidden",
                  position: "relative",
                  background: "#1c1815",
                }}
              >
                {isHydrated ? (
                  <video
                    ref={videoRef}
                    src="/video/video.mp4"
                    loop
                    autoPlay
                    playsInline
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      pointerEvents: "none",
                    }}
                  />
                ) : (
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      background: "linear-gradient(135deg, #1c1815 0%, #0d0b0a 100%)",
                    }}
                  />
                )}

                {/* Glass Glare Overlay Line (Diagonal) */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background:
                      "linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.05) 30%, transparent 31%, transparent 100%)",
                    pointerEvents: "none",
                    zIndex: 11,
                  }}
                />

                {/* Dark Vignette Overlay on the screen edges */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    boxShadow: "inset 0 0 35px rgba(0,0,0,0.85), inset 0 0 100px rgba(0,0,0,0.6)",
                    pointerEvents: "none",
                    zIndex: 9,
                  }}
                />

                {/* PLAY/PAUSE CENTER OVERLAY ICON (Only shows when paused) */}
                {!isPlaying && (
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "rgba(0, 0, 0, 0.45)",
                      zIndex: 10,
                      backdropFilter: "blur(2px)",
                      transition: "opacity 0.25s ease",
                    }}
                  >
                    <div
                      style={{
                        width: "60px",
                        height: "60px",
                        borderRadius: "50%",
                        backgroundColor: "rgba(197, 165, 95, 0.95)",
                        boxShadow: "0 8px 24px rgba(100, 60, 10, 0.25)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#ffffff",
                      }}
                    >
                      <Play size={26} fill="currentColor" style={{ marginLeft: "4px" }} />
                    </div>
                  </div>
                )}

                {/* Sound Button Overlay (Bottom-Right) */}
                <button
                  onClick={handleToggleMute}
                  aria-label="Alternar sonido"
                  style={{
                    position: "absolute",
                    bottom: "35px",
                    right: "18px",
                    width: "38px",
                    height: "38px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(0, 0, 0, 0.65)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "rgba(255, 255, 255, 0.9)",
                    cursor: "pointer",
                    zIndex: 13,
                    backdropFilter: "blur(8px)",
                    transition: "transform 0.2s, background-color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.08)";
                    e.currentTarget.style.backgroundColor = "var(--gold-primary)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.65)";
                  }}
                >
                  {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                </button>

                {/* Mini Brand Label on the phone screen bottom */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "32px",
                    left: "20px",
                    zIndex: 10,
                    display: "flex",
                    flexDirection: "column",
                    gap: "2px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "10px",
                      letterSpacing: "0.15em",
                      color: "rgba(255,255,255,0.9)",
                      textTransform: "uppercase",
                      fontWeight: 600,
                      textShadow: "0 2px 4px rgba(0,0,0,0.6)",
                    }}
                  >
                    EBANIS
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "7px",
                      color: "rgba(197, 165, 95, 0.95)",
                      textShadow: "0 1px 2px rgba(0,0,0,0.6)",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    Cajamarca, PE
                  </span>
                </div>

                {/* iPhone Home Indicator Line */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "8px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "95px",
                    height: "4px",
                    background: "rgba(255, 255, 255, 0.65)",
                    borderRadius: "2px",
                    zIndex: 13,
                    pointerEvents: "none",
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .phone-mockup:hover {
          transform: translateY(-5px) scale(1.015);
          box-shadow: 
            0 32px 75px -10px rgba(0, 0, 0, 0.55), 
            0 0 0 2.5px var(--gold-primary), 
            inset 0 0 6px rgba(255,255,255,0.25) !important;
        }

        @media (max-width: 900px) {
          .why-us-grid {
            grid-template-columns: 1fr !important;
            gap: 50px !important;
          }
          .why-us-grid > div:last-child {
            order: -1;
            margin-bottom: 20px;
          }
        }
      `}</style>
    </section>
  );
}
