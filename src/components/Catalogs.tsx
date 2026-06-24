"use client";

import React, { useState, useEffect } from "react";
import { BookOpen, Download, Eye, X } from "lucide-react";
import { motion } from "framer-motion";

interface CatalogItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  pdfUrl: string;
  imageUrl: string;
  features: string[];
}

const CATALOGS: CatalogItem[] = [
  {
    id: "cocina",
    title: "Catálogo de Cocinas",
    subtitle: "Cocinas de Lujo & Funcionales",
    description: "Sistemas integrados de alta gama con herrajes de cierre suave, optimización milimétrica, iluminación difusa LED e islas esculturales en madera selecta.",
    pdfUrl: "/pdf/COCINA.pdf",
    imageUrl: "/galeria/cosina.jpeg",
    features: ["Herrajes Blum", "Núcleos Hidrófugos", "Acabados de Lujo"],
  },
  {
    id: "closet",
    title: "Catálogo de Closets",
    subtitle: "Armarios & Walk-in Closets",
    description: "Diseños inteligentes de piso a techo, vestidores boutique en cedro aromático y cajoneras suspendidas con iluminación interior integrada.",
    pdfUrl: "/pdf/CLOSET.pdf",
    imageUrl: "/galeria/armario_closet.png",
    features: ["Cedro Aromático", "Iluminación Inteligente", "Herrajes Premium"],
  },
];

const headerVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

const gridContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.85,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export default function Catalogs() {
  const [activePdf, setActivePdf] = useState<string | null>(null);
  const [pdfTitle, setPdfTitle] = useState<string>("");
  const [isIframeLoading, setIsIframeLoading] = useState<boolean>(true);

  // Disable body scroll when modal is active
  useEffect(() => {
    if (activePdf) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activePdf]);

  const openPdf = (pdfUrl: string, title: string) => {
    setIsIframeLoading(true);
    setActivePdf(pdfUrl);
    setPdfTitle(title);
  };

  const closePdf = () => {
    setActivePdf(null);
    setPdfTitle("");
  };

  return (
    <section
      id="catalog"
      style={{
        padding: "110px 20px",
        position: "relative",
        overflow: "hidden",
        borderTop: "1px solid rgba(197, 165, 95, 0.15)",
      }}
    >
      {/* Ambient warm light spots matching EBANIS style */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "60vw",
          height: "60vw",
          background: "radial-gradient(circle, hsla(38, 80%, 78%, 0.25) 0%, transparent 70%)",
          filter: "blur(100px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Section Header (Animate on View) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-12%" }}
          variants={headerVariants}
          style={{ textAlign: "center", marginBottom: "56px" }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "12px",
              marginBottom: "14px",
            }}
          >
            <div
              style={{
                flex: "0 0 36px",
                height: "1px",
                background: "linear-gradient(90deg, transparent, rgba(197,165,95,0.6))",
              }}
            />
            <span
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "0.7rem",
                color: "var(--gold-primary)",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
              }}
            >
              Líneas de Diseño
            </span>
            <div
              style={{
                flex: "0 0 36px",
                height: "1px",
                background: "linear-gradient(90deg, rgba(197,165,95,0.6), transparent)",
              }}
            />
          </div>
          <h2
            style={{
              fontSize: "clamp(2.2rem, 4.5vw, 3.4rem)",
              lineHeight: 1.06,
              marginBottom: "18px",
              color: "var(--foreground)",
            }}
          >
            Catálogos <span className="gold-text">Exclusivos</span>
          </h2>
          <p
            style={{
              color: "var(--fg-muted)",
              maxWidth: "580px",
              margin: "0 auto",
              fontSize: "1rem",
              fontWeight: 300,
              lineHeight: 1.72,
            }}
          >
            Explore nuestras propuestas de alta costura para el hogar. Visualice en tiempo real o descargue
            nuestras colecciones selectas de cocinas a medida y sistemas de closets.
          </p>
        </motion.div>

        {/* Catalogs Grid (Animate with staggered items on View) */}
        <motion.div
          className="catalogs-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-12%" }}
          variants={gridContainerVariants}
        >
          {CATALOGS.map((catalog) => (
            <motion.div
              key={catalog.id}
              className="catalog-card"
              variants={cardVariants}
            >
              {/* Image Preview with Hover Zoom */}
              <div className="catalog-img-container">
                <img
                  src={catalog.imageUrl}
                  alt={catalog.title}
                  className="catalog-img"
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(28, 20, 10, 0.45) 0%, transparent 60%)",
                    display: "flex",
                    alignItems: "flex-end",
                    padding: "20px",
                  }}
                >
                  <div
                    style={{
                      background: "rgba(255, 252, 244, 0.85)",
                      backdropFilter: "blur(8px)",
                      borderRadius: "8px",
                      padding: "6px 12px",
                      fontSize: "0.75rem",
                      fontFamily: "var(--font-serif)",
                      color: "var(--gold-dark)",
                      letterSpacing: "0.05em",
                      border: "1px solid rgba(197, 165, 95, 0.3)",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                  >
                    <BookOpen size={13} />
                    {catalog.subtitle}
                  </div>
                </div>
              </div>

              {/* Title & Description */}
              <h3
                style={{
                  fontSize: "1.4rem",
                  color: "var(--foreground)",
                  marginBottom: "10px",
                  fontWeight: 600,
                }}
              >
                {catalog.title}
              </h3>
              <p
                style={{
                  color: "var(--fg-muted)",
                  fontSize: "0.92rem",
                  lineHeight: 1.6,
                  fontWeight: 300,
                  marginBottom: "20px",
                  flexGrow: 1,
                }}
              >
                {catalog.description}
              </p>

              {/* Pill tags */}
              <div
                style={{
                  display: "flex",
                  gap: "8px",
                  marginBottom: "28px",
                  flexWrap: "wrap",
                }}
              >
                {catalog.features.map((feat, idx) => (
                  <span
                    key={idx}
                    style={{
                      background: "rgba(197, 165, 95, 0.07)",
                      border: "1px solid rgba(197, 165, 95, 0.15)",
                      color: "var(--gold-primary)",
                      padding: "4px 10px",
                      borderRadius: "6px",
                      fontSize: "0.72rem",
                      fontWeight: 500,
                      letterSpacing: "0.02em",
                    }}
                  >
                    {feat}
                  </span>
                ))}
              </div>

              {/* CTA Buttons */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1.2fr 0.8fr",
                  gap: "12px",
                  width: "100%",
                }}
              >
                <button
                  onClick={() => openPdf(catalog.pdfUrl, catalog.title)}
                  className="btn-gold"
                  style={{
                    padding: "12px 20px",
                    fontSize: "0.78rem",
                    justifyContent: "center",
                    gap: "8px",
                  }}
                  id={`btn-view-${catalog.id}`}
                >
                  <Eye size={15} />
                  Visualizar
                </button>
                <a
                  href={catalog.pdfUrl}
                  download
                  className="btn-outline"
                  style={{
                    padding: "12px 14px",
                    fontSize: "0.78rem",
                    justifyContent: "center",
                    gap: "6px",
                  }}
                  id={`btn-download-${catalog.id}`}
                >
                  <Download size={14} />
                  Descargar
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Full-Screen PDF Modal */}
      {activePdf && (
        <div
          className="pdf-modal-overlay"
          onClick={closePdf}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="pdf-modal-container"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "16px 28px",
                background: "rgba(255, 253, 248, 0.9)",
                borderBottom: "1px solid rgba(197, 165, 95, 0.18)",
                backdropFilter: "blur(10px)",
                position: "relative",
                zIndex: 10,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: "var(--gold-primary)",
                  }}
                />
                <h4
                  style={{
                    fontSize: "0.95rem",
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    color: "var(--foreground)",
                    margin: 0,
                  }}
                >
                  {pdfTitle}
                </h4>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <a
                  href={activePdf}
                  download
                  className="btn-outline"
                  style={{
                    padding: "8px 16px",
                    fontSize: "0.7rem",
                    borderRadius: "8px",
                    gap: "6px",
                  }}
                >
                  <Download size={12} />
                  Descargar
                </a>
                <button
                  onClick={closePdf}
                  style={{
                    background: "rgba(20, 20, 20, 0.05)",
                    border: "none",
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    color: "var(--foreground)",
                    transition: "all 0.3s var(--ease-spring)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "rotate(90deg)";
                    e.currentTarget.style.background = "rgba(197, 165, 95, 0.15)";
                    e.currentTarget.style.color = "var(--gold-primary)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "";
                    e.currentTarget.style.background = "rgba(20, 20, 20, 0.05)";
                    e.currentTarget.style.color = "";
                  }}
                  aria-label="Cerrar visor"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div
              style={{
                flexGrow: 1,
                position: "relative",
                background: "#f4f3ef",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Spinner Loader when loading PDF */}
              {isIframeLoading && (
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgba(255, 253, 248, 0.98)",
                    gap: "16px",
                    zIndex: 5,
                  }}
                >
                  <div
                    className="loader-spinner"
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "50%",
                      border: "3px solid rgba(197, 165, 95, 0.15)",
                      borderTopColor: "var(--gold-primary)",
                    }}
                  />
                  <p
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "0.8rem",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--gold-primary)",
                      fontWeight: 500,
                    }}
                  >
                    Cargando Catálogo...
                  </p>
                </div>
              )}

              {/* Native PDF Embed Iframe */}
              <iframe
                src={`${activePdf}#toolbar=1&navpanes=0&statusbar=0&view=FitH`}
                style={{
                  width: "100%",
                  height: "100%",
                  border: "none",
                  flexGrow: 1,
                }}
                onLoad={() => setIsIframeLoading(false)}
                title={pdfTitle}
              />

              {/* Direct Open fallback info for mobile/readers */}
              <div
                style={{
                  padding: "10px 20px",
                  background: "rgba(255, 253, 248, 0.95)",
                  borderTop: "1px solid rgba(197, 165, 95, 0.12)",
                  textAlign: "center",
                  fontSize: "0.75rem",
                  color: "var(--fg-muted)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  flexWrap: "wrap",
                }}
              >
                <span>¿No visualizas correctamente el PDF?</span>
                <a
                  href={activePdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "var(--gold-primary)",
                    textDecoration: "underline",
                    fontWeight: 500,
                  }}
                >
                  Abrir en nueva pestaña
                </a>
                <span>o</span>
                <a
                  href={activePdf}
                  download
                  style={{
                    color: "var(--gold-primary)",
                    textDecoration: "underline",
                    fontWeight: 500,
                  }}
                >
                  Descargar directamente
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
