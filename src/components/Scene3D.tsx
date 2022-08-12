import { Switch, useTheme } from "@nextui-org/react";
import React, { MutableRefObject, useEffect, useRef } from "react";
import * as THREE from "three";
import "./Scene3D.scss";

export default function Scene3D() {
  const { isDark, type } = useTheme();
  const canvasRef = useRef<HTMLCanvasElement>(null) as MutableRefObject<
    HTMLCanvasElement
  >;

  useEffect(() => {
    if (canvasRef) {
      // Canvas
      const loader = new THREE.TextureLoader();

      const cross = loader.load("./cross.png");

      // Scene
      const scene = new THREE.Scene();

      // Objects
      const geometry = new THREE.TorusGeometry(0.7, 0.2, 16, 100);

      const particlesGeometry = new THREE.BufferGeometry();
      const particlesCount = 5000;

      const posArray = new Float32Array(particlesCount * 3);

      for (let i = 0; i < particlesCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * (Math.random() * 5);
      }

      // Materials

      const material = new THREE.PointsMaterial({
        size: isDark ? 0.005 : 0.007,
        color: isDark ? "#82cbff" : "#000",
      });

      const particlesMaterial = new THREE.PointsMaterial({
        size: 0.005,
        map: cross,
        transparent: true,
      });

      particlesGeometry.setAttribute(
        "position",
        new THREE.BufferAttribute(posArray, 3)
      );

      const sizes = {
        width: 800,
        height: 800,
      };

      const sphere = new THREE.Points(geometry, material);
      const particlesMesh = new THREE.Points(
        particlesGeometry,
        particlesMaterial
      );
      scene.add(sphere, particlesMesh);

      const camera = new THREE.PerspectiveCamera(
        75,
        sizes.width / sizes.height,
        0.1,
        100
      );
      camera.position.z = 2;
      scene.add(camera);

      // Controls
      // const controls = new OrbitControls(camera, canvas)
      // controls.enableDamping = true

      /**
       * Renderer
       */
      const renderer = new THREE.WebGLRenderer({
        canvas: canvasRef.current,
      });
      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setClearColor(0x000000, 0);

      /**
       * Animate
       */

      const clock = new THREE.Clock();

      let mouseX = 0,
        mouseY = 0;

      document.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
      });

      const tick = () => {
        const elapsedTime = clock.getElapsedTime();

        // Update objects
        sphere.rotation.y = 0.5 * elapsedTime;

        if (mouseX > 0) {
          particlesMesh.rotation.y = -mouseX * 0.00005;
          particlesMesh.rotation.x = -mouseY * 0.00005;
        }

        // Render
        renderer.render(scene, camera);
        window.requestAnimationFrame(tick);
      };

      tick();
    }
  }, [canvasRef, isDark]);

  return (
    <div className="scene">
      <canvas className="webgl" ref={canvasRef}></canvas>
    </div>
  );
}
