import React, { forwardRef } from "react";
import "./textarea.css";

const Textarea = forwardRef(({ className = "", ...props }, ref) => {
  return (
    <textarea
      className={`spn-textarea ${className}`}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
