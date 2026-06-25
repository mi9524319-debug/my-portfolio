import * as THREE from "three";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function handleResize(
  renderer: THREE.WebGLRenderer,
  camera: THREE.PerspectiveCamera,
  canvasDiv: React.RefObject<HTMLDivElement>,
  _character?: THREE.Object3D
) {
  if (!canvasDiv.current) return;
  let canvas3d = canvasDiv.current.getBoundingClientRect();
  const width = canvas3d.width;
  const height = canvas3d.height;
  renderer.setSize(width, height);
  camera.aspect = width / height;
  camera.zoom = camera.aspect < 1 ? Math.max(0.48, camera.aspect * 0.95) : 1.1;
  camera.updateProjectionMatrix();
  ScrollTrigger.refresh();
}
