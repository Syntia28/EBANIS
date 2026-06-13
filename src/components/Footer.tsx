"use client";

import React from "react";
import Link from "next/link";
import { Trees } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{
      borderTop: "1px solid var(--card-border)",
      background: "rgba(5, 5, 5, 0.95)",
      padding: "60px 20px 40px 20px"
    }}>
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "30px",
        textAlign: "center"
      }}>
        
        {/* Monogram / Title */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ 
              fontFamily: "var(--font-serif)", 
              fontSize: "1.5rem", 
              letterSpacing: "0.2em", 
              fontWeight: 800,
              background: "var(--gold-metallic)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}>EBANIS</span>
          </div>
          <span style={{ fontSize: "0.6rem", letterSpacing: "0.5em", color: "#888", textTransform: "uppercase" }}>Muebles que transforman espacios</span>
        </div>

        {/* Quick Links */}
        <div style={{
          display: "flex",
          gap: "30px",
          flexWrap: "wrap",
          justifyContent: "center",
          fontFamily: "var(--font-serif)",
          fontSize: "0.75rem",
          letterSpacing: "0.1em",
          textTransform: "uppercase"
        }}>
          <Link href="#hero" style={{ color: "hsl(0,0%,70%)", transition: "var(--transition-fast)" }} className="footer-link">Inicio</Link>
          <Link href="#catalog" style={{ color: "hsl(0,0%,70%)", transition: "var(--transition-fast)" }} className="footer-link">Colecciones</Link>
          <Link href="#about" style={{ color: "hsl(0,0%,70%)", transition: "var(--transition-fast)" }} className="footer-link">Historia</Link>
          <Link href="#contact" style={{ color: "hsl(0,0%,70%)", transition: "var(--transition-fast)" }} className="footer-link">Contacto</Link>
        </div>

        {/* Brand commitment */}
        <div style={{
          maxWidth: "450px",
          fontSize: "0.75rem",
          color: "hsl(0,0%,50%)",
          lineHeight: 1.5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px"
        }}>
          <div style={{ display: "flex", gap: "6px", alignItems: "center", color: "var(--gold-primary)" }}>
            <Trees size={14} />
            <span>Compromiso Ambiental</span>
          </div>
          <p>
            Trabajamos con maderas certificadas por entidades de manejo forestal sostenible, 
            garantizando que nuestra herencia artesanal no comprometa el futuro de nuestros bosques.
          </p>
        </div>

        {/* Bottom Bar */}
        <div style={{
          width: "100%",
          paddingTop: "20px",
          borderTop: "1px solid rgba(255, 255, 255, 0.05)",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          fontSize: "0.7rem",
          color: "hsl(0, 0%, 40%)"
        }}>
          <div>
            © {currentYear} Ebanis Soluciones. Todos los derechos reservados.
          </div>
          <div>
            Establecido el 15 de Marzo de 2021 • Cajamarca, Perú.
          </div>
        </div>

      </div>

      <style jsx>{`
        .footer-link:hover {
          color: var(--gold-primary) !important;
        }
      `}</style>
    </footer>
  );
}
