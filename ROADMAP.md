# MISSION: DIGITAL DOMINATION - PROJECT "BONDAGE666"

## 🦾 THE ARCHITECT'S BLUEPRINT
This document outlines the technical and aesthetic roadmap for the official Bondage666 digital stronghold.

### ⚡ TECH STACK
- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS v4
- **Animation:** Framer Motion (Glitch, Parallax, Smooth Scroll)
- **Database/Auth:** Supabase (Auth, PG, Storage)
- **Commerce:** Stripe API
- **Icons:** Lucide Icons (Brutal/Sharp custom styles)

### 🎨 DESIGN SYSTEM: "ELECTRIC HELL"
- **Primary Color:** `#050505` (Obsidian Black)
- **Secondary Colors:** Electric Purple, Cobalt Blue (from logo)
- **Typography:** Gothic Display headers (Sharp/Aggressive) + Inter for content.
- **Glassmorphism:** Noise textures with 20% opacity overlays.
- **Neon Polish:** Glowing borders on hover and active states.

### 🛠️ IMPLEMENTATION PHASES

#### Phase 1: Infrastructure & Vault Setup
1.  Initialize Next.js 15 project in `scratch/bondage666`.
2.  Install core dependencies: `@supabase/supabase-js`, `framer-motion`, `lucide-react`, `stripe`, `@stripe/stripe-js`.
3.  Configure `.env.local` using Vault secrets.
4.  Initialize Supabase DB schema (Profiles, Products, Orders) and enable RLS.

#### Phase 2: Core Components (The Metal UI)
1.  Develop Global Layout: Obsidian Black theme with custom scrollbars.
2.  Hero Section: Interactive SVG Glitch Logo + Metallic Background.
3.  The Pit (Merch): 3D-tilt product grid with dynamic filtering.
4.  Tour Interface: Brutalists list/map showing "Electric Hell" dates.

#### Phase 3: Functionality & Ecommerce
1.  Supabase Auth integration (Discord/Google).
2.  Stripe Checkout flow via Supabase Edge functions.
3.  Cart System: Glassmorphism slide-over drawer.
4.  Fan Portal: "Backstage" content access for authenticated fans.

#### Phase 4: Cinematic Polish
1.  Glitch transitions between page routes.
2.  Micro-animations on hover (Lucide icon transformations).
3.  Performance optimization for high-impact assets.

#### Phase 5: Deployment
1.  Initialize GitHub repository using GITHUB_TOKEN.
2.  Deploy to Vercel/Netlify using automated scripts.
3.  Final validation of live checkout and auth.

### 🏗️ DATABASE SCHEMA
- `profiles`: `id`, `username`, `avatar_url`, `role` (admin/fan).
- `products`: `id`, `title`, `description`, `price`, `stock`, `images`, `category`.
- `orders`: `id`, `user_id`, `status`, `stripe_session_id`, `total_amount`.

---
*MISSION READY. PROCEEDING TO INITIALIZATION.*
