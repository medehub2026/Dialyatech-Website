import {
  Activity,
  Building2,
  CheckCircle2,
  Globe2,
  HeartPulse,
  PackageCheck,
  ShieldCheck,
  Truck,
  Waves
} from "lucide-react";

export const company = {
  legalName: "DIALYATECH HEALTH SERVICE PVT LTD",
  brandName: "DIALYATECH",
  email: "info@dialyatech.com",
  phone: "+91 98765 43210",
  whatsapp: "+919876543210",
  address: "Corporate Office, India | Serving domestic and worldwide healthcare markets"
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Nephrology Solutions", href: "/nephrology-solutions" },
  { label: "Export Business", href: "/export-business" },
  { label: "Domestic Business", href: "/domestic-business" },
  { label: "Request Quotation", href: "/request-quotation" },
  { label: "Contact Us", href: "/contact" }
];

export const highlights = [
  { title: "Worldwide Business Presence", icon: Globe2 },
  { title: "Domestic Market Strength", icon: Building2 },
  { title: "Nephrology-Focused Solutions", icon: HeartPulse },
  { title: "Reliable Supply Chain", icon: Truck },
  { title: "Export & Domestic Quotation Support", icon: PackageCheck }
];

export const whyChoose = [
  {
    title: "Specialized Nephrology Focus",
    description:
      "DIALYATECH is built around dialysis, renal care, and the supply requirements of nephrology-driven institutions.",
    icon: Activity
  },
  {
    title: "Commercial Export Readiness",
    description:
      "Structured quotation support for importers, distributors, hospitals, and international procurement teams.",
    icon: Globe2
  },
  {
    title: "Quality-Oriented Procurement",
    description:
      "A careful supplier approach helps healthcare buyers source dependable equipment, consumables, accessories, and support items.",
    icon: ShieldCheck
  },
  {
    title: "Responsive Supply Support",
    description:
      "Domestic and export workflows are handled with clear communication, product matching, and practical delivery coordination.",
    icon: CheckCircle2
  }
];

export const categoryCards = [
  {
    title: "Dialysis Machines",
    description: "Hemodialysis equipment for hospitals, centers, and renal care networks.",
    icon: HeartPulse
  },
  {
    title: "Dialysis Consumables",
    description: "Dialyzers, bloodlines, fistula needles, concentrates, and clinical supplies.",
    icon: Waves
  },
  {
    title: "RO Water Treatment",
    description: "Dialysis-grade water systems designed for consistent clinical operation.",
    icon: Activity
  },
  {
    title: "Hospital Equipment",
    description: "ICU, monitoring, accessories, and institutional healthcare equipment.",
    icon: Building2
  }
];
