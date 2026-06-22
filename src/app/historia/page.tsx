"use client";

import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { History, Hammer, Trees, Award, Heart } from "lucide-react";

export default function HistoriaPage() {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", position: "relative" }}>
      <Header />

      <main style={{ flexGrow: 1, padding: "140px 20px 80px 20px", position: "relative", zIndex: 2 }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

          {/* Hero Section */}
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <span style={{
              fontFamily: "var(--font-serif)",
              fontSize: "0.85rem",
              color: "var(--gold-primary)",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              display: "block",
              marginBottom: "12px"
            }}>
              Nuestra Trayectoria
            </span>
            <h1 style={{
              fontSize: "clamp(2.5rem, 5vw, 3.8rem)",
              lineHeight: 1.1,
              marginBottom: "20px",
              fontFamily: "var(--font-serif)"
            }}>
              Historia & <span className="gold-text">Esencia</span>
            </h1>
            <div style={{
              width: "80px",
              height: "1px",
              background: "linear-gradient(90deg, transparent, var(--gold-primary), transparent)",
              margin: "0 auto 20px"
            }} />
            <p style={{
              color: "var(--foreground)",
              maxWidth: "700px",
              margin: "0 auto",
              fontSize: "1.05rem",
              fontWeight: 300,
              lineHeight: 1.7
            }}>
              Desde nuestros inicios en Cajamarca, nos hemos dedicado a honrar el oficio de la ebanistería.
              Creamos piezas únicas que fusionan la nobleza de la madera maciza con la modernidad del co-diseño digital.
            </p>
          </div>

          {/* Narrative & Logo Grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "60px",
            alignItems: "center",
            marginBottom: "80px"
          }} className="about-grid">

            {/* Left: Brand Identity Showcase (Large Logo) */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "25px" }}>
              <div className="glass-panel logo-container" style={{
                position: "relative",
                width: "300px",
                height: "300px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid rgba(197, 165, 95, 0.2)",
                background: "radial-gradient(circle, rgba(20,18,15,0.85) 0%, rgba(10,9,8,0.98) 100%)",
                boxShadow: "0 15px 35px rgba(0, 0, 0, 0.6), inset 0 0 20px rgba(197, 165, 95, 0.03)",
                transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                padding: "45px"
              }}>
                <img
                  src="/logo/ebanis.png"
                  alt="Logo Ebanis"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    filter: "drop-shadow(0 4px 10px rgba(0,0,0,0.3))"
                  }}
                  className="large-logo"
                />
                {/* Rotating dashed ring */}
                <div style={{
                  position: "absolute",
                  top: "-5px",
                  left: "-5px",
                  right: "-5px",
                  bottom: "-5px",
                  border: "1px dashed rgba(197, 165, 95, 0.25)",
                  borderRadius: "50%",
                  pointerEvents: "none",
                  animation: "spin 40s linear infinite"
                }} />
              </div>

              {/* Foundational plaque */}
              <div className="glass-panel" style={{
                padding: "16px 28px",
                borderRadius: "30px",
                border: "1px solid rgba(255,255,255,0.06)",
                background: "rgba(15, 15, 15, 0.8)",
                display: "flex",
                alignItems: "center",
                gap: "12px"
              }}>
                <History size={16} style={{ color: "var(--gold-primary)" }} />
                <span style={{
                  fontSize: "0.8rem",
                  fontFamily: "var(--font-serif)",
                  letterSpacing: "0.05em",
                  color: "var(--foreground)"
                }}>
                  Atelier Fundado el <strong style={{ color: "var(--gold-primary)" }}>15 de Marzo, 2021</strong>
                </span>
              </div>
            </div>

            {/* Right: Narrative & Pillars */}
            <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
              <div>
                <span style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "0.85rem",
                  color: "var(--gold-primary)",
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  display: "block",
                  marginBottom: "8px"
                }}>
                  Nuestra Esencia
                </span>
                <h2 style={{
                  fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                  lineHeight: 1.2,
                  marginBottom: "20px",
                  fontFamily: "var(--font-serif)"
                }}>
                  Ebanistería fina con <br />
                  <span className="gold-text">alma y precisión</span>
                </h2>
                <div style={{
                  width: "60px",
                  height: "2px",
                  background: "var(--gold-primary)",
                  marginBottom: "25px"
                }} />

                <div style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "18px",
                  color: "var(--foreground)",
                  fontSize: "0.98rem",
                  lineHeight: "1.75",
                  fontWeight: 300
                }}>
                  <p>
                    Fundada el 15 de marzo de 2021 en la histórica ciudad de Cajamarca, Perú,
                    Ebanis Soluciones se ha establecido como un referente de diseño, elegancia y excelencia en la fabricación de mobiliario a medida.
                    Lo que comenzó como un apasionado taller de carpintería ha evolucionado en una firma especializada en transformar espacios residenciales y corporativos.
                  </p>
                  <p>
                    Nos especializamos en la fusión perfecta de la carpintería tradicional en maderas finas (como cedro, tornillo, pino) y la
                    versatilidad de la melamina de alta calidad. Diseñamos y fabricamos
                    puertas, ventanas, cocinas integrales, dormitorios, closets y mobiliario de oficina,
                    cuidando meticulosamente cada veta, línea y acabado para que coincida con tu visión de un espacio ideal.
                  </p>
                  <p>
                    En Ebanis creemos que el mobiliario es la columna vertebral que define la energía de tu entorno. Por ello,
                    combinamos un diseño 100% personalizado, precios competitivos y un catálogo versátil adaptado tanto a proyectos
                    del hogar como a los requerimientos técnicos y estéticos de arquitectos y diseñadores.
                  </p>
                </div>
              </div>

              {/* Pillars grid */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px" }}>
                <div className="glass-panel pillar-card" style={{
                  padding: "20px",
                  borderRadius: "6px",
                  border: "1px solid rgba(255,255,255,0.05)",
                  display: "flex",
                  gap: "15px",
                  alignItems: "flex-start",
                  transition: "all 0.3s ease"
                }}>
                  <div style={{
                    background: "rgba(197, 165, 95, 0.08)",
                    padding: "10px",
                    borderRadius: "4px",
                    color: "var(--gold-primary)",
                    flexShrink: 0
                  }}>
                    <Hammer size={18} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: "0.85rem", color: "#fff", marginBottom: "4px" }}>Artesanía de Precisión</h4>
                    <p style={{ fontSize: "0.75rem", color: "var(--foreground)", lineHeight: 1.4 }}>
                      Cortes perfectos, uniones ocultas y acabados finos y sedosos tallados a mano.
                    </p>
                  </div>
                </div>

                <div className="glass-panel pillar-card" style={{
                  padding: "20px",
                  borderRadius: "6px",
                  border: "1px solid rgba(255,255,255,0.05)",
                  display: "flex",
                  gap: "15px",
                  alignItems: "flex-start",
                  transition: "all 0.3s ease"
                }}>
                  <div style={{
                    background: "rgba(197, 165, 95, 0.08)",
                    padding: "10px",
                    borderRadius: "4px",
                    color: "var(--gold-primary)",
                    flexShrink: 0
                  }}>
                    <Trees size={18} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: "0.85rem", color: "#fff", marginBottom: "4px" }}>Sostenibilidad Exclusiva</h4>
                    <p style={{ fontSize: "0.75rem", color: "var(--foreground)", lineHeight: 1.4 }}>
                      Maderas nobles de origen legal con manejo forestal y reforestación responsable.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Ethics and Commitment Section */}
          <div style={{
            borderTop: "1px solid rgba(197,165,95,0.15)",
            paddingTop: "60px",
            position: "relative"
          }}>
            <div style={{ textAlign: "center", marginBottom: "45px" }}>
              <span style={{
                fontFamily: "var(--font-serif)",
                fontSize: "0.75rem",
                color: "var(--gold-primary)",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                display: "block",
                marginBottom: "8px"
              }}>
                Filosofía de Trabajo
              </span>
              <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)", marginBottom: "15px" }}>
                Nuestro Compromiso <span className="gold-text">Ético</span>
              </h2>
              <p style={{ color: "var(--foreground)", maxWidth: "600px", margin: "0 auto", fontSize: "0.9rem", fontWeight: 300, lineHeight: 1.6 }}>
                Crear muebles a medida no es solo un trabajo de carpintería; es la preservación de una tradición y el respeto por los recursos naturales de nuestra región.
              </p>
            </div>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "25px"
            }} className="ethics-grid">

              {/* Card 1 - Passion */}
              <div className="glass-panel pillar-card" style={{ padding: "30px 25px", borderRadius: "6px", border: "1px solid var(--card-border)", display: "flex", flexDirection: "column", gap: "15px", transition: "all 0.3s ease" }}>
                <div style={{ color: "var(--gold-primary)", width: "fit-content" }}><Heart size={24} /></div>
                <h3 style={{ fontSize: "1.1rem", color: "#fff" }}>Pasión por la Madera</h3>
                <p style={{ fontSize: "0.85rem", color: "var(--foreground)", lineHeight: 1.6, fontWeight: 300 }}>
                  Cada pieza de madera es única. Estudiamos sus vetas, nudos y comportamiento para aplicar la técnica de ensamblado y el aceite de acabado que mejor resalten su belleza orgánica innata.
                </p>
              </div>

              {/* Card 2 - Local Craft */}
              <div className="glass-panel pillar-card" style={{ padding: "30px 25px", borderRadius: "6px", border: "1px solid var(--card-border)", display: "flex", flexDirection: "column", gap: "15px", transition: "all 0.3s ease" }}>
                <div style={{ color: "var(--gold-primary)", width: "fit-content" }}><Award size={24} /></div>
                <h3 style={{ fontSize: "1.1rem", color: "#fff" }}>Maestría Ebanista</h3>
                <p style={{ fontSize: "0.85rem", color: "var(--foreground)", lineHeight: 1.6, fontWeight: 300 }}>
                  Trabajamos con artesanos locales de Cajamarca, rescatando técnicas tradicionales de ensamble de madera maciza (como la caja y espiga y cola de milano) para garantizar muebles que duren por generaciones.
                </p>
              </div>

              {/* Card 3 - Sustainability */}
              <div className="glass-panel pillar-card" style={{ padding: "30px 25px", borderRadius: "6px", border: "1px solid var(--card-border)", display: "flex", flexDirection: "column", gap: "15px", transition: "all 0.3s ease" }}>
                <div style={{ color: "var(--gold-primary)", width: "fit-content" }}><Trees size={24} /></div>
                <h3 style={{ fontSize: "1.1rem", color: "#fff" }}>Maderas Certificadas</h3>
                <p style={{ fontSize: "0.85rem", color: "var(--foreground)", lineHeight: 1.6, fontWeight: 300 }}>
                  Adquirimos madera exclusivamente de concesiones forestales reguladas y certificadas FSC®. Así, nos aseguramos de que el abastecimiento proteja el futuro ecológico de los bosques del Perú.
                </p>
              </div>

            </div>
          </div>

        </div>
      </main>

      <Footer />

      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .logo-container:hover {
          border-color: rgba(197, 165, 95, 0.4) !important;
          box-shadow: 0 20px 45px rgba(197, 165, 95, 0.12) !important;
          transform: scale(1.02) translateY(-4px);
        }
        .logo-container:hover .large-logo {
          transform: scale(1.04);
        }
        .large-logo {
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .pillar-card:hover {
          border-color: rgba(197, 165, 95, 0.35) !important;
          transform: translateY(-4px);
          background: rgba(255, 255, 255, 0.02) !important;
          box-shadow: 0 8px 25px rgba(197, 165, 95, 0.04);
        }
        @media (min-width: 992px) {
          .about-grid {
            grid-template-columns: 0.95fr 1.05fr !important;
            gap: 80px !important;
          }
        }
      `}</style>
    </div>
  );
}
