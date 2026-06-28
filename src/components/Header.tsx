"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

const NAV_ITEMS = [
  { label: "Inicio", href: "/#inicio" },
  {
    label: "Colecciones",
    children: [
      {
        group: "Dormitorio",
        items: [
          { label: "Camas de Madera Maciza", href: "/collections/camas" },
          { label: "Cabeceras Tapizadas", href: "/collections/cabeceras" },
          { label: "Mesas de Noche", href: "/collections/mesas-noche" },
          { label: "Armarios & Closets", href: "/collections/closets" },
        ],
      },
      {
        group: "Área Social",
        items: [
          { label: "Mesas de Centro", href: "/collections/mesas-centro" },
          { label: "Consolas y Aparadores", href: "/collections/consolas" },
          { label: "Juegos de Comedor", href: "/collections/comedores" },
          { label: "Sillas de Colección", href: "/collections/sillas" },
        ],
      },
      {
        group: "Oficina & Biblioteca",
        items: [
          { label: "Escritorios Ejecutivos", href: "/collections/escritorios" },
          { label: "Libreros Integrados", href: "/collections/libreros" },
          { label: "Paneles Acústicos", href: "/collections/paneles" },
        ],
      },
    ],
  },
  {
    label: "A Medida",
    children: [
      {
        group: "Cocinas de Lujo",
        items: [
          { label: "Muebles de Cocina Premium", href: "/collections/cocinas" },
          { label: "Barras & Desayunadores", href: "/collections/barras" },
          { label: "Estanterías Iluminadas", href: "/collections/repisas" },
        ],
      },
      {
        group: "Closets",
        items: [
          { label: "Walk-in Closets", href: "/collections/vestidores" },
          { label: "Tocadores Premium", href: "/collections/tocadores" },
        ],
      },
      {
        group: "Carpintería Fina",
        items: [
          { label: "Puertas Principales", href: "/collections/puertas" },
          { label: "Pisos de Madera Premium", href: "/collections/pisos" },
          { label: "Escaleras de Madera", href: "/collections/escaleras" },
          { label: "Ventanas a Medida", href: "/collections/ventanas" },
        ],
      },
    ],
  },
  {
    label: "Servicios",
    children: [
      {
        group: "Artesanía Digital",
        items: [
          { label: "Modelado y Diseño 3D", href: "/services/diseno-3d" },
          { label: "Ebanistería de Precisión", href: "/services/ebanisteria" },
          { label: "Instalación Profesional", href: "/services/instalacion" },
          { label: "Trabajos Personalizados", href: "/services/personalizados" },
        ],
      },
    ],
  },
  { label: "Historia", href: "/historia" },
  { label: "Contacto", href: "/contacto" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <header
        style={{
          position: "fixed", top: 0, left: 0, width: "100%", zIndex: 1000,
          transition: "all 0.5s cubic-bezier(0.16,1,0.3,1)",
          background: scrolled
            ? "rgba(255, 252, 243, 0.88)"
            : "rgba(255, 252, 243, 0.55)",
          backdropFilter: "blur(44px) saturate(1.8)",
          WebkitBackdropFilter: "blur(44px) saturate(1.8)",
          borderBottom: scrolled
            ? "1px solid rgba(197,165,95,0.25)"
            : "1px solid rgba(255,255,255,0.6)",
          boxShadow: scrolled
            ? "0 4px 32px rgba(100,60,10,0.12), 0 1px 0 rgba(255,255,255,0.9) inset"
            : "0 1px 0 rgba(255,255,255,0.7) inset",
        }}
      >
        {/* Specular top line */}
        <div style={{
          position: "absolute", top: 0, left: "5%", right: "5%", height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.95) 30%, rgba(255,240,180,0.8) 50%, rgba(255,255,255,0.95) 70%, transparent)",
          pointerEvents: "none",
        }} />

        <div style={{
          maxWidth: "1320px", margin: "0 auto",
          display: "flex", alignItems: "center",
          justifyContent: "space-between",
          padding: "0 28px", height: "72px",
        }}>
          {/* LOGO */}
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: "14px", textDecoration: "none" }}>
            <div style={{
              width: "54px", height: "54px",
              borderRadius: "14px",
              background: "rgba(255, 253, 248, 0.75)",
              backdropFilter: "blur(12px)",
              borderWidth: "1px",
              borderStyle: "solid",
              borderLeftColor: "rgba(255,255,255,0.95)",
              borderRightColor: "rgba(255,255,255,0.95)",
              borderTopColor: "rgba(255,255,255,1)",
              borderBottomColor: "rgba(197,165,95,0.3)",
              display: "flex", alignItems: "center", justifyContent: "center",
              boxShadow: "0 2px 14px rgba(100,60,10,0.12), 0 1px 0 rgba(255,255,255,0.98) inset",
              padding: "8px",
            }}>
              <img src="/logo/ebanis.png" alt="Ebanis" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
            </div>
            <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
              <span style={{
                fontFamily: "var(--font-serif)", fontSize: "1.3rem",
                fontWeight: 700, letterSpacing: "0.18em",
                background: "linear-gradient(135deg, hsl(38,80%,38%) 0%, hsl(32,70%,28%) 50%, hsl(38,75%,40%) 100%)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              }}>EBANIS</span>
              <span style={{ fontSize: "0.58rem", letterSpacing: "0.55em", color: "var(--fg-subtle)", marginTop: "4px", fontWeight: 500 }}>SOLUCIONES</span>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="desktop-nav" style={{ height: "100%", display: "none" }}>
            <ul style={{ display: "flex", listStyle: "none", height: "100%", alignItems: "center", gap: "2px" }}>
              {NAV_ITEMS.map((item) =>
                item.children ? (
                  <li key={item.label} className="nav-has-dropdown" style={{ position: "relative", height: "100%", display: "flex", alignItems: "center" }}>
                    <button style={{
                      background: "none", border: "none", cursor: "pointer",
                      display: "flex", alignItems: "center", gap: "5px",
                      fontFamily: "var(--font-serif)", fontSize: "0.75rem",
                      letterSpacing: "0.14em", textTransform: "uppercase",
                      color: "var(--fg-muted)", padding: "0 16px", height: "100%",
                      transition: "color 0.2s ease",
                    }}
                      onMouseEnter={e => (e.currentTarget.style.color = "var(--foreground)")}
                      onMouseLeave={e => (e.currentTarget.style.color = "var(--fg-muted)")}
                    >
                      {item.label}
                      <ChevronDown size={12} style={{ opacity: 0.5, transition: "transform 0.3s" }} />
                    </button>

                    {/* DROPDOWN */}
                    <div className="dropdown-menu" style={{
                      width: item.children.length === 1 ? "260px" : "680px",
                      gridTemplateColumns: `repeat(${item.children.length}, 1fr)`,
                    }}>
                      {item.children.map((col) => (
                        <div key={col.group} className="dropdown-col" style={{ padding: "0 16px" }}>
                          <h4>
                            <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "var(--gold-primary)", display: "inline-block", flexShrink: 0 }} />
                            {col.group}
                          </h4>
                          <ul>
                            {col.items.map((it) => (
                              <li key={it.label}>
                                <Link href={it.href} style={{
                                  fontSize: "0.78rem", color: "var(--fg-muted)",
                                  display: "flex", alignItems: "center", gap: "8px",
                                  padding: "5px 10px", borderRadius: "8px",
                                  transition: "all 0.2s ease", textDecoration: "none",
                                }}
                                  onMouseEnter={e => { e.currentTarget.style.color = "var(--foreground)"; e.currentTarget.style.background = "rgba(197, 165, 95, 0.1)"; }}
                                  onMouseLeave={e => { e.currentTarget.style.color = "var(--fg-muted)"; e.currentTarget.style.background = "transparent"; }}
                                >
                                  <span style={{ width: "3px", height: "3px", borderRadius: "50%", background: "rgba(197,165,95,0.6)", flexShrink: 0, display: "inline-block" }} />
                                  {it.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </li>
                ) : (
                  <li key={item.label} style={{ height: "100%", display: "flex", alignItems: "center" }}>
                    <Link href={item.href!} style={{
                      fontFamily: "var(--font-serif)", fontSize: "0.75rem",
                      letterSpacing: "0.14em", textTransform: "uppercase",
                      color: "var(--fg-muted)", padding: "0 16px", height: "100%",
                      display: "flex", alignItems: "center",
                      transition: "color 0.2s ease", textDecoration: "none",
                      position: "relative",
                    }}
                      onMouseEnter={e => (e.currentTarget.style.color = "var(--foreground)")}
                      onMouseLeave={e => (e.currentTarget.style.color = "var(--fg-muted)")}
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </nav>

          {/* CTA + Mobile Toggle */}
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <a
              href="https://wa.me/51945876123?text=Hola%20Ebanis%20Soluciones"
              target="_blank" rel="noopener noreferrer"
              className="desktop-cta btn-gold"
              style={{ display: "none", fontSize: "0.72rem", padding: "10px 24px", textDecoration: "none" }}
            >
              Presupuesto
            </a>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="mobile-toggle-btn"
              style={{
                background: "rgba(255,252,244,0.7)",
                borderWidth: "1px",
                borderStyle: "solid",
                borderLeftColor: "rgba(197,165,95,0.28)",
                borderRightColor: "rgba(197,165,95,0.28)",
                borderBottomColor: "rgba(197,165,95,0.28)",
                borderTopColor: "rgba(255,255,255,0.95)",
                borderRadius: "12px",
                color: "var(--foreground)", cursor: "pointer",
                width: "42px", height: "42px",
                display: "flex", alignItems: "center", justifyContent: "center",
                backdropFilter: "blur(12px)",
                boxShadow: "0 2px 10px rgba(100,60,10,0.1), 0 1px 0 rgba(255,255,255,0.9) inset",
                transition: "all 0.25s ease",
              }}
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div style={{
          position: "absolute", top: "72px", left: 0, width: "100%",
          background: "rgba(255, 252, 243, 0.97)",
          backdropFilter: "blur(44px)", WebkitBackdropFilter: "blur(44px)",
          borderBottom: "1px solid rgba(197,165,95,0.2)",
          padding: mobileOpen ? "24px 28px 32px" : "0 28px",
          maxHeight: mobileOpen ? "85vh" : "0",
          overflow: "hidden auto",
          transition: "max-height 0.45s cubic-bezier(0.16,1,0.3,1), padding 0.45s ease",
          zIndex: 999,
          boxShadow: "0 16px 40px rgba(100,60,10,0.12)",
        }}>
          {mobileOpen && (
            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              {NAV_ITEMS.map((item) => (
                <div key={item.label}>
                  {item.children ? (
                    <div>
                      <button
                        onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                        style={{
                          width: "100%", background: "none", border: "none", cursor: "pointer",
                          display: "flex", justifyContent: "space-between", alignItems: "center",
                          padding: "14px 0", borderBottom: "1px solid rgba(197,165,95,0.12)",
                          color: "var(--foreground)", fontFamily: "var(--font-serif)",
                          fontSize: "0.88rem", letterSpacing: "0.1em", textTransform: "uppercase",
                        }}
                      >
                        {item.label}
                        <ChevronDown size={15} style={{ color: "var(--gold-primary)", transform: mobileExpanded === item.label ? "rotate(180deg)" : "none", transition: "transform 0.3s" }} />
                      </button>
                      {mobileExpanded === item.label && (
                        <div style={{ padding: "12px 0 8px 16px", display: "flex", flexDirection: "column", gap: "6px" }}>
                          {item.children.flatMap(col => col.items.map(it => (
                            <Link key={it.label} href={it.href} onClick={() => setMobileOpen(false)} style={{
                              fontSize: "0.82rem", color: "var(--fg-muted)",
                              textDecoration: "none", padding: "6px 10px", borderRadius: "8px",
                              transition: "all 0.2s",
                              display: "block"
                            }}
                              onMouseEnter={e => { e.currentTarget.style.color = "var(--foreground)"; e.currentTarget.style.background = "rgba(197,165,95,0.1)"; }}
                              onMouseLeave={e => { e.currentTarget.style.color = "var(--fg-muted)"; e.currentTarget.style.background = "transparent"; }}
                            >{it.label}</Link>
                          )))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link href={item.href!} onClick={() => setMobileOpen(false)} style={{
                      display: "block", padding: "14px 0",
                      borderBottom: "1px solid rgba(197,165,95,0.12)",
                      color: "var(--foreground)", fontFamily: "var(--font-serif)",
                      fontSize: "0.88rem", letterSpacing: "0.1em", textTransform: "uppercase",
                      textDecoration: "none",
                    }}>
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <a
                href="https://wa.me/51945876123"
                target="_blank" rel="noopener noreferrer"
                className="btn-gold"
                style={{ marginTop: "16px", display: "block", textAlign: "center", padding: "14px", borderRadius: "14px", textDecoration: "none" }}
              >
                Solicitar Presupuesto
              </a>
            </div>
          )}
        </div>
      </header>

      <style>{`
        @media (min-width: 992px) {
          .desktop-nav { display: block !important; }
          .desktop-cta { display: inline-flex !important; }
          .mobile-toggle-btn { display: none !important; }
        }
      `}</style>
    </>
  );
}
