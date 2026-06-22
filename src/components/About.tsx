"use client";

import React from "react";
import { Hammer, Trees, History } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: "100px 20px",
        background: "rgba(8, 8, 8, 0.5)",
        borderTop: "1px solid var(--card-border)",
        borderBottom: "1px solid var(--card-border)",
        position: "relative"
      }}
    >
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "1fr",
        gap: "60px",
        alignItems: "center"
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
            {/* Elegant outer rotating border */}
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
              Establecido desde el <strong style={{ color: "var(--gold-primary)" }}>15 de Marzo, 2021</strong>
            </span>
          </div>
        </div>

        {/* Right: Narrative & Essence details */}
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
              fontSize: "clamp(2.2rem, 4vw, 3.2rem)",
              lineHeight: 1.15,
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
            }} className="narrative-text">
              <p>
                Fundada el 15 de marzo de 2021 en la histórica ciudad de Cajamarca, Perú,
                Ebanis se ha establecido como un referente de diseño, elegancia y excelencia en la fabricación de mobiliario a medida.
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

          {/* Pillars: Precision & Sustainability */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px",
            marginTop: "10px"
          }}>
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
                <Hammer size={20} />
              </div>
              <div>
                <h4 style={{ fontSize: "0.9rem", color: "#fff", marginBottom: "4px" }}>Artesanía de Precisión</h4>
                <p style={{ fontSize: "0.8rem", color: "var(--foreground)", lineHeight: 1.4 }}>
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
                <Trees size={20} />
              </div>
              <div>
                <h4 style={{ fontSize: "0.9rem", color: "#fff", marginBottom: "4px" }}>Sostenibilidad Exclusiva</h4>
                <p style={{ fontSize: "0.8rem", color: "var(--foreground)", lineHeight: 1.4 }}>
                  Maderas nobles de origen legal con manejo forestal y reforestación responsable.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>

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
          transform: translateY(-2px);
          background: rgba(255, 255, 255, 0.02) !important;
        }
        @media (min-width: 992px) {
          .about-grid {
            grid-template-columns: 0.95fr 1.05fr !important;
            gap: 80px !important;
          }
        }
      `}</style>
    </section>
  );
}
