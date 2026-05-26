# DIALYATECH Healthcare Website

Production-ready React + Tailwind CSS website for **DIALYATECH HEALTH SERVICE PVT LTD**, focused on nephrology, dialysis equipment, consumables, export business, and domestic Indian healthcare supply.

## Tech Stack

- React 19
- Vite 6
- Tailwind CSS
- Lucide React icons
- Vercel-ready SPA routing via `vercel.json`

## Pages

- `/` - Home
- `/about` - About Us
- `/products` - Products
- `/nephrology-solutions` - Nephrology Solutions
- `/export-business` - Export Business
- `/domestic-business` - Domestic Business
- `/request-quotation` - Export and domestic quotation forms
- `/contact` - Contact details, WhatsApp, enquiry form, and map placeholder
- `/login` - Customer login and admin login selection
- `/customer` - Customer portal for procurement actions and quotation request visibility
- `/admin` - Admin control center for product, quotation, content, logo, image, and contact settings

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:5173/`.

## Production Build

```bash
npm run build
```

The production output is generated in `dist/`.

## Product Data

Product categories and sample products are maintained in:

```text
src/data/products.js
```

Update product names, descriptions, images, categories, and export/domestic availability there.

## Forms

The export quotation, domestic quotation, and contact forms currently validate on the frontend and show success messages. They are structured so a backend endpoint, CRM webhook, or email service can be connected later inside the submit handlers in:

```text
src/App.jsx
```

Submitted quotation requests and contact enquiries are saved in browser local storage for the frontend admin workflow.

## Admin Control Center

The admin area includes:

- Product listing management with image, category, description, and market availability controls
- Export and domestic quotation request review
- Product quotation preparation and sent quotation records
- Frontend settings for logo, company name, about content, contact details, and main website images
- Customer login and customer portal routes

The current login and admin authorization layer is frontend-ready for demonstration and UI workflow validation. For production security, connect `/login` and `/admin` to a backend authentication service before allowing real staff access.

## Deployment

This project is ready for Vercel. The included `vercel.json` rewrites all routes to `index.html`, so direct page refreshes work for every SPA route.