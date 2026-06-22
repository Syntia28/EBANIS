"use client";

import React, { useRef, useEffect, useState } from "react";
import { Hammer, PenTool, Sparkles } from "lucide-react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  rotation: number;
  rotationSpeed: number;
  color: string;
}

export default function CreativeWoodVisual() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeBlueprint, setActiveBlueprint] = useState(0);
  const [hovered, setHovered] = useState(false);

  // Cycle through furniture blueprints
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveBlueprint((prev) => (prev + 1) % 4);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = canvas.width = canvas.offsetWidth;
    let height = canvas.height = canvas.offsetHeight;

    const mouse = { x: -1000, y: -1000, targetX: -1000, targetY: -1000, active: false };

    // Resize handler
    const handleResize = () => {
      if (!canvas || !containerRef.current) return;
      width = canvas.width = containerRef.current.clientWidth;
      height = canvas.height = containerRef.current.clientHeight;
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    // Mouse events
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.targetX = -1000;
      mouse.targetY = -1000;
      mouse.active = false;
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    // Initialize particles (golden wood shavings / sparks)
    const particles: Particle[] = [];
    const maxParticles = 60;
    const colors = [
      "rgba(197, 165, 95, 0.4)", // Gold primary
      "rgba(212, 169, 74, 0.5)",  // Gold secondary
      "rgba(100, 75, 45, 0.3)",   // Wood brown
      "rgba(255, 230, 180, 0.25)" // Light amber
    ];

    const createParticle = (x: number, y: number, isSpurt = false): Particle => {
      const angle = isSpurt ? Math.random() * Math.PI * 2 : -Math.PI / 2 + (Math.random() - 0.5) * 0.5;
      const speed = isSpurt ? Math.random() * 3 + 1 : Math.random() * 0.6 + 0.2;
      return {
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - (isSpurt ? 0 : 0.2),
        size: Math.random() * 3 + 1,
        alpha: Math.random() * 0.7 + 0.3,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.05,
        color: colors[Math.floor(Math.random() * colors.length)]
      };
    };

    // Pre-populate particles
    for (let i = 0; i < maxParticles / 2; i++) {
      particles.push(createParticle(Math.random() * width, Math.random() * height + 100));
    }

    // Wood rings (growth lines) setup
    const ringsCount = 28;
    const ringSpacing = 16;
    const centerX = width / 2;
    const centerY = height / 2;
    let time = 0;

    // Blueprint drawings helpers
    const drawBlueprint = (ctx: CanvasRenderingContext2D, type: number, alpha: number) => {
      ctx.save();
      ctx.strokeStyle = `rgba(197, 165, 95, ${alpha * 0.35})`;
      ctx.lineWidth = 1.2;
      ctx.setLineDash([4, 4]);
      
      const bx = width / 2;
      const by = height / 2;

      if (type === 0) {
        // Blueprint: Exclusive Chair
        // Seat
        ctx.beginPath();
        ctx.moveTo(bx - 50, by + 10);
        ctx.lineTo(bx + 50, by + 10);
        ctx.lineTo(bx + 45, by + 20);
        ctx.lineTo(bx - 45, by + 20);
        ctx.closePath();
        ctx.stroke();

        // Backrest
        ctx.beginPath();
        ctx.moveTo(bx - 45, by + 10);
        ctx.quadraticCurveTo(bx - 40, by - 60, bx - 35, by - 70);
        ctx.lineTo(bx + 35, by - 70);
        ctx.quadraticCurveTo(bx + 40, by - 60, bx + 45, by + 10);
        ctx.stroke();

        // Cushion details
        ctx.beginPath();
        ctx.moveTo(bx - 30, by - 50);
        ctx.lineTo(bx + 30, by - 50);
        ctx.moveTo(bx - 32, by - 20);
        ctx.lineTo(bx + 32, by - 20);
        ctx.stroke();

        // Legs
        ctx.beginPath();
        // Left Front
        ctx.moveTo(bx - 42, by + 20);
        ctx.lineTo(bx - 48, by + 75);
        // Right Front
        ctx.moveTo(bx + 42, by + 20);
        ctx.lineTo(bx + 48, by + 75);
        // Left Back
        ctx.moveTo(bx - 38, by + 18);
        ctx.lineTo(bx - 32, by + 70);
        // Right Back
        ctx.moveTo(bx + 38, by + 18);
        ctx.lineTo(bx + 32, by + 70);
        ctx.stroke();
        
      } else if (type === 1) {
        // Blueprint: Dining Table
        // Tabletop
        ctx.beginPath();
        ctx.rect(bx - 90, by - 25, 180, 15);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.rect(bx - 85, by - 10, 170, 5);
        ctx.stroke();

        // Bevel / Wood grain schematic lines
        ctx.beginPath();
        ctx.moveTo(bx - 80, by - 20);
        ctx.lineTo(bx + 80, by - 20);
        ctx.moveTo(bx - 60, by - 15);
        ctx.lineTo(bx + 60, by - 15);
        ctx.stroke();

        // Legs (crossed modern architectural design)
        ctx.beginPath();
        ctx.moveTo(bx - 70, by - 5);
        ctx.lineTo(bx - 20, by + 70);
        ctx.lineTo(bx - 10, by + 70);
        ctx.lineTo(bx - 55, by - 5);
        ctx.closePath();
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(bx + 70, by - 5);
        ctx.lineTo(bx + 20, by + 70);
        ctx.lineTo(bx + 10, by + 70);
        ctx.lineTo(bx + 55, by - 5);
        ctx.closePath();
        ctx.stroke();

        // Center connector
        ctx.beginPath();
        ctx.rect(bx - 25, by + 40, 50, 6);
        ctx.stroke();

      } else if (type === 2) {
        // Blueprint: Pivot Door
        // Outer Frame
        ctx.beginPath();
        ctx.rect(bx - 45, by - 80, 90, 160);
        ctx.stroke();

        // Pivot axis schematic line
        ctx.beginPath();
        ctx.strokeStyle = `rgba(197, 165, 95, ${alpha * 0.15})`;
        ctx.moveTo(bx + 30, by - 80);
        ctx.lineTo(bx + 30, by + 80);
        ctx.stroke();

        // Door panels details
        ctx.strokeStyle = `rgba(197, 165, 95, ${alpha * 0.35})`;
        ctx.beginPath();
        ctx.rect(bx - 38, by - 70, 76, 42);
        ctx.rect(bx - 38, by - 20, 76, 42);
        ctx.rect(bx - 38, by + 30, 76, 42);
        ctx.stroke();

        // Handle
        ctx.beginPath();
        ctx.rect(bx - 32, by - 10, 6, 35);
        ctx.fillStyle = `rgba(197, 165, 95, ${alpha * 0.2})`;
        ctx.fill();
        ctx.stroke();

      } else if (type === 3) {
        // Blueprint: Designer Drawer / Credenza
        // Body
        ctx.beginPath();
        ctx.rect(bx - 80, by - 40, 160, 80);
        ctx.stroke();

        // Drawer split lines
        ctx.beginPath();
        ctx.moveTo(bx - 80, by - 15);
        ctx.lineTo(bx + 80, by - 15);
        ctx.moveTo(bx - 80, by + 10);
        ctx.lineTo(bx + 80, by + 10);
        ctx.moveTo(bx, by - 40);
        ctx.lineTo(bx, by + 80);
        ctx.stroke();

        // Minimalist handles
        ctx.beginPath();
        ctx.rect(bx - 45, by - 31, 20, 3);
        ctx.rect(bx + 25, by - 31, 20, 3);
        ctx.rect(bx - 45, by - 6, 20, 3);
        ctx.rect(bx + 25, by - 6, 20, 3);
        ctx.rect(bx - 45, by + 19, 20, 3);
        ctx.rect(bx + 25, by + 19, 20, 3);
        ctx.fillStyle = `rgba(197, 165, 95, ${alpha * 0.35})`;
        ctx.fill();
        ctx.stroke();

        // Modern base legs
        ctx.beginPath();
        ctx.moveTo(bx - 60, by + 40);
        ctx.lineTo(bx - 65, by + 65);
        ctx.lineTo(bx - 50, by + 65);
        ctx.closePath();
        ctx.moveTo(bx + 60, by + 40);
        ctx.lineTo(bx + 65, by + 65);
        ctx.lineTo(bx + 50, by + 65);
        ctx.closePath();
        ctx.stroke();
      }

      ctx.restore();
    };

    // Blueprint text data
    const blueprintLabels = [
      "Sillón de Colección (Corte de Estructura)",
      "Mesa de Comedor Premium (Acoples & Ensamble)",
      "Puerta Principal Pivotante (Esquema de Pivot)",
      "Aparador & Consola Minimalista (Frentes Tridimensionales)"
    ];

    // Main animation loop
    let blueprintAlpha = 0;
    let prevBp = activeBlueprint;

    const animate = () => {
      time += 0.005;
      
      // Smooth mouse coordinates interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.1;
      mouse.y += (mouse.targetY - mouse.y) * 0.1;

      // Clear with dark wood finish background
      ctx.fillStyle = "rgba(10, 10, 10, 0.7)";
      ctx.fillRect(0, 0, width, height);

      // Draw subtle wood grain texture background
      ctx.strokeStyle = "rgba(197, 165, 95, 0.02)";
      ctx.lineWidth = 0.8;
      
      // Calculate active center for wood rings (smoothly moves towards mouse if active, otherwise stays centered)
      const cx = mouse.active ? centerX + (mouse.x - centerX) * 0.15 : centerX;
      const cy = mouse.active ? centerY + (mouse.y - centerY) * 0.15 : centerY;

      // 1. Draw Wavy Wood Grain Growth Rings (Concentric circles with noise)
      for (let r = 0; r < ringsCount; r++) {
        const radius = 30 + r * ringSpacing;
        ctx.beginPath();
        
        const steps = 120;
        for (let i = 0; i <= steps; i++) {
          const angle = (i / steps) * Math.PI * 2;
          
          // Organic wood ripple calculations using trigonometry
          const noiseVal = Math.sin(angle * 3 + time * 2) * 2.5 + 
                           Math.cos(angle * 7 - time) * 1.5 + 
                           Math.sin(angle * 12 + time) * 0.8;
          
          let rx = cx + Math.cos(angle) * (radius + noiseVal);
          let ry = cy + Math.sin(angle) * (radius + noiseVal);

          // Interactive mouse distortion: bends the wood grain lines smoothly around the mouse
          if (mouse.active) {
            const dx = rx - mouse.x;
            const dy = ry - mouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const limitDist = 100;
            
            if (dist < limitDist) {
              const force = (limitDist - dist) / limitDist;
              const push = force * 22; // Intensity of push
              rx += (dx / dist) * push;
              ry += (dy / dist) * push;
            }
          }

          if (i === 0) {
            ctx.moveTo(rx, ry);
          } else {
            ctx.lineTo(rx, ry);
          }
        }
        
        ctx.closePath();
        // Vary ring opacity for depth
        ctx.strokeStyle = `rgba(197, 165, 95, ${0.015 + (r % 3 === 0 ? 0.03 : 0.01)})`;
        ctx.lineWidth = r % 5 === 0 ? 1.5 : 0.8;
        ctx.stroke();
      }

      // 2. Draw Blueprint overlay with fade-in / fade-out animations
      if (prevBp !== activeBlueprint) {
        // Transition: fade out old, then fade in new
        blueprintAlpha -= 0.05;
        if (blueprintAlpha <= 0) {
          blueprintAlpha = 0;
          prevBp = activeBlueprint;
        }
      } else {
        blueprintAlpha += (1 - blueprintAlpha) * 0.08;
      }

      drawBlueprint(ctx, prevBp, blueprintAlpha);

      // Decorative central axis lines for blueprint feel
      ctx.strokeStyle = "rgba(197, 165, 95, 0.04)";
      ctx.lineWidth = 0.5;
      ctx.beginPath();
      ctx.moveTo(0, height / 2); ctx.lineTo(width, height / 2);
      ctx.moveTo(width / 2, 0); ctx.lineTo(width / 2, height);
      ctx.stroke();

      // Golden measurement marks
      ctx.fillStyle = "rgba(197, 165, 95, 0.2)";
      ctx.font = "8px monospace";
      ctx.fillText("CAD/CAM SCALE: 1:10", 15, 20);
      ctx.fillText(`ROT: ${(time * 5).toFixed(1)}°`, 15, 32);
      ctx.fillText(`VETA: ${(ringsCount * 0.45).toFixed(2)} cm/ring`, 15, 44);

      // Compass rose / ebanis brand badge
      ctx.save();
      ctx.translate(width - 40, 40);
      ctx.rotate(time * 0.3);
      ctx.strokeStyle = "rgba(197, 165, 95, 0.2)";
      ctx.beginPath();
      ctx.arc(0, 0, 15, 0, Math.PI * 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(-18, 0); ctx.lineTo(18, 0);
      ctx.moveTo(0, -18); ctx.lineTo(0, 18);
      ctx.stroke();
      ctx.restore();
      ctx.fillStyle = "rgba(197, 165, 95, 0.4)";
      ctx.fillText("EBANIS", width - 58, 68);

      // 3. Particles physics & draw
      particles.forEach((p, idx) => {
        // Drift upwards
        p.x += p.vx;
        p.y += p.vy;
        p.rotation += p.rotationSpeed;
        
        // Gentle horizontal sway
        p.vx += Math.sin(time + p.y * 0.05) * 0.02;

        // Interaction with mouse: push away if cursor is near
        if (mouse.active) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 80) {
            const force = (80 - dist) / 80;
            p.vx += (dx / dist) * force * 0.5;
            p.vy += (dy / dist) * force * 0.5;
          }
        }

        // Draw particle
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        
        // Render shavings / diamond dust shapes
        if (idx % 2 === 0) {
          ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        } else {
          ctx.beginPath();
          ctx.moveTo(0, -p.size);
          ctx.lineTo(p.size / 2, 0);
          ctx.lineTo(0, p.size);
          ctx.lineTo(-p.size / 2, 0);
          ctx.closePath();
          ctx.fill();
        }
        ctx.restore();

        // Respawn if goes off screen
        if (p.y < -10 || p.x < -10 || p.x > width + 10) {
          particles[idx] = createParticle(Math.random() * width, height + 10);
        }
      });

      // Spawn extra particles at mouse position on movement for interaction spurt
      if (mouse.active && Math.random() < 0.2 && particles.length < maxParticles + 15) {
        particles.push(createParticle(mouse.x, mouse.y, true));
      }
      
      // Cleanup extra particles over time
      if (particles.length > maxParticles && Math.random() < 0.05) {
        particles.shift();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [activeBlueprint]);

  return (
    <div 
      ref={containerRef}
      style={{
        position: "relative",
        width: "100%",
        height: "440px",
        borderRadius: "8px",
        overflow: "hidden",
        border: hovered ? "1px solid var(--gold-primary)" : "1px solid var(--card-border)",
        background: "rgba(10, 10, 10, 0.45)",
        backdropFilter: "blur(12px)",
        boxShadow: hovered ? "0 15px 40px rgba(197, 165, 95, 0.08)" : "0 10px 30px rgba(0,0,0,0.3)",
        transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)"
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="glass-panel"
    >
      {/* Canvas */}
      <canvas 
        ref={canvasRef} 
        style={{
          display: "block",
          width: "100%",
          height: "100%",
          cursor: "crosshair"
        }}
      />

      {/* Floating Blueprint Card Info */}
      <div style={{
        position: "absolute",
        bottom: "20px",
        left: "20px",
        right: "20px",
        background: "rgba(10, 10, 10, 0.85)",
        border: "1px solid rgba(197, 165, 95, 0.25)",
        padding: "15px 20px",
        borderRadius: "4px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "15px",
        zIndex: 10,
        pointerEvents: "none"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div style={{
            color: "var(--gold-primary)",
            background: "rgba(197, 165, 95, 0.1)",
            padding: "8px",
            borderRadius: "4px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}>
            <PenTool size={16} className="pulse-icon" />
          </div>
          <div>
            <span style={{
              display: "block",
              fontSize: "0.65rem",
              fontFamily: "var(--font-serif)",
              color: "var(--gold-primary)",
              letterSpacing: "0.1em",
              textTransform: "uppercase"
            }}>Plano de Taller en Vivo</span>
            <span style={{
              display: "block",
              fontSize: "0.85rem",
              color: "#fff",
              fontWeight: 400,
              transition: "all 0.3s ease"
            }} key={activeBlueprint}>
              {activeBlueprint === 0 && "Sillón de Colección (Corte de Estructura)"}
              {activeBlueprint === 1 && "Mesa de Comedor (Esquema de Ensamble)"}
              {activeBlueprint === 2 && "Puerta Pivotante (Cálculo de Ejes)"}
              {activeBlueprint === 3 && "Credenza & Aparador (Frentes Acanalados)"}
            </span>
          </div>
        </div>

        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          fontSize: "0.7rem",
          color: "var(--gold-primary)",
          fontFamily: "var(--font-serif)",
          textTransform: "uppercase",
          letterSpacing: "0.05em"
        }}>
          <Sparkles size={12} />
          <span>Interactivo</span>
        </div>
      </div>

      {/* Hammer/craft design watermark background */}
      <div style={{
        position: "absolute",
        top: "20px",
        right: "20px",
        opacity: 0.1,
        color: "var(--gold-primary)",
        pointerEvents: "none"
      }}>
        <Hammer size={48} />
      </div>

      <style jsx>{`
        .pulse-icon {
          animation: pulse 2s infinite ease-in-out;
        }
        @keyframes pulse {
          0%, 100% {
            opacity: 0.6;
            transform: scale(0.95);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
        }
      `}</style>
    </div>
  );
}
