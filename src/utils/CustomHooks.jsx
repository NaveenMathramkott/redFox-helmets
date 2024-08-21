import { useCursor } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";

export default function useHoverAndSelect(meshes) {
  const [hovered, setHovered] = useState(null);

  useFrame(({ raycaster }) => {
    const intersects = raycaster.intersectObjects(meshes.current, false); // Disable recursive

    if (intersects.length > 0) {
      const intersectedMesh = intersects[0].object;
      if (hovered !== intersectedMesh) {
        setHovered(intersectedMesh);
        useCursor(true); // Show hover cursor
        // Change color to gray on hover
        intersectedMesh.material.color.set(0x808080);
      }
    } else {
      if (hovered) {
        // Revert to original color on hover out
        hovered.material.color.setHex(hovered.userData.originalColor);
        setHovered(null);
        useCursor(false); // Hide hover cursor
      }
    }
  });

  return null;
}
