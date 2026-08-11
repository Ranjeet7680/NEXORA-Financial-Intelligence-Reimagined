import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeCanvas({ className = '' }) {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 320;
    const height = container.clientHeight || 280;

    let renderer;
    let animationFrameId;

    try {
      // Scene, Camera, Renderer
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
      camera.position.z = 6;

      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      container.appendChild(renderer.domElement);

      // Group for objects
      const group = new THREE.Group();
      scene.add(group);

      // 1. Inner Core Icosahedron Wireframe
      const geometry = new THREE.IcosahedronGeometry(1.7, 1);
      const wireframe = new THREE.WireframeGeometry(geometry);
      const lineMaterial = new THREE.LineBasicMaterial({
        color: 0x0284c7, // Sky blue
        linewidth: 1.5,
        transparent: true,
        opacity: 0.85
      });
      const lineMesh = new THREE.LineSegments(wireframe, lineMaterial);
      group.add(lineMesh);

      // 2. Outer Rotating Ring (Torus)
      const torusGeom = new THREE.TorusGeometry(2.5, 0.02, 16, 100);
      const torusMat = new THREE.MeshBasicMaterial({
        color: 0x6366f1, // Indigo
        transparent: true,
        opacity: 0.6
      });
      const torus = new THREE.Mesh(torusGeom, torusMat);
      torus.rotation.x = Math.PI / 3;
      group.add(torus);

      // 3. Floating Node Particles
      const particlesCount = 70;
      const particlesGeom = new THREE.BufferGeometry();
      const positions = new Float32Array(particlesCount * 3);

      for (let i = 0; i < particlesCount * 3; i += 3) {
        positions[i] = (Math.random() - 0.5) * 8;
        positions[i + 1] = (Math.random() - 0.5) * 8;
        positions[i + 2] = (Math.random() - 0.5) * 8;
      }
      particlesGeom.setAttribute('position', new THREE.BufferAttribute(positions, 3));

      const particlesMat = new THREE.PointsMaterial({
        size: 0.06,
        color: 0x0284c7,
        transparent: true,
        opacity: 0.9
      });
      const particleSystem = new THREE.Points(particlesGeom, particlesMat);
      group.add(particleSystem);

      // Mouse & Touch Interaction (Passive for touch devices)
      let mouseX = 0;
      let mouseY = 0;
      const handleMouseMove = (event) => {
        const rect = container.getBoundingClientRect();
        mouseX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        mouseY = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      };

      window.addEventListener('mousemove', handleMouseMove);

      // Animation Loop
      const animate = () => {
        animationFrameId = requestAnimationFrame(animate);

        group.rotation.x += 0.003;
        group.rotation.y += 0.005;

        // Inertia tracking
        group.rotation.y += (mouseX * 0.3 - group.rotation.y) * 0.05;
        group.rotation.x += (-mouseY * 0.3 - group.rotation.x) * 0.05;

        renderer.render(scene, camera);
      };
      animate();

      // Resize Handler
      const handleResize = () => {
        if (!container || !renderer) return;
        const newW = container.clientWidth;
        const newH = container.clientHeight;
        if (newW > 0 && newH > 0) {
          camera.aspect = newW / newH;
          camera.updateProjectionMatrix();
          renderer.setSize(newW, newH);
        }
      };
      window.addEventListener('resize', handleResize);

      // Cleanup
      return () => {
        cancelAnimationFrame(animationFrameId);
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('resize', handleResize);
        if (container && renderer && renderer.domElement && container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
        }
        geometry.dispose();
        wireframe.dispose();
        lineMaterial.dispose();
        torusGeom.dispose();
        torusMat.dispose();
        particlesGeom.dispose();
        particlesMat.dispose();
        if (renderer) renderer.dispose();
      };
    } catch (e) {
      console.warn("WebGL initialization skipped:", e);
    }
  }, []);

  return (
    <div ref={mountRef} className={`w-full h-full min-h-[250px] sm:min-h-[300px] flex items-center justify-center relative overflow-hidden ${className}`}>
      {/* 2D Fallback Graphic for devices without WebGL */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-48 h-48 rounded-full border border-sky-400/30 animate-ping opacity-25"></div>
      </div>
    </div>
  );
}
