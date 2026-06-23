"use client";

import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { MapPin, Phone, Mail, Clock, Send, Sparkles, ChevronRight } from "lucide-react";

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "living",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", phone: "", projectType: "living", message: "" });
    }, 4000);
  };

  const processSteps = [
    {
      step: "01",
      title: "Entrevista & Co-Diseño",
      desc: "Conversamos sobre tus ideas, requerimientos de espacio, maderas predilectas y tomamos las medidas milimétricas en obra."
    },
    {
      step: "02",
      title: "Modelado 3D Interactivo",
      desc: "Visualizas tus muebles en un gemelo digital 3D fotorrealista con texturas de maderas y telas reales antes de iniciar cortes."
    },
    {
      step: "03",
      title: "Ebanistería Artesanal",
      desc: "Nuestros ebanistas seleccionan a mano los tablones en el taller de Cajamarca, ensamblando cada pieza con técnicas tradicionales."
    },
    {
      step: "04",
      title: "Montaje Profesional",
      desc: "El mismo equipo artesano realiza la instalación en tu hogar, calibrando cada herraje a nivel láser para un encaje milimétrico."
    }
  ];

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
              Atelier Cajamarca
            </span>
            <h1 style={{
              fontSize: "clamp(2.5rem, 5vw, 3.8rem)",
              lineHeight: 1.1,
              marginBottom: "20px",
              fontFamily: "var(--font-serif)"
            }}>
              Contacto & <span className="gold-text">Asesoría</span>
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
              Visítanos en nuestro atelier de diseño o solicita una llamada técnica con un proyectista.
              Juntos daremos forma a tus espacios con maderas nobles certificadas y la maestría del tallado a mano.
            </p>
          </div>

          {/* Grid Layout: Contact info & Form */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "50px",
            alignItems: "start",
            marginBottom: "80px"
          }} className="contacto-grid">

            {/* Left Column: Contact Cards & Styled Map */}
            <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
              <h2 style={{
                fontSize: "1.4rem",
                fontFamily: "var(--font-serif)",
                borderBottom: "1px solid rgba(197,165,95,0.15)",
                paddingBottom: "12px",
                color: "#fff"
              }}>
                Datos del Atelier
              </h2>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px" }}>
                {/* Card 1 - Address */}
                <div className="glass-panel" style={{ padding: "20px", borderRadius: "6px", display: "flex", gap: "15px" }}>
                  <div style={{ color: "var(--gold-primary)", padding: "10px", background: "rgba(197,165,95,0.06)", borderRadius: "4px", height: "fit-content" }}>
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: "0.85rem", color: "#fff", marginBottom: "5px" }}>Ubicación</h4>
                    <p style={{ fontSize: "0.8rem", color: "var(--foreground)", lineHeight: 1.4 }}>
                      Av. Mártires de Uchuraccay N°2420 Barrio San Martin <br />
                      Cajamarca 06003, Perú
                    </p>
                  </div>
                </div>

                {/* Card 2 - Phone */}
                <div className="glass-panel" style={{ padding: "20px", borderRadius: "6px", display: "flex", gap: "15px" }}>
                  <div style={{ color: "var(--gold-primary)", padding: "10px", background: "rgba(197,165,95,0.06)", borderRadius: "4px", height: "fit-content" }}>
                    <Phone size={18} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: "0.85rem", color: "#fff", marginBottom: "5px" }}>Teléfono & WhatsApp</h4>
                    <p style={{ fontSize: "0.8rem", color: "var(--foreground)" }}>+51 976 781 459</p>
                    <a
                      href="https://wa.me/51976781459?text=Hola%20Ebanis%20Soluciones,%20deseo%20co-dise%C3%B1ar%20un%20proyecto."
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ fontSize: "0.75rem", color: "var(--gold-primary)", textDecoration: "none", display: "block", marginTop: "5px" }}
                      className="card-link"
                    >
                      Escríbenos directamente →
                    </a>
                  </div>
                </div>

                {/* Card 3 - Email */}
                <div className="glass-panel" style={{ padding: "20px", borderRadius: "6px", display: "flex", gap: "15px" }}>
                  <div style={{ color: "var(--gold-primary)", padding: "10px", background: "rgba(197,165,95,0.06)", borderRadius: "4px", height: "fit-content" }}>
                    <Mail size={18} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: "0.85rem", color: "#fff", marginBottom: "5px" }}>Correo Electrónico</h4>
                    <p style={{ fontSize: "0.8rem", color: "var(--foreground)" }}>ebanissoluciones@gmail.com</p>
                  </div>
                </div>

                {/* Card 4 - Hours */}
                <div className="glass-panel" style={{ padding: "20px", borderRadius: "6px", display: "flex", gap: "15px" }}>
                  <div style={{ color: "var(--gold-primary)", padding: "10px", background: "rgba(197,165,95,0.06)", borderRadius: "4px", height: "fit-content" }}>
                    <Clock size={18} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: "0.85rem", color: "#fff", marginBottom: "5px" }}>Horario de Atención</h4>
                    <p style={{ fontSize: "0.8rem", color: "var(--foreground)", lineHeight: 1.4 }}>
                      Lun - Vie: 9:00 AM - 6:00 PM <br />
                      Sábados: 9:00 AM - 1:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Styled Google Map */}
              <div className="glass-panel" style={{
                position: "relative",
                width: "100%",
                height: "320px",
                borderRadius: "6px",
                overflow: "hidden",
                border: "1px solid var(--card-border)",
                background: "#0c0b0a",
                boxShadow: "0 10px 30px rgba(0,0,0,0.5)"
              }}>
                <iframe
                  src="https://maps.google.com/maps?q=Atelier%20de%20Dise%C3%B1o%20Ebanis%20Soluciones,%20Psje.%20San%20Isidro%20392,%20Cajamarca%2006003,%20Peru&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, display: "block" }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="map-iframe"
                  title="Atelier de Diseño Ebanis Soluciones"
                />

                <a
                  href="https://maps.google.com/?q=Atelier+de+Dise%C3%B1o+Ebanis+Soluciones,+Psje.+San+Isidro+392,+Cajamarca+06003,+Peru"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    position: "absolute",
                    bottom: "15px",
                    right: "15px",
                    background: "rgba(10, 10, 10, 0.85)",
                    backdropFilter: "blur(4px)",
                    border: "1px solid var(--gold-primary)",
                    color: "var(--gold-primary)",
                    padding: "8px 16px",
                    fontSize: "0.75rem",
                    fontFamily: "var(--font-serif)",
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    borderRadius: "4px",
                    transition: "all 0.3s ease",
                    zIndex: 5
                  }}
                  className="map-badge"
                >
                  <MapPin size={12} /> Ver en Google Maps
                </a>
              </div>
            </div>

            {/* Right Column: Premium Form */}
            <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
              <h2 style={{
                fontSize: "1.4rem",
                fontFamily: "var(--font-serif)",
                borderBottom: "1px solid rgba(197,165,95,0.15)",
                paddingBottom: "12px",
                color: "#fff"
              }}>
                Solicitud de Co-Diseño
              </h2>

              <form
                onSubmit={handleSubmit}
                className="glass-panel"
                style={{
                  padding: "40px 30px",
                  borderRadius: "6px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px"
                }}
              >
                {submitted && (
                  <div style={{
                    padding: "15px 20px",
                    border: "1px solid var(--gold-primary)",
                    background: "rgba(197,165,95,0.05)",
                    color: "var(--gold-primary)",
                    fontSize: "0.85rem",
                    textAlign: "center",
                    borderRadius: "4px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "5px"
                  }}>
                    <strong>¡Solicitud Registrada con Éxito!</strong>
                    <p style={{ fontSize: "0.75rem", color: "var(--foreground)" }}>
                      Un proyectista del Atelier se pondrá en contacto contigo en las próximas 24 horas.
                    </p>
                  </div>
                )}

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }} className="form-row">
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    <label style={{ fontSize: "0.65rem", color: "var(--gold-primary)", textTransform: "uppercase", letterSpacing: "0.1em" }}>Nombre Completo</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        background: "rgba(255, 255, 255, 0.02)",
                        border: "1px solid var(--card-border)",
                        padding: "12px",
                        color: "#fff",
                        fontSize: "0.85rem",
                        fontFamily: "inherit",
                        borderRadius: "4px"
                      }}
                      placeholder="Ej. Juan Pérez"
                    />
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    <label style={{ fontSize: "0.65rem", color: "var(--gold-primary)", textTransform: "uppercase", letterSpacing: "0.1em" }}>Número de Celular</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{
                        background: "rgba(255, 255, 255, 0.02)",
                        border: "1px solid var(--card-border)",
                        padding: "12px",
                        color: "#fff",
                        fontSize: "0.85rem",
                        fontFamily: "inherit",
                        borderRadius: "4px"
                      }}
                      placeholder="Ej. +51 999 999 999"
                    />
                  </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <label style={{ fontSize: "0.65rem", color: "var(--gold-primary)", textTransform: "uppercase", letterSpacing: "0.1em" }}>Correo Electrónico</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      background: "rgba(255, 255, 255, 0.02)",
                      border: "1px solid var(--card-border)",
                      padding: "12px",
                      color: "#fff",
                      fontSize: "0.85rem",
                      fontFamily: "inherit",
                      borderRadius: "4px"
                    }}
                    placeholder="ejemplo@correo.com"
                  />
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <label style={{ fontSize: "0.65rem", color: "var(--gold-primary)", textTransform: "uppercase", letterSpacing: "0.1em" }}>Línea de Interés</label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    style={{
                      background: "rgba(10, 10, 10, 0.95)",
                      border: "1px solid var(--card-border)",
                      padding: "12px",
                      color: "#fff",
                      fontSize: "0.85rem",
                      fontFamily: "inherit",
                      cursor: "pointer",
                      borderRadius: "4px"
                    }}
                  >
                    <option value="living">Muebles de Sala / Comedor</option>
                    <option value="bedroom">Dormitorio a Medida (Camas, Closets)</option>
                    <option value="kitchen">Muebles de Cocina Premium</option>
                    <option value="bar">Barras & Desayunadores</option>
                    <option value="custom">Trabajos Especiales de Ebanistería</option>
                  </select>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <label style={{ fontSize: "0.65rem", color: "var(--gold-primary)", textTransform: "uppercase", letterSpacing: "0.1em" }}>Detalla tus Ideas y Espacio</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      background: "rgba(255, 255, 255, 0.02)",
                      border: "1px solid var(--card-border)",
                      padding: "12px",
                      color: "#fff",
                      fontSize: "0.85rem",
                      fontFamily: "inherit",
                      resize: "none",
                      borderRadius: "4px"
                    }}
                    placeholder="Cuéntanos las medidas de tu espacio, estilo deseado, etc..."
                  />
                </div>

                <button
                  type="submit"
                  className="btn-gold"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                    marginTop: "10px",
                    cursor: "pointer",
                    fontSize: "0.9rem"
                  }}
                >
                  Agendar Asesoría Gratuita <Send size={14} />
                </button>
              </form>
            </div>
          </div>

          {/* Co-Design Process Guide Section */}
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
                Metodología Ebanis
              </span>
              <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)", marginBottom: "15px" }}>
                El Proceso de <span className="gold-text">Co-Diseño</span>
              </h2>
              <p style={{ color: "var(--foreground)", maxWidth: "600px", margin: "0 auto", fontSize: "0.9rem", fontWeight: 300, lineHeight: 1.6 }}>
                Te acompañamos en cada etapa de la materialización de tus ideas, combinando la precisión técnica con la calidez del trabajo artesanal.
              </p>
            </div>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "25px"
            }} className="process-grid">
              {processSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="glass-panel process-card"
                  style={{
                    padding: "30px 25px",
                    borderRadius: "6px",
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                    border: "1px solid var(--card-border)",
                    transition: "all 0.3s ease"
                  }}
                >
                  <span style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "2.5rem",
                    fontWeight: 700,
                    color: "rgba(197,165,95,0.15)",
                    lineHeight: 1,
                    position: "absolute",
                    top: "20px",
                    right: "25px"
                  }}>{step.step}</span>

                  <h3 style={{ fontSize: "1.1rem", color: "#fff", zIndex: 2 }}>{step.title}</h3>
                  <p style={{ fontSize: "0.85rem", color: "var(--foreground)", lineHeight: 1.6, fontWeight: 300, zIndex: 2 }}>
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>

      <Footer />

      <style jsx>{`
        .map-iframe {
          filter: grayscale(1) invert(0.92) contrast(1.15) opacity(0.7);
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .map-iframe:hover {
          filter: grayscale(0.15) invert(0) contrast(1) opacity(1);
        }
        .map-badge:hover {
          color: #000 !important;
          border-color: transparent !important;
          background: var(--gold-metallic) !important;
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(197, 165, 95, 0.35);
        }
        .card-link {
          transition: color 0.3s ease, padding-left 0.3s ease;
        }
        .card-link:hover {
          color: #fff !important;
          padding-left: 4px;
        }
        .process-card:hover {
          border-color: var(--gold-primary) !important;
          transform: translateY(-4px);
          box-shadow: 0 8px 25px rgba(197, 165, 95, 0.05);
        }
        @media (min-width: 992px) {
          .contacto-grid {
            grid-template-columns: 1.1fr 1fr !important;
            gap: 60px !important;
          }
          .process-grid {
            grid-template-columns: repeat(4, 1fr) !important;
          }
        }
        @media (max-width: 768px) {
          .form-row {
            grid-template-columns: 1fr !important;
            gap: 15px !important;
          }
        }
      `}</style>
    </div>
  );
}
