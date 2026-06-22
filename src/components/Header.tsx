"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Compass, ShieldCheck, HeartHandshake } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);

  const toggleMobileDropdown = (name: string) => {
    if (activeMobileDropdown === name) {
      setActiveMobileDropdown(null);
    } else {
      setActiveMobileDropdown(name);
    }
  };

  return (
    <header style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      zIndex: 1000,
      borderBottom: "1px solid var(--card-border)",
      background: "rgba(248, 242, 228, 0.88)",
      backdropFilter: "blur(18px)",
      WebkitBackdropFilter: "blur(18px)"
    }}>
      <div className="nav-container" style={{ padding: "0 20px" }}>
        {/* LOGO */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "10px", cursor: "pointer" }}>
          <div style={{
            position: "relative",
            width: "45px",
            height: "45px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}>
            <img
              src="/logo/ebanis.png"
              alt="Ebanis Logo"
              style={{
                width: "auto",
                height: "100%",
                objectFit: "contain",
                maxHeight: "45px"
              }}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <span style={{
              fontFamily: "var(--font-serif)",
              fontSize: "1.2rem",
              letterSpacing: "0.15em",
              fontWeight: 700,
              background: "var(--gold-metallic)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              lineHeight: 1
            }}>EBANIS</span>
            <span style={{
              fontSize: "0.55rem",
              letterSpacing: "0.45em",
              color: "var(--foreground)",
              fontWeight: 500,
              marginTop: "2px"
            }}>SOLUCIONES</span>
          </div>
        </Link>

        {/* DESKTOP NAVIGATION (kkrueger Dropdown Menu Design) */}
        <nav style={{ height: "100%" }}>
          <ul className="nav-links" style={{ display: "none" }}>
            {/* HOME */}
            <li className="nav-item">
              <Link href="/#inicio" className="nav-link">Inicio</Link>
            </li>

            {/* PRODUCTOS / COLECCIONES (Dropdown) */}
            <li className="nav-item">
              <span className="nav-link">Colecciones <ChevronDown size={14} style={{ marginLeft: "4px", color: "var(--gold-primary)" }} /></span>
              <div className="dropdown-menu">
                <div className="dropdown-col">
                  <h4>
                    <Compass size={12} style={{ marginRight: "6px", display: "inline", verticalAlign: "middle" }} />
                    Dormitorio
                  </h4>
                  <ul>
                    <li><Link href="/collections/camas">Camas de Madera Maciza</Link></li>
                    <li><Link href="/collections/cabeceras">Cabeceras Tapizadas</Link></li>
                    <li><Link href="/collections/mesas-noche">Mesas de Noche de Ébano</Link></li>
                    <li><Link href="/collections/closets">Armarios & Closets</Link></li>
                  </ul>
                </div>
                <div className="dropdown-col">
                  <h4>
                    <Compass size={12} style={{ marginRight: "6px", display: "inline", verticalAlign: "middle" }} />
                    Área Social
                  </h4>
                  <ul>
                    <li><Link href="/collections/mesas-centro">Mesas de Centro Esculturales</Link></li>
                    <li><Link href="/collections/consolas">Consolas y Aparadores</Link></li>
                    <li><Link href="/collections/comedores">Juegos de Comedor</Link></li>
                    <li><Link href="/collections/sillas">Sillas de Colección</Link></li>
                  </ul>
                </div>
                <div className="dropdown-col">
                  <h4>
                    <Compass size={12} style={{ marginRight: "6px", display: "inline", verticalAlign: "middle" }} />
                    Oficina & Biblioteca
                  </h4>
                  <ul>
                    <li><Link href="/collections/escritorios">Escritorios Ejecutivos</Link></li>
                    <li><Link href="/collections/libreros">Libreros Integrados</Link></li>
                    <li><Link href="/collections/paneles">Paneles Acústicos de Madera</Link></li>
                  </ul>
                </div>
              </div>
            </li>

            {/* PROYECTOS A MEDIDA (Dropdown) */}
            <li className="nav-item">
              <span className="nav-link">A Medida <ChevronDown size={14} style={{ marginLeft: "4px", color: "var(--gold-primary)" }} /></span>
              <div className="dropdown-menu" style={{ width: "720px", gridTemplateColumns: "repeat(3, 1fr)" }}>
                <div className="dropdown-col">
                  <h4>
                    <ShieldCheck size={12} style={{ marginRight: "6px", display: "inline", verticalAlign: "middle" }} />
                    Cocinas de Lujo
                  </h4>
                  <ul>
                    <li><Link href="/collections/cocinas">Muebles de Cocina Premium</Link></li>
                    <li><Link href="/collections/barras">Barras & Desayunadores</Link></li>
                    <li><Link href="/collections/repisas">Estanterías Iluminadas</Link></li>
                  </ul>
                </div>
                <div className="dropdown-col">
                  <h4>
                    <ShieldCheck size={12} style={{ marginRight: "6px", display: "inline", verticalAlign: "middle" }} />
                    Closets
                  </h4>
                  <ul>

                    <li><Link href="/collections/tocadores">Tocadores Premium</Link></li>
                  </ul>
                </div>
                <div className="dropdown-col">
                  <h4>
                    <ShieldCheck size={12} style={{ marginRight: "6px", display: "inline", verticalAlign: "middle" }} />
                    Carpintería Fina
                  </h4>
                  <ul>
                    <li><Link href="/collections/puertas">Puertas Principales e Interiores</Link></li>
                    <li><Link href="/collections/escaleras">Escaleras de Madera</Link></li>
                    <li><Link href="/collections/ventanas">Ventanas a Medida</Link></li>
                  </ul>
                </div>
              </div>
            </li>

            {/* SERVICES */}
            <li className="nav-item">
              <span className="nav-link">Servicios <ChevronDown size={14} style={{ marginLeft: "4px", color: "var(--gold-primary)" }} /></span>
              <div className="dropdown-menu" style={{ width: "260px", gridTemplateColumns: "1fr", left: "0", transform: "translateY(15px)" }}>
                <div className="dropdown-col">
                  <h4>
                    <HeartHandshake size={12} style={{ marginRight: "6px", display: "inline", verticalAlign: "middle" }} />
                    Artesanía Digital
                  </h4>
                  <ul>
                    <li><Link href="/services/diseno-3d">Modelado y Diseño 3D</Link></li>
                    <li><Link href="/services/ebanisteria">Ebanistería de Precisión</Link></li>
                    <li><Link href="/services/instalacion">Instalación Profesional</Link></li>
                    <li><Link href="/services/personalizados">trabajos Personalizados</Link></li>
                    <li><Link href="/services/adaptaciones">adaptación a diseños de arquitectos</Link></li>
                  </ul>
                </div>
              </div>
            </li>

            {/* HISTORIA (2021) */}
            <li className="nav-item">
              <Link href="/historia" className="nav-link">Historia</Link>
            </li>

            {/* CONTACT */}
            <li className="nav-item">
              <Link href="/contacto" className="nav-link">Contacto</Link>
            </li>
          </ul>
        </nav>

        {/* Action Button */}
        <div style={{ display: "none" }} className="desktop-btn">
          <a href="https://wa.me/51945876123?text=Hola%20Ebanis%20Soluciones,%20deseo%20cotizar%20un%20proyecto" target="_blank" rel="noopener noreferrer" className="btn-gold" style={{ fontSize: "0.75rem", padding: "10px 20px", textDecoration: 'none' }}>Presupuesto</a>
        </div>

        {/* Mobile Menu Icon */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            background: "none",
            border: "none",
            color: "var(--foreground)",
            cursor: "pointer",
            display: "block"
          }}
          className="mobile-toggle"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div style={{
          position: "absolute",
          top: "80px",
          left: 0,
          width: "100%",
          background: "rgba(250, 245, 235, 0.98)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid var(--card-border)",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          zIndex: 999
        }}>
          <Link href="/#inicio" onClick={() => setMobileMenuOpen(false)} style={{ fontFamily: "var(--font-serif)", fontSize: "1rem", borderBottom: "1px solid var(--card-border)", paddingBottom: "10px", color: "var(--foreground)" }}>Inicio</Link>

          {/* Dropdown 1 */}
          <div>
            <div
              onClick={() => toggleMobileDropdown("colecciones")}
              style={{ display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer", borderBottom: "1px solid #1a1a1a", paddingBottom: "10px" }}
            >
              <span style={{ fontFamily: "var(--font-serif)", fontSize: "1rem" }}>Colecciones</span>
              <ChevronDown size={16} style={{ transform: activeMobileDropdown === "colecciones" ? "rotate(180deg)" : "rotate(0)", transition: "0.3s" }} />
            </div>
            {activeMobileDropdown === "colecciones" && (
              <div style={{ paddingLeft: "15px", paddingTop: "10px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <Link href="/collections/camas" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: "0.85rem", color: "var(--foreground)" }}>Dormitorio - Camas</Link>
                <Link href="/collections/comedores" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: "0.85rem", color: "var(--foreground)" }}>Área Social - Comedores</Link>
                <Link href="/collections/escritorios" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: "0.85rem", color: "var(--foreground)" }}>Oficinas - Escritorios</Link>
              </div>
            )}
          </div>

          {/* Dropdown 2 */}
          <div>
            <div
              onClick={() => toggleMobileDropdown("medida")}
              style={{ display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer", borderBottom: "1px solid var(--card-border)", paddingBottom: "10px" }}
            >
              <span style={{ fontFamily: "var(--font-serif)", fontSize: "1rem" }}>A Medida</span>
              <ChevronDown size={16} style={{ transform: activeMobileDropdown === "medida" ? "rotate(180deg)" : "rotate(0)", transition: "0.3s" }} />
            </div>
            {activeMobileDropdown === "medida" && (
              <div style={{ paddingLeft: "15px", paddingTop: "10px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <Link href="/collections/cocinas" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: "0.85rem", color: "var(--foreground)" }}>Cocinas de Lujo</Link>
                <Link href="/collections/vestidores" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: "0.85rem", color: "var(--foreground)" }}>Walk-in Closets</Link>
                <Link href="/collections/puertas" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: "0.85rem", color: "var(--foreground)" }}>Puertas de Madera & Melamina</Link>
                <Link href="/collections/ventanas" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: "0.85rem", color: "var(--foreground)" }}>Ventanas a Medida</Link>
              </div>
            )}
          </div>

          <Link href="/historia" onClick={() => setMobileMenuOpen(false)} style={{ fontFamily: "var(--font-serif)", fontSize: "1rem", borderBottom: "1px solid var(--card-border)", paddingBottom: "10px", color: "var(--foreground)" }}>Historia</Link>
          <Link href="/contacto" onClick={() => setMobileMenuOpen(false)} style={{ fontFamily: "var(--font-serif)", fontSize: "1rem", borderBottom: "1px solid var(--card-border)", paddingBottom: "10px", color: "var(--foreground)" }}>Contacto</Link>
          <a href="https://wa.me/51945876123?text=Hola%20Ebanis%20Soluciones,%20deseo%20cotizar%20un%20proyecto" onClick={() => setMobileMenuOpen(false)} target="_blank" rel="noopener noreferrer" className="btn-gold" style={{ textAlign: "center", marginTop: "10px", display: 'inline-block', textDecoration: 'none' }}>Presupuesto</a>
        </div>
      )}

      {/* CSS overrides for desktop display (hiding/showing links) */}
      <style jsx>{`
        @media (min-width: 992px) {
          .nav-links {
            display: flex !important;
          }
          .desktop-btn {
            display: block !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
