"use client";

import React, { useState } from "react";
import Image from "next/image";

const categoryLabels: Record<string, string> = {
  "puertas-ventanas": "Puertas & Ventanas",
  "cocinas": "Cocinas",
  "dormitorios-closets": "Dormitorios & Closets",
  "oficina-otros": "Oficinas & Otros"
};

const PROJECTS = [
  {
    id: 1,
    title: "Puerta Principal Pivotante",
    category: "puertas-ventanas",
    wood: "Cedro Andino Seleccionado",
    fabric: "Herrajes de Acero Inoxidable Mate",
    image: "/galeria/puerta.jpeg",
    description: "Puerta de gran formato pivotante fabricada en cedro macizo para entrada principal de residencia.",
  },
  {
    id: 2,
    title: "Cocina Integral Premium",
    category: "cocinas",
    wood: "Melamina Pelíkan Gris y Madera",
    fabric: "Bisagras y Correderas de Cierre Suave",
    image: "/galeria/cosina.jpeg",
    description: "Mobiliario de cocina moderno con gabinetes de alta capacidad, optimizado según diseño de arquitecto.",
  },
  {
    id: 3,
    title: "Armarios y Closets Empotrados",
    category: "dormitorios-closets",
    wood: "Melamina de Alta Densidad",
    fabric: "Tiradores de Perfil de Aluminio Anodizado",
    image: "/galeria/armario_closet.png",
    description: "Organización de closet a medida con cajoneras ocultas y zapateras integradas en dormitorio principal.",
  },
  {
    id: 4,
    title: "Detalles de Acabado e Instalación",
    category: "oficina-otros",
    wood: "Roble y Melamina Texturizada",
    fabric: "Poliuretano de Alta Resistencia",
    image: "/galeria/acabados.png",
    description: "Instalación milimétrica en obra de muebles de oficina y estanterías con acabados de alta costura.",
  },
  {
    id: 5,
    title: "Escalera en Madera Maciza",
    category: "oficina-otros",
    wood: "Madera Maciza Tratada",
    fabric: "Pasamanos Ergonómico Integrado",
    image: "/galeria/escalera.jpeg",
    description: "Escalera autoportante de ebanistería fina con ensamble tradicional y estructura sólida.",
  },
  {
    id: 6,
    title: "Balcón y Ventanales Residenciales",
    category: "puertas-ventanas",
    wood: "Madera Tornillo Estufada",
    fabric: "Barniz Marino con Protección Filtro UV",
    image: "/galeria/balcon.jpeg",
    description: "Estructuras de marcos para ventanas y balcones resistentes a la intemperie.",
  }
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
          color: "var(--foreground)",
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
          { key: "puertas-ventanas", label: "Puertas y Ventanas" },
          { key: "cocinas", label: "Cocinas" },
          { key: "dormitorios-closets", label: "Dormitorios y Closets" },
          { key: "oficina-otros", label: "Oficinas y Otros" }
        ].map((btn) => (
              <button
            key={btn.key}
            onClick={() => setFilter(btn.key)}
            style={{
              background: filter === btn.key ? "var(--gold-metallic)" : "rgba(15, 15, 15, 0.6)",
                  color: filter === btn.key ? "#000" : "var(--foreground)",
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
                {categoryLabels[project.category] || project.category}
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
              <p style={{ fontSize: "0.85rem", color: "var(--foreground)", lineHeight: 1.5 }}>
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
                color: "var(--foreground)"
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
