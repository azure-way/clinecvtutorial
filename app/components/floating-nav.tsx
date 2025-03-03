"use client";

import { useEffect, useState } from "react";

export function FloatingNav() {
  const [activeSection, setActiveSection] = useState("about");
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let currentActiveSection = "about";
      
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop <= 100) {
          currentActiveSection = section.id;
        }
      });
      
      setActiveSection(currentActiveSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mounted]);

  if (!mounted) {
    return null;
  }

  const navItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "certificates", label: "Certificates" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="floating-nav">
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => scrollToSection(item.id)}
          className={`nav-item text-sm ${
            activeSection === item.id ? "active" : ""
          }`}
          aria-current={activeSection === item.id ? "page" : undefined}
        >
          {item.label}
        </button>
      ))}
    </nav>
  );
}
