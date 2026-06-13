"use client";

import React from "react";
import FurnitureViewer from "./FurnitureViewer";

export default function Hero() {
  return (
    <section 
      id="hero" 
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "120px 20px 60px 20px",
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* Decorative subtle background glows */}
      <div style={{
        position: "absolute",
        top: "20%",
        left: "10%",
        width: "300px",
        height: "300px",
        background: "rgba(197, 165, 95, 0.04)",
        borderRadius: "50%",
        filter: "blur(80px)",
        pointerEvents: "none"
      }} />
      <div style={{
        position: "absolute",
        bottom: "15%",
        right: "5%",
        width: "400px",
        height: "400px",
        background: "rgba(197, 165, 95, 0.03)",
        borderRadius: "50%",
        filter: "blur(100px)",
        pointerEvents: "none"
      }} />

      <div style={{
        width: "100%",
        maxWidth: "1200px",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "1fr",
        gap: "40px",
        alignItems: "center"
      }} className="hero-grid">
        
        {/* Left Column: Brand Statement */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
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
              fontSize: "clamp(2.5rem, 5vw, 4rem)", 
              lineHeight: 1.1,
              marginBottom: "15px"
            }}>
              Muebles que <br />
              <span className="gold-text">Transforman</span> <br />
              Espacios
            </h1>
            <p style={{
              fontSize: "1.05rem",
              lineHeight: "1.7",
              color: "hsl(0, 0%, 75%)",
              fontWeight: 300,
              maxWidth: "500px"
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
            paddingTop: "25px"
          }}>
            <div>
              <span style={{ 
                fontFamily: "var(--font-serif)", 
                fontSize: "1.6rem", 
                color: "var(--gold-primary)", 
                fontWeight: 600,
                display: "block"
              }}>5+</span>
              <span style={{ fontSize: "0.7rem", color: "hsl(0, 0%, 55%)", textTransform: "uppercase", letterSpacing: "0.1em" }}>Años de Trayectoria</span>
            </div>
            <div>
              <span style={{ 
                fontFamily: "var(--font-serif)", 
                fontSize: "1.6rem", 
                color: "var(--gold-primary)", 
                fontWeight: 600,
                display: "block"
              }}>100%</span>
              <span style={{ fontSize: "0.7rem", color: "hsl(0, 0%, 55%)", textTransform: "uppercase", letterSpacing: "0.1em" }}>Madera Certificada</span>
            </div>
            <div>
              <span style={{ 
                fontFamily: "var(--font-serif)", 
                fontSize: "1.6rem", 
                color: "var(--gold-primary)", 
                fontWeight: 600,
                display: "block"
              }}>200+</span>
              <span style={{ fontSize: "0.7rem", color: "hsl(0, 0%, 55%)", textTransform: "uppercase", letterSpacing: "0.1em" }}>Espacios Transformados</span>
            </div>
          </div>
        </div>

        {/* Right Column: 3D Configurator */}
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", width: "100%" }}>
          <div style={{
            textAlign: "center",
            marginBottom: "10px"
          }}>
            <span style={{
              fontFamily: "var(--font-serif)",
              fontSize: "0.75rem",
              color: "hsl(0, 0%, 45%)",
              letterSpacing: "0.15em",
              textTransform: "uppercase"
            }}>Estudio de Materiales Interactivos (Twinbru 3D)</span>
          </div>
          <FurnitureViewer />
        </div>

      </div>

      <style jsx>{`
        @media (min-width: 992px) {
          .hero-grid {
            grid-template-columns: 1.1fr 0.9fr !important;
            gap: 60px !important;
          }
        }
      `}</style>
    </section>
  );
}
