"use client";

import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
  }
};

export default function DerechosReservados() {
  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <Header />
      
      <main style={{
        position: "relative",
        zIndex: 2,
        padding: "160px 24px 80px",
        maxWidth: "900px",
        margin: "0 auto",
        color: "var(--foreground)"
      }}>
        {/* Title Block (Animate on Load) */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          style={{ textAlign: "center", marginBottom: "56px" }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginBottom: "14px" }}>
            <div style={{ flex: "0 0 36px", height: "1px", background: "linear-gradient(90deg, transparent, rgba(197,165,95,0.6))" }} />
            <span style={{ fontFamily: "var(--font-serif)", fontSize: "0.7rem", color: "var(--gold-primary)", letterSpacing: "0.3em", textTransform: "uppercase" }}>
              Términos Legales
            </span>
            <div style={{ flex: "0 0 36px", height: "1px", background: "linear-gradient(90deg, rgba(197,165,95,0.6), transparent)" }} />
          </div>
          
          <h1 style={{ fontSize: "clamp(2.2rem, 4vw, 3rem)", lineHeight: 1.1, marginBottom: "18px", color: "var(--foreground)" }}>
            Derechos <span className="gold-text">Reservados</span>
          </h1>
        </motion.div>

        {/* Legal Text Panel (Animate on Load/Scroll) */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          style={{
            background: "rgba(255, 252, 244, 0.65)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.8)",
            borderBottomColor: "rgba(197,165,95,0.3)",
            borderRadius: "24px",
            padding: "48px 5vw",
            boxShadow: "0 8px 32px rgba(100,60,10,0.08)",
            lineHeight: 1.8,
            fontSize: "0.95rem",
            color: "var(--fg-muted)"
          }}
        >
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "1.4rem", color: "var(--gold-dark)", marginBottom: "16px", marginTop: 0 }}>
            1. Propiedad Intelectual
          </h2>
          <p style={{ marginBottom: "32px" }}>
            Todo el contenido de este sitio web, incluyendo textos, gráficos, logotipos, íconos, imágenes, clips de audio y video, descargas digitales, recopilaciones de datos y software, es propiedad de <strong>Ebanis Soluciones</strong> o de sus proveedores de contenido, y está protegido por las leyes peruanas e internacionales de derechos de autor y propiedad intelectual. La compilación de todo el contenido de este sitio es propiedad exclusiva de <strong>Ebanis Soluciones</strong>.
          </p>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "1.4rem", color: "var(--gold-dark)", marginBottom: "16px" }}>
            2. Uso de Diseños y Catálogos
          </h2>
          <p style={{ marginBottom: "32px" }}>
            Los diseños, planos y fotografías de muebles personalizados exhibidos en este sitio web representan el trabajo artesanal y creativo de nuestros talleres. Está estrictamente prohibida la reproducción, duplicación, copia, venta, reventa, o explotación de cualquier parte de este sitio o su contenido, para fines comerciales sin el consentimiento previo, expreso y por escrito de nuestra empresa.
          </p>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "1.4rem", color: "var(--gold-dark)", marginBottom: "16px" }}>
            3. Marcas Registradas
          </h2>
          <p style={{ marginBottom: "32px" }}>
            <strong>EBANIS SOLUCIONES</strong> y otros gráficos, logotipos, encabezados de página, íconos de botones, guiones y nombres de servicios incluidos en o puestos a disposición a través de cualquier servicio de Ebanis son marcas comerciales o imágenes comerciales en Perú y otros países. Las marcas e imágenes comerciales de Ebanis no podrán ser utilizadas en conexión con ningún producto o servicio que no sea de Ebanis, de ninguna manera que pueda causar confusión entre los clientes, o que menosprecie o desacredite a la empresa.
          </p>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "1.4rem", color: "var(--gold-dark)", marginBottom: "16px" }}>
            4. Limitación de Responsabilidad
          </h2>
          <p style={{ marginBottom: "32px" }}>
            Este sitio web se proporciona "tal cual" y "según disponibilidad". Ebanis Soluciones no realiza representaciones ni garantías de ningún tipo, expresas o implícitas, en cuanto a la operación de este sitio web o la información, contenido, materiales o productos incluidos en el mismo. Nos reservamos el derecho de modificar o actualizar nuestro catálogo de servicios y productos en cualquier momento sin previo aviso.
          </p>
          
          <p style={{ fontSize: "0.85rem", fontStyle: "italic", textAlign: "center", marginTop: "48px", color: "var(--fg-subtle)" }}>
            Última actualización: {new Date().toLocaleDateString("es-PE", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
