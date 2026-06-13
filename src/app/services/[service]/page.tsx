"use client";

import React, { use } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { SERVICES_DATA } from "../../../data/products";
import { ChevronLeft, Sparkles, AlertCircle, ArrowRight } from "lucide-react";

interface PageProps {
  params: Promise<{ service: string }>;
}

export default function ServicePage({ params }: PageProps) {
  const resolvedParams = use(params);
  const serviceKey = resolvedParams.service;
  const service = SERVICES_DATA[serviceKey];

  if (!service) {
    return (
      <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <Header />
        <main style={{ flexGrow: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "120px 20px" }}>
          <div className="glass-panel" style={{ padding: "50px 30px", maxWidth: "500px", textAlign: "center", borderRadius: "8px" }}>
            <AlertCircle size={48} style={{ color: "var(--gold-primary)", marginBottom: "20px" }} />
            <h1 style={{ fontSize: "1.8rem", marginBottom: "15px", fontFamily: "var(--font-serif)" }}>Servicio No Encontrado</h1>
            <p style={{ color: "hsl(0,0%,75%)", marginBottom: "30px", lineHeight: 1.6 }}>
              El servicio solicitado no existe o se encuentra actualmente inactivo en nuestro atelier.
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
  const whatsAppLink = `https://wa.me/51945876123?text=Hola%20Ebanis%20Soluciones,%20estoy%20interesado%20en%20el%20servicio%20de%20"${encodeURIComponent(service.title)}".`;

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", position: "relative" }}>
      <Header />

      <main style={{ flexGrow: 1, padding: "140px 20px 80px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          {/* Breadcrumb / Back button */}
          <Link 
            href="/#hero" 
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
            <ChevronLeft size={16} /> Volver al Inicio
          </Link>

          {/* Service Detail Layout */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "50px",
            alignItems: "start"
          }} className="product-layout">
            
            {/* Left Column: Visual & Process Steps */}
            <div style={{ display: "flex", flexDirection: "column", gap: "25px" }}>
              <div 
                className="glass-panel" 
                style={{
                  position: "relative",
                  height: "380px",
                  width: "100%",
                  borderRadius: "8px",
                  overflow: "hidden",
                  border: "1px solid var(--card-border)"
                }}
              >
                <Image 
                  src={service.image} 
                  alt={service.title}
                  fill
                  style={{ objectFit: "cover" }}
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
                  <h3 style={{ fontSize: "1.3rem", marginTop: "5px", color: "#fff" }}>Servicio Profesional</h3>
                </div>
              </div>

              {/* Process Stages panel */}
              <div className="glass-panel" style={{ padding: "30px", borderRadius: "8px", display: "flex", flexDirection: "column", gap: "20px" }}>
                <h4 style={{ fontSize: "0.85rem", color: "var(--gold-primary)", borderBottom: "1px solid rgba(197,165,95,0.15)", paddingBottom: "10px" }}>
                  Etapas de Nuestro Proceso
                </h4>

                <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                  {service.process.map((step, idx) => (
                    <div key={idx} style={{ display: "flex", gap: "15px", alignItems: "flex-start" }}>
                      <span style={{ 
                        fontFamily: "var(--font-serif)",
                        fontSize: "1.1rem", 
                        color: "var(--gold-primary)", 
                        fontWeight: 600,
                        width: "30px",
                        flexShrink: 0
                      }}>
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <p style={{ fontSize: "0.85rem", color: "hsl(0,0%,85%)", lineHeight: 1.4 }}>{step}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Descriptions & Features */}
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
                  Garantía de Excelencia Ebanis
                </span>
                <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.1, marginBottom: "20px" }}>
                  {service.title}
                </h1>
                <p style={{ fontSize: "1.1rem", color: "hsl(0,0%,85%)", lineHeight: 1.6, fontWeight: 300, marginBottom: "20px" }}>
                  {service.description}
                </p>
                <div style={{ color: "hsl(0,0%,70%)", fontSize: "0.95rem", lineHeight: 1.7, fontWeight: 300 }} className="long-desc">
                  <p>{service.longDescription}</p>
                </div>
              </div>

              {/* Value Propositions */}
              <div className="glass-panel" style={{ padding: "30px", borderRadius: "8px" }}>
                <h4 style={{ fontSize: "0.85rem", color: "var(--gold-primary)", marginBottom: "15px", display: "flex", alignItems: "center", gap: "8px" }}>
                  <Sparkles size={16} /> Lo Que Nos Diferencia
                </h4>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
                  {service.features.map((feature, idx) => (
                    <li key={idx} style={{ fontSize: "0.85rem", color: "hsl(0,0%,75%)", display: "flex", alignItems: "flex-start", gap: "10px", lineHeight: 1.4 }}>
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

              {/* Consultation action button */}
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
                  Consultar Servicio por WhatsApp
                </a>
                <span style={{ fontSize: "0.75rem", color: "hsl(0,0%,50%)", textAlign: "center", display: "block" }}>
                  * Asesoría técnica inicial sin costo. Resolvemos tus consultas en tiempo real.
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
        @media (min-width: 992px) {
          .product-layout {
            grid-template-columns: 1fr 1fr !important;
            gap: 60px !important;
          }
        }
      `}</style>
    </div>
  );
}
