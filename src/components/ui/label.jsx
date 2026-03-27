import React, { forwardRef } from "react";
import "./label.css";

const Label = forwardRef(({ className = "", children, ...props }, ref) => {
  return (
    <label ref={ref} className={`spn-label ${className}`} {...props}>
      {children}
    </label>
  );
});
Label.displayName = "Label";

export { Label };
