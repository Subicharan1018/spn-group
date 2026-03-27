import React from "react";
import { Plus } from "lucide-react";
import "./contact-card.css";

export function ContactCard({
  title = "Contact With Us",
  description = "If you have any questions regarding our Services or need help, please fill out the form here. We do our best to respond within 1 business day.",
  contactInfo,
  className = "",
  formSectionClassName = "",
  children,
  ...props
}) {
  return (
    <div className={`cc-wrapper ${className}`} {...props}>
      <Plus className="cc-plus cc-top-left" />
      <Plus className="cc-plus cc-top-right" />
      <Plus className="cc-plus cc-bottom-left" />
      <Plus className="cc-plus cc-bottom-right" />

      <div className="cc-info-pane">
        <div className="cc-info-content">
          <h1 className="cc-title">{title}</h1>
          <p className="cc-description">{description}</p>
          <div className="cc-info-grid">
            {contactInfo?.map((info, index) => (
              <ContactInfo key={index} {...info} />
            ))}
          </div>
        </div>
      </div>

      <div className={`cc-form-pane ${formSectionClassName}`}>
        {children}
      </div>
    </div>
  );
}

function ContactInfo({
  icon: Icon,
  label,
  value,
  className = "",
  ...props
}) {
  return (
    <div className={`cc-info-item ${className}`} {...props}>
      <div className="cc-info-icon-wrapper">
        <Icon className="cc-info-icon" />
      </div>
      <div>
        <p className="cc-info-label">{label}</p>
        <p className="cc-info-value">{value}</p>
      </div>
    </div>
  );
}
