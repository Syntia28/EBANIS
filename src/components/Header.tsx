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
      background: "rgba(5, 5, 5, 0.8)",
      backdropFilter: "blur(16px)",
      WebkitBackdropFilter: "blur(16px)"
    }}>
      <div className="nav-container" style={{ padding: "0 20px" }}>
        {/* LOGO */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "10px", cursor: "pointer" }}>
          <svg width="45" height="45" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Background circle or subtle glow */}
            <circle cx="250" cy="250" r="230" stroke="url(#goldGrad)" strokeWidth="4" strokeOpacity="0.3" />
            
            {/* Elegant Monogram EB */}
            {/* E Part */}
            <path d="M180 150H260V180H215V230H255V260H215V320H265V350H180V150Z" fill="url(#goldGrad)" />
            {/* B Part */}
            <path d="M260 150H320C345 150 365 165 365 190C365 210 350 225 330 230C355 235 370 255 370 280C370 310 345 350 310 350H260V150ZM310 230C325 230 335 220 335 205C335 190 325 180 310 180H285V230H310ZM310 320C328 320 340 305 340 285C340 265 328 250 310 250H285V320H310Z" fill="url(#goldGrad)" />
            
            {/* Mini chair outline inside B */}
            <path d="M295 265H330V290H295V265Z" stroke="url(#goldGrad)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.8" />
            <path d="M295 290V310M330 290V310" stroke="url(#goldGrad)" strokeWidth="3" strokeLinecap="round" />
            <path d="M305 265V255M320 265V255" stroke="url(#goldGrad)" strokeWidth="2" strokeLinecap="round" />
            <circle cx="312.5" cy="240" r="3" fill="url(#goldGrad)" />

            <defs>
              <linearGradient id="goldGrad" x1="180" y1="150" x2="370" y2="350" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#dfba73" />
                <stop offset="50%" stopColor="#c5a55f" />
                <stop offset="100%" stopColor="#9a7e44" />
              </linearGradient>
            </defs>
          </svg>
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
              color: "#a1a1a1", 
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
              <Link href="#hero" className="nav-link">Inicio</Link>
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
              <div className="dropdown-menu" style={{ width: "500px", gridTemplateColumns: "repeat(2, 1fr)" }}>
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
                    Walk-in Closets
                  </h4>
                  <ul>
                    <li><Link href="/collections/vestidores">Vestidores Personalizados</Link></li>
                    <li><Link href="/collections/organizadores">Isletas Centrales</Link></li>
                    <li><Link href="/collections/tocadores">Tocadores Premium</Link></li>
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
                  </ul>
                </div>
              </div>
            </li>

            {/* HISTORIA (2021) */}
            <li className="nav-item">
              <Link href="#about" className="nav-link">Historia</Link>
            </li>

            {/* CONTACT */}
            <li className="nav-item">
              <Link href="#contact" className="nav-link">Contacto</Link>
            </li>
          </ul>
        </nav>

        {/* Action Button */}
        <div style={{ display: "none" }} className="desktop-btn">
          <Link href="#contact" className="btn-gold" style={{ fontSize: "0.75rem", padding: "10px 20px" }}>Presupuesto</Link>
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
          background: "rgba(8, 8, 8, 0.98)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid var(--card-border)",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          zIndex: 999
        }}>
          <Link href="#hero" onClick={() => setMobileMenuOpen(false)} style={{ fontFamily: "var(--font-serif)", fontSize: "1rem", borderBottom: "1px solid #1a1a1a", paddingBottom: "10px" }}>Inicio</Link>
          
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
                <Link href="/collections/camas" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: "0.85rem", color: "#a1a1a1" }}>Dormitorio - Camas</Link>
                <Link href="/collections/comedores" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: "0.85rem", color: "#a1a1a1" }}>Área Social - Comedores</Link>
                <Link href="/collections/escritorios" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: "0.85rem", color: "#a1a1a1" }}>Oficinas - Escritorios</Link>
              </div>
            )}
          </div>

          {/* Dropdown 2 */}
          <div>
            <div 
              onClick={() => toggleMobileDropdown("medida")} 
              style={{ display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer", borderBottom: "1px solid #1a1a1a", paddingBottom: "10px" }}
            >
              <span style={{ fontFamily: "var(--font-serif)", fontSize: "1rem" }}>A Medida</span>
              <ChevronDown size={16} style={{ transform: activeMobileDropdown === "medida" ? "rotate(180deg)" : "rotate(0)", transition: "0.3s" }} />
            </div>
            {activeMobileDropdown === "medida" && (
              <div style={{ paddingLeft: "15px", paddingTop: "10px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <Link href="/collections/cocinas" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: "0.85rem", color: "#a1a1a1" }}>Cocinas de Lujo</Link>
                <Link href="/collections/vestidores" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: "0.85rem", color: "#a1a1a1" }}>Walk-in Closets</Link>
              </div>
            )}
          </div>

          <Link href="#about" onClick={() => setMobileMenuOpen(false)} style={{ fontFamily: "var(--font-serif)", fontSize: "1rem", borderBottom: "1px solid #1a1a1a", paddingBottom: "10px" }}>Historia</Link>
          <Link href="#contact" onClick={() => setMobileMenuOpen(false)} style={{ fontFamily: "var(--font-serif)", fontSize: "1rem", borderBottom: "1px solid #1a1a1a", paddingBottom: "10px" }}>Contacto</Link>
          <Link href="#contact" onClick={() => setMobileMenuOpen(false)} className="btn-gold" style={{ textAlign: "center", marginTop: "10px" }}>Presupuesto</Link>
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
