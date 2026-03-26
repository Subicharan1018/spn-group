"use client";

import React, { forwardRef } from "react";
import { motion } from "framer-motion";
import "./GlowMenu.css";

const itemVariants = {
  initial: { rotateX: 0, opacity: 1 },
  hover: { rotateX: -90, opacity: 0 },
};

const backVariants = {
  initial: { rotateX: 90, opacity: 0 },
  hover: { rotateX: 0, opacity: 1 },
};

const glowVariants = {
  initial: { opacity: 0, scale: 0.8 },
  hover: {
    opacity: 1,
    scale: 2,
    transition: {
      opacity: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
      scale: {
        duration: 0.5,
        type: "spring",
        stiffness: 300,
        damping: 25,
      },
    },
  },
};

const navGlowVariants = {
  initial: { opacity: 0 },
  hover: {
    opacity: 1,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
  },
};

const sharedTransition = {
  type: "spring",
  stiffness: 100,
  damping: 20,
  duration: 0.5,
};

export const GlowMenu = forwardRef(
  ({ className = "", items, activeItem, onItemClick, ...props }, ref) => {
    return (
      <motion.nav
        ref={ref}
        className={`glow-menu ${className}`}
        initial="initial"
        whileHover="hover"
        {...props}
      >
        <motion.div
          className="glow-menu-nav-glow"
          variants={navGlowVariants}
        />
        <ul className="glow-menu-list">
          {items.map((item) => {
            const Icon = item.icon;
            const isActive = item.label === activeItem;

            return (
              <motion.li key={item.label} className="glow-menu-item">
                <button
                  onClick={() => onItemClick?.(item.label)}
                  className="glow-menu-btn"
                >
                  <motion.div
                    className="glow-menu-flip"
                    whileHover="hover"
                    initial="initial"
                  >
                    <motion.div
                      className="glow-menu-glow-bg"
                      variants={glowVariants}
                      animate={isActive ? "hover" : "initial"}
                      style={{
                        background: item.gradient,
                        opacity: isActive ? 1 : 0,
                      }}
                    />
                    <motion.div
                      className={`glow-menu-face front ${
                        isActive ? "active" : ""
                      }`}
                      variants={itemVariants}
                      transition={sharedTransition}
                    >
                      <span
                        className="glow-menu-icon"
                        style={{
                          color: isActive ? item.iconColor : undefined,
                        }}
                      >
                        <Icon />
                      </span>
                      <span className="glow-menu-label">
                        {item.label}
                      </span>
                    </motion.div>
                    <motion.div
                      className={`glow-menu-face back ${
                        isActive ? "active" : ""
                      }`}
                      variants={backVariants}
                      transition={sharedTransition}
                      style={{ rotateX: 90 }}
                    >
                      <span
                        className="glow-menu-icon"
                        style={{
                          color: isActive ? item.iconColor : undefined,
                        }}
                      >
                        <Icon />
                      </span>
                      <span className="glow-menu-label">
                        {item.label}
                      </span>
                    </motion.div>
                  </motion.div>
                </button>
              </motion.li>
            );
          })}
        </ul>
      </motion.nav>
    );
  }
);

GlowMenu.displayName = "GlowMenu";
