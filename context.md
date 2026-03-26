# Project Context - SPN Traders

## Overview
SPN Traders (internally designated as `spn_project`) is a specialized B2B digital storefront and portal developed for a material trading enterprise. The application facilitates the efficient exhibition and categorization of various industrial materials, specifically focusing on recycling streams like glass bottles, metal scrap, kraft paper, and plastics.

## Technical Architecture
The application is built using a modern, scalable web stack:
- **Framework:** Next.js 16 (App Router)
- **Library:** React 19
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React
- **Slider/Carousel:** Swiper
- **Language:** TypeScript

## Core Features
1. **Material Catalog:** A comprehensive, categorized display of products including:
   - **Glass/Cullet:** White, Green, Amber, etc.
   - **Bottles:** Specialized brands and sizes (KALS, SNJ, MBDL, Kingfisher, etc.).
   - **Metal Scrap:** Mild Steel (Light/Heavy), Stainless Steel (202/204).
   - **Plastics:** Mixed plastics, granules, and color-coded batches.
   - **Kraft:** Paper rolls, bags, and boxes.
2. **Geographic Presence:** A detailed branch management system showcasing locations in Chennai, Sulur, and Ganapathi (Coimbatore), facilitating regional business connections.
3. **Team Management:** A professional directory of the operational team across various cities such as Madurai, Tiruppur, Erode, and Karur.
4. **Responsive UI:** A premium, "light-themed" aesthetic featuring backdrop blurs, gradients, and optimized imagery to provide a high-end B2B experience.

## Project Structure
- `src/app/`: Contains the main layout and route-specific pages (About, Branches, Contact, Products, Team).
- `src/components/`: Modular UI elements like `Navbar`, `Footer`, and specialized card components for products, branches, and team members.
- `src/data/`: Centralized TypeScript data files (`products.ts`, `branches.ts`, `team.ts`) serving as the "single source of truth" for application content.
- `public/`: Static assets including images and icons.

## Significance
SPN Traders represents a digital transformation in the traditional trading sector, providing small vendors with visibility to reach large companies while offering corporations a reliable, digitized interface for sourcing high-quality materials.
