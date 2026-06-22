"use client";

import React, { use, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { PRODUCT_DATA } from "../../../data/products";
import { ChevronLeft, Check, Sparkles, AlertCircle } from "lucide-react";

interface PageProps {
  params: Promise<{ category: string }>;
}

export default function CollectionPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const categoryKey = resolvedParams.category;
  const product = PRODUCT_DATA[categoryKey];

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [prevCategoryKey, setPrevCategoryKey] = useState<string | null>(null);

  if (categoryKey !== prevCategoryKey) {
    setPrevCategoryKey(categoryKey);
    setSelectedImage(null);
  }

  const activeImage = selectedImage || (product ? product.image : "");

  if (!product) {
    return (
      <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <Header />
        <main style={{ flexGrow: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "120px 20px" }}>
          <div className="glass-panel" style={{ padding: "50px 30px", maxWidth: "500px", textAlign: "center", borderRadius: "8px" }}>
            <AlertCircle size={48} style={{ color: "var(--gold-primary)", marginBottom: "20px" }} />
            <h1 style={{ fontSize: "1.8rem", marginBottom: "15px", fontFamily: "var(--font-serif)" }}>Colección No Encontrada</h1>
            <p style={{ color: "var(--foreground)", marginBottom: "30px", lineHeight: 1.6 }}>
              La colección solicitada no existe o se encuentra actualmente en desarrollo por nuestros diseñadores.
            </p>
            <Link href="/" className="btn-gold" style={{ display: "inline-block" }}>
              Volver al Inicio
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Generate dynamic WhatsApp URL
  const whatsAppLink = `https://wa.me/51945876123?text=Hola%20Ebanis%20Soluciones,%20estoy%20interesado%20en%20cotizar%20un%20proyecto%20de%20"${encodeURIComponent(product.title)}"%20a%20medida.`;

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", position: "relative" }}>
      <Header />

      <main style={{ flexGrow: 1, padding: "140px 20px 80px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          {/* Breadcrumb / Back button */}
          <Link 
            href="/#catalog" 
            style={{ 
              display: "inline-flex", 
              alignItems: "center", 
              gap: "8px", 
              color: "var(--gold-primary)", 
              fontFamily: "var(--font-serif)",
              fontSize: "0.85rem",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              marginBottom: "35px",
              cursor: "pointer",
              transition: "var(--transition-fast)"
            }}
            className="back-btn"
          >
            <ChevronLeft size={16} /> Volver a Colecciones
          </Link>

          {/* Product Detail Layout */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "50px",
            alignItems: "start"
          }} className="product-layout">
            
            {/* Left Column: Visual representation */}
            <div style={{ display: "flex", flexDirection: "column", gap: "25px" }}>
              <div 
                className="glass-panel" 
                style={{
                  position: "relative",
                  height: "450px",
                  width: "100%",
                  borderRadius: "8px",
                  overflow: "hidden",
                  border: "1px solid var(--card-border)"
                }}
              >
                <Image 
                  key={activeImage}
                  src={activeImage} 
                  alt={product.title}
                  fill
                  style={{ objectFit: "cover" }}
                  className="main-image"
                  priority
                />
                
                {/* Decorative overlay watermark */}
                <div style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  background: "linear-gradient(to top, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0) 100%)",
                  padding: "30px",
                  zIndex: 2
                }}>
                  <span style={{ 
                    fontFamily: "var(--font-serif)", 
                    fontSize: "0.75rem", 
                    color: "var(--gold-primary)",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase"
                  }}>
                    Ebanis Soluciones
                  </span>
                  <h3 style={{ fontSize: "1.3rem", marginTop: "5px", color: "#fff" }}>Colección {product.category}</h3>
                </div>
              </div>

              {/* Dynamic Image Caption */}
              {product.images && product.imageCaptions && (
                <div className="glass-panel" style={{
                  padding: "15px 20px",
                  borderRadius: "6px",
                  border: "1px solid rgba(197, 165, 95, 0.15)",
                  background: "rgba(10, 10, 10, 0.4)",
                  fontSize: "0.9rem",
                  color: "#d4a94a",
                  fontStyle: "italic",
                  lineHeight: 1.4,
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  marginTop: "-10px",
                  marginBottom: "5px"
                }}>
                  <span style={{ 
                    fontFamily: "var(--font-serif)", 
                    fontWeight: 700,
                    fontSize: "0.75rem",
                    color: "#fff",
                    borderRight: "1px solid rgba(197, 165, 95, 0.3)",
                    paddingRight: "12px",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    flexShrink: 0
                  }}>
                    Vista
                  </span>
                  <span style={{ color: "var(--foreground)" }}>
                    {product.imageCaptions[product.images.indexOf(activeImage)] || "Mobiliario de colección."}
                  </span>
                </div>
              )}

              {/* Gallery Thumbnails */}
              {product.images && product.images.length > 1 && (
                <div style={{
                  display: "flex",
                  gap: "12px",
                  marginTop: "-10px",
                  marginBottom: "5px",
                  flexWrap: "wrap"
                }}>
                  {product.images.map((imgUrl, idx) => {
                    const isSelected = activeImage === imgUrl;
                    return (
                      <button
                        key={idx}
                        onClick={() => setSelectedImage(imgUrl)}
                        className={`thumbnail-btn ${isSelected ? "active" : ""}`}
                        style={{
                          position: "relative",
                          width: "70px",
                          height: "70px",
                          borderRadius: "4px",
                          overflow: "hidden",
                          background: "none",
                          border: "2px solid " + (isSelected ? "var(--gold-primary)" : "rgba(255,255,255,0.08)"),
                          padding: 0,
                          cursor: "pointer",
                          transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                          boxShadow: isSelected ? "0 0 15px rgba(197, 165, 95, 0.25)" : "none"
                        }}
                      >
                        <Image
                          src={imgUrl}
                          alt={`${product.title} vista ${idx + 1}`}
                          fill
                          style={{ 
                            objectFit: "cover",
                            opacity: isSelected ? 1 : 0.6,
                            transition: "opacity 0.3s ease"
                          }}
                          className="thumbnail-img"
                        />
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Material specifications panel */}
              <div className="glass-panel" style={{ padding: "30px", borderRadius: "8px", display: "flex", flexDirection: "column", gap: "20px" }}>
                <h4 style={{ fontSize: "0.85rem", color: "var(--gold-primary)", borderBottom: "1px solid rgba(197,165,95,0.15)", paddingBottom: "10px" }}>
                  Materiales & Personalización
                </h4>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }} className="materials-grid">
                  <div>
                    <h5 style={{ fontSize: "0.75rem", color: "#fff", marginBottom: "8px" }}>Maderas Nobles Disponibles</h5>
                    <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "6px" }}>
                      {product.woods.map((wood, idx) => (
                        <li key={idx} style={{ fontSize: "0.8rem", color: "var(--foreground)", display: "flex", alignItems: "center", gap: "6px" }}>
                          <Check size={12} style={{ color: "var(--gold-primary)" }} /> {wood}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h5 style={{ fontSize: "0.75rem", color: "#fff", marginBottom: "8px" }}>Acabados y Tratamientos</h5>
                    <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "6px" }}>
                      {product.finishes.map((finish, idx) => (
                        <li key={idx} style={{ fontSize: "0.8rem", color: "var(--foreground)", display: "flex", alignItems: "center", gap: "6px" }}>
                          <Check size={12} style={{ color: "var(--gold-primary)" }} /> {finish}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Descriptions & Details */}
            <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
              <div>
                <span style={{ 
                  fontFamily: "var(--font-serif)", 
                  fontSize: "0.85rem", 
                  color: "var(--gold-primary)", 
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  display: "block",
                  marginBottom: "8px"
                }}>
                  Línea de Mobiliario • {product.category}
                </span>
                <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.1, marginBottom: "20px" }}>
                  {product.title}
                </h1>
                <p style={{ fontSize: "1.1rem", color: "var(--foreground)", lineHeight: 1.6, fontWeight: 300, marginBottom: "20px" }}>
                  {product.description}
                </p>
                <div style={{ color: "var(--foreground)", fontSize: "0.95rem", lineHeight: 1.7, fontWeight: 300 }} className="long-desc">
                  <p>{product.longDescription}</p>
                </div>
              </div>

              {/* Technical features checkmarks */}
              <div className="glass-panel" style={{ padding: "30px", borderRadius: "8px" }}>
                <h4 style={{ fontSize: "0.85rem", color: "var(--gold-primary)", marginBottom: "15px", display: "flex", alignItems: "center", gap: "8px" }}>
                  <Sparkles size={16} /> Especificaciones de Construcción
                </h4>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
                  {product.features.map((feature, idx) => (
                    <li key={idx} style={{ fontSize: "0.85rem", color: "var(--foreground)", display: "flex", alignItems: "flex-start", gap: "10px", lineHeight: 1.4 }}>
                      <span style={{ 
                        background: "rgba(197, 165, 95, 0.1)", 
                        color: "var(--gold-primary)", 
                        borderRadius: "50%", 
                        width: "18px", 
                        height: "18px", 
                        display: "flex", 
                        alignItems: "center", 
                        justifyContent: "center",
                        fontSize: "0.6rem",
                        flexShrink: 0,
                        marginTop: "2px"
                      }}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quote action button */}
              <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                <a 
                  href={whatsAppLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-gold" 
                  style={{ 
                    textAlign: "center", 
                    padding: "16px 40px", 
                    fontSize: "1rem", 
                    fontWeight: 600,
                    letterSpacing: "0.15em",
                    display: "block"
                  }}
                >
                  Cotizar por WhatsApp
                </a>
                <span style={{ fontSize: "0.75rem", color: "var(--foreground)", textAlign: "center", display: "block" }}>
                  * El proyecto se cotiza a medida de tus espacios. Un ebanista proyectista te responderá de inmediato.
                </span>
              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />

      <style jsx>{`
        .back-btn:hover {
          color: #fff !important;
          transform: translateX(-4px);
        }
        .main-image {
          animation: fadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .glass-panel:hover .main-image {
          transform: scale(1.05);
        }
        .thumbnail-btn:hover {
          border-color: rgba(197, 165, 95, 0.6) !important;
          transform: translateY(-2px);
        }
        .thumbnail-btn:hover .thumbnail-img {
          opacity: 1 !important;
        }
        .thumbnail-btn.active {
          transform: scale(1.05);
        }
        @keyframes fadeIn {
          from {
            opacity: 0.2;
            filter: blur(4px);
          }
          to {
            opacity: 1;
            filter: blur(0);
          }
        }
        @media (min-width: 992px) {
          .product-layout {
            grid-template-columns: 1fr 1fr !important;
            gap: 60px !important;
          }
        }
        @media (max-width: 576px) {
          .materials-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
        }
      `}</style>
    </div>
  );
}
