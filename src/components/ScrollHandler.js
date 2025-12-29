import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollHandler = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      const targetId = location.state.scrollTo;

      // Da un pequeño delay para asegurar que el DOM esté montado
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          const headerOffset = 70;
          const yOffset =
            element.getBoundingClientRect().top +
            window.pageYOffset -
            headerOffset;
          window.scrollTo({ top: yOffset, behavior: "smooth" });
        }
      }, 100); // puedes ajustar este tiempo si hay mucho contenido
    }
  }, [location]);

  return null;
};

export default ScrollHandler;
