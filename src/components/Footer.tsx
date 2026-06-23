"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-mesh-wrapper" style={{
      fontFamily: "var(--font-sans, Inter, sans-serif)",
      color: "var(--foreground)",
      background: "hsl(38, 30%, 95%)",
      position: "relative",
    }}>
      {/* ── Mesh Gradient Background ── */}
      <div aria-hidden className="footer-mesh-bg" />

      {/* Top separator */}
      <div style={{
        height: "1.5px",
        position: "relative",
        zIndex: 1,
        background: "linear-gradient(90deg, transparent 0%, rgba(240,192,80,0.35) 20%, rgba(255,220,120,0.7) 50%, rgba(240,192,80,0.35) 80%, transparent 100%)",
      }} />

      {/* ── Main Grid ── */}
      <div style={{
        position: "relative",
        zIndex: 1,
        display: "grid",
        gridTemplateColumns: "1.6fr 1fr 1.4fr",
        gap: "32px",
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "64px 40px 52px",
      }} className="footer-grid">

        {/* Col 1 — Brand */}
        <div style={{ paddingRight: "40px", borderRight: "1px solid rgba(197, 165, 95, 0.18)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
            <div style={{
              width: "68px",
              height: "68px",
              flexShrink: 0,
              borderRadius: "16px",
              overflow: "hidden",
              background: "rgba(255, 255, 255, 0.45)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              border: "1px solid rgba(197, 165, 95, 0.18)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 4px 12px rgba(100, 60, 10, 0.08)"
            }}>
              <img
                src="/logo/ebanislogo.png"
                alt="Ebanis Logo"
                style={{ width: "80%", height: "80%", objectFit: "contain" }}
              />
            </div>
            <div>
              <div style={{
                fontFamily: "var(--font-serif, 'Cormorant Garamond', Georgia, serif)",
                fontSize: "1.35rem",
                fontWeight: 700,
                letterSpacing: "0.14em",
                background: "linear-gradient(135deg, #c88a20 0%, #a06018 50%, #7a4a10 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
                EBANIS
              </div>
              <div style={{ fontSize: "0.72rem", color: "var(--fg-muted)", marginTop: "5px", letterSpacing: "0.05em" }}>
                Muebles que transforman espacios
              </div>
            </div>
          </div>

          <p style={{
            fontSize: "0.9rem",
            lineHeight: 1.7,
            color: "var(--fg-muted)",
            maxWidth: "340px",
            margin: 0
          }}>
            Artesanía peruana de alta expresión, elaborada a mano en los talleres de Cajamarca.
            Trabajamos con maderas de procedencia certificada y procesos responsables.
          </p>

          {/* Badges */}
          <div style={{ display: "flex", gap: "8px", marginTop: "24px", flexWrap: "wrap" }}>
            {["FSC®", "Origen Perú", "Artesanía"].map(c => (
              <span key={c} style={{
                fontSize: "0.6rem",
                color: "var(--gold-dark)",
                background: "rgba(255, 255, 255, 0.5)",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
                border: "1px solid rgba(197, 165, 95, 0.25)",
                padding: "5px 12px",
                borderRadius: "999px",
                letterSpacing: "0.08em",
                textTransform: "uppercase"
              }}>
                {c}
              </span>
            ))}
          </div>
        </div>

        {/* Col 2 — Navigation */}
        <div style={{ padding: "0 32px", borderRight: "1px solid rgba(197, 165, 95, 0.18)" }}>
          <p style={{
            fontSize: "0.62rem",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "var(--gold-primary)",
            marginBottom: "18px",
            fontFamily: "var(--font-serif)"
          }}>
            Navegación
          </p>
          <nav style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            {[
              { href: "/#inicio", label: "Inicio" },
              { href: "/collections", label: "Colecciones" },
              { href: "/historia", label: "Historia" },
              { href: "/contacto", label: "Contacto" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="footer-nav-link"
                style={{
                  color: "var(--fg-muted)",
                  textDecoration: "none",
                  padding: "7px 0",
                  fontSize: "0.88rem",
                  fontWeight: 500,
                  transition: "all 0.25s ease",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px"
                }}
              >
                <span style={{
                  width: "16px",
                  height: "1px",
                  background: "var(--gold-primary)",
                  opacity: 0.6,
                  flexShrink: 0,
                  transition: "width 0.25s ease"
                }} className="footer-nav-line" />
                {label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Col 3 — Contact */}
        <div style={{ paddingLeft: "32px", display: "flex", flexDirection: "column", gap: "14px" }}>
          <p style={{
            fontSize: "0.62rem",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "var(--gold-primary)",
            margin: 0,
            fontFamily: "var(--font-serif)"
          }}>
            Contacto
          </p>

          <div style={{ color: "var(--fg-muted)", fontSize: "0.88rem", lineHeight: 1.7 }}>
            <div> Av. Mártires de Uchuraccay N°2420 Barrio San Martin; Cajamarca 06003 - Perú</div>
            <div style={{ marginTop: "8px" }}>
              Tel:{" "}
              <a href="tel:+51976781459" style={{ color: "var(--fg-muted)", textDecoration: "none" }}>
                +51 976 781 459
              </a>
            </div>
            <div style={{ marginTop: "8px" }}>
              Email:{" "}
              <a href="mailto:ebanissoluciones@gmail.com" style={{ color: "var(--fg-muted)", textDecoration: "none", wordBreak: "break-all" }}>
                ebanissoluciones@gmail.com
              </a>
            </div>
          </div>

          <a
            href="https://wa.me/51976781459?text=Hola%20Ebanis%20Soluciones,%20deseo%20contactar%20y%20cotizar%20un%20proyecto"
            target="_blank"
            rel="noopener noreferrer"
            id="footer-whatsapp-btn"
            className="btn-gold"
            style={{ marginTop: "8px", width: "fit-content", fontSize: "0.78rem", padding: "10px 22px" }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Contactar
          </a>
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div style={{
        position: "relative",
        zIndex: 1,
        borderTop: "1px solid rgba(197, 165, 95, 0.18)"
      }}>
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "20px 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "12px"
        }}>
          <span style={{ fontSize: "0.82rem", color: "var(--fg-subtle)", letterSpacing: "0.02em" }}>
            © {currentYear} Ebanis Soluciones
            <span style={{
              display: "inline-block",
              width: "3px", height: "3px",
              background: "rgba(240, 192, 80, 0.4)",
              borderRadius: "50%",
              verticalAlign: "middle",
              margin: "0 8px"
            }} />
            <Link
              href="/derechos-reservados"
              style={{ color: "var(--fg-subtle)", textDecoration: "none", transition: "color 0.2s ease" }}
              onMouseEnter={e => e.currentTarget.style.color = "var(--gold-primary)"}
              onMouseLeave={e => e.currentTarget.style.color = "var(--fg-subtle)"}
            >
              Todos los derechos reservados
            </Link>
          </span>
          <span style={{
            fontFamily: "var(--font-serif, 'Cormorant Garamond', Georgia, serif)",
            fontSize: "0.75rem",
            fontStyle: "italic",
            color: "var(--fg-subtle)",
            letterSpacing: "0.05em"
          }}>
            Est. 15 de Marzo, 2021 · Cajamarca, Perú
          </span>
        </div>
      </div>

      <style>{`
        .footer-nav-link:hover {
          color: rgba(240,192,80,0.9) !important;
        }
        .footer-nav-link:hover .footer-nav-line {
          width: 28px !important;
          opacity: 1 !important;
        }
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
          .footer-grid > div {
            border-right: none !important;
            border-bottom: 1px solid rgba(197, 165, 95, 0.15) !important;
            padding-right: 0 !important;
            padding-left: 0 !important;
            padding-bottom: 24px !important;
          }
          .footer-grid > div:last-child {
            border-bottom: none !important;
          }
        }
      `}</style>
    </footer>
  );
}