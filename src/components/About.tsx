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
        
        {/* Left: Graphic Card / History Accent */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div className="glass-panel" style={{
            padding: "40px",
            borderLeft: "4px solid var(--gold-primary)",
            maxWidth: "480px",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "25px"
          }}>
            <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
              <div style={{
                background: "rgba(197, 165, 95, 0.1)",
                padding: "12px",
                borderRadius: "4px",
                color: "var(--gold-primary)"
              }}>
                <History size={24} />
              </div>
              <div>
                <span style={{ fontSize: "0.75rem", color: "hsl(0,0%,50%)", textTransform: "uppercase", letterSpacing: "0.1em" }}>Hito Fundacional</span>
                <h3 style={{ fontSize: "1.1rem", marginTop: "2px" }}>15 de Marzo de 2021</h3>
              </div>
            </div>

            <p style={{ fontSize: "0.9rem", color: "hsl(0, 0%, 75%)", lineHeight: 1.6, fontStyle: "italic" }}>
              "Ebanis Soluciones nació en Cajamarca de la pasión por transformar maderas brutas en obras de arte funcionales. 
              Hoy, fusionamos la ebanistería tradicional con tecnologías 3D avanzadas para crear experiencias inmersivas."
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
              <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                <Hammer size={18} style={{ color: "var(--gold-primary)", marginTop: "2px" }} />
                <div>
                  <h4 style={{ fontSize: "0.8rem", color: "#fff" }}>Artesanía de Precisión</h4>
                  <p style={{ fontSize: "0.75rem", color: "hsl(0,0%,60%)" }}>Cortes perfectos, uniones ocultas y acabados finos y sedosos.</p>
                </div>
              </div>
              <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                <Trees size={18} style={{ color: "var(--gold-primary)", marginTop: "2px" }} />
                <div>
                  <h4 style={{ fontSize: "0.8rem", color: "#fff" }}>Sostenibilidad Exclusiva</h4>
                  <p style={{ fontSize: "0.75rem", color: "hsl(0,0%,60%)" }}>Madera noble obtenida bajo prácticas responsables y reforestación.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Narrative */}
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
              Nuestra Esencia
            </span>
            <h2 style={{ 
              fontSize: "clamp(2rem, 4vw, 3rem)", 
              lineHeight: 1.2,
              marginBottom: "20px"
            }}>
              Ebanistería fina con <br />
              <span className="gold-text">alma y precisión</span>
            </h2>
            <div style={{
              display: "flex",
              flexDirection: "column",
              gap: "15px",
              color: "hsl(0,0%,75%)",
              fontSize: "0.95rem",
              lineHeight: "1.7",
              fontWeight: 300
            }}>
              <p>
                Fundada el **15 de marzo de 2021** en la histórica ciudad de **Cajamarca, Perú**, 
                Ebanis Soluciones se ha establecido como un referente de diseño, elegancia y excelencia 
                en la fabricación de mobiliario a medida. Lo que comenzó como un pequeño taller familiar 
                impulsado por ebanistas experimentados ha evolucionado en una firma de diseño de interiores 
                y fabricación especializada.
              </p>
              <p>
                Nos especializamos en el tratamiento de maderas preciosas como el cedro, la caoba, el nogal, 
                el ébano y el roble, aplicando técnicas clásicas de ensamble que aseguran que cada mueble dure 
                por generaciones. Al mismo tiempo, incorporamos tecnología de modelado 3D interactivo y textiles 
                inteligentes de la más alta gama global para ofrecer soluciones completas y personalizadas.
              </p>
              <p>
                Creemos que el mobiliario no es simplemente algo de relleno en una habitación, sino la columna vertebral 
                que define la energía y la elegancia de tus espacios. Por ello, cada línea, veta de madera y acabado de tapizado 
                es cuidado meticulosamente para coincidir con tu visión de hogar ideal.
              </p>
            </div>
          </div>
        </div>

      </div>

      <style jsx>{`
        @media (min-width: 992px) {
          .about-grid {
            grid-template-columns: 0.9fr 1.1fr !important;
            gap: 80px !important;
          }
        }
      `}</style>
    </section>
  );
}
