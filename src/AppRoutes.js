import React, { Suspense } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Maratones from "./components/Maratones";
import Footer from "./components/Footer";
import ReviewForm from "./components/ReviewForm";
import StudiesAtHome from "./components/StudiesAtHome";
import AdminLogin from "./components/AdminLogin";
import AdminPanel from "./components/AdminPanel";
import ScrollHandler from "./components/ScrollHandler";
// Importamos el icono para el botón flotante
import { FaCalendarCheck } from "react-icons/fa";

// ✅ Lazy loaded components
const AboutMe = React.lazy(() => import("./components/AboutMe"));
const ReviewsPage = React.lazy(() => import("./components/ReviewsPage"));

const AppRoutes = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleContactClick = (e) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: "contact" } });
    } else {
      const element = document.getElementById("contact");
      if (element) {
        const headerOffset = 80;
        const yOffset =
          element.getBoundingClientRect().top +
          window.pageYOffset -
          headerOffset;
        window.scrollTo({ top: yOffset, behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <Header />
      <Suspense fallback={<div className="loading-fallback">Cargando...</div>}>
        <Routes>
          {/* 🏠 Página principal */}
          <Route
            path="/"
            element={
              <>
                <ScrollHandler />
                <Hero />
                <About />
                <Services />
                <StudiesAtHome />
                <Contact />
                <ReviewForm />
                <Footer />
              </>
            }
          />
          {/* 📄 About Me */}
          <Route
            path="/about"
            element={
              <>
                <AboutMe />
                <Maratones />
                <Footer />
              </>
            }
          />
          {/* ⭐ Reviews Page */}
          <Route path="/reviews" element={<ReviewsPage />} />
          {/* 🔐 Admin */}
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
      </Suspense>

      {/* Botón Flotante de Agenda (Sin pixel canvas) */}
      <button
        className="floating-cta-button"
        onClick={handleContactClick}
        title="Agendar Cita"
        aria-label="Agendar Cita"
      >
        <FaCalendarCheck className="floating-icon" />
      </button>
    </>
  );
};

export default AppRoutes;