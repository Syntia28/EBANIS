"use client";

import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
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

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
  }
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as const
    }
  }
};

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "living",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [hoveredStepIndex, setHoveredStepIndex] = useState<number | null>(null);

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
            background: "#fbf9f4", // Fondo idéntico al del contenedor del formulario
            padding: "0 8px",
            color: isFocused ? "rgba(180, 130, 40, 1)" : "#8a857c",
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
              background: "#fff",
              border: isFocused ? "1.5px solid rgba(180, 130, 40, 0.6)" : "1px solid rgba(0, 0, 0, 0.06)",
              borderRadius: "14px",
              padding: "16px",
              color: "#333",
              fontSize: "0.9rem",
              fontFamily: "var(--font-sans)",
              outline: "none",
              resize: "none",
              transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
              boxShadow: isFocused
                ? "0 4px 12px rgba(180, 130, 40, 0.08)"
                : "0 2px 4px rgba(0,0,0,0.02)",
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
          background: "#fbf9f4", // Fondo idéntico al del contenedor del formulario
          padding: "0 8px",
          color: isFocused ? "rgba(180, 130, 40, 1)" : "#8a857c",
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
            background: "#fff",
            border: isFocused ? "1.5px solid rgba(180, 130, 40, 0.6)" : "1px solid rgba(0, 0, 0, 0.06)",
            borderRadius: "14px",
            padding: "16px",
            color: "#333",
            fontSize: "0.9rem",
            fontFamily: "var(--font-sans)",
            outline: "none",
            transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
            boxShadow: isFocused
              ? "0 4px 12px rgba(180, 130, 40, 0.08)"
              : "0 2px 4px rgba(0,0,0,0.02)",
          }}
          placeholder={isFocused ? placeholder : ""}
        />
      </div>
    );
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", position: "relative", overflow: "hidden", background: "#f5ece1" }}>
      <Header />

      <main style={{ flexGrow: 1, padding: "140px 20px 80px 20px", position: "relative", zIndex: 2 }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

          {/* Grid Layout: Contact info & Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-12%" }}
            variants={fadeUp}
            style={{
              alignItems: "start",
              marginBottom: "80px"
            }}
            className="contacto-grid"
          >
            {/* Left Column: Title, Cards & Styled Map */}
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>

              <div>
                <h1 style={{
                  fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                  lineHeight: 1.1,
                  marginBottom: "12px",
                  fontFamily: "var(--font-serif)",
                  textTransform: "uppercase",
                  fontWeight: "bold",
                  color: "#1a1a1a"
                }}>
                  COMIENZA TU <br /><span style={{ color: "#d9a13c" }}>PROYECTO</span>
                </h1>
                <p style={{
                  color: "#5c574f",
                  fontSize: "0.95rem",
                  lineHeight: 1.6,
                  fontWeight: 400,
                  margin: 0
                }}>
                  Visítanos en nuestro atelier en Cajamarca para ver muestras de maderas nobles y seleccionar catálogos textiles exclusivos de la mano de nuestros diseñadores.
                </p>
              </div>

              {/* Atelier contact details cards & Map stacked vertically (cards on top, map below) */}
              <div 
                style={{ 
                  display: "flex", 
                  flexDirection: "column", 
                  gap: "24px"
                }}
              >
                {/* Contact Cards Stack (Enlarged) */}
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  {/* Card 1 - Address */}
                  <div
                    className="contact-card-interactive"
                    style={{
                      padding: "16px 20px",
                      borderRadius: "16px",
                      display: "flex",
                      alignItems: "center",
                      gap: "16px",
                      background: "rgba(255, 255, 255, 0.55)",
                      boxShadow: "0 6px 25px rgba(0, 0, 0, 0.03)",
                      flexGrow: 1
                    }}
                  >
                    <div style={{ color: "#fff", padding: "10px", background: "#b08742", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: "0.78rem", color: "#1a1a1a", fontWeight: "bold", marginBottom: "3px", textTransform: "uppercase", letterSpacing: "0.05em" }}>Dirección</h4>
                      <p style={{ fontSize: "0.88rem", color: "#5c574f", lineHeight: 1.4, margin: 0 }}>
                        Av. Mártires de Uchuraccay N°2420 Barrio San Martin, Cajamarca
                      </p>
                    </div>
                  </div>

                  {/* Card 2 - Phone */}
                  <div
                    className="contact-card-interactive"
                    style={{
                      padding: "16px 20px",
                      borderRadius: "16px",
                      display: "flex",
                      alignItems: "center",
                      gap: "16px",
                      background: "rgba(255, 255, 255, 0.55)",
                      boxShadow: "0 6px 25px rgba(0, 0, 0, 0.03)",
                      flexGrow: 1
                    }}
                  >
                    <div style={{ color: "#fff", padding: "10px", background: "#b08742", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Phone size={20} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: "0.78rem", color: "#1a1a1a", fontWeight: "bold", marginBottom: "3px", textTransform: "uppercase", letterSpacing: "0.05em" }}>Contacto Telefónico</h4>
                      <p style={{ fontSize: "0.88rem", color: "#5c574f", margin: 0 }}>+51 976 781 459</p>
                    </div>
                  </div>

                  {/* Card 3 - Email */}
                  <div
                    className="contact-card-interactive"
                    style={{
                      padding: "16px 20px",
                      borderRadius: "16px",
                      display: "flex",
                      alignItems: "center",
                      gap: "16px",
                      background: "rgba(255, 255, 255, 0.55)",
                      boxShadow: "0 6px 25px rgba(0, 0, 0, 0.03)",
                      flexGrow: 1
                    }}
                  >
                    <div style={{ color: "#fff", padding: "10px", background: "#b08742", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Mail size={20} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: "0.78rem", color: "#1a1a1a", fontWeight: "bold", marginBottom: "3px", textTransform: "uppercase", letterSpacing: "0.05em" }}>Correo Electrónico</h4>
                      <p style={{ fontSize: "0.88rem", color: "#5c574f", margin: 0 }}>ebanissoluciones@gmail.com</p>
                    </div>
                  </div>

                  {/* Card 4 - Hours */}
                  <div
                    className="contact-card-interactive"
                    style={{
                      padding: "16px 20px",
                      borderRadius: "16px",
                      display: "flex",
                      alignItems: "center",
                      gap: "16px",
                      background: "rgba(255, 255, 255, 0.55)",
                      boxShadow: "0 6px 25px rgba(0, 0, 0, 0.03)",
                      flexGrow: 1
                    }}
                  >
                    <div style={{ color: "#fff", padding: "10px", background: "#b08742", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Clock size={20} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: "0.78rem", color: "#1a1a1a", fontWeight: "bold", marginBottom: "3px", textTransform: "uppercase", letterSpacing: "0.05em" }}>Horario de Atención</h4>
                      <p style={{ fontSize: "0.88rem", color: "#5c574f", lineHeight: 1.4, margin: 0 }}>
                        Lun - Vie: 9 AM - 6 PM | Sáb: 9 AM - 1 PM
                      </p>
                    </div>
                  </div>
                </div>

                {/* Google Map (Below Cards) */}
                <div
                  style={{
                    borderRadius: "24px",
                    overflow: "hidden",
                    background: "#fff",
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.04)",
                    padding: "12px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px"
                  }}
                >
                  <div style={{ padding: "6px 8px 0px 8px" }}>
                    <span style={{ fontSize: "0.65rem", color: "#b08742", letterSpacing: "0.08em", textTransform: "uppercase", display: "block", fontWeight: 700 }}>
                      Ubicación Oficial
                    </span>
                    <h3 style={{ fontSize: "0.88rem", color: "#1a1a1a", marginTop: "2px", marginBottom: 0, fontWeight: 600 }}>
                      Av. Mártires de Uchuraccay N°2420, Cajamarca
                    </h3>
                  </div>

                  <div style={{ width: "100%", height: "240px", overflow: "hidden", borderRadius: "16px", position: "relative" }}>
                    <iframe
                      src="https://maps.google.com/maps?q=Av.%20M%C3%A1rtires%20de%20Uchuraccay%20N%C2%B02420,%20Barrio%20San%20Martin,%20Cajamarca%2006003,%20Peru&t=&z=16&ie=UTF8&iwloc=&output=embed"
                      width="100%"
                      height="100%"
                      style={{ border: 0, display: "block", position: "absolute", inset: 0 }}
                      allowFullScreen={false}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Atelier de Diseño Ebanis Soluciones"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Premium Form Container (Soft light cream asset look) */}
            <div style={{ display: "flex", flexDirection: "column" }}>
              <form
                onSubmit={handleSubmit}
                id="contact-form"
                style={{
                  padding: "40px 35px",
                  borderRadius: "32px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "24px",
                  background: "#fbf9f4", // Fondo claro y cálido como en la imagen
                  boxShadow: "0 25px 60px rgba(50, 30, 10, 0.08)",
                  position: "relative"
                }}
              >
                <h2 style={{
                  fontSize: "1.15rem",
                  fontFamily: "var(--font-serif)",
                  color: "#1a1a1a",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  fontWeight: "bold",
                  margin: 0
                }}>
                  Solicitud de Asesoría
                </h2>

                {submitted && (
                  <div style={{
                    padding: "14px",
                    border: "1px solid #b08742",
                    background: "rgba(176,135,66,0.05)",
                    color: "#b08742",
                    fontSize: "0.85rem",
                    textAlign: "center",
                    borderRadius: "12px"
                  }}>
                    <strong>¡Solicitud Registrada!</strong> Nos comunicaremos pronto.
                  </div>
                )}

                <div style={{ position: "relative" }}>
                  {renderInput("contact-name", "Nombre Completo", "text", formData.name, "name", "")}
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }} className="form-row">
                  {renderInput("contact-phone", "Celular", "tel", formData.phone, "phone", "")}
                  {renderInput("contact-email", "Correo", "email", formData.email, "email", "")}
                </div>

                {/* Custom Project Selector Card Grid */}
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <label style={{
                    fontSize: "0.68rem",
                    color: "#b08742",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    fontWeight: 700,
                    paddingLeft: "2px"
                  }}>
                    Tipo de Proyecto
                  </label>

                  <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
                    gap: "10px",
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
                            background: isSelected ? "#fff" : "rgba(0, 0, 0, 0.015)",
                            border: isSelected ? "1.5px solid #b08742" : "1px solid rgba(0, 0, 0, 0.04)",
                            borderRadius: "14px",
                            padding: "14px 8px",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            textAlign: "center",
                            gap: "6px",
                            cursor: "pointer",
                            boxShadow: isSelected ? "0 8px 20px rgba(176, 135, 66, 0.08)" : "none",
                            outline: "none"
                          }}
                          className="project-selector-card"
                        >
                          <div style={{ color: isSelected ? "#b08742" : "#8a857c" }}>
                            <Icon size={18} />
                          </div>
                          <div>
                            <span style={{
                              display: "block",
                              fontSize: "0.7rem",
                              fontWeight: "bold",
                              color: "#1a1a1a",
                              textTransform: "uppercase",
                              marginBottom: "1px"
                            }}>
                              {item.label}
                            </span>
                            <span style={{
                              display: "block",
                              fontSize: "0.58rem",
                              color: "#8a857c",
                              lineHeight: 1.2,
                              fontWeight: 400
                            }}>
                              {item.desc}
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div style={{ position: "relative" }}>
                  {renderInput("contact-message", "Cuéntanos sobre tu espacio", "textarea", formData.message, "message", "")}
                </div>

                <button
                  type="submit"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    background: "#b08742",
                    color: "#fff",
                    border: "none",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    cursor: "pointer",
                    fontSize: "0.85rem",
                    borderRadius: "14px",
                    padding: "16px",
                    width: "100%",
                    boxShadow: "0 6px 20px rgba(176, 135, 66, 0.25)"
                  }}
                  className="btn-gold"
                >
                  Enviar Mensaje <Send size={13} />
                </button>
              </form>
            </div>
          </motion.div>

          {/* Co-Design Process Guide Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-12%" }}
            variants={fadeUp}
            style={{
              borderTop: "1px solid rgba(0,0,0,0.06)",
              paddingTop: "60px",
              position: "relative"
            }}
          >
            <div style={{ textAlign: "center", marginBottom: "50px" }}>
              <span style={{ fontSize: "0.75rem", color: "#b08742", letterSpacing: "0.2em", textTransform: "uppercase", display: "block", marginBottom: "8px", fontWeight: 600 }}>
                Metodología Ebanis
              </span>
              <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)", marginBottom: "15px", color: "#1a1a1a" }}>
                El Proceso de <span style={{ color: "#b08742" }}>Co-Diseño</span>
              </h2>
              <p style={{ color: "#5c574f", maxWidth: "600px", margin: "0 auto", fontSize: "0.9rem", lineHeight: 1.6 }}>
                Te acompañamos en cada etapa de la materialización de tus ideas, combinando la precisión técnica con la calidez del trabajo artesanal.
              </p>
            </div>

            <div style={{ position: "relative", padding: "20px 0" }}>
              <div
                className="timeline-line-desktop"
                style={{
                  position: "absolute",
                  top: "40px",
                  left: "12%",
                  right: "12%",
                  height: "1px",
                  background: "linear-gradient(90deg, rgba(176, 135, 66, 0.1) 0%, #b08742 50%, rgba(176, 135, 66, 0.1) 100%)",
                  zIndex: 1,
                }}
              />

              <motion.div
                variants={staggerContainer}
                style={{
                  position: "relative",
                  zIndex: 2
                }}
                className="timeline-grid"
              >
                {processSteps.map((step, idx) => {
                  const isHovered = hoveredStepIndex === idx;
                  const isAdjacent = hoveredStepIndex !== null && Math.abs(hoveredStepIndex - idx) === 1;
                  
                  // Compute dynamic scale and y translation for OS Dock animation
                  let scale = 1;
                  let yOffset = 0;
                  if (hoveredStepIndex !== null) {
                    if (isHovered) {
                      scale = 1.12;
                      yOffset = -8;
                    } else if (isAdjacent) {
                      scale = 1.04;
                      yOffset = -3;
                    } else {
                      scale = 0.96;
                      yOffset = 0;
                    }
                  }

                  return (
                    <motion.div key={idx} variants={itemVariants} style={{ position: "relative" }}>
                      <motion.div 
                        style={{ 
                          display: "flex", 
                          flexDirection: "column", 
                          alignItems: "center",
                          cursor: "pointer"
                        }} 
                        className="timeline-item"
                        onMouseEnter={() => setHoveredStepIndex(idx)}
                        onMouseLeave={() => setHoveredStepIndex(null)}
                        animate={{ scale, y: yOffset }}
                        transition={{ type: "spring", stiffness: 220, damping: 18 }}
                      >
                        <div style={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "50%",
                          background: isHovered ? "#b08742" : "#fff",
                          border: "2px solid #b08742",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontWeight: 700,
                          fontSize: "1rem",
                          color: isHovered ? "#fff" : "#b08742",
                          boxShadow: isHovered 
                            ? "0 6px 20px rgba(176, 135, 66, 0.35)" 
                            : isAdjacent 
                              ? "0 4px 12px rgba(176, 135, 66, 0.18)"
                              : "0 4px 15px rgba(176, 135, 66, 0.1)",
                          zIndex: 3,
                          marginBottom: "12px",
                          transition: "background-color 0.25s ease, color 0.25s ease, box-shadow 0.25s ease"
                        }}>
                          {step.step}
                        </div>

                        <div
                          className="process-card-premium"
                          style={{
                            padding: "16px 12px",
                            borderRadius: "12px",
                            textAlign: "center",
                            boxShadow: isHovered
                              ? "0 15px 35px rgba(50, 30, 10, 0.08)"
                              : "0 8px 24px rgba(0, 0, 0, 0.02)",
                            width: "100%",
                            background: "#fff",
                            border: isHovered 
                              ? "1px solid rgba(176, 135, 66, 0.25)" 
                              : "1px solid rgba(0, 0, 0, 0.03)",
                            transition: "border-color 0.25s ease, box-shadow 0.25s ease"
                          }}
                        >
                          <h3 style={{ 
                            fontSize: "0.85rem", 
                            color: isHovered ? "#b08742" : "#1a1a1a", 
                            marginBottom: "4px", 
                            fontWeight: 600,
                            transition: "color 0.25s ease"
                          }}>
                            {step.title}
                          </h3>
                          <p style={{ fontSize: "0.74rem", color: "#5c574f", lineHeight: 1.5, margin: 0 }}>
                            {step.desc}
                          </p>
                        </div>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </motion.div>

        </div>
      </main>

      <Footer />

      <style jsx>{`
        .btn-route-maps:hover, .btn-gold:hover {
          opacity: 0.92;
          transform: translateY(-1px);
        }
        .project-selector-card:hover {
          background: #fff !important;
          border-color: #b08742 !important;
        }
        .contact-card-interactive {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .contact-card-interactive:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 35px rgba(0, 0, 0, 0.06) !important;
        }

        :global(.contacto-grid) {
          display: grid !important;
          grid-template-columns: 1fr !important;
          gap: 50px !important;
        }
        :global(.timeline-grid) {
          display: grid !important;
          grid-template-columns: 1fr !important;
          gap: 35px !important;
        }

        @media (min-width: 768px) {
          :global(.contacto-grid) {
            grid-template-columns: 1.1fr 0.9fr !important;
            gap: 60px !important;
          }
          :global(.timeline-grid) {
            grid-template-columns: repeat(4, 1fr) !important;
            gap: 20px !important;
          }
          .timeline-line-desktop {
            display: block !important;
          }
        }
        @media (max-width: 767px) {
          .timeline-line-desktop {
            display: none !important;
          }
          .form-row {
            grid-template-columns: 1fr !important;
            gap: 15px !important;
          }
          .cards-map-grid {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
        }
      `}</style>
    </div>
  );
}