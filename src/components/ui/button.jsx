import React, { forwardRef } from "react";
import "./button.css";

const Button = forwardRef(
  ({ className = "", variant = "default", size = "default", type = "button", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        className={`spn-btn spn-btn-${variant} spn-btn-${size} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button };
