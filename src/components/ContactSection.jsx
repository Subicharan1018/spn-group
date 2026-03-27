import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ContactCard } from "./ui/contact-card";
import { MailIcon, PhoneIcon, MapPinIcon } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import "./ContactSection.css"; // Original CSS file for surrounding padding

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contact-card-wrapper",
        { opacity: 0, y: 40 },
        {
          scrollTrigger: {
            trigger: ".contact-section",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="contact-section" id="contact" ref={sectionRef} style={{ padding: "8rem 2rem", backgroundColor: "#FAFAF7" }}>
      <div className="contact-card-wrapper" style={{ margin: "0 auto", maxWidth: "64rem" }}>
        <ContactCard
          title="Get in touch"
          description="Partner with SPN Traders for high-grade industrial materials and sustainable supply chain solutions. We do our best to respond within 1 business day."
          contactInfo={[
            {
              icon: MailIcon,
              label: "Email",
              value: "partnerships@spntraders.com",
            },
            {
              icon: PhoneIcon,
              label: "Phone",
              value: "+1 (800) 555-0199",
            },
            {
              icon: MapPinIcon,
              label: "Address",
              value: "Industrial Zone 4, Circular Logistics Park",
              className: "col-span-2",
            }
          ]}
        >
          <form className="contact-form-inner" style={{ width: "100%", display: "flex", flexDirection: "column", gap: "1.25rem" }} onSubmit={(e) => e.preventDefault()}>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <Label htmlFor="name">Name</Label>
              <Input type="text" id="name" placeholder="John Doe" />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="john@company.com" />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <Label htmlFor="phone">Phone</Label>
              <Input type="tel" id="phone" placeholder="+1 (555) 000-0000" />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <Label htmlFor="msg">Message</Label>
              <Textarea id="msg" placeholder="Tell us about your material requirements..." />
            </div>
            <Button type="submit" style={{ width: "100%", marginTop: "0.5rem" }}>
              Submit
            </Button>
          </form>
        </ContactCard>
      </div>
    </section>
  );
};

export default ContactSection;
