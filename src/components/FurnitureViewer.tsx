"use client";

import React, { useState, useEffect, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Float, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";

// Color presets for wood materials
const WOOD_PRESETS = {
  ebony: {
    name: "Ébano Negro",
    color: "#161514",
    roughness: 0.2,
    metalness: 0.1,
  },
  oak: {
    name: "Roble Natural",
    color: "#bda27e",
    roughness: 0.4,
    metalness: 0.0,
  },
  walnut: {
    name: "Nogal Oscuro",
    color: "#4e3629",
    roughness: 0.3,
    metalness: 0.0,
  },
};

// Color presets for Twinbru fabric digital twins
const FABRIC_PRESETS = {
  emerald: {
    name: "Terciopelo Esmeralda (Twinbru Velvet)",
    color: "#0f422b",
    roughness: 0.8,
    metalness: 0.1,
  },
  cream: {
    name: "Lino Crema (Twinbru Linen)",
    color: "#eae3d2",
    roughness: 0.9,
    metalness: 0.0,
  },
  tobacco: {
    name: "Cuero Tabaco (Premium Leather)",
    color: "#6b4423",
    roughness: 0.25,
    metalness: 0.2,
  },
};

// --- ELEGANT SPARK PARTICLES COMPONENT ---
function SparkParticles({ count = 60 }) {
  const pointsRef = useRef<THREE.Points>(null);
  
  // Create random position and velocity vectors
  const [positions, velocities] = React.useMemo(() => {
    const pos = new Float32Array(count * 3);
    const vel = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      // Position particles in a cylindrical space around the furniture
      const angle = Math.random() * Math.PI * 2;
      const radius = 0.5 + Math.random() * 2.0;
      pos[i * 3] = Math.cos(angle) * radius;
      pos[i * 3 + 1] = -1.0 + Math.random() * 2.5; // height
      pos[i * 3 + 2] = Math.sin(angle) * radius;
      
      // Drift velocity (mostly slowly rising up)
      vel[i * 3] = (Math.random() - 0.5) * 0.1;
      vel[i * 3 + 1] = 0.1 + Math.random() * 0.2; // vertical drift
      vel[i * 3 + 2] = (Math.random() - 0.5) * 0.1;
    }
    return [pos, vel];
  }, [count]);

  useFrame((state, delta) => {
    if (!pointsRef.current) return;
    const geo = pointsRef.current.geometry;
    const posArr = geo.attributes.position.array as Float32Array;

    for (let i = 0; i < count; i++) {
      // Update Y position (rise up)
      posArr[i * 3 + 1] += velocities[i * 3 + 1] * delta;
      // Small horizontal wiggle
      posArr[i * 3] += Math.sin(state.clock.getElapsedTime() + i) * 0.1 * delta;
      posArr[i * 3 + 2] += Math.cos(state.clock.getElapsedTime() + i) * 0.1 * delta;

      // Reset particles that float too high
      if (posArr[i * 3 + 1] > 2.0) {
        posArr[i * 3 + 1] = -1.0;
        const angle = Math.random() * Math.PI * 2;
        const radius = 0.5 + Math.random() * 2.0;
        posArr[i * 3] = Math.cos(angle) * radius;
        posArr[i * 3 + 2] = Math.sin(angle) * radius;
      }
    }
    geo.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#dfba73"
        size={0.025}
        transparent
        opacity={0.4}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

// --- TABLE LAMP COMPONENT (Interactive Click Light) ---
function TableLamp({ lampOn, setLampOn }: { lampOn: boolean; setLampOn: (val: boolean) => void }) {
  const lightRef = useRef<THREE.PointLight>(null);
  const intensityTarget = lampOn ? 2.5 : 0.0;

  useFrame((state, delta) => {
    if (lightRef.current) {
      // Smooth light turning on/off lerp
      lightRef.current.intensity = THREE.MathUtils.lerp(
        lightRef.current.intensity,
        intensityTarget,
        10 * delta
      );
    }
  });

  return (
    <group 
      position={[1.2, 0.45, 0]} 
      onClick={(e) => {
        e.stopPropagation();
        setLampOn(!lampOn);
      }}
      onPointerOver={(e) => {
        e.stopPropagation();
        document.body.style.cursor = "pointer";
      }}
      onPointerOut={() => {
        document.body.style.cursor = "auto";
      }}
    >
      {/* Base */}
      <mesh castShadow receiveShadow>
        <cylinderGeometry args={[0.12, 0.12, 0.02, 32]} />
        <meshStandardMaterial color="#c5a55f" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Stem */}
      <mesh position={[0, 0.25, 0]} castShadow>
        <cylinderGeometry args={[0.015, 0.015, 0.5, 16]} />
        <meshStandardMaterial color="#dfba73" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Dome Shade (Hemisphere) - hover cursor */}
      <mesh 
        position={[0, 0.5, 0]} 
        castShadow
      >
        <sphereGeometry args={[0.18, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial 
          color={lampOn ? "#dfba73" : "#8a703d"} 
          metalness={0.9} 
          roughness={0.15} 
          side={THREE.DoubleSide} 
          emissive={lampOn ? "#3a2d1a" : "#000000"}
        />
      </mesh>
      
      {/* Light bulb glow */}
      <mesh position={[0, 0.47, 0]}>
        <sphereGeometry args={[0.04, 16, 16]} />
        <meshBasicMaterial color={lampOn ? "#ffe596" : "#444"} />
      </mesh>
      
      {/* Direct light from lamp */}
      <pointLight 
        ref={lightRef} 
        position={[0, 0.42, 0]} 
        color="#ffdf8a" 
        castShadow 
        shadow-mapSize={[512, 512]}
      />
    </group>
  );
}

// --- CHEST OF DRAWERS COMPONENT (Interactive Click Drawers) ---
interface ChestProps {
  woodColor: string;
  woodRoughness: number;
  woodMetalness: number;
  drawersOpen: boolean;
  setDrawersOpen: (val: boolean) => void;
}

function ChestOfDrawers({ woodColor, woodRoughness, woodMetalness, drawersOpen, setDrawersOpen }: ChestProps) {
  const topDrawerRef = useRef<THREE.Group>(null);
  const bottomDrawerRef = useRef<THREE.Group>(null);
  
  const targetZ = drawersOpen ? 0.35 : 0.0;

  useFrame((state, delta) => {
    if (topDrawerRef.current && bottomDrawerRef.current) {
      // Smoothly slide drawers out/in
      topDrawerRef.current.position.z = THREE.MathUtils.lerp(
        topDrawerRef.current.position.z,
        targetZ,
        6 * delta
      );
      bottomDrawerRef.current.position.z = THREE.MathUtils.lerp(
        bottomDrawerRef.current.position.z,
        targetZ * 0.8, // bottom drawer slides out slightly less for staggered aesthetic
        6 * delta
      );
    }
  });

  const drawerMaterial = new THREE.MeshStandardMaterial({
    color: new THREE.Color(woodColor),
    roughness: woodRoughness,
    metalness: woodMetalness,
  });

  const goldMaterial = new THREE.MeshStandardMaterial({
    color: new THREE.Color("#c5a55f"),
    metalness: 0.9,
    roughness: 0.15,
  });

  return (
    <group 
      position={[0.7, -0.4, 0]}
      onClick={(e) => {
        e.stopPropagation();
        setDrawersOpen(!drawersOpen);
      }}
      onPointerOver={(e) => {
        e.stopPropagation();
        document.body.style.cursor = "pointer";
      }}
      onPointerOut={() => {
        document.body.style.cursor = "auto";
      }}
    >
      {/* Main Cabinet Body (Static frame) */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[1.5, 0.8, 0.8]} />
        <primitive object={drawerMaterial} attach="material" />
      </mesh>

      {/* Top golden border edge */}
      <mesh position={[0, 0.405, 0]} castShadow>
        <boxGeometry args={[1.52, 0.01, 0.82]} />
        <primitive object={goldMaterial} attach="material" />
      </mesh>

      {/* --- UPPER DRAWER (Animated Group) --- */}
      <group ref={topDrawerRef} position={[0, 0.18, 0]}>
        {/* Face plate */}
        <mesh position={[0, 0, 0.405]} castShadow>
          <boxGeometry args={[1.4, 0.3, 0.02]} />
          <primitive object={drawerMaterial} attach="material" />
        </mesh>
        {/* Gold Handle */}
        <mesh position={[0, 0, 0.42]} castShadow>
          <boxGeometry args={[0.3, 0.02, 0.02]} />
          <primitive object={goldMaterial} attach="material" />
        </mesh>
        {/* Drawer Box interior (only see side if pulled out) */}
        <mesh position={[0, -0.05, 0.05]}>
          <boxGeometry args={[1.3, 0.18, 0.6]} />
          <meshStandardMaterial color="#222" roughness={0.8} transparent opacity={0.5} />
        </mesh>
      </group>

      {/* --- LOWER DRAWER (Animated Group) --- */}
      <group ref={bottomDrawerRef} position={[0, -0.18, 0]}>
        {/* Face plate */}
        <mesh position={[0, 0, 0.405]} castShadow>
          <boxGeometry args={[1.4, 0.3, 0.02]} />
          <primitive object={drawerMaterial} attach="material" />
        </mesh>
        {/* Gold Handle */}
        <mesh position={[0, 0, 0.42]} castShadow>
          <boxGeometry args={[0.3, 0.02, 0.02]} />
          <primitive object={goldMaterial} attach="material" />
        </mesh>
        {/* Drawer Box interior */}
        <mesh position={[0, -0.05, 0.05]}>
          <boxGeometry args={[1.3, 0.18, 0.6]} />
          <meshStandardMaterial color="#222" roughness={0.8} />
        </mesh>
      </group>

      {/* Golden Cabinet Legs */}
      <mesh position={[-0.65, -0.55, 0.3]} castShadow>
        <cylinderGeometry args={[0.03, 0.02, 0.3, 16]} />
        <primitive object={goldMaterial} attach="material" />
      </mesh>
      <mesh position={[0.65, -0.55, 0.3]} castShadow>
        <cylinderGeometry args={[0.03, 0.02, 0.3, 16]} />
        <primitive object={goldMaterial} attach="material" />
      </mesh>
      <mesh position={[-0.65, -0.55, -0.3]} castShadow>
        <cylinderGeometry args={[0.03, 0.02, 0.3, 16]} />
        <primitive object={goldMaterial} attach="material" />
      </mesh>
      <mesh position={[0.65, -0.55, -0.3]} castShadow>
        <cylinderGeometry args={[0.03, 0.02, 0.3, 16]} />
        <primitive object={goldMaterial} attach="material" />
      </mesh>
    </group>
  );
}

// --- ARMCHAIR COMPONENT (Interactive Bounce & Twinbru fabrics) ---
interface ArmchairProps {
  fabricColor: string;
  fabricRoughness: number;
  fabricMetalness: number;
  woodColor: string;
  bounceActive: boolean;
  triggerBounce: () => void;
}

function Armchair({ fabricColor, fabricRoughness, fabricMetalness, woodColor, bounceActive, triggerBounce }: ArmchairProps) {
  const groupRef = useRef<THREE.Group>(null);
  const bounceTime = useRef(0);
  const isBouncing = useRef(false);

  // Trigger internal state watch
  useEffect(() => {
    if (bounceActive) {
      bounceTime.current = 0;
      isBouncing.current = true;
    }
  }, [bounceActive]);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    if (isBouncing.current) {
      bounceTime.current += delta;
      const t = bounceTime.current;
      
      if (t > 1.2) {
        // Stop bouncing
        isBouncing.current = false;
        groupRef.current.scale.set(1, 1, 1);
        groupRef.current.position.y = -0.2;
      } else {
        // Organic spring squash and stretch equations (Damped oscillation)
        const frequency = Math.PI * 6;
        const damping = 3.5;
        const amplitude = 0.15;
        
        const scaleY = 1.0 + Math.sin(t * frequency) * amplitude * Math.exp(-t * damping);
        // Squash side scales inversely to conserve volume
        const scaleXZ = 1.0 - Math.sin(t * frequency) * amplitude * 0.5 * Math.exp(-t * damping);
        
        groupRef.current.scale.set(scaleXZ, scaleY, scaleXZ);
        // Adjust Y position slightly to keep it grounded on the floor
        groupRef.current.position.y = -0.2 - (1.0 - scaleY) * 0.3;
      }
    }
  });

  const fabricMaterial = new THREE.MeshStandardMaterial({
    color: new THREE.Color(fabricColor),
    roughness: fabricRoughness,
    metalness: fabricMetalness,
  });

  const woodMaterial = new THREE.MeshStandardMaterial({
    color: new THREE.Color(woodColor),
    roughness: 0.4,
    metalness: 0.0,
  });

  const goldMaterial = new THREE.MeshStandardMaterial({
    color: new THREE.Color("#dfba73"),
    metalness: 0.85,
    roughness: 0.2,
  });

  return (
    <group 
      ref={groupRef}
      position={[-0.8, -0.2, 0]} 
      rotation={[0, Math.PI / 6, 0]}
      onClick={(e) => {
        e.stopPropagation();
        triggerBounce();
      }}
      onPointerOver={(e) => {
        e.stopPropagation();
        document.body.style.cursor = "pointer";
      }}
      onPointerOut={() => {
        document.body.style.cursor = "auto";
      }}
    >
      {/* Seat Cushion */}
      <mesh position={[0, 0, 0]} castShadow receiveShadow>
        <boxGeometry args={[1.0, 0.25, 0.9]} />
        <primitive object={fabricMaterial} attach="material" />
      </mesh>

      {/* Backrest */}
      <mesh position={[0, 0.5, -0.35]} rotation={[-0.1, 0, 0]} castShadow>
        <boxGeometry args={[1.0, 0.8, 0.2]} />
        <primitive object={fabricMaterial} attach="material" />
      </mesh>

      {/* Armrest Left */}
      <mesh position={[-0.48, 0.25, 0.05]} castShadow>
        <boxGeometry args={[0.1, 0.4, 0.8]} />
        <primitive object={fabricMaterial} attach="material" />
      </mesh>
      {/* Armrest Right */}
      <mesh position={[0.48, 0.25, 0.05]} castShadow>
        <boxGeometry args={[0.1, 0.4, 0.8]} />
        <primitive object={fabricMaterial} attach="material" />
      </mesh>

      {/* Wooden details on armrest fronts */}
      <mesh position={[-0.48, 0.46, 0.05]} castShadow>
        <boxGeometry args={[0.12, 0.03, 0.82]} />
        <primitive object={woodMaterial} attach="material" />
      </mesh>
      <mesh position={[0.48, 0.46, 0.05]} castShadow>
        <boxGeometry args={[0.12, 0.03, 0.82]} />
        <primitive object={woodMaterial} attach="material" />
      </mesh>

      {/* Chair Legs (Wooden with golden tips) */}
      {/* Front Left */}
      <group position={[-0.4, -0.4, 0.32]} rotation={[0.1, 0, -0.05]}>
        <mesh castShadow>
          <cylinderGeometry args={[0.04, 0.025, 0.6, 16]} />
          <primitive object={woodMaterial} attach="material" />
        </mesh>
        <mesh position={[0, -0.25, 0]} castShadow>
          <cylinderGeometry args={[0.026, 0.025, 0.1, 16]} />
          <primitive object={goldMaterial} attach="material" />
        </mesh>
      </group>
      {/* Front Right */}
      <group position={[0.4, -0.4, 0.32]} rotation={[0.1, 0, 0.05]}>
        <mesh castShadow>
          <cylinderGeometry args={[0.04, 0.025, 0.6, 16]} />
          <primitive object={woodMaterial} attach="material" />
        </mesh>
        <mesh position={[0, -0.25, 0]} castShadow>
          <cylinderGeometry args={[0.026, 0.025, 0.1, 16]} />
          <primitive object={goldMaterial} attach="material" />
        </mesh>
      </group>
      {/* Back Left */}
      <group position={[-0.4, -0.4, -0.32]} rotation={[-0.15, 0, -0.05]}>
        <mesh castShadow>
          <cylinderGeometry args={[0.04, 0.025, 0.6, 16]} />
          <primitive object={woodMaterial} attach="material" />
        </mesh>
        <mesh position={[0, -0.25, 0]} castShadow>
          <cylinderGeometry args={[0.026, 0.025, 0.1, 16]} />
          <primitive object={goldMaterial} attach="material" />
        </mesh>
      </group>
      {/* Back Right */}
      <group position={[0.4, -0.4, -0.32]} rotation={[-0.15, 0, 0.05]}>
        <mesh castShadow>
          <cylinderGeometry args={[0.04, 0.025, 0.6, 16]} />
          <primitive object={woodMaterial} attach="material" />
        </mesh>
        <mesh position={[0, -0.25, 0]} castShadow>
          <cylinderGeometry args={[0.026, 0.025, 0.1, 16]} />
          <primitive object={goldMaterial} attach="material" />
        </mesh>
      </group>
    </group>
  );
}

// --- DYNAMIC CAMERA & LOAD SCENE CONTROLLER ---
// Pans camera to either the wood chest or fabric armchair based on menu selection
interface ControllerProps {
  controlsRef: React.RefObject<any>;
  focusMode: "wood" | "fabric" | "default";
}

function SceneController({ controlsRef, focusMode }: ControllerProps) {
  const { camera } = useThree();
  const entryTimer = useRef(0);
  const initialAnimationFinished = useRef(false);

  // Targets
  const targetLookAt = new THREE.Vector3(0, 0, 0);
  const targetCamPos = new THREE.Vector3(0, 1.2, 3.5);

  if (focusMode === "wood") {
    targetLookAt.set(0.7, -0.2, 0); // Focus on Cabinet drawer
    targetCamPos.set(0.9, 0.8, 2.2); // Closer wood view
  } else if (focusMode === "fabric") {
    targetLookAt.set(-0.8, -0.1, 0); // Focus on Chair
    targetCamPos.set(-1.0, 0.9, 2.0); // Zoom in on Twinbru fabric
  }

  useFrame((state, delta) => {
    // 1. Smooth Entry Animation on Load (Camera arcs/pans in)
    if (!initialAnimationFinished.current) {
      entryTimer.current += delta;
      if (entryTimer.current < 2.0) {
        const progress = entryTimer.current / 2.0;
        // Spiral-in camera path
        const angle = (1.0 - progress) * Math.PI * 0.7;
        const radius = 3.5 + (1.0 - progress) * 2.0;
        camera.position.set(
          Math.sin(angle) * radius,
          1.2 + (1.0 - progress) * 1.5,
          Math.cos(angle) * radius
        );
        camera.lookAt(0, -0.2, 0);
        return;
      } else {
        initialAnimationFinished.current = true;
      }
    }

    // 2. Continuous camera selection lerp
    if (controlsRef.current) {
      // Smoothly interpolate the orbit controls focus target
      controlsRef.current.target.lerp(targetLookAt, 4 * delta);
      // Smoothly interpolate camera position
      camera.position.lerp(targetCamPos, 3 * delta);
      controlsRef.current.update();
    }
  });

  return null;
}

// Scene Rotation Helper (Breathes and floats elements)
function RotatingScene({ children }: { children: React.ReactNode }) {
  const ref = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (ref.current) {
      // Gentle constant rotation
      ref.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.08;
    }
  });
  
  return <group ref={ref}>{children}</group>;
}

export default function FurnitureViewer() {
  const [mounted, setMounted] = useState(false);
  const [selectedWood, setSelectedWood] = useState<keyof typeof WOOD_PRESETS>("ebony");
  const [selectedFabric, setSelectedFabric] = useState<keyof typeof FABRIC_PRESETS>("emerald");
  
  // Interactive Scene States
  const [lampOn, setLampOn] = useState(true);
  const [drawersOpen, setDrawersOpen] = useState(false);
  const [chairBounce, setChairBounce] = useState(false);
  const [focusMode, setFocusMode] = useState<"wood" | "fabric" | "default">("default");

  const controlsRef = useRef<any>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Helper to trigger chair jump bounce
  const handleChairBounce = () => {
    setChairBounce(true);
    setTimeout(() => setChairBounce(false), 50); // reset flag quickly so it can be retriggered
  };

  if (!mounted) {
    return (
      <div style={{
        height: "450px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(10, 10, 10, 0.5)",
        border: "1px solid var(--card-border)",
        color: "var(--gold-primary)",
        fontFamily: "var(--font-serif)",
        letterSpacing: "0.1em"
      }}>
        CARGANDO ESTUDIO 3D...
      </div>
    );
  }

  const wood = WOOD_PRESETS[selectedWood];
  const fabric = FABRIC_PRESETS[selectedFabric];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px", width: "100%" }}>
      {/* Canvas Wrapper */}
      <div style={{
        height: "450px",
        width: "100%",
        position: "relative",
        background: "radial-gradient(circle at 50% 50%, #151311 0%, #050505 100%)",
        border: "1px solid var(--card-border)",
        boxShadow: "0 20px 40px rgba(0,0,0,0.6)",
      }}>
        {/* Instructions overlay */}
        <div style={{
          position: "absolute",
          top: "15px",
          left: "15px",
          zIndex: 10,
          color: "rgba(255, 255, 255, 0.5)",
          fontSize: "0.7rem",
          letterSpacing: "0.1em",
          pointerEvents: "none",
          textTransform: "uppercase",
          display: "flex",
          flexDirection: "column",
          gap: "4px"
        }}>
          <span>Arrastra para girar • Rueda para zoom</span>
          <span style={{ color: "var(--gold-primary)" }}>Haz clic en el mueble, cajones o lámpara</span>
        </div>

        <Canvas shadows>
          <PerspectiveCamera makeDefault position={[0, 1.2, 3.5]} fov={50} />
          
          {/* Ambient light */}
          <ambientLight intensity={lampOn ? 0.3 : 0.15} />
          
          {/* Main sunlight */}
          <directionalLight 
            position={[5, 8, 5]} 
            intensity={1.2} 
            castShadow 
            shadow-mapSize={[2048, 2048]} 
            shadow-bias={-0.0001}
          />
          
          {/* Subtle fill light */}
          <directionalLight 
            position={[-5, 5, -5]} 
            intensity={0.25} 
          />
          
          {/* Spot highlight */}
          <spotLight 
            position={[0, 5, 0]} 
            intensity={1.8} 
            angle={Math.PI / 4} 
            penumbra={1} 
            castShadow
          />

          {/* Particle drift in ambient room */}
          <SparkParticles count={70} />

          <RotatingScene>
            {/* Smooth scene load scale-in animation */}
            <Float speed={1.5} rotationIntensity={0.06} floatIntensity={0.12}>
              <group position={[0, -0.1, 0]}>
                {/* Armchair (Cushion click triggers bounce) */}
                <Armchair 
                  fabricColor={fabric.color} 
                  fabricRoughness={fabric.roughness} 
                  fabricMetalness={fabric.metalness}
                  woodColor={wood.color}
                  bounceActive={chairBounce}
                  triggerBounce={handleChairBounce}
                />
                
                {/* Drawer Chest (Drawer click slides drawer out) */}
                <ChestOfDrawers 
                  woodColor={wood.color} 
                  woodRoughness={wood.roughness} 
                  woodMetalness={wood.metalness}
                  drawersOpen={drawersOpen}
                  setDrawersOpen={setDrawersOpen}
                />
                
                {/* Table Lamp (Click shade toggles bulb light) */}
                <TableLamp lampOn={lampOn} setLampOn={setLampOn} />
              </group>
            </Float>

            {/* Ground Plane with reflection properties */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.05, 0]} receiveShadow>
              <planeGeometry args={[15, 15]} />
              <meshStandardMaterial 
                color="#0a0a09" 
                roughness={0.4} 
                metalness={0.2}
              />
            </mesh>
          </RotatingScene>

          {/* Dynamic Scene Focusing Camera System */}
          <SceneController controlsRef={controlsRef} focusMode={focusMode} />

          <OrbitControls 
            ref={controlsRef}
            enableDamping 
            dampingFactor={0.05}
            minDistance={1.5} 
            maxDistance={5.5}
            maxPolarAngle={Math.PI / 2 - 0.05} // Don't go through floor
          />
        </Canvas>
      </div>

      {/* Controls panel: wood/fabric selects and camera pan handles */}
      <div className="glass-panel" style={{
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "20px"
      }}>
        
        {/* Row 1: Select Materials & triggers camera pans */}
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "15px"
        }}>
          {/* Wood Selector */}
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <span style={{ fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gold-primary)", fontFamily: "var(--font-serif)" }}>Acabado de Madera</span>
            <div style={{ display: "flex", gap: "10px" }}>
              {(Object.keys(WOOD_PRESETS) as Array<keyof typeof WOOD_PRESETS>).map((key) => (
                <button
                  key={key}
                  onClick={() => {
                    setSelectedWood(key);
                    setFocusMode("wood"); // Pan camera to cabinet
                  }}
                  style={{
                    background: selectedWood === key ? "var(--gold-metallic)" : "#161616",
                    color: selectedWood === key ? "#000" : "#fff",
                    border: selectedWood === key ? "none" : "1px solid var(--card-border)",
                    padding: "6px 14px",
                    fontSize: "0.75rem",
                    cursor: "pointer",
                    fontFamily: "var(--font-serif)",
                    letterSpacing: "0.05em",
                    transition: "var(--transition-fast)"
                  }}
                >
                  {WOOD_PRESETS[key].name}
                </button>
              ))}
            </div>
          </div>

          {/* Fabric Selector */}
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <span style={{ fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gold-primary)", fontFamily: "var(--font-serif)" }}>Tejido Tapiz (Twinbru)</span>
            <div style={{ display: "flex", gap: "10px" }}>
              {(Object.keys(FABRIC_PRESETS) as Array<keyof typeof FABRIC_PRESETS>).map((key) => (
                <button
                  key={key}
                  onClick={() => {
                    setSelectedFabric(key);
                    setFocusMode("fabric"); // Pan camera to armchair
                  }}
                  style={{
                    background: selectedFabric === key ? "var(--gold-metallic)" : "#161616",
                    color: selectedFabric === key ? "#000" : "#fff",
                    border: selectedFabric === key ? "none" : "1px solid var(--card-border)",
                    padding: "6px 14px",
                    fontSize: "0.75rem",
                    cursor: "pointer",
                    fontFamily: "var(--font-serif)",
                    letterSpacing: "0.05em",
                    transition: "var(--transition-fast)"
                  }}
                >
                  {key === "emerald" ? "Velvet Esmeralda" : key === "cream" ? "Lino Crema" : "Cuero Tabaco"}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Row 2: Manual Interactive Buttons & Camera Reset */}
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          paddingTop: "15px",
          alignItems: "center",
          justifyContent: "space-between"
        }}>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <button
              onClick={() => setDrawersOpen(!drawersOpen)}
              className="btn-outline"
              style={{ padding: "8px 16px", fontSize: "0.7rem", letterSpacing: "0.05em" }}
            >
              {drawersOpen ? "Cerrar Cajones" : "Abrir Cajones"}
            </button>
            <button
              onClick={() => setLampOn(!lampOn)}
              className="btn-outline"
              style={{ padding: "8px 16px", fontSize: "0.7rem", letterSpacing: "0.05em" }}
            >
              {lampOn ? "Apagar Lámpara" : "Encender Lámpara"}
            </button>
            <button
              onClick={handleChairBounce}
              className="btn-outline"
              style={{ padding: "8px 16px", fontSize: "0.7rem", letterSpacing: "0.05em" }}
            >
              Probar Comodidad (Rebotar)
            </button>
          </div>

          <button
            onClick={() => setFocusMode("default")}
            style={{
              background: "transparent",
              color: "hsl(0,0%,50%)",
              border: "none",
              cursor: "pointer",
              fontSize: "0.75rem",
              fontFamily: "var(--font-serif)",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              padding: "8px"
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold-primary)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "hsl(0,0%,50%)")}
          >
            Vista General
          </button>
        </div>

      </div>
    </div>
  );
}
