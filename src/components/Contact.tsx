"use client";

import React, { useState } from "react";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  Sofa, 
  ChefHat, 
  BedDouble, 
  Layers, 
  Wine, 
  Sparkles 
} from "lucide-react";
import { motion } from "framer-motion";

const infoContainerVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.85,
      ease: [0.16, 1, 0.3, 1] as const,
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const formEntryVariants = {
  hidden: { opacity: 0, x: 30, scale: 0.96 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.85,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "living",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", phone: "", projectType: "living", message: "" });
    }, 4000);
  };

  const projectTypes = [
    { value: "living", label: "Sala & Comedor", icon: Sofa, desc: "Centros de TV, mesas y aparadores" },
    { value: "kitchen", label: "Cocinas de Lujo", icon: ChefHat, desc: "Reposteros y tableros premium" },
    { value: "bedroom", label: "Dormitorios", icon: BedDouble, desc: "Camas premium y veladores" },
    { value: "closet", label: "Closets & Vestidores", icon: Layers, desc: "Walk-in closets y armarios" },
    { value: "bar", label: "Barras & Bares", icon: Wine, desc: "Barras y cavas a medida" },
    { value: "custom", label: "Ebanistería Especial", icon: Sparkles, desc: "Proyectos únicos tallados a mano" }
  ];

  const contactItems = [
    {
      icon: <MapPin size={18} />,
      title: "Dirección",
      content: "Av. Mártires de Uchuraccay N°2420 Barrio San Martin,\nCajamarca 06003, Perú",
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

  const renderInput = (
    id: string,
    label: string,
    type: string,
    value: string,
    key: "name" | "email" | "phone" | "message",
    placeholder: string
  ) => {
    const isFocused = focusedField === key;
    const hasValue = value.length > 0;
    const isFloating = isFocused || hasValue;

    if (type === "textarea") {
      return (
        <div style={{ position: "relative", width: "100%", marginTop: "8px" }} key={key}>
          <label style={{
            position: "absolute",
            left: "16px",
            top: isFloating ? "0px" : "18px",
            transform: isFloating ? "translateY(-50%) scale(0.85)" : "translateY(0) scale(1)",
            transformOrigin: "left top",
            background: isFloating ? "#f6f1e7" : "transparent",
            padding: isFloating ? "0 8px" : "0",
            color: isFocused ? "var(--gold-primary)" : "var(--fg-muted)",
            fontSize: "0.75rem",
            fontFamily: "var(--font-serif)",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
            pointerEvents: "none",
            zIndex: 10
          }}>
            {label}
          </label>
          <textarea
            id={id}
            rows={4}
            required
            value={value}
            onFocus={() => setFocusedField(key)}
            onBlur={() => setFocusedField(null)}
            onChange={(e) => setFormData({ ...formData, [key]: e.target.value })}
            style={{
              width: "100%",
              background: "rgba(255, 253, 248, 0.45)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: isFocused ? "1.5px solid var(--gold-primary)" : "1px solid rgba(197, 165, 95, 0.22)",
              borderRadius: "14px",
              padding: "16px",
              color: "var(--foreground)",
              fontSize: "0.9rem",
              fontFamily: "var(--font-sans)",
              outline: "none",
              resize: "none",
              transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
              boxShadow: isFocused 
                ? "0 0 15px rgba(197, 165, 95, 0.18), 0 1px 0 rgba(255,255,255,0.95) inset" 
                : "0 1px 0 rgba(255,255,255,0.9) inset, 0 4px 12px rgba(100,60,10,0.05)",
            }}
            placeholder={isFocused ? placeholder : ""}
          />
        </div>
      );
    }

    return (
      <div style={{ position: "relative", width: "100%", marginTop: "8px" }} key={key}>
        <label style={{
          position: "absolute",
          left: "16px",
          top: isFloating ? "0px" : "50%",
          transform: "translateY(-50%)" + (isFloating ? " translateY(-14px) scale(0.85)" : ""),
          transformOrigin: "left top",
          background: isFloating ? "#f6f1e7" : "transparent",
          padding: isFloating ? "0 8px" : "0",
          color: isFocused ? "var(--gold-primary)" : "var(--fg-muted)",
          fontSize: "0.75rem",
          fontFamily: "var(--font-serif)",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
          pointerEvents: "none",
          zIndex: 10
        }}>
          {label}
        </label>
        <input
          id={id}
          type={type}
          required
          value={value}
          onFocus={() => setFocusedField(key)}
          onBlur={() => setFocusedField(null)}
          onChange={(e) => setFormData({ ...formData, [key]: e.target.value })}
          style={{
            width: "100%",
            background: "rgba(255, 253, 248, 0.45)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: isFocused ? "1.5px solid var(--gold-primary)" : "1px solid rgba(197, 165, 95, 0.22)",
            borderRadius: "14px",
            padding: "16px",
            color: "var(--foreground)",
            fontSize: "0.9rem",
            fontFamily: "var(--font-sans)",
            outline: "none",
            transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
            boxShadow: isFocused 
              ? "0 0 15px rgba(197, 165, 95, 0.18), 0 1px 0 rgba(255,255,255,0.95) inset" 
              : "0 1px 0 rgba(255,255,255,0.9) inset, 0 4px 12px rgba(100,60,10,0.05)",
          }}
          placeholder={isFocused ? placeholder : ""}
        />
      </div>
    );
  };

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

        {/* ── Left: Info & Map (Animate on View) ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-12%" }}
          variants={infoContainerVariants}
          style={{ display: "flex", flexDirection: "column", gap: "32px" }}
        >
          <motion.div variants={itemVariants}>
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
          </motion.div>

          {/* Contact Info Cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {contactItems.map((item, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                style={{ width: "100%" }}
                whileHover={{ x: 6 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                <div style={{
                  display: "flex",
                  gap: "16px",
                  alignItems: "flex-start",
                  padding: "20px 24px",
                  borderRadius: "20px",
                  background: "rgba(255, 253, 248, 0.6)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  border: "1px solid rgba(255, 255, 255, 0.8)",
                  borderBottom: "1px solid rgba(197, 165, 95, 0.25)",
                  boxShadow: "0 6px 20px rgba(100, 60, 10, 0.05)",
                  transition: "all 0.3s ease",
                  cursor: "pointer"
                }} className="contact-info-card-premium">
                  <div style={{
                    color: "#fff",
                    padding: "10px",
                    background: "var(--gold-metallic)",
                    borderRadius: "12px",
                    flexShrink: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 style={{ fontSize: "0.8rem", color: "var(--foreground)", marginBottom: "5px", letterSpacing: "0.04em", fontFamily: "var(--font-serif)" }}>
                      {item.title}
                    </h4>
                    <p style={{ fontSize: "0.82rem", color: "var(--fg-muted)", lineHeight: 1.5, whiteSpace: "pre-line", fontWeight: 300 }}>
                      {item.content}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Styled Google Map with Liquid Glass Frame and Location Header */}
          <motion.div
            variants={itemVariants}
            className="liquid-glass"
            style={{
              borderRadius: "20px",
              overflow: "hidden",
              border: "1px solid var(--card-border)",
              background: "rgba(255, 253, 248, 0.65)",
              boxShadow: "0 16px 40px rgba(100, 60, 10, 0.08)",
              position: "relative"
            }}
          >
            <div style={{
              padding: "20px 24px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottom: "1px solid rgba(197, 165, 95, 0.15)",
              background: "rgba(255, 255, 255, 0.25)"
            }} className="map-header">
              <div>
                <span style={{
                  fontSize: "0.68rem",
                  color: "var(--gold-primary)",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  display: "block",
                  fontWeight: 600,
                  fontFamily: "var(--font-serif)"
                }}>
                  Ubicación Oficial
                </span>
                <h3 style={{
                  fontSize: "0.95rem",
                  color: "var(--foreground)",
                  marginTop: "4px",
                  marginBottom: 0,
                  textTransform: "none",
                  letterSpacing: "normal",
                  fontFamily: "var(--font-sans)",
                  fontWeight: 500
                }}>
                  Psje. San Isidro 392, Cajamarca
                </h3>
              </div>
              <a
                href="https://maps.google.com/?q=Atelier+de+Dise%C3%B1o+Ebanis+Soluciones,+Psje.+San+Isidro+392,+Cajamarca+06003,+Peru"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: "var(--gold-metallic)",
                  color: "#fff",
                  padding: "8px 18px",
                  fontSize: "0.72rem",
                  fontFamily: "var(--font-serif)",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  borderRadius: "20px",
                  fontWeight: 600,
                  transition: "all 0.3s ease",
                  boxShadow: "0 4px 12px rgba(197, 165, 95, 0.25)",
                  zIndex: 10
                }}
                className="btn-route-maps"
              >
                <MapPin size={12} /> Ver Ruta
              </a>
            </div>

            <div style={{ width: "100%", height: "260px", overflow: "hidden", position: "relative" }}>
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
            </div>
          </motion.div>
        </motion.div>

        {/* ── Right: Liquid Glass Form (Animate on View) ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-12%" }}
          variants={formEntryVariants}
          style={{ display: "flex", justifyContent: "center", alignItems: "flex-start", width: "100%" }}
        >
          <form
            onSubmit={handleSubmit}
            id="contact-form"
            style={{
              width: "100%",
              maxWidth: "520px",
              borderRadius: "28px",
              padding: "40px 32px",
              display: "flex",
              flexDirection: "column",
              gap: "24px",
              background: "rgba(255, 253, 248, 0.8)",
              backdropFilter: "blur(40px) saturate(2) brightness(1.04)",
              WebkitBackdropFilter: "blur(40px) saturate(2) brightness(1.04)",
              border: "1px solid rgba(255, 255, 255, 0.9)",
              borderBottom: "1px solid rgba(197, 165, 95, 0.35)",
              boxShadow: "0 20px 60px rgba(100, 60, 10, 0.08)",
              position: "relative",
              overflow: "hidden"
            }}
          >
            {/* Form specular shine */}
            <div style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 35%, transparent 55%)",
              borderRadius: "28px",
              pointerEvents: "none",
              zIndex: 0
            }} />

            <div style={{ position: "relative", zIndex: 1 }}>
              <h3 style={{
                fontSize: "1.2rem",
                borderBottom: "1px solid rgba(197, 165, 95, 0.18)",
                paddingBottom: "14px",
                color: "var(--foreground)",
                marginBottom: "0",
                letterSpacing: "0.08em"
              }}>
                Solicitud de Asesoría
              </h3>
            </div>

            {submitted && (
              <div style={{
                position: "relative",
                zIndex: 1,
                padding: "18px",
                border: "1px solid rgba(197, 165, 95, 0.35)",
                background: "rgba(197, 165, 95, 0.05)",
                color: "var(--gold-primary)",
                fontSize: "0.85rem",
                textAlign: "center",
                borderRadius: "14px",
                display: "flex",
                flexDirection: "column",
                gap: "6px",
                backdropFilter: "blur(8px)"
              }}>
                <strong style={{ fontSize: "0.95rem" }}>¡Solicitud Enviada con Éxito!</strong>
                <p style={{ fontSize: "0.76rem", color: "var(--foreground)", margin: 0 }}>
                  Un ebanista proyectista se pondrá en contacto contigo para la llamada técnica.
                </p>
              </div>
            )}

            {/* Form Fields */}
            {renderInput("contact-name", "Nombre Completo", "text", formData.name, "name", "Ej. Juan Pérez")}
            
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }} className="form-row">
              {renderInput("contact-phone", "Celular", "tel", formData.phone, "phone", "Ej. 999 999 999")}
              {renderInput("contact-email", "Correo", "email", formData.email, "email", "ejemplo@correo.com")}
            </div>

            {/* Custom Project Selector Card Grid */}
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", position: "relative", zIndex: 1 }}>
              <label style={{ 
                fontSize: "0.68rem", 
                color: "var(--gold-primary)", 
                textTransform: "uppercase", 
                letterSpacing: "0.12em",
                fontFamily: "var(--font-serif)",
                fontWeight: 600,
                paddingLeft: "4px"
              }}>
                Tipo de Proyecto
              </label>
              
              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
                gap: "10px",
                marginTop: "2px"
              }}>
                {projectTypes.map((item) => {
                  const Icon = item.icon;
                  const isSelected = formData.projectType === item.value;
                  return (
                    <button
                      key={item.value}
                      type="button"
                      onClick={() => setFormData({ ...formData, projectType: item.value })}
                      style={{
                        background: isSelected 
                          ? "rgba(197, 165, 95, 0.08)" 
                          : "rgba(255, 255, 255, 0.35)",
                        border: isSelected 
                          ? "1.5px solid var(--gold-primary)" 
                          : "1px solid rgba(197, 165, 95, 0.15)",
                        borderRadius: "14px",
                        padding: "12px 8px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        textAlign: "center",
                        gap: "6px",
                        cursor: "pointer",
                        transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                        boxShadow: isSelected 
                          ? "0 0 12px rgba(197, 165, 95, 0.12)" 
                          : "none",
                        outline: "none"
                      }}
                      className="project-selector-card"
                    >
                      <div style={{
                        color: isSelected ? "var(--gold-primary)" : "var(--fg-muted)",
                        transition: "color 0.3s ease",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                      }}>
                        <Icon size={18} style={{ filter: isSelected ? "drop-shadow(0 0 3px rgba(197, 165, 95, 0.2))" : "none" }} />
                      </div>
                      <div>
                        <span style={{
                          display: "block",
                          fontSize: "0.7rem",
                          fontWeight: 600,
                          color: isSelected ? "var(--foreground)" : "var(--fg-muted)",
                          fontFamily: "var(--font-serif)",
                          letterSpacing: "0.02em",
                          textTransform: "uppercase",
                          marginBottom: "1px"
                        }}>
                          {item.label}
                        </span>
                        <span style={{
                          display: "block",
                          fontSize: "0.55rem",
                          color: isSelected ? "var(--fg-muted)" : "var(--fg-subtle)",
                          lineHeight: 1.25,
                          fontWeight: 300
                        }}>
                          {item.desc}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {renderInput("contact-message", "Cuéntanos sobre tu espacio", "textarea", formData.message, "message", "Describe qué muebles necesitas y las dimensiones aproximadas...")}

            <button
              type="submit"
              id="contact-submit-btn"
              className="btn-gold"
              style={{
                position: "relative",
                zIndex: 1,
                width: "100%",
                justifyContent: "center",
                borderRadius: "14px",
                padding: "16px 34px"
              }}
            >
              Enviar Mensaje <Send size={15} />
            </button>
          </form>
        </motion.div>
      </div>

      <style jsx>{`
        .contact-info-card-premium:hover {
          background: rgba(255, 253, 248, 0.85) !important;
          border-color: var(--gold-primary) !important;
          box-shadow: 0 10px 30px rgba(197, 165, 95, 0.08) !important;
        }
        .btn-route-maps:hover {
          color: #fff !important;
          background: var(--gold-metallic-hover) !important;
          transform: translateY(-2px);
          box-shadow: 0 6px 18px rgba(197, 165, 95, 0.4) !important;
        }
        .map-iframe {
          filter: grayscale(0.5) contrast(1.15) opacity(0.85);
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .map-iframe:hover {
          filter: grayscale(0.1) contrast(1.05) opacity(1);
        }
        .project-selector-card {
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .project-selector-card:hover {
          transform: translateY(-2px);
          border-color: var(--gold-primary) !important;
          background: rgba(197, 165, 95, 0.04) !important;
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
          .form-row {
            grid-template-columns: 1fr !important;
            gap: 15px !important;
          }
          .map-header {
            flex-direction: column;
            align-items: flex-start !important;
            gap: 12px;
          }
          .btn-route-maps {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
