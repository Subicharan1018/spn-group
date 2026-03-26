import React, { useState, useEffect } from "react";
import { Home, Sparkles, Leaf, Package, Info } from "lucide-react";
import { GlowMenu } from "./ui/GlowMenu";
import "./Header.css";

const menuItems = [
  {
    icon: Home,
    label: "Home",
    href: "#home",
    gradient:
      "radial-gradient(circle, rgba(139,115,85,0.12) 0%, rgba(139,115,85,0.04) 50%, transparent 100%)",
    iconColor: "#8B7355",
  },
  {
    icon: Package,
    label: "Products",
    href: "#products",
    gradient:
      "radial-gradient(circle, rgba(201,169,110,0.12) 0%, rgba(201,169,110,0.04) 50%, transparent 100%)",
    iconColor: "#C9A96E",
  },
  {
    icon: Sparkles,
    label: "Materials",
    href: "#materials",
    gradient:
      "radial-gradient(circle, rgba(139,139,139,0.12) 0%, rgba(139,139,139,0.04) 50%, transparent 100%)",
    iconColor: "#8B8B8B",
  },
  {
    icon: Info,
    label: "About",
    href: "#about",
    gradient:
      "radial-gradient(circle, rgba(85,107,139,0.12) 0%, rgba(85,107,139,0.04) 50%, transparent 100%)",
    iconColor: "#556B8B",
  },
];

const Header = () => {
  const [activeItem, setActiveItem] = useState("Home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleItemClick = (label) => {
    setActiveItem(label);
    const item = menuItems.find((m) => m.label === label);
    if (item?.href) {
      const el = document.querySelector(item.href);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      <a href="#home" className="header-logo">
        SPN
      </a>

      <div className="header-nav">
        <GlowMenu
          items={menuItems}
          activeItem={activeItem}
          onItemClick={handleItemClick}
        />
      </div>

      <div className="header-actions">
        <a href="#about" className="header-action-btn">
          Learn More
        </a>
      </div>
    </header>
  );
};

export default Header;