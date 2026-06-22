"use client";

import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "living",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", projectType: "living", message: "" });
    }, 4000);
  };

  return (
    <section 
      id="contact" 
      style={{
        padding: "100px 20px",
        background: "rgba(10, 10, 10, 0.4)",
        borderTop: "1px solid var(--card-border)",
        position: "relative"
      }}
    >
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "1fr",
        gap: "60px"
      }} className="contact-grid">
        
        {/* Left Column: Info & Map */}
        <div style={{ display: "flex", flexDirection: "column", gap: "35px" }}>
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
              ¿Dónde encontrarnos?
            </span>
            <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)", marginBottom: "15px" }}>
              Comienza tu <span className="gold-text">Proyecto</span>
            </h2>
            <p style={{ color: "var(--foreground)", fontSize: "0.95rem", lineHeight: 1.6, fontWeight: 300 }}>
              Visítanos en nuestro atelier en Cajamarca para ver muestras de maderas nobles y 
              seleccionar catálogos textiles exclusivos de la mano de nuestros diseñadores.
            </p>
          </div>

          {/* Contact Cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div style={{ display: "flex", gap: "15px", alignItems: "flex-start" }}>
              <div style={{ color: "var(--gold-primary)", padding: "10px", background: "rgba(197,165,95,0.06)", borderRadius: "4px" }}>
                <MapPin size={20} />
              </div>
              <div>
                <h4 style={{ fontSize: "0.8rem", color: "#fff", marginBottom: "4px" }}>Dirección del Atelier</h4>
                <p style={{ fontSize: "0.85rem", color: "var(--foreground)", lineHeight: 1.4 }}>
                  Psj, Psje. San Isidro 392, <br />
                  Cajamarca 06003, Perú
                </p>
              </div>
            </div>

            <div style={{ display: "flex", gap: "15px", alignItems: "flex-start" }}>
              <div style={{ color: "var(--gold-primary)", padding: "10px", background: "rgba(197,165,95,0.06)", borderRadius: "4px" }}>
                <Phone size={20} />
              </div>
              <div>
                <h4 style={{ fontSize: "0.8rem", color: "#fff", marginBottom: "4px" }}>Contacto Telefónico</h4>
                <p style={{ fontSize: "0.85rem", color: "var(--foreground)" }}>+51 945 876 123</p>
              </div>
            </div>

            <div style={{ display: "flex", gap: "15px", alignItems: "flex-start" }}>
              <div style={{ color: "var(--gold-primary)", padding: "10px", background: "rgba(197,165,95,0.06)", borderRadius: "4px" }}>
                <Mail size={20} />
              </div>
              <div>
                <h4 style={{ fontSize: "0.8rem", color: "#fff", marginBottom: "4px" }}>Correo Electrónico</h4>
                <p style={{ fontSize: "0.85rem", color: "var(--foreground)" }}>proyectos@ebanissoluciones.com</p>
              </div>
            </div>

            <div style={{ display: "flex", gap: "15px", alignItems: "flex-start" }}>
              <div style={{ color: "var(--gold-primary)", padding: "10px", background: "rgba(197,165,95,0.06)", borderRadius: "4px" }}>
                <Clock size={20} />
              </div>
              <div>
                <h4 style={{ fontSize: "0.8rem", color: "#fff", marginBottom: "4px" }}>Horario de Atención</h4>
                <p style={{ fontSize: "0.85rem", color: "var(--foreground)", lineHeight: 1.4 }}>
                  Lunes a Viernes: 9:00 AM - 6:00 PM <br />
                  Sábados: 9:00 AM - 1:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* Styled Map Box */}
          <div className="glass-panel" style={{
            position: "relative",
            width: "100%",
            height: "300px",
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
              style={{
                border: 0,
                display: "block"
              }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="map-iframe"
              title="Atelier de Diseño Ebanis Soluciones"
            ></iframe>
            
            {/* Float badge to open map directly */}
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
        <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-start" }}>
          <form 
            onSubmit={handleSubmit}
            className="glass-panel"
            style={{
              padding: "40px 30px",
              width: "100%",
              maxWidth: "500px",
              display: "flex",
              flexDirection: "column",
              gap: "24px"
            }}
          >
            <h3 style={{ fontSize: "1.2rem", borderBottom: "1px solid rgba(197,165,95,0.15)", paddingBottom: "10px", color: "#fff" }}>
              Solicitud de Asesoría
            </h3>

            {submitted ? (
              <div style={{
                padding: "20px",
                border: "1px solid var(--gold-primary)",
                background: "rgba(197,165,95,0.05)",
                color: "var(--gold-primary)",
                fontSize: "0.9rem",
                textAlign: "center",
                borderRadius: "4px",
                display: "flex",
                flexDirection: "column",
                gap: "10px"
              }}>
                <strong>¡Solicitud Enviada con Éxito!</strong>
                <p style={{ fontSize: "0.75rem", color: "var(--foreground)" }}>
                  Un ebanista proyectista se pondrá en contacto contigo para programar la llamada técnica.
                </p>
              </div>
            ) : null}

            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <label style={{ fontSize: "0.7rem", color: "var(--gold-primary)", textTransform: "uppercase", letterSpacing: "0.1em" }}>Nombre Completo</label>
              <input 
                type="text" 
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                style={{
                  background: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid var(--card-border)",
                  padding: "12px",
                  color: "#fff",
                  fontSize: "0.9rem",
                  fontFamily: "inherit"
                }}
                placeholder="Escribe tu nombre..."
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <label style={{ fontSize: "0.7rem", color: "var(--gold-primary)", textTransform: "uppercase", letterSpacing: "0.1em" }}>Correo Electrónico</label>
              <input 
                type="email" 
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                style={{
                  background: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid var(--card-border)",
                  padding: "12px",
                  color: "#fff",
                  fontSize: "0.9rem",
                  fontFamily: "inherit"
                }}
                placeholder="ejemplo@correo.com"
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <label style={{ fontSize: "0.7rem", color: "var(--gold-primary)", textTransform: "uppercase", letterSpacing: "0.1em" }}>Tipo de Proyecto</label>
              <select 
                value={formData.projectType}
                onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                style={{
                  background: "rgba(20, 20, 20, 0.95)",
                  border: "1px solid var(--card-border)",
                  padding: "12px",
                  color: "#fff",
                  fontSize: "0.9rem",
                  fontFamily: "inherit",
                  cursor: "pointer"
                }}
              >
                <option value="living">Muebles de Sala / Comedor</option>
                <option value="bedroom">Dormitorio a Medida</option>
                <option value="kitchen">Mueble de Cocina Lujo</option>
                <option value="closet">Walk-in Closet / Vestidor</option>
                <option value="custom">Otro Proyecto Personalizado</option>
              </select>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <label style={{ fontSize: "0.7rem", color: "var(--gold-primary)", textTransform: "uppercase", letterSpacing: "0.1em" }}>Cuéntanos sobre tu espacio</label>
              <textarea 
                rows={4}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                style={{
                  background: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid var(--card-border)",
                  padding: "12px",
                  color: "#fff",
                  fontSize: "0.9rem",
                  fontFamily: "inherit",
                  resize: "none"
                }}
                placeholder="Describe qué muebles necesitas y las dimensiones aproximadas..."
              />
            </div>

            <button type="submit" className="btn-gold" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}>
              Enviar Mensaje <Send size={16} />
            </button>
          </form>
        </div>

      </div>

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
        @media (min-width: 992px) {
          .contact-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 80px !important;
          }
        }
      `}</style>
    </section>
  );
}
