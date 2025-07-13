import { useEffect, useRef, useState } from "react";

export const useHover = () => {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (node) {
      node.onmouseenter = () => setHovered(true);
      node.onmouseleave = () => setHovered(false);

      return () => {
        node.onmouseenter = null;
        node.onmouseleave = null;
      };
    }
  }, []);

  return { hovered, ref };
};
