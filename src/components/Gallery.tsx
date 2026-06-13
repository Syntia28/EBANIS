"use client";

import React, { useState } from "react";
import Image from "next/image";

const PROJECTS = [
  {
    id: 1,
    title: "Dormitorio Royal Oak",
    category: "bedroom",
    wood: "Roble Natural y Ébano",
    fabric: "Lino Crema (Twinbru Linen)",
    image: "/bedroom.png",
    description: "Cama y mesas de noche integradas con acentos dorados y cabecera de lino premium texturizada.",
  },
  {
    id: 2,
    title: "Cocina Charcoal Elegance",
    category: "kitchen",
    wood: "Ébano Carbonizado",
    fabric: "Acero y Latón Pulido",
    image: "/kitchen.png",
    description: "Gabinetes minimalistas de roble oscuro con iluminación LED cálida y tiradores de oro pulido.",
  },
  {
    id: 3,
    title: "Sillón Emerald Accent",
    category: "living",
    wood: "Nogal Macizo",
    fabric: "Terciopelo Esmeralda (Twinbru Velvet)",
    image: "/armchair.png",
    description: "Sillón de lectura ergonómico con patas estilizadas de nogal y puntas de bronce torneadas a mano.",
  },
];

export default function Gallery() {
  const [filter, setFilter] = useState("all");

  const filteredProjects = filter === "all" 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <section 
      id="catalog" 
      style={{
        padding: "100px 20px 80px 20px",
        maxWidth: "1200px",
        margin: "0 auto",
        position: "relative"
      }}
    >
      {/* Title & Introduction */}
      <div style={{ textAlign: "center", marginBottom: "50px" }}>
        <span style={{ 
          fontFamily: "var(--font-serif)", 
          fontSize: "0.85rem", 
          color: "var(--gold-primary)", 
          letterSpacing: "0.25em",
          textTransform: "uppercase",
          display: "block",
          marginBottom: "10px"
        }}>
          Nuestras Creaciones
        </span>
        <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)", marginBottom: "15px" }}>
          Diseños de <span className="gold-text">Colección</span>
        </h2>
        <p style={{
          color: "hsl(0,0%,70%)",
          maxWidth: "600px",
          margin: "0 auto",
          fontSize: "0.95rem",
          fontWeight: 300,
          lineHeight: 1.6
        }}>
          Explora algunos de nuestros proyectos emblemáticos. Cada pieza representa una solución 
          única y personalizada, confeccionada con precisión digital y acabados de lujo.
        </p>
      </div>

      {/* Filters */}
      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "12px",
        marginBottom: "40px",
        flexWrap: "wrap"
      }}>
        {[
          { key: "all", label: "Todos" },
          { key: "bedroom", label: "Dormitorio" },
          { key: "kitchen", label: "Cocina" },
          { key: "living", label: "Sala de Estar" }
        ].map((btn) => (
          <button
            key={btn.key}
            onClick={() => setFilter(btn.key)}
            style={{
              background: filter === btn.key ? "var(--gold-metallic)" : "rgba(15, 15, 15, 0.6)",
              color: filter === btn.key ? "#000" : "hsl(0,0%,85%)",
              border: filter === btn.key ? "none" : "1px solid var(--card-border)",
              padding: "8px 20px",
              fontFamily: "var(--font-serif)",
              fontSize: "0.8rem",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              cursor: "pointer",
              transition: "var(--transition-fast)",
              boxShadow: filter === btn.key ? "0 4px 15px rgba(197, 165, 95, 0.2)" : "none"
            }}
          >
            {btn.label}
          </button>
        ))}
      </div>

      {/* Grid of Projects */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
        gap: "30px"
      }}>
        {filteredProjects.map((project) => (
          <div 
            key={project.id} 
            className="glass-panel card-item"
            style={{
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              borderRadius: "4px"
            }}
          >
            {/* Image Container */}
            <div style={{
              width: "100%",
              height: "280px",
              position: "relative",
              overflow: "hidden"
            }}>
              <Image 
                src={project.image} 
                alt={project.title}
                fill
                style={{
                  objectFit: "cover",
                  transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)"
                }}
                className="project-img"
              />
              {/* Category Tag */}
              <span style={{
                position: "absolute",
                top: "15px",
                left: "15px",
                background: "rgba(10, 10, 10, 0.85)",
                border: "1px solid var(--gold-primary)",
                color: "var(--gold-primary)",
                padding: "4px 12px",
                fontSize: "0.65rem",
                fontFamily: "var(--font-serif)",
                letterSpacing: "0.1em",
                textTransform: "uppercase"
              }}>
                {project.category === "bedroom" ? "Dormitorio" : project.category === "kitchen" ? "Cocina" : "Sala"}
              </span>
            </div>

            {/* Project Details */}
            <div style={{
              padding: "25px",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              flexGrow: 1
            }}>
              <h3 style={{ fontSize: "1.1rem", color: "var(--foreground)" }}>{project.title}</h3>
              <p style={{ fontSize: "0.85rem", color: "hsl(0,0%,70%)", lineHeight: 1.5 }}>
                {project.description}
              </p>

              {/* Material tags */}
              <div style={{
                display: "flex",
                flexDirection: "column",
                gap: "6px",
                marginTop: "10px",
                paddingTop: "15px",
                borderTop: "1px solid rgba(255,255,255,0.06)",
                fontSize: "0.75rem",
                color: "hsl(0,0%,55%)"
              }}>
                <div>
                  <strong style={{ color: "var(--gold-primary)", fontFamily: "var(--font-serif)" }}>Madera:</strong> {project.wood}
                </div>
                <div>
                  <strong style={{ color: "var(--gold-primary)", fontFamily: "var(--font-serif)" }}>Textiles:</strong> {project.fabric}
                </div>
              </div>

              {/* CTA button inside card */}
              <a 
                href={`https://wa.me/51945876123?text=Hola%20Ebanis%20Soluciones,%20quiero%20cotizar%20el%20diseño%20del%20proyecto%20"${encodeURIComponent(project.title)}".`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  marginTop: "15px",
                  display: "inline-block",
                  textAlign: "center",
                  fontSize: "0.75rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  fontWeight: 600,
                  color: "var(--gold-primary)",
                  borderBottom: "1px solid var(--gold-primary)",
                  paddingBottom: "4px",
                  width: "fit-content",
                  transition: "var(--transition-fast)"
                }}
                className="card-cta"
              >
                Cotizar Diseño
              </a>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .card-item:hover .project-img {
          transform: scale(1.08);
        }
        .card-item:hover {
          border-color: var(--gold-primary);
          box-shadow: 0 10px 30px rgba(197, 165, 95, 0.08);
        }
        .card-cta:hover {
          color: #fff;
          border-color: #fff;
          padding-left: 5px;
        }
      `}</style>
    </section>
  );
}
