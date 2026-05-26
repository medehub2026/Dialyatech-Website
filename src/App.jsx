import React, { useMemo, useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Send,
  X
} from "lucide-react";
import { categories, products } from "./data/products";
import { categoryCards, company, highlights, navLinks, whyChoose } from "./data/site";

const heroImage =
  "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1800&q=90";
const labImage =
  "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=1500&q=85";
const exportImage =
  "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1500&q=85";
const hospitalImage =
  "https://images.unsplash.com/photo-1519494140681-8b17d830a3e9?auto=format&fit=crop&w=1500&q=85";

const basePath = (import.meta.env.BASE_URL || "/").replace(/\/$/, "");

function withBasePath(path) {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${normalizedPath === "/" ? "/" : normalizedPath}`;
}

function getCurrentRoute() {
  let pathname = window.location.pathname;
  if (basePath && pathname.startsWith(basePath)) {
    pathname = pathname.slice(basePath.length) || "/";
  }
  return pathname.replace(/\/$/, "") || "/";
}

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/50 bg-white/90 backdrop-blur-xl">
      <div className="container-page flex h-20 items-center justify-between">
        <a href={withBasePath("/")} className="flex items-center gap-3" aria-label="DIALYATECH home">
          <div className="flex h-11 w-11 items-center justify-center rounded-md bg-medical-600 text-white shadow-glow">
            <span className="text-lg font-black">D</span>
          </div>
          <div>
            <p className="text-lg font-black tracking-wide text-navy-900">DIALYATECH</p>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
              Health Service
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={withBasePath(link.href)}
              className="text-sm font-semibold text-slate-600 transition hover:text-medical-700"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a className="btn-primary hidden xl:inline-flex" href={withBasePath("/request-quotation")}>
          Request Quotation <ArrowRight size={16} />
        </a>

        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 text-navy-800 lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-100 bg-white lg:hidden">
          <nav className="container-page grid gap-1 py-4" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={withBasePath(link.href)}
                className="rounded-md px-3 py-3 text-sm font-semibold text-slate-700 hover:bg-medical-50"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

function SectionIntro({ eyebrow, title, text, align = "center" }) {
  return (
    <div className={align === "left" ? "max-w-3xl" : "mx-auto max-w-3xl text-center"}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-black tracking-tight text-navy-900 sm:text-4xl">{title}</h2>
      {text && <p className="mt-4 text-base leading-8 text-slate-600">{text}</p>}
    </div>
  );
}

function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-navy-900 pt-20 text-white">
      <img
        src={heroImage}
        alt="Modern clinical healthcare team reviewing nephrology equipment"
        className="absolute inset-0 h-full w-full object-cover opacity-35"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/90 to-medical-900/60" />
      <div className="container-page relative flex min-h-[calc(100vh-5rem)] items-center py-16">
        <div className="max-w-4xl animate-float-in">
          <p className="eyebrow text-medical-100">International Nephrology Supply Partner</p>
          <h1 className="mt-5 text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-7xl">
            Global Healthcare Equipment Supplier Focused on Nephrology Solutions
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-9 text-slate-100 sm:text-xl">
            Delivering reliable dialysis, nephrology, and hospital equipment solutions for domestic
            and international healthcare markets.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href={withBasePath("/products")} className="btn-primary">
              View Products <ArrowRight size={18} />
            </a>
            <a href={withBasePath("/request-quotation")} className="btn-secondary border-white/20 bg-white/95">
              Request Quotation <Send size={18} />
            </a>
          </div>
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {highlights.map(({ title, icon: Icon }) => (
              <div key={title} className="rounded-md border border-white/15 bg-white/10 p-4 backdrop-blur-md">
                <Icon className="mb-3 text-medical-100" size={22} />
                <p className="text-sm font-bold leading-6 text-white">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-page grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <SectionIntro
            align="left"
            eyebrow="About DIALYATECH"
            title="A healthcare equipment supplier built for renal care markets."
            text={`${company.legalName} supports hospitals, dialysis centers, distributors, importers, and healthcare procurement teams with equipment and consumable supply across domestic India and worldwide export markets.`}
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {["International buyer support", "Domestic institutional supply", "Focused nephrology portfolio", "Quotation-led procurement"].map(
              (item) => (
                <div key={item} className="flex items-start gap-3 rounded-md bg-slate-50 p-4">
                  <CheckCircle2 className="mt-1 shrink-0 text-medical-600" size={20} />
                  <p className="font-semibold text-slate-700">{item}</p>
                </div>
              )
            )}
          </div>
        </div>
        <div className="relative">
          <img
            src={labImage}
            alt="Clinical professional working in a modern healthcare laboratory"
            className="aspect-[4/5] w-full rounded-md object-cover shadow-soft"
          />
          <div className="absolute bottom-6 left-6 right-6 rounded-md bg-white/95 p-5 shadow-soft backdrop-blur">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-medical-600">Commercial Focus</p>
            <p className="mt-2 text-2xl font-black text-navy-900">Nephrology, dialysis, hospital equipment, and supply continuity.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function CategoryPreview() {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container-page">
        <SectionIntro
          eyebrow="Product Categories"
          title="Built around the clinical and procurement needs of renal care."
          text="DIALYATECH supplies equipment, consumables, RO systems, spare parts, and hospital support products for domestic and export business channels."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categoryCards.map(({ title, description, icon: Icon }) => (
            <div key={title} className="rounded-md border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-md bg-medical-50 text-medical-700">
                <Icon size={24} />
              </div>
              <h3 className="text-lg font-black text-navy-900">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Products() {
  const [activeCategory, setActiveCategory] = useState("All");
  const filteredProducts = useMemo(
    () =>
      activeCategory === "All"
        ? products
        : products.filter((product) => product.category === activeCategory),
    [activeCategory]
  );

  return (
    <section id="products" className="section-padding bg-white">
      <div className="container-page">
        <SectionIntro
          eyebrow="Products"
          title="Professional product supply for export and domestic buyers."
          text="Browse representative products and request export or domestic quotations based on your procurement route."
        />
        <div className="mt-9 flex gap-3 overflow-x-auto pb-2">
          {["All", ...categories].map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`shrink-0 rounded-md border px-4 py-2 text-sm font-bold transition ${
                activeCategory === category
                  ? "border-medical-600 bg-medical-600 text-white"
                  : "border-slate-200 bg-white text-slate-600 hover:border-medical-400 hover:text-medical-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredProducts.map((product) => (
            <article key={product.id} className="overflow-hidden rounded-md border border-slate-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
              <img src={product.image} alt={product.name} className="h-56 w-full object-cover" />
              <div className="p-6">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-md bg-medical-50 px-3 py-1 text-xs font-bold text-medical-700">
                    {product.category}
                  </span>
                  <span className="rounded-md bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">
                    {product.availability}
                  </span>
                </div>
                <h3 className="mt-4 text-xl font-black text-navy-900">{product.name}</h3>
                <p className="mt-3 min-h-20 text-sm leading-7 text-slate-600">{product.description}</p>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <a href={withBasePath("/request-quotation#export-quote")} className="btn-primary px-3 py-2 text-xs">
                    Export Quotation
                  </a>
                  <a href={withBasePath("/request-quotation#domestic-quote")} className="btn-secondary px-3 py-2 text-xs">
                    Domestic Quotation
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChoose() {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container-page">
        <SectionIntro
          eyebrow="Why Choose DIALYATECH"
          title="Reliable, specialized, and ready for serious healthcare procurement."
          text="The company combines focused product knowledge with practical supply support for buyers operating in regulated and mission-critical healthcare environments."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {whyChoose.map(({ title, description, icon: Icon }) => (
            <div key={title} className="flex gap-5 rounded-md border border-slate-100 bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-medical-600 text-white">
                <Icon size={24} />
              </div>
              <div>
                <h3 className="text-lg font-black text-navy-900">{title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function NephrologySolutions() {
  return (
    <section id="nephrology" className="section-padding bg-white">
      <div className="container-page grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <img
          src={hospitalImage}
          alt="Modern hospital corridor for nephrology and dialysis care"
          className="aspect-[16/11] w-full rounded-md object-cover shadow-soft"
        />
        <div>
          <SectionIntro
            align="left"
            eyebrow="Nephrology Solutions"
            title="A focused portfolio for dialysis centers and renal care departments."
            text="DIALYATECH supports procurement across hemodialysis machines, dialysis consumables, RO water systems, nephrology equipment, hospital support equipment, and critical spare parts."
          />
          <div className="mt-7 grid gap-3">
            {categories.map((category) => (
              <div key={category} className="flex items-center gap-3 rounded-md bg-medical-50 p-4">
                <CheckCircle2 size={18} className="text-medical-700" />
                <span className="font-bold text-slate-700">{category}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ExportDomesticSupply({ focus = "both" }) {
  const showExport = focus === "both" || focus === "export";
  const showDomestic = focus === "both" || focus === "domestic";

  return (
    <>
      <section className="bg-navy-900 text-white">
        <div className={`container-page grid gap-0 ${showExport && showDomestic ? "lg:grid-cols-2" : ""}`}>
          {showExport && (
          <div id="export" className={`py-16 ${showDomestic ? "lg:pr-12" : ""}`}>
            <p className="eyebrow text-medical-100">Export Business</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              Worldwide supply support for importers, distributors, and healthcare groups.
            </h2>
            <p className="mt-5 leading-8 text-slate-200">
              DIALYATECH supports international enquiries with product matching, export quotation
              preparation, destination details, and commercial communication for global procurement.
            </p>
            <a href="#export-quote" className="btn-primary mt-7">
              Request Export Quotation <ArrowRight size={16} />
            </a>
          </div>
          )}
          {showDomestic && (
          <div id="domestic" className={`${showExport ? "border-t border-white/10 lg:border-l lg:border-t-0 lg:pl-12" : ""} py-16`}>
            <p className="eyebrow text-medical-100">Domestic Business</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              Strong Indian market presence for hospitals and dialysis networks.
            </h2>
            <p className="mt-5 leading-8 text-slate-200">
              Domestic customers can request quotations by state, city, delivery location, quantity,
              and product requirement for practical institutional procurement support.
            </p>
            <a href="#domestic-quote" className="btn-secondary mt-7 border-white/20 bg-white/95">
              Request Domestic Quotation <ArrowRight size={16} />
            </a>
          </div>
          )}
        </div>
      </section>

      <section className="relative overflow-hidden bg-slate-50">
        <img src={exportImage} alt="Global logistics containers for healthcare export supply" className="absolute inset-0 h-full w-full object-cover opacity-10" />
        <div className="container-page relative py-14">
          <div className="grid gap-6 text-center sm:grid-cols-3">
            {[
              ["Global", "Export-ready quotation support"],
              ["Domestic", "India-wide institutional supply"],
              ["Focused", "Nephrology product specialization"]
            ].map(([number, label]) => (
              <div key={label} className="rounded-md bg-white p-6 shadow-sm">
                <p className="text-3xl font-black text-medical-700">{number}</p>
                <p className="mt-2 font-semibold text-slate-600">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function BusinessSections() {
  return (
    <>
      <NephrologySolutions />
      <ExportDomesticSupply />
    </>
  );
}

function QuotationForm({ type }) {
  const isExport = type === "export";
  const initialState = isExport
    ? {
        companyName: "",
        country: "",
        contactPerson: "",
        email: "",
        phone: "",
        productName: "",
        quantity: "",
        destination: "",
        message: ""
      }
    : {
        hospitalName: "",
        state: "",
        city: "",
        contactPerson: "",
        email: "",
        phone: "",
        productName: "",
        quantity: "",
        deliveryLocation: "",
        message: ""
      };

  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const labels = isExport
    ? {
        companyName: "Company Name",
        country: "Country",
        contactPerson: "Contact Person",
        email: "Email",
        phone: "Phone / WhatsApp",
        productName: "Product Name",
        quantity: "Quantity",
        destination: "Destination Port / Country",
        message: "Message"
      }
    : {
        hospitalName: "Hospital / Company Name",
        state: "State",
        city: "City",
        contactPerson: "Contact Person",
        email: "Email",
        phone: "Phone / WhatsApp",
        productName: "Product Name",
        quantity: "Quantity",
        deliveryLocation: "Delivery Location",
        message: "Message"
      };

  const validate = () => {
    const nextErrors = {};
    Object.entries(values).forEach(([key, value]) => {
      if (key !== "message" && !String(value).trim()) {
        nextErrors[key] = `${labels[key]} is required`;
      }
    });
    if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      nextErrors.email = "Enter a valid email address";
    }
    if (values.quantity && Number(values.quantity) <= 0) {
      nextErrors.quantity = "Quantity must be greater than zero";
    }
    return nextErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
      setValues(initialState);
    }
  };

  return (
    <form
      id={isExport ? "export-quote" : "domestic-quote"}
      onSubmit={handleSubmit}
      className="rounded-md border border-slate-100 bg-white p-6 shadow-soft"
      noValidate
    >
      <div className="mb-6">
        <p className="eyebrow">{isExport ? "Export Quotation" : "Domestic Quotation"}</p>
        <h3 className="mt-2 text-2xl font-black text-navy-900">
          {isExport ? "Submit Export Quotation Request" : "Submit Domestic Quotation Request"}
        </h3>
      </div>
      {submitted && (
        <div className="mb-6 rounded-md border border-emerald-200 bg-emerald-50 p-4 text-sm font-semibold text-emerald-800">
          Thank you. Your {isExport ? "export" : "domestic"} quotation request has been captured.
          A backend, CRM, or email service can be connected to this form later.
        </div>
      )}
      <div className="grid gap-4 sm:grid-cols-2">
        {Object.entries(labels).map(([key, label]) => (
          <div key={key} className={key === "message" ? "sm:col-span-2" : ""}>
            <label className="field-label" htmlFor={`${type}-${key}`}>
              {label}
            </label>
            {key === "message" ? (
              <textarea
                id={`${type}-${key}`}
                rows="4"
                className="input-field resize-none"
                value={values[key]}
                onChange={(event) => setValues({ ...values, [key]: event.target.value })}
                placeholder="Share product specifications, brand preference, or procurement timeline"
              />
            ) : key === "productName" ? (
              <select
                id={`${type}-${key}`}
                className="input-field"
                value={values[key]}
                onChange={(event) => setValues({ ...values, [key]: event.target.value })}
              >
                <option value="">Select product</option>
                {products.map((product) => (
                  <option key={product.id} value={product.name}>
                    {product.name}
                  </option>
                ))}
              </select>
            ) : (
              <input
                id={`${type}-${key}`}
                type={key === "email" ? "email" : key === "quantity" ? "number" : "text"}
                min={key === "quantity" ? "1" : undefined}
                className="input-field"
                value={values[key]}
                onChange={(event) => setValues({ ...values, [key]: event.target.value })}
                placeholder={label}
              />
            )}
            {errors[key] && <p className="mt-2 text-xs font-semibold text-red-600">{errors[key]}</p>}
          </div>
        ))}
      </div>
      <button type="submit" className="btn-primary mt-6 w-full">
        {isExport ? "Submit Export Quotation Request" : "Submit Domestic Quotation Request"}
        <Send size={16} />
      </button>
    </form>
  );
}

function Quotation() {
  return (
    <section id="quotation" className="section-padding bg-slate-50">
      <div className="container-page">
        <SectionIntro
          eyebrow="Request Quotation"
          title="Two clear quotation flows for international and Indian buyers."
          text="Use the appropriate form based on your procurement market. Each form validates required commercial details and can later be connected to an API, CRM, or email service."
        />
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <QuotationForm type="export" />
          <QuotationForm type="domestic" />
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-page grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <SectionIntro
            align="left"
            eyebrow="Contact Us"
            title="Speak with DIALYATECH for product and procurement support."
            text="Reach out for product availability, domestic supply, export quotations, distributor enquiries, and institutional procurement requirements."
          />
          <div className="mt-8 grid gap-4">
            <a href={`mailto:${company.email}`} className="flex items-center gap-4 rounded-md bg-slate-50 p-4 font-semibold text-slate-700 hover:bg-medical-50">
              <Mail className="text-medical-700" size={22} /> {company.email}
            </a>
            <a href={`tel:${company.phone.replaceAll(" ", "")}`} className="flex items-center gap-4 rounded-md bg-slate-50 p-4 font-semibold text-slate-700 hover:bg-medical-50">
              <Phone className="text-medical-700" size={22} /> {company.phone}
            </a>
            <a href={`https://wa.me/${company.whatsapp.replace("+", "")}`} className="flex items-center gap-4 rounded-md bg-emerald-50 p-4 font-semibold text-emerald-800 hover:bg-emerald-100">
              <MessageCircle className="text-emerald-700" size={22} /> WhatsApp Enquiry
            </a>
            <div className="flex items-start gap-4 rounded-md bg-slate-50 p-4 font-semibold text-slate-700">
              <MapPin className="mt-1 shrink-0 text-medical-700" size={22} /> {company.address}
            </div>
          </div>
        </div>

        <div className="grid gap-6">
          <form
            className="rounded-md border border-slate-100 bg-white p-6 shadow-soft"
            onSubmit={(event) => {
              event.preventDefault();
              setSent(true);
              event.currentTarget.reset();
            }}
          >
            <h3 className="text-2xl font-black text-navy-900">Contact Form</h3>
            {sent && (
              <div className="mt-4 rounded-md border border-emerald-200 bg-emerald-50 p-4 text-sm font-semibold text-emerald-800">
                Your contact enquiry has been captured on the frontend. Connect an email/API service when ready.
              </div>
            )}
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <input className="input-field" required placeholder="Full Name" />
              <input className="input-field" required type="email" placeholder="Email Address" />
              <input className="input-field" required placeholder="Phone / WhatsApp" />
              <input className="input-field" required placeholder="Company / Hospital" />
              <textarea className="input-field resize-none sm:col-span-2" required rows="4" placeholder="Message" />
            </div>
            <button className="btn-primary mt-6" type="submit">
              Send Enquiry <Send size={16} />
            </button>
          </form>
          <div className="flex min-h-72 items-center justify-center rounded-md border border-dashed border-medical-200 bg-medical-50 p-6 text-center">
            <div>
              <MapPin className="mx-auto text-medical-700" size={34} />
              <h3 className="mt-4 text-xl font-black text-navy-900">Google Map Placeholder</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Embed the verified corporate office Google Map iframe here before final launch.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="container-page grid gap-8 py-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <p className="text-2xl font-black">{company.brandName}</p>
          <p className="mt-3 max-w-md text-sm leading-7 text-slate-300">
            Global healthcare equipment supplier focused on nephrology solutions, dialysis equipment,
            consumables, hospital equipment, and commercial supply support.
          </p>
        </div>
        <div>
          <p className="font-bold">Business</p>
          <div className="mt-4 grid gap-2 text-sm text-slate-300">
            <a href={withBasePath("/export-business")} className="hover:text-white">Export Business</a>
            <a href={withBasePath("/domestic-business")} className="hover:text-white">Domestic Business</a>
            <a href={withBasePath("/request-quotation")} className="hover:text-white">Request Quotation</a>
          </div>
        </div>
        <div>
          <p className="font-bold">Products</p>
          <div className="mt-4 grid gap-2 text-sm text-slate-300">
            {categories.slice(0, 4).map((category) => (
              <a key={category} href={withBasePath("/products")} className="hover:text-white">{category}</a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5">
        <div className="container-page flex flex-col gap-2 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {company.legalName}. All rights reserved.</p>
          <a href={withBasePath("/")} className="inline-flex items-center gap-2 hover:text-white">
            Back to top <ChevronDown className="rotate-180" size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const route = getCurrentRoute();
  const routes = {
    "/": (
      <>
        <Hero />
        <About />
        <CategoryPreview />
        <Products />
        <WhyChoose />
        <BusinessSections />
        <Quotation />
        <Contact />
      </>
    ),
    "/about": (
      <>
        <About />
        <WhyChoose />
      </>
    ),
    "/products": <Products />,
    "/nephrology-solutions": (
      <>
        <NephrologySolutions />
        <CategoryPreview />
        <Products />
      </>
    ),
    "/export-business": (
      <>
        <ExportDomesticSupply focus="export" />
        <Products />
        <Quotation />
      </>
    ),
    "/domestic-business": (
      <>
        <ExportDomesticSupply focus="domestic" />
        <Products />
        <Quotation />
      </>
    ),
    "/request-quotation": <Quotation />,
    "/contact": <Contact />
  };

  return (
    <>
      <Header />
      <main className={route === "/" ? "" : "pt-20"}>{routes[route] || routes["/"]}</main>
      <Footer />
    </>
  );
}
