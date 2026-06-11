# Learning Dashboard

A modern learning dashboard built using **Next.js**, **Supabase**, and **Tailwind CSS**.  
It fetches and displays courses dynamically from a Supabase database and demonstrates proper server-client component architecture.

---

## Live Demo
   https://your-deployed-link.vercel.app/

---

## Project Overview

This project is a learning dashboard where users can view courses fetched from a Supabase backend.  
It is designed to demonstrate real-world full-stack integration using Next.js App Router.

---

## Tech Stack

- Next.js (App Router)
- React.js
- Supabase (Database + Backend)
- Tailwind CSS
- Vercel (Deployment)

---

## Architecture

### Server Component
- The main `Home` page is a **Server Component**
- Data is fetched directly from Supabase on the server
- Improves performance and reduces client-side load

### Client Components
- UI components like:
  - `Topbar`
  - `Sidebar`
  - `MobileNav`
  - `BentoGrid`
- These are Client Components for interactivity and reusable UI

---

## Data Flow

1. Server component fetches course data from Supabase
2. Data is passed to UI components (`BentoGrid`)
3. Components render dynamic course cards

---

## Environment Variables

This project uses Supabase for backend services.

Create a `.env` file using `.env.example`:

```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key