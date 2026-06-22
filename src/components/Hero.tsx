"use client";

import React from "react";

export default function Hero() {
  return (
    <section 
      id="inicio" 
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "120px 20px 80px 20px",
        position: "relative",
        overflow: "hidden",
        backgroundImage: "url('/galeria/hero_bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      {/* Immersive overlay for text legibility */}
      <div className="hero-overlay" />

      {/* Decorative gold subtle glow in the left background */}
      <div style={{
        position: "absolute",
        top: "25%",
        left: "5%",
        width: "300px",
        height: "300px",
        background: "rgba(197, 165, 95, 0.06)",
        borderRadius: "50%",
        filter: "blur(90px)",
        pointerEvents: "none",
        zIndex: 1
      }} />

      <div style={{
        width: "100%",
        maxWidth: "1200px",
        margin: "0 auto",
        position: "relative",
        zIndex: 2
      }}>
        
        {/* Brand Statement Column (max-width keeps it left-aligned) */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px", maxWidth: "650px" }}>
          <div>
            <span style={{ 
              fontFamily: "var(--font-serif)", 
              fontSize: "0.85rem", 
              color: "var(--gold-primary)", 
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              display: "block",
              marginBottom: "10px"
            }}>
              Ebanistería y Diseño Exclusivo
            </span>
            <h1 style={{ 
              fontSize: "clamp(2.5rem, 5.5vw, 4rem)", 
              lineHeight: 1.1,
              marginBottom: "15px",
              fontFamily: "var(--font-serif)",
              fontWeight: 500
            }}>
              Muebles que <br />
              <span className="gold-text">Transforman</span> <br />
              Espacios
            </h1>
            <p style={{
              fontSize: "1.05rem",
              lineHeight: "1.7",
              color: "hsl(24, 20%, 28%)",
              fontWeight: 300,
              maxWidth: "520px"
            }}>
              Creamos piezas únicas de ebanistería fina que fusionan arte y funcionalidad. 
              Cada diseño de Ebanis Soluciones es elaborado con maderas nobles seleccionadas 
              y un acabado artesanal impecable para hogares sofisticados.
            </p>
          </div>

          {/* CTA Buttons */}
          <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
            <a href="#catalog" className="btn-gold">Ver Catálogo</a>
            <a href="#contact" className="btn-outline">Consultar Proyecto</a>
          </div>

          {/* Brand Stats */}
          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(3, 1fr)", 
            gap: "20px", 
            marginTop: "20px",
            borderTop: "1px solid var(--card-border)",
            paddingTop: "25px",
            maxWidth: "520px"
          }}>
            <div>
              <span style={{ 
                fontFamily: "var(--font-serif)", 
                fontSize: "1.6rem", 
                color: "var(--gold-primary)", 
                fontWeight: 600,
                display: "block"
              }}>5+</span>
              <span style={{ fontSize: "0.7rem", color: "hsl(24, 18%, 38%)", textTransform: "uppercase", letterSpacing: "0.1em" }}>Años de Trayectoria</span>
            </div>
            <div>
              <span style={{ 
                fontFamily: "var(--font-serif)", 
                fontSize: "1.6rem", 
                color: "var(--gold-primary)", 
                fontWeight: 600,
                display: "block"
              }}>100%</span>
              <span style={{ fontSize: "0.7rem", color: "hsl(24, 18%, 38%)", textTransform: "uppercase", letterSpacing: "0.1em" }}>Madera Certificada</span>
            </div>
            <div>
              <span style={{ 
                fontFamily: "var(--font-serif)", 
                fontSize: "1.6rem", 
                color: "var(--gold-primary)", 
                fontWeight: 600,
                display: "block"
              }}>200+</span>
              <span style={{ fontSize: "0.7rem", color: "hsl(24, 18%, 38%)", textTransform: "uppercase", letterSpacing: "0.1em" }}>Espacios Transformados</span>
            </div>
          </div>
        </div>

      </div>

      <style jsx>{`
        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(90deg, rgba(240, 230, 210, 0.96) 0%, rgba(238, 226, 200, 0.82) 40%, rgba(235, 220, 190, 0.3) 100%);
          z-index: 1;
          pointer-events: none;
        }
        @media (max-width: 768px) {
          .hero-overlay {
            background: linear-gradient(180deg, rgba(240, 230, 210, 0.97) 0%, rgba(238, 226, 200, 0.98) 100%);
          }
        }
      `}</style>
    </section>
  );
}
