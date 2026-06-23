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

  const contactItems = [
    {
      icon: <MapPin size={18} />,
      title: "Dirección ",
      content: "Av. Mártires de Uchuraccay N°2420 Barrio San Martin,\n Cajamarca 06003, Perú",
      multiline: true
    },
    {
      icon: <Phone size={18} />,
      title: "Contacto Telefónico",
      content: "+51 976 781 459",
      multiline: false
    },
    {
      icon: <Mail size={18} />,
      title: "Correo Electrónico",
      content: "ebanissoluciones@gmail.com",
      multiline: false
    },
    {
      icon: <Clock size={18} />,
      title: "Horario de Atención",
      content: "Lunes a Viernes: 9:00 AM - 6:00 PM\nSábados: 9:00 AM - 1:00 PM",
      multiline: true
    }
  ];

  return (
    <section
      id="contact"
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "120px 20px 100px"
      }}
    >
      {/* Mesh Gradient Background for Contact */}
      <div style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        background: `
          radial-gradient(ellipse at 10% 30%, hsla(38, 80%, 35%, 0.15) 0%, transparent 50%),
          radial-gradient(ellipse at 90% 70%, hsla(280, 60%, 22%, 0.15) 0%, transparent 50%),
          radial-gradient(ellipse at 50% 10%, hsla(200, 65%, 20%, 0.12) 0%, transparent 45%),
          var(--bg-base)
        `,
        opacity: 0.9
      }} aria-hidden />

      {/* Animated mesh orbs */}
      <div style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        overflow: "hidden"
      }} aria-hidden>
        {[
          { w: "55%", h: "55%", t: "-10%", l: "-5%", c: "hsla(38, 80%, 38%, 0.22)", blur: 100, anim: "meshMove1 26s infinite alternate ease-in-out" },
          { w: "45%", h: "45%", t: "60%", r: "-5%", c: "hsla(280, 60%, 30%, 0.18)", blur: 90, anim: "meshMove2 32s infinite alternate ease-in-out" },
        ].map((orb, i) => (
          <div key={i} style={{
            position: "absolute",
            width: orb.w,
            height: orb.h,
            top: orb.t,
            left: (orb as { l?: string }).l,
            right: (orb as { r?: string }).r,
            background: `radial-gradient(circle, ${orb.c} 0%, transparent 70%)`,
            filter: `blur(${orb.blur}px)`,
            borderRadius: "50%",
            opacity: 0.55,
            mixBlendMode: "normal",
            animation: orb.anim
          }} />
        ))}
      </div>

      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        position: "relative",
        zIndex: 1,
        display: "grid",
        gridTemplateColumns: "1fr",
        gap: "60px"
      }} className="contact-grid">

        {/* ── Left: Info & Map ── */}
        <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
          <div>
            <span style={{
              fontFamily: "var(--font-serif)",
              fontSize: "0.78rem",
              color: "var(--gold-primary)",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              display: "block",
              marginBottom: "14px"
            }}>
              ¿Dónde encontrarnos?
            </span>
            <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)", marginBottom: "16px", lineHeight: 1.05 }}>
              Comienza tu <span className="gold-text">Proyecto</span>
            </h2>
            <p style={{ color: "var(--fg-muted)", fontSize: "0.95rem", lineHeight: 1.7, fontWeight: 300 }}>
              Visítanos en nuestro atelier en Cajamarca para ver muestras de maderas nobles y
              seleccionar catálogos textiles exclusivos de la mano de nuestros diseñadores.
            </p>
          </div>

          {/* Contact Info Cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            {contactItems.map((item, i) => (
              <div key={i} style={{
                display: "flex",
                gap: "16px",
                alignItems: "flex-start",
                padding: "16px 20px",
                borderRadius: "18px",
                background: "rgba(255, 255, 255, 0.04)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderBottom: "1px solid rgba(240, 192, 80, 0.15)",
                boxShadow: "0 4px 12px rgba(0,0,0,0.25), 0 0 0 1px rgba(255,255,255,0.06) inset",
                transition: "all 0.3s ease"
              }} className="contact-info-card">
                <div style={{
                  color: "var(--gold-primary)",
                  padding: "10px",
                  background: "rgba(197, 165, 95, 0.12)",
                  borderRadius: "12px",
                  flexShrink: 0,
                  border: "1px solid rgba(197, 165, 95, 0.2)"
                }}>
                  {item.icon}
                </div>
                <div>
                  <h4 style={{ fontSize: "0.78rem", color: "var(--foreground)", marginBottom: "4px", letterSpacing: "0.04em" }}>
                    {item.title}
                  </h4>
                  <p style={{ fontSize: "0.85rem", color: "var(--fg-muted)", lineHeight: 1.5, whiteSpace: "pre-line" }}>
                    {item.content}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Map */}
          <div style={{
            position: "relative",
            width: "100%",
            height: "260px",
            borderRadius: "24px",
            overflow: "hidden",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow: "0 12px 40px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255,255,255,0.06) inset"
          }}>
            <iframe
              src="https://maps.google.com/maps?q=Atelier%20de%20Dise%C3%B1o%20Ebanis%20Soluciones,%20Psje.%20San%20Isidro%20392,%20Cajamarca%2006003,%20Peru&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, display: "block", filter: "grayscale(0.6) invert(0.92) hue-rotate(180deg) saturate(1.2) contrast(1.1)" }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Atelier de Diseño Ebanis Soluciones"
            />
            <a
              href="https://maps.google.com/?q=Atelier+de+Diseño+Ebanis+Soluciones,+Psje.+San+Isidro+392,+Cajamarca+06003,+Peru"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                position: "absolute",
                bottom: "14px",
                right: "14px",
                background: "rgba(10, 10, 12, 0.75)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                color: "var(--gold-light)",
                padding: "8px 16px",
                borderRadius: "999px",
                fontSize: "0.7rem",
                fontFamily: "var(--font-serif)",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                transition: "all 0.3s ease",
                boxShadow: "0 4px 12px rgba(0,0,0,0.2)"
              }}
              className="map-badge"
            >
              <MapPin size={11} /> Ver en Maps
            </a>
          </div>
        </div>

        {/* ── Right: Liquid Glass Form ── */}
        <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-start" }}>
          <form
            onSubmit={handleSubmit}
            id="contact-form"
            style={{
              width: "100%",
              maxWidth: "520px",
              borderRadius: "32px",
              padding: "40px 36px",
              display: "flex",
              flexDirection: "column",
              gap: "22px",
              /* Liquid Glass */
              background: "rgba(255, 255, 255, 0.055)",
              backdropFilter: "blur(40px) saturate(2.2) brightness(1.08)",
              WebkitBackdropFilter: "blur(40px) saturate(2.2) brightness(1.08)",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              borderBottom: "1px solid rgba(240, 192, 80, 0.25)",
              boxShadow: "0 24px 80px rgba(0, 0, 0, 0.65), 0 0 0 1px rgba(255,255,255,0.06) inset, 0 1px 0 rgba(255,255,255,0.15) inset",
              position: "relative",
              overflow: "hidden"
            }}
          >
            {/* Form specular shine */}
            <div style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(135deg, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0.04) 35%, transparent 55%)",
              borderRadius: "32px",
              pointerEvents: "none",
              zIndex: 0
            }} />

            <div style={{ position: "relative", zIndex: 1 }}>
              <h3 style={{
                fontSize: "1.15rem",
                borderBottom: "1px solid rgba(240, 192, 80, 0.18)",
                paddingBottom: "14px",
                color: "var(--foreground)",
                marginBottom: "0"
              }}>
                Solicitud de Asesoría
              </h3>
            </div>

            {submitted && (
              <div style={{
                position: "relative",
                zIndex: 1,
                padding: "20px",
                border: "1px solid rgba(240, 192, 80, 0.35)",
                background: "rgba(240, 192, 80, 0.06)",
                color: "var(--gold-light)",
                fontSize: "0.9rem",
                textAlign: "center",
                borderRadius: "18px",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                backdropFilter: "blur(8px)"
              }}>
                <strong>¡Solicitud Enviada con Éxito!</strong>
                <p style={{ fontSize: "0.75rem", color: "var(--fg-muted)" }}>
                  Un ebanista proyectista se pondrá en contacto contigo para la llamada técnica.
                </p>
              </div>
            )}

            {/* Form Fields */}
            {[
              { label: "Nombre Completo", key: "name", type: "text", placeholder: "Escribe tu nombre..." },
              { label: "Correo Electrónico", key: "email", type: "email", placeholder: "ejemplo@correo.com" }
            ].map(({ label, key, type, placeholder }) => (
              <div key={key} style={{ display: "flex", flexDirection: "column", gap: "7px", position: "relative", zIndex: 1 }}>
                <label style={{ fontSize: "0.68rem", color: "var(--gold-primary)", textTransform: "uppercase", letterSpacing: "0.12em", fontFamily: "var(--font-serif)" }}>
                  {label}
                </label>
                <input
                  type={type}
                  required
                  value={formData[key as keyof typeof formData]}
                  onChange={(e) => setFormData({ ...formData, [key]: e.target.value })}
                  className="contact-input"
                  placeholder={placeholder}
                  id={`contact-${key}`}
                />
              </div>
            ))}

            <div style={{ display: "flex", flexDirection: "column", gap: "7px", position: "relative", zIndex: 1 }}>
              <label style={{ fontSize: "0.68rem", color: "var(--gold-primary)", textTransform: "uppercase", letterSpacing: "0.12em", fontFamily: "var(--font-serif)" }}>
                Tipo de Proyecto
              </label>
              <select
                value={formData.projectType}
                onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                className="contact-input"
                id="contact-project-type"
                style={{ cursor: "pointer", background: "rgba(255, 255, 255, 0.04)" }}
              >
                <option value="living" style={{ background: "var(--bg-surface)", color: "var(--foreground)" }}>Muebles de Sala / Comedor</option>
                <option value="bedroom" style={{ background: "var(--bg-surface)", color: "var(--foreground)" }}>Dormitorio a Medida</option>
                <option value="kitchen" style={{ background: "var(--bg-surface)", color: "var(--foreground)" }}>Mueble de Cocina Lujo</option>
                <option value="closet" style={{ background: "var(--bg-surface)", color: "var(--foreground)" }}>Walk-in Closet / Vestidor</option>
                <option value="custom" style={{ background: "var(--bg-surface)", color: "var(--foreground)" }}>Otro Proyecto Personalizado</option>
              </select>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "7px", position: "relative", zIndex: 1 }}>
              <label style={{ fontSize: "0.68rem", color: "var(--gold-primary)", textTransform: "uppercase", letterSpacing: "0.12em", fontFamily: "var(--font-serif)" }}>
                Cuéntanos sobre tu espacio
              </label>
              <textarea
                rows={4}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="contact-input"
                id="contact-message"
                placeholder="Describe qué muebles necesitas y las dimensiones aproximadas..."
                style={{ resize: "none" }}
              />
            </div>

            <button
              type="submit"
              id="contact-submit-btn"
              className="btn-gold"
              style={{
                position: "relative",
                zIndex: 1,
                width: "100%",
                justifyContent: "center"
              }}
            >
              Enviar Mensaje <Send size={15} />
            </button>
          </form>
        </div>
      </div>

      <style jsx>{`
        .contact-info-card:hover {
          background: rgba(255, 255, 255, 0.08) !important;
          border-color: rgba(240, 192, 80, 0.25) !important;
          transform: translateX(4px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255,255,255,0.1) inset !important;
        }
        .map-badge:hover {
          background: var(--gold-metallic) !important;
          color: hsl(30, 25%, 8%) !important;
          border-color: transparent !important;
          transform: translateY(-2px);
        }
        @media (min-width: 992px) {
          .contact-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 70px !important;
          }
        }
        @media (max-width: 768px) {
          section#contact {
            padding: 80px 16px 70px !important;
          }
        }
      `}</style>
    </section>
  );
}
