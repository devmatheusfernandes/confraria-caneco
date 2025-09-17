"use client";
import { AboutSection } from "@/ui/landing/AboutSection";
import { ContactSection } from "@/ui/landing/ContactSection";
import { Header } from "@/ui/landing/Header";
import { HeroSection } from "@/ui/landing/HeroSection";
import { MenuSection } from "@/ui/landing/MenuSection";
import { useEffect, useState } from "react";
import OrderPage from "./order/page";

export default function Home() {
  const [currentSection, setCurrentSection] = useState("home");
  const [currentPage, setCurrentPage] = useState<"home" | "order">("home");

  const handleSectionChange = (section: string) => {
    setCurrentSection(section);
    setCurrentPage("home");

    // Smooth scroll to section
    const element = document.getElementById(section);
    if (element) {
      const headerHeight = 80; // Approximate header height
      const elementPosition = element.offsetTop - headerHeight;

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  const handleMenuClick = () => {
    setCurrentPage("order");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleOrderPageClick = () => {
    setCurrentPage("order");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackToHome = () => {
    setCurrentPage("home");
    setCurrentSection("home");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Update current section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "menu", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setCurrentSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (currentPage === "order") {
    return <OrderPage onBackToHome={handleBackToHome} />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header
        onSectionChange={handleSectionChange}
        currentSection={currentSection}
      />
      <main>
        <section id="home">
          <HeroSection onMenuClick={handleMenuClick} />
        </section>

        <section id="about">
          <AboutSection />
        </section>

        <section id="menu">
          <MenuSection />
        </section>

        <section id="contact">
          <ContactSection />
        </section>
      </main>{" "}
    </div>
  );
}
