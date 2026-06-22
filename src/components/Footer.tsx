"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{
      background: "linear-gradient(180deg,#0b0a09 0%, #161412 100%)",
      borderTop: "1px solid rgba(255,255,255,0.03)",
      fontFamily: "var(--font-sans, Inter, sans-serif)",
      position: "relative",
      overflow: "hidden",
      color: "#ddd"
    }}>
      {/* Gold rule */}
      <div style={{
        height: "1px",
        background: "linear-gradient(90deg, transparent 0%, #a0793a 20%, #e2c07a 50%, #a0793a 80%, transparent 100%)",
        opacity: 0.8
      }} />

      {/* Main 3-column grid (corporate) */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "1.6fr 1fr 1.4fr",
        gap: 24,
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "56px 40px 44px",
        borderBottom: "1px solid rgba(255,255,255,0.03)"
      }}>

        {/* Col 1 — Brand */}
        <div style={{ paddingRight: "36px", borderRight: "1px solid rgba(255,255,255,0.03)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "18px", marginBottom: "18px" }}>
            <div style={{ width: "72px", height: "72px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <img src="/logo/ebanislogo.png" alt="Ebanis Logo" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
            </div>
            <div>
              <div style={{ fontFamily: "var(--font-serif, 'Cormorant Garamond', Georgia, serif)", fontSize: "1.35rem", fontWeight: 700, letterSpacing: "0.12em", color: "#f5e6b8" }}>EBANIS</div>
              <div style={{ fontSize: "0.75rem", color: "#cfc6b2", marginTop: "6px" }}>Muebles que transforman espacios</div>
            </div>
          </div>

          <p style={{ fontSize: "0.95rem", lineHeight: 1.6, color: "#cfc6b2", maxWidth: "360px", margin: 0 }}>
            Artesanía peruana de alta expresión, elaborada a mano en los talleres de Cajamarca. Trabajamos con maderas de procedencia certificada y procesos responsables.
          </p>
        </div>

        {/* Col 2 — Navigation */}
        <div style={{ padding: "0 36px", borderRight: "1px solid rgba(255,255,255,0.03)" }}>
          <p style={{ fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#f5e6b8", marginBottom: "14px" }}>Navegación</p>
          <nav style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {[
              { href: "/#inicio", label: "Inicio" },
              { href: "/collections", label: "Colecciones" },
              { href: "/historia", label: "Historia" },
              { href: "/contacto", label: "Contacto" },
            ].map(({ href, label }) => (
              <Link key={href} href={href} className="footer-nav-link" style={{ color: "#d1c8b0", textDecoration: "none", padding: "6px 0", fontWeight: 600 }}> {label} </Link>
            ))}
          </nav>
        </div>

        {/* Col 3 — Environmental commitment */}
        <div style={{ paddingLeft: "36px", display: "flex", flexDirection: "column", gap: 12 }}>
          <p style={{ fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#f5e6b8", margin: 0 }}>Contacto</p>

          <div style={{ marginTop: 8, color: "#d1c8b0", fontSize: "0.95rem" }}>
            <div>Psj. San Isidro 392, Cajamarca 06003, Perú</div>
            <div style={{ marginTop: 8 }}>Tel: <a href="tel:+51945876123" style={{ color: "#f5e6b8", textDecoration: "none" }}>+51 945 876 123</a></div>
            <div style={{ marginTop: 8 }}>Email: <a href="mailto:proyectos@ebanissoluciones.com" style={{ color: "#d1c8b0", textDecoration: "none" }}>proyectos@ebanissoluciones.com</a></div>
          </div>

          <div style={{ marginTop: 12 }}>
            <a href="https://wa.me/51945876123?text=Hola%20Ebanis%20Soluciones,%20deseo%20contactar%20y%20cotizar%20un%20proyecto" target="_blank" rel="noopener noreferrer" className="btn-gold" style={{ padding: "12px 18px", display: "inline-block", marginTop: 8 }}>Contactar</a>
          </div>

          <div style={{ display: "flex", gap: "10px", marginTop: 12 }}>
            {['FSC®','Origen Perú','Artesanía'].map(c => (
              <span key={c} style={{ fontSize: '0.6rem', color: '#bdb3a0', border: '1px solid rgba(255,255,255,0.04)', padding: '6px 10px', borderRadius: 4 }}>{c}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "20px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        <span style={{ fontSize: "0.85rem", color: "#bfb6a0", letterSpacing: "0.02em" }}>
          © {currentYear} Ebanis Soluciones
          <span style={{
            display: "inline-block",
            width: "3px", height: "3px",
            background: "rgba(196,156,78,0.4)",
            borderRadius: "50%",
            verticalAlign: "middle",
            margin: "0 8px"
          }} />
          Todos los derechos reservados
        </span>
        <span style={{
          fontFamily: "var(--font-serif, 'Cormorant Garamond', Georgia, serif)",
          fontSize: "0.75rem",
          fontStyle: "italic",
          color: "#bfb6a0",
          letterSpacing: "0.05em"
        }}>
          Est. 15 de Marzo, 2021 · Cajamarca, Perú
        </span>
      </div>

      <style jsx>{`
        .footer-nav-link:hover {
          color: #d4a94a !important;
        }
        .footer-nav-link:hover .footer-nav-arrow {
          opacity: 1 !important;
          transform: translateX(0) !important;
        }
      `}</style>
    </footer>
  );
}