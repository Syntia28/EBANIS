"use client";

import React, { useState } from "react";
import Image from "next/image";

const categoryLabels: Record<string, string> = {
  "puertas-ventanas":    "Puertas & Ventanas",
  "cocinas":             "Cocinas",
  "dormitorios-closets": "Dormitorios & Closets",
  "oficina-otros":       "Oficinas & Otros",
};

const PROJECTS = [
  { id:1, title:"Puerta Principal Pivotante",       category:"puertas-ventanas",    wood:"Cedro Andino Seleccionado",           fabric:"Herrajes de Acero Inoxidable Mate",          image:"/galeria/puerta.jpeg",        description:"Puerta de gran formato pivotante fabricada en cedro macizo para entrada principal de residencia." },
  { id:2, title:"Cocina Integral Premium",           category:"cocinas",             wood:"Melamina Pelíkan Gris y Madera",      fabric:"Bisagras y Correderas de Cierre Suave",      image:"/galeria/cosina.jpeg",        description:"Mobiliario de cocina moderno con gabinetes de alta capacidad, optimizado según diseño de arquitecto." },
  { id:3, title:"Armarios y Closets Empotrados",    category:"dormitorios-closets", wood:"Melamina de Alta Densidad",           fabric:"Tiradores de Perfil de Aluminio Anodizado",  image:"/galeria/armario_closet.png", description:"Organización de closet a medida con cajoneras ocultas y zapateras integradas." },
  { id:4, title:"Detalles de Acabado e Instalación",category:"oficina-otros",       wood:"Roble y Melamina Texturizada",        fabric:"Poliuretano de Alta Resistencia",            image:"/galeria/acabados.png",       description:"Instalación milimétrica en obra de muebles de oficina y estanterías con acabados de alta costura." },
  { id:5, title:"Escalera en Madera Maciza",         category:"oficina-otros",      wood:"Madera Maciza Tratada",               fabric:"Pasamanos Ergonómico Integrado",             image:"/galeria/escalera.jpeg",      description:"Escalera autoportante de ebanistería fina con ensamble tradicional y estructura sólida." },
  { id:6, title:"Balcón y Ventanales Residenciales", category:"puertas-ventanas",   wood:"Madera Tornillo Estufada",            fabric:"Barniz Marino con Protección UV",            image:"/galeria/balcon.jpeg",        description:"Estructuras de marcos para ventanas y balcones resistentes a la intemperie." },
];

const CATEGORIES = [
  { key:"all",                label:"Todos" },
  { key:"puertas-ventanas",   label:"Puertas & Ventanas" },
  { key:"cocinas",            label:"Cocinas" },
  { key:"dormitorios-closets",label:"Dormitorios & Closets" },
  { key:"oficina-otros",      label:"Oficinas & Otros" },
];

export default function Gallery() {
  const [filter,  setFilter]  = useState("all");

  const filtered = filter === "all" ? PROJECTS : PROJECTS.filter(p => p.category === filter);

  return (
    <section
      id="catalog"
      className="gallery-mesh-wrapper"
    >
      {/* Warm animated orbs */}
      <div className="gallery-mesh-bg" aria-hidden>
        <div className="gallery-orb gallery-orb-1" />
        <div className="gallery-orb gallery-orb-2" />
        <div className="gallery-orb gallery-orb-3" />
      </div>

      <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 1 }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginBottom: "14px" }}>
            <div style={{ flex: "0 0 36px", height: "1px", background: "linear-gradient(90deg, transparent, rgba(197,165,95,0.6))" }} />
            <span style={{ fontFamily: "var(--font-serif)", fontSize: "0.7rem", color: "var(--gold-primary)", letterSpacing: "0.3em", textTransform: "uppercase" }}>
              Nuestras Creaciones
            </span>
            <div style={{ flex: "0 0 36px", height: "1px", background: "linear-gradient(90deg, rgba(197,165,95,0.6), transparent)" }} />
          </div>
          <h2 style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.4rem)", lineHeight: 1.06, marginBottom: "18px", color: "var(--foreground)" }}>
            Diseños de{" "}
            <span className="gold-text">Colección</span>
          </h2>
          <p style={{ color: "var(--fg-muted)", maxWidth: "520px", margin: "0 auto", fontSize: "1rem", fontWeight: 300, lineHeight: 1.72 }}>
            Cada pieza representa una solución única y personalizada, confeccionada con
            precisión y acabados de lujo para espacios sofisticados.
          </p>
        </div>

        {/* Filter Pills */}
        <div style={{ display: "flex", justifyContent: "center", gap: "8px", marginBottom: "52px", flexWrap: "wrap" }}>
          {CATEGORIES.map(cat => {
            const active = filter === cat.key;
            return (
              <button
                key={cat.key}
                id={`gallery-filter-${cat.key}`}
                onClick={() => setFilter(cat.key)}
                style={{
                  padding: "9px 22px", borderRadius: "999px",
                  fontFamily: "var(--font-serif)", fontSize: "0.72rem",
                  letterSpacing: "0.1em", textTransform: "uppercase",
                  cursor: "pointer",
                  transition: "all 0.3s cubic-bezier(0.16,1,0.3,1)",
                  borderWidth: "1px",
                  borderStyle: "solid",
                  borderLeftColor: active ? "rgba(197,165,95,0.55)" : "rgba(255,255,255,0.88)",
                  borderRightColor: active ? "rgba(197,165,95,0.55)" : "rgba(255,255,255,0.88)",
                  borderBottomColor: active ? "rgba(197,165,95,0.55)" : "rgba(255,255,255,0.88)",
                  borderTopColor: active ? "rgba(197,165,95,0.7)" : "rgba(255,255,255,0.98)",
                  background: active
                    ? "linear-gradient(135deg, rgba(197,165,95,0.18), rgba(160,110,30,0.12))"
                    : "rgba(255,252,244,0.62)",
                  backdropFilter: "blur(20px)",
                  color: active ? "var(--gold-dark)" : "var(--fg-muted)",
                  boxShadow: active
                    ? "0 4px 16px rgba(100,60,10,0.14), 0 1px 0 rgba(255,255,255,0.9) inset"
                    : "0 2px 10px rgba(100,60,10,0.06), 0 1px 0 rgba(255,255,255,0.95) inset",
                  transform: active ? "translateY(-2px)" : "none",
                  fontWeight: active ? 600 : 400,
                }}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Cards Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(360px, 360px))", gap: "28px", justifyContent: "center" }}>
          {filtered.map(project => {
            return (
              <div
                key={project.id}
                id={`project-card-${project.id}`}
                className="gallery-card-wrap animate pop"
              >
                {/* Overlay Container (Slides Left on Hover) */}
                <div className="gallery-card-overlay">
                  
                  {/* Left Pane (Counter-translates right on hover) */}
                  <div className="gallery-card-overlay-content animate slide-left delay-2">
                    <h3 className="gallery-card-cat">
                      {categoryLabels[project.category] || project.category}
                    </h3>
                    <div className="gallery-card-brand">EBANIS</div>
                  </div>

                  {/* Image Pane (Shrinks width on hover) */}
                  <div className="gallery-card-image-content animate slide delay-4">
                    <Image
                      src={project.image} alt={project.title} fill
                      sizes="(max-width:768px) 100vw, 33vw"
                      style={{ objectFit: "cover" }}
                      priority={project.id <= 3}
                    />
                    <div className="gallery-card-image-tint" />
                  </div>

                  {/* Decorative Dots */}
                  <div className="gallery-card-dots animate">
                    <div className="gallery-card-dot animate slide-up delay-5" />
                    <div className="gallery-card-dot animate slide-up delay-6" />
                    <div className="gallery-card-dot animate slide-up delay-7" />
                  </div>
                </div>

                {/* Text Pane (Revealed on the right when Overlay slides left) */}
                <div className="gallery-card-text-content">
                  <h4 className="gallery-card-title">{project.title}</h4>
                  <p className="gallery-card-desc">{project.description}</p>
                  
                  {/* Material tags */}
                  <div className="gallery-card-materials">
                    <div><span>Madera:</span> {project.wood}</div>
                    <div><span>Herrajes:</span> {project.fabric}</div>
                  </div>

                  {/* CTA Button */}
                  <a
                    href={`https://wa.me/51945876123?text=Hola%20Ebanis%20Soluciones,%20quiero%20cotizar%20\"${encodeURIComponent(project.title)}\".`}
                    target="_blank" rel="noopener noreferrer"
                    id={`quote-btn-${project.id}`}
                    className="gallery-card-cta btn-gold"
                  >
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Cotizar
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        /* =========================================================
           Gallery Hover Animation Logic (CodePen adaptation)
           ========================================================= */

        /* Card Container */
        .gallery-card-wrap {
          position: relative;
          width: 100%;
          height: 350px;
          border-radius: 24px;
          overflow: hidden;
          background: rgba(255, 252, 244, 0.72);
          isolation: isolate;

          /* Gradient Border Trick for rounded corners */
          border: 4px solid transparent;
          background: 
            linear-gradient(rgba(255, 252, 244, 1), rgba(255, 252, 244, 1)) padding-box,
            var(--gold-iridescent) border-box;
          
          box-shadow: 0 8px 32px rgba(100, 60, 10, 0.15);
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s;
        }
        .gallery-card-wrap:hover {
          transform: translateY(-8px) scale(1.01);
          box-shadow: 0 24px 60px rgba(100, 60, 10, 0.2);
        }

        /* The Overlay (Holds Left Pane, Image, and Dots) */
        .gallery-card-overlay {
          position: absolute;
          top: 0; left: 0;
          width: 100%;
          height: 100%;
          background: hsl(30, 65%, 15%); /* Dark luxury background behind image if transparent */
          z-index: 2;
          transition: 0.4s cubic-bezier(0.26, 0.53, 0.74, 1);
        }

        /* Hover: The overlay shifts left exactly by the width of the text pane. */
        /* Text pane width is calc(100% - 175px). So we shift left by calc(-100% + 175px). */
        .gallery-card-wrap:hover .gallery-card-overlay {
          transform: translateX(calc(-100% + 175px));
        }

        /* Left Pane (Inside Overlay) */
        .gallery-card-overlay-content {
          position: absolute;
          top: 0; left: 0;
          width: 75px;
          height: 100%;
          background: linear-gradient(180deg, hsl(32, 60%, 25%), hsl(30, 65%, 15%));
          border-right: 1px solid rgba(255, 255, 255, 0.08);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 24px 10px;
          z-index: 3;
          transition: 0.4s cubic-bezier(0.26, 0.53, 0.74, 1) 0.05s;
        }

        /* Hover: To stay pinned, it counter-translates right by the text pane width */
        .gallery-card-wrap:hover .gallery-card-overlay-content {
          transform: translateX(calc(100% - 175px));
          border-right-color: transparent;
        }

        /* Category Label */
        .gallery-card-cat {
          font-family: var(--font-serif);
          font-size: 0.6rem;
          color: var(--gold-light);
          letter-spacing: 0.18em;
          text-transform: uppercase;
          writing-mode: vertical-rl;
          text-orientation: mixed;
          transform: rotate(180deg);
          margin: 0 auto;
          opacity: 0.9;
          line-height: 1.5;
        }

        /* Brand Label */
        .gallery-card-brand {
          font-family: var(--font-serif);
          font-size: 0.56rem;
          color: var(--gold-light);
          font-weight: 700;
          letter-spacing: 0.22em;
          text-align: center;
        }

        /* Image Content (Inside Overlay, to the right of Left Pane) */
        .gallery-card-image-content {
          position: absolute;
          top: 0; right: 0;
          width: calc(100% - 75px);
          height: 100%;
          transition: 0.4s cubic-bezier(0.26, 0.53, 0.74, 1);
          z-index: 2;
        }

        /* Hover: The image squeezes its width to fit in the 100px gap (between 75px and 175px). 
           We use 130px to slightly overlap under the left pane and look seamless. */
        .gallery-card-wrap:hover .gallery-card-image-content {
          width: 130px;
        }

        /* Gradients over the image */
        .gallery-card-image-tint {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, transparent 40%, rgba(20, 10, 0, 0.55) 100%);
          pointer-events: none;
        }

        /* Decorative Dots */
        .gallery-card-dots {
          position: absolute;
          bottom: 16px;
          right: 20px;
          display: flex;
          gap: 6px;
          transition: 0.4s cubic-bezier(0.26, 0.53, 0.74, 1) 0.1s;
          z-index: 4;
        }

        /* Hover: Shift dots right and change color */
        .gallery-card-wrap:hover .gallery-card-dots {
          transform: translateX(12px);
        }

        .gallery-card-dot {
          width: 7px;
          height: 7px;
          background: var(--gold-primary);
          border: 1px solid var(--gold-dark);
          border-radius: 50%;
          transition: 0.4s cubic-bezier(0.26, 0.53, 0.74, 1) 0.1s;
        }
        
        .gallery-card-wrap:hover .gallery-card-dot {
          background: #fff;
          border-color: #fff;
        }

        /* Text Pane (Sibling to Overlay, positioned behind it on the right) */
        .gallery-card-text-content {
          position: absolute;
          top: 0; right: 0;
          width: calc(100% - 175px);
          height: 100%;
          background: rgba(255, 253, 248, 0.95);
          padding: 24px 20px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          z-index: 1; /* Under the overlay */
          overflow-y: auto;
          box-shadow: inset 1px 1px 15px rgba(100, 60, 10, 0.05);
        }

        /* Inside text elements */
        .gallery-card-title {
          font-family: var(--font-serif);
          font-size: 0.92rem;
          color: var(--foreground);
          letter-spacing: 0.04em;
          margin: 0;
          font-weight: 600;
          line-height: 1.35;
        }

        .gallery-card-desc {
          font-size: 0.76rem;
          color: var(--fg-muted);
          line-height: 1.6;
          margin: 0;
          font-weight: 300;
        }

        .gallery-card-materials {
          border-top: 1px solid rgba(197, 165, 95, 0.18);
          padding-top: 12px;
          display: flex;
          flex-direction: column;
          gap: 4px;
          font-size: 0.72rem;
          color: var(--fg-muted);
        }

        .gallery-card-materials span {
          color: var(--gold-primary);
          font-family: var(--font-serif);
        }

        .gallery-card-cta {
          margin-top: auto;
          width: fit-content;
          font-size: 0.68rem;
          padding: 8px 18px;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        /* =========================================================
           Entry Animations
           ========================================================= */
        .animate {
          animation-duration: 0.55s;
          animation-timing-function: cubic-bezier(0.26, 0.53, 0.74, 1.3);
          animation-fill-mode: backwards;
        }

        .pop { animation-name: pop; }
        @keyframes pop {
          0% { opacity: 0; transform: scale(0.9); }
          100% { opacity: 1; transform: scale(1); }
        }

        .slide { animation-name: slide; }
        @keyframes slide {
          0% { opacity: 0; transform: translate(30px, 0); }
          100% { opacity: 1; transform: translate(0, 0); }
        }

        .slide-left { animation-name: slide-left; }
        @keyframes slide-left {
          0% { opacity: 0; transform: translate(-30px, 0); }
          100% { opacity: 1; transform: translate(0, 0); }
        }

        .slide-up { animation-name: slide-up; }
        @keyframes slide-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        /* Optimized short delays for snappiness */
        .delay-1 { animation-delay: 0.05s; }
        .delay-2 { animation-delay: 0.1s; }
        .delay-3 { animation-delay: 0.15s; }
        .delay-4 { animation-delay: 0.2s; }
        .delay-5 { animation-delay: 0.25s; }
        .delay-6 { animation-delay: 0.3s; }
        .delay-7 { animation-delay: 0.35s; }

        @media (max-width: 768px) {
          .gallery-mesh-wrapper { padding: 80px 16px 70px !important; }
        }
      `}</style>
    </section>
  );
}
