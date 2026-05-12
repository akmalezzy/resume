"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export function BackgroundScene() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, mount.clientWidth / mount.clientHeight, 0.1, 100);
    camera.position.set(0, 0, 9);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    const particles = 900;
    const positions = new Float32Array(particles * 3);
    const colors = new Float32Array(particles * 3);

    for (let i = 0; i < particles; i++) {
      const i3 = i * 3;
      const radius = 2.2 + Math.random() * 5.2;
      const angle = Math.random() * Math.PI * 2;
      positions[i3] = Math.cos(angle) * radius;
      positions[i3 + 1] = (Math.random() - 0.5) * 5.5;
      positions[i3 + 2] = Math.sin(angle) * radius;
      colors[i3] = 0.2 + Math.random() * 0.25;
      colors[i3 + 1] = 0.8 + Math.random() * 0.2;
      colors[i3 + 2] = 0.95;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.025,
      vertexColors: true,
      transparent: true,
      opacity: 0.82,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const pointCloud = new THREE.Points(geometry, material);
    scene.add(pointCloud);

    const torus = new THREE.Mesh(
      new THREE.TorusKnotGeometry(1.45, 0.012, 180, 8, 2, 5),
      new THREE.MeshBasicMaterial({ color: 0x19f2ff, transparent: true, opacity: 0.42 })
    );
    scene.add(torus);

    const pointer = new THREE.Vector2();
    const handlePointer = (event: PointerEvent) => {
      pointer.x = (event.clientX / window.innerWidth - 0.5) * 2;
      pointer.y = (event.clientY / window.innerHeight - 0.5) * 2;
    };

    const handleResize = () => {
      if (!mount) return;
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };

    window.addEventListener("pointermove", handlePointer);
    window.addEventListener("resize", handleResize);

    let animationFrame = 0;
    const clock = new THREE.Clock();
    const animate = () => {
      const elapsed = clock.getElapsedTime();
      pointCloud.rotation.y = elapsed * 0.045 + pointer.x * 0.12;
      pointCloud.rotation.x = pointer.y * 0.08;
      torus.rotation.x = elapsed * 0.18;
      torus.rotation.y = elapsed * 0.24;
      torus.position.x = pointer.x * 0.22;
      torus.position.y = -pointer.y * 0.18;
      renderer.render(scene, camera);
      animationFrame = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("pointermove", handlePointer);
      window.removeEventListener("resize", handleResize);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 -z-10 opacity-90" aria-hidden />;
}
